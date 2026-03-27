'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type UserInfo = { firstName: string, lastName: string };
type Job = {
  id: string;
  customerName: string | null;
  customerPhone: string | null;
  item: string | null;
  problem: string | null;
  notes: string | null;
  status: string;
  createdAt: Date;
  creator?: UserInfo | null;
  technician?: UserInfo | null;
  supervisor?: UserInfo | null;
};

export default function JobList({ initialJobs }: { initialJobs: Job[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('ALL');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filteredJobs = filter === 'ALL' 
    ? initialJobs 
    : initialJobs.filter(job => job.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'text-zinc-600 bg-zinc-100';
      case 'IN_PROGRESS': return 'text-blue-700 bg-blue-100';
      case 'WAITING_PARTS': return 'text-amber-700 bg-amber-100';
      case 'COMPLETED': return 'text-emerald-700 bg-emerald-100';
      default: return 'text-zinc-600 bg-zinc-100';
    }
  };

  const formatStatus = (status: string) => {
    return status.replace('_', ' ');
  };

  const updateStatus = async (jobId: string, newStatus: string) => {
    setUpdatingId(jobId);
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update status');
      router.refresh(); // Refresh the Server Component to get latest jobs
    } catch (error) {
      console.error(error);
      alert('Failed to update job status.');
    } finally {
      setUpdatingId(null);
    }
  };

  const renderUser = (user: UserInfo | null | undefined, label: string) => {
    if (!user) {
      return (
        <div className="flex items-center gap-1.5 mt-1.5 opacity-60 grayscale">
          <div className="w-5 h-5 rounded-full bg-zinc-100 border border-dashed border-zinc-300 flex items-center justify-center text-[9px] font-bold text-zinc-400">?</div>
          <span className="text-[11px] text-zinc-500">Unassigned {label}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center text-[9px] font-bold shadow-sm">
          {user.firstName[0]}{user.lastName[0]}
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-zinc-800 leading-none">{user.firstName} {user.lastName}</span>
          <span className="text-[9px] text-zinc-400 font-medium uppercase tracking-wider">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex-1 flex flex-col pt-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 px-1">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
          <p className="text-zinc-500 text-sm mt-1">Manage all your administrative and technical jobs.</p>
        </div>
        <div className="flex items-center gap-4">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-zinc-200 text-zinc-700 text-sm rounded-md px-3 py-2.5 outline-none focus:ring-1 focus:ring-zinc-400 cursor-pointer hover:border-zinc-300 transition-colors"
          >
            <option value="ALL">All Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="WAITING_PARTS">Waiting Parts</option>
            <option value="COMPLETED">Completed</option>
          </select>

          <Link 
            href="/create-job"
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm whitespace-nowrap"
          >
            + Create Job
          </Link>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-zinc-600">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-900">
              <tr>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Task / Problem</th>
                <th className="px-5 py-4 font-medium min-w-[200px]">Notes</th>
                <th className="px-5 py-4 font-medium min-w-[180px]">Assignments</th>
                <th className="px-5 py-4 font-medium">Status / Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {filteredJobs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                    No jobs found matching this status.
                  </td>
                </tr>
              ) : (
                filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-zinc-50/50 transition-colors group align-top">
                    <td className="px-5 py-4">
                      <div className="font-medium text-zinc-900">{job.customerName || '—'}</div>
                      <div className="text-xs text-zinc-500 mt-1">{job.customerPhone || '—'}</div>
                    </td>
                    <td className="px-5 py-4 max-w-xs">
                      <div className="font-medium text-zinc-800 mb-1">{job.item || '—'}</div>
                      <div className="text-xs text-zinc-500 line-clamp-3" title={job.problem || ''}>
                        {job.problem || '—'}
                      </div>
                    </td>
                    <td className="px-5 py-4 max-w-sm">
                      <p className="text-xs italic text-zinc-500 line-clamp-4 leading-relaxed" title={job.notes || ''}>
                        {job.notes || 'No additional notes provided.'}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        {renderUser(job.creator, "Creator")}
                        {renderUser(job.supervisor, "Supervisor")}
                        {renderUser(job.technician, "Technician")}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-medium">
                      <div className="flex flex-col gap-2 relative mt-1">
                        {updatingId === job.id ? (
                          <div className="text-xs font-semibold text-zinc-500 animate-pulse py-1">Updating...</div>
                        ) : (
                          <div className="relative inline-block w-32">
                            <select
                              value={job.status}
                              onChange={(e) => updateStatus(job.id, e.target.value)}
                              className={`w-full appearance-none px-3 py-1.5 text-[11px] font-semibold rounded-md border border-transparent hover:border-zinc-300 outline-none focus:ring-2 focus:ring-zinc-900 transition-colors cursor-pointer ${getStatusColor(job.status)}`}
                            >
                              <option value="PENDING">PENDING</option>
                              <option value="IN_PROGRESS">IN PROGRESS</option>
                              <option value="WAITING_PARTS">WAITING PARTS</option>
                              <option value="COMPLETED">COMPLETED</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                          </div>
                        )}
                        <span className="text-[11px] text-zinc-400 mt-1 block px-1">
                          {new Date(job.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
