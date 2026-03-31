"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserInfo = { id?: string; firstName: string; lastName: string };

type Job = {
  id: string;
  tenderNo: string;
  firm: string;
  contract: number;
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
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const copyTenderNo = async (tenderNo: string, jobId: string) => {
    try {
      await navigator.clipboard.writeText(tenderNo);
      setCopiedId(jobId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyJobId = async (jobId: string) => {
    try {
      await navigator.clipboard.writeText(jobId);
      setCopiedId(`job-${jobId}`);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const renderUser = (user?: UserInfo | null, label?: string) => {
    if (!user) {
      return (
        <div className="text-xs text-gray-400 italic">
          Unassigned {label}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
          {user.firstName[0]}
          {user.lastName[0]}
        </div>
        <span className="text-xs text-gray-800">
          {user.firstName} {user.lastName}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-black">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and track all jobs
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={jobIdSearch}
            onChange={(e) => setJobIdSearch(e.target.value)}
            placeholder="Search by Job ID..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black"
          />

          <input
            value={tenderSearch}
            onChange={(e) => setTenderSearch(e.target.value)}
            placeholder="Search by Tender No..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black"
          />

          <input
            value={firmSearch}
            onChange={(e) => setFirmSearch(e.target.value)}
            placeholder="Search by Firm..."
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-black"
          />
        </div>

        {/* FILTER + ACTION */}
        <div className="flex items-center justify-between">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white"
          >
            <option value="ALL">All Jobs</option>
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="WAITING_PARTS">Waiting Parts</option>
            <option value="COMPLETED">Completed</option>
          </select>

          <Link
            href="/create-job"
            className="bg-black text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-900"
          >
            + New Job
          </Link>
        </div>
      </div>

      {/* TABLE */}
      <div className="border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm min-w-[800px]">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">Job ID & Tender No</th>
              <th className="px-6 py-4 text-left">Firm</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Creator</th>
              <th className="px-6 py-4 text-left">Contract</th>
              <th className="px-6 py-4 text-left">Created</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredJobs.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-12 text-gray-400">
                  No jobs found
                </td>
              </tr>
            ) : (
              filteredJobs.map((job) => (
                <tr key={job.id} className="border-t hover:bg-gray-50">
                  {/* JOB ID & TENDER NO */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-mono text-xs text-gray-500">
                        ID: {job.id.slice(-6).toUpperCase()}
                      </div>
                      <button
                        onClick={() => copyJobId(job.id)}
                        className="text-xs text-gray-400 hover:text-black transition-colors"
                        title="Copy job ID"
                      >
                        {copiedId === `job-${job.id}` ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-black">
                        {job.tenderNo}
                      </div>
                      <button
                        onClick={() => copyTenderNo(job.tenderNo, job.id)}
                        className="text-xs text-gray-400 hover:text-black transition-colors"
                        title="Copy tender number"
                      >
                        {copiedId === job.id ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </td>

                  {/* FIRM */}
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-800">
                      {job.firm}
                    </div>
                  </td>

                  {/* DESCRIPTION */}
                  <td className="px-6 py-4 max-w-xs">
                    <div className="text-sm text-gray-800 line-clamp-3">
                      {job.description}
                    </div>
                    {job.notes && (
                      <div className="text-xs text-gray-400 mt-1 italic">
                        {job.notes}
                      </div>
                    )}
                  </td>

                  {/* CREATOR */}
                  <td className="px-6 py-4">
                    {renderUser(job.creator, "Creator")}
                  </td>

                  {/* CONTRACT */}
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-800">
                      KSH {job.contract.toLocaleString()}
                    </div>
                  </td>

                  {/* CREATED */}
                  <td className="px-6 py-4">
                    <div className="text-xs text-gray-500">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <select
                        value={job.status}
                        onChange={(e) => updateStatus(job.id, e.target.value)}
                        disabled={updatingStatus === job.id}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium outline-none ${getStatusStyle(
                          job.status
                        )} disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="WAITING_PARTS">WAITING_PARTS</option>
                        <option value="COMPLETED">COMPLETED</option>
                      </select>

                      {updatingStatus === job.id && (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-xs text-gray-600">Updating...</span>
                        </div>
                      )}

                      <div className="flex gap-1">
                        <button
                          onClick={() => window.print()}
                          className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                          title="Download job"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3 3m3 0l3 3m-3-3H8m13 0H5m0 0l2.757 2.757m-2.757-2.757H15" />
                          </svg>
                        </button>
                        <Link
                          href={`/jobs/${job.id}`}
                          className="text-xs text-black underline"
                        >
                          View →
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