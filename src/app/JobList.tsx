"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserInfo = { id?: string; firstName: string; lastName: string };

type Job = {
  id: string;
  tenderNo: string;
  title?: string | null;
  percentageCompleted: number;
  scopeOfWork?: string | null;
  firm: string;
  contract: number;
  startDate?: string | Date | null;
  endDate?: string | Date | null;
  description: string;
  notes: string | null;
  status: string;
  createdAt: Date;
  creatorId: string | null;
  creator?: UserInfo | null;
  technicianId?: string | null;
  technician?: UserInfo | null;
  supervisorId?: string | null;
  supervisor?: UserInfo | null;
};

type SelectUser = { id: string; firstName: string; lastName: string };

export default function JobList({
  initialJobs,
  currentUserId,
  technicians,
  supervisors,
}: {
  initialJobs: Job[];
  currentUserId: string;
  technicians: SelectUser[];
  supervisors: SelectUser[];
}) {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [filter, setFilter] = useState<string>("ALL");


  const [jobIdSearch, setJobIdSearch] = useState("");
  const [tenderSearch, setTenderSearch] = useState("");
  const [firmSearch, setFirmSearch] = useState("");

  const fetchJobs = async () => {
    try {
      const params = new URLSearchParams();
      if (jobIdSearch) params.append("jobId", jobIdSearch);
      if (tenderSearch) params.append("tenderNo", tenderSearch);
      if (firmSearch) params.append("firm", firmSearch);

      const res = await fetch(`/api/jobs?${params.toString()}`);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(fetchJobs, 400);
    return () => clearTimeout(timeout);
  }, [jobIdSearch, tenderSearch, firmSearch]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs =
    filter === "ALL"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-gray-100 text-gray-600";
      case "IN_PROGRESS":
        return "bg-blue-100 text-blue-700";
      case "WAITING_PARTS":
        return "bg-amber-100 text-amber-700";
      case "COMPLETED":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const updateField = async (jobId: string, payload: any) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        if (res.status === 403) {
          alert('You are not authorized to update this job. Only the job creator or assigned users can make changes.');
          return;
        }
        throw new Error("Failed");
      }
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  const updateStatus = async (jobId: string, status: string) => {
    setUpdatingStatus(jobId);
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) {
        if (res.status === 403) {
          alert('You are not authorized to update this job. Only job creator, assigned users, or admins can make changes.');
          return;
        }
        if (res.status === 404) {
          alert('Please complete onboarding before updating jobs.');
          return;
        }
        throw new Error("Failed");
      }
      fetchJobs();
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingStatus(null);
    }
  };



  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1.5">
            Manage and track all organizational jobs
          </p>
        </div>
        
        <Link
          href="/create-job"
          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-all shadow-sm active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Job
        </Link>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col lg:flex-row gap-4 justify-between items-center">
        
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <div className="relative w-full sm:w-auto flex-1">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={jobIdSearch}
              onChange={(e) => setJobIdSearch(e.target.value)}
              placeholder="Job ID..."
              className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-9 pr-4 py-2 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-4 focus:ring-gray-50 transition-all"
            />
          </div>
          <div className="relative w-full sm:w-auto flex-1">
             <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <input
              value={tenderSearch}
              onChange={(e) => setTenderSearch(e.target.value)}
              placeholder="Tender No..."
              className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-9 pr-4 py-2 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-4 focus:ring-gray-50 transition-all"
            />
          </div>
          <div className="relative w-full sm:w-auto flex-1">
             <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <input
              value={firmSearch}
              onChange={(e) => setFirmSearch(e.target.value)}
              placeholder="Firm Name..."
              className="w-full border border-gray-200 bg-gray-50/50 rounded-xl pl-9 pr-4 py-2 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-4 focus:ring-gray-50 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto">
          <label className="text-sm font-medium text-gray-500 whitespace-nowrap">Status:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto border border-gray-200 bg-white rounded-xl px-4 py-2 text-sm font-medium outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-50 transition-all cursor-pointer"
          >
            <option value="ALL">All Jobs</option>
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="WAITING_PARTS">Waiting Parts</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border text-sm border-gray-200 rounded-2xl shadow-sm overflow-x-auto ring-1 ring-black/[0.02] pb-4">
        <table className="w-full min-w-[1350px] text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-200">
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Title/Firm</th>
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Scope</th>
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Progress</th>
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Dates</th>
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Contract</th>
              <th className="px-8 py-5 font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">Status & Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/80">
            {filteredJobs.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-16">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-12 h-12 mb-3 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm font-medium text-gray-500">No jobs found matching your criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50/50 transition-colors group">


                  {/* FIRM DETAILS & DESCRIPTION */}
                  <td className="px-8 py-6 align-top max-w-sm">
                    {job.title && (
                      <div className="font-semibold text-gray-900 mb-0.5">{job.title}</div>
                    )}
                    <div className={job.title ? "text-sm font-medium text-gray-600 mb-2" : "font-semibold text-gray-900 mb-2"}>{job.firm}</div>

                    <div className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{job.description}</div>
                    {job.notes && (
                      <div className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block mt-2 italic border border-amber-200/60">
                        {job.notes.length > 50 ? job.notes.substring(0, 50) + '...' : job.notes}
                      </div>
                    )}
                  </td>

                  {/* SCOPE */}
                  <td className="px-8 py-6 align-top max-w-[200px]">
                    {job.scopeOfWork ? (
                      <div className="text-xs text-indigo-700 bg-indigo-50/70 border border-indigo-100/80 rounded-lg px-3 py-2 line-clamp-3 leading-relaxed">
                        {job.scopeOfWork}
                      </div>
                    ) : (
                      <span className="text-gray-400 italic text-sm font-medium leading-relaxed block mt-0.5">Not specified</span>
                    )}
                  </td>



                  {/* PROGRESS */}
                  <td className="px-8 py-6 align-top w-48 pr-12">
                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex items-center justify-between text-[11px] font-bold tracking-wide text-gray-700">
                        <span>PROGRESS</span>
                        <span>{Math.round(job.percentageCompleted || 0)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-500 ${job.percentageCompleted === 100 ? 'bg-green-500' : 'bg-emerald-500'}`} 
                          style={{ width: `${Math.round(job.percentageCompleted || 0)}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* DATES */}
                  <td className="px-8 py-6 align-top w-52">
                    {job.startDate || job.endDate ? (
                      <div className="flex flex-col gap-1.5 text-[11px] font-medium text-gray-600 border justify-center border-gray-100 bg-gray-50/50 rounded-md p-2">
                        {job.startDate && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-gray-400/80 uppercase text-[9px] tracking-wider font-bold">Start</span>
                            <span className="text-gray-700 font-semibold">{new Date(job.startDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        )}
                        {job.startDate && job.endDate && <div className="h-px bg-gray-100/80 w-full" />}
                        {job.endDate && (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-gray-400/80 uppercase text-[9px] tracking-wider font-bold">End</span>
                            <span className="text-gray-700 font-semibold">{new Date(job.endDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 italic text-sm font-medium">Not specified</span>
                    )}
                  </td>

                  {/* CONTRACT VALUE */}
                  <td className="px-8 py-6 align-top">
                    {job.contract > 0 ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100 flex-shrink-0">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">KSh</span>
                        <span>{job.contract.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic text-sm font-medium">Not specified</span>
                    )}
                  </td>

                  {/* STATUS & ACTIONS */}
                  <td className="px-8 py-6 align-top w-56">
                    <div className="flex flex-col gap-4 items-start">
                      <div className="flex items-center gap-2">
                        <select
                          value={job.status}
                          onChange={(e) => updateStatus(job.id, e.target.value)}
                          disabled={updatingStatus === job.id}
                          className={`text-[11px] px-2.5 py-1.5 rounded-lg font-bold tracking-wider uppercase outline-none shadow-sm ${getStatusStyle(job.status)} disabled:opacity-50 disabled:cursor-not-allowed border transition-all focus:ring-2 ring-offset-1 ring-gray-200 hover:brightness-95 cursor-pointer appearance-none pr-7 relative bg-no-repeat`}
                          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right 0.5rem center', backgroundSize: '0.6em auto' }}
                        >
                          <option value="PENDING">PENDING</option>
                          <option value="IN_PROGRESS">IN_PROGRESS</option>
                          <option value="WAITING_PARTS">WAITING_PARTS</option>
                          <option value="COMPLETED">COMPLETED</option>
                        </select>

                        {updatingStatus === job.id && (
                          <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        )}
                      </div>

                      <div className="flex gap-2 items-center lg:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => window.print()}
                          className="flex items-center justify-center p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 rounded-lg bg-white border border-gray-200 shadow-sm transition-all"
                          title="Download PDF"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                        <Link
                          href={`/jobs/${job.id}`}
                          className="flex items-center justify-center p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg bg-white border border-gray-200 shadow-sm transition-all"
                          title="View Details"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}