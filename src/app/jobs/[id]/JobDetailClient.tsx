'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type UserInfo = { id?: string, firstName: string, lastName: string };
type Job = {
  id: string;
  customerName: string | null;
  customerPhone: string | null;
  item: string | null;
  problem: string | null;
  notes: string | null;
  status: string;
  createdAt: string | Date;
  creatorId: string | null;
  creator?: UserInfo | null;
  technicianId?: string | null;
  technician?: UserInfo | null;
  supervisorId?: string | null;
  supervisor?: UserInfo | null;
};

type SelectUser = { id: string, firstName: string, lastName: string };

export default function JobDetailClient({ 
  initialJob, 
  canEdit, 
  technicians, 
  supervisors 
}: { 
  initialJob: Job, 
  canEdit: boolean,
  technicians: SelectUser[],
  supervisors: SelectUser[]
}) {
  const router = useRouter();
  const [job, setJob] = useState<Job>(initialJob);
  const [updating, setUpdating] = useState<string | null>(null);

  const updateField = async (payload: any, label: string) => {
    setUpdating(label);
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to update field');
      const updatedJob = await res.json();
      
      // Opt-in UI refresh
      router.refresh();
      
      // Update local state to reflect changes instantly while DB refreshes in bg
      setJob(prev => ({
        ...prev,
        ...payload,
        technician: payload.technicianId === '' ? null : (payload.technicianId ? technicians.find(t => t.id === payload.technicianId) : prev.technician),
        supervisor: payload.supervisorId === '' ? null : (payload.supervisorId ? supervisors.find(s => s.id === payload.supervisorId) : prev.supervisor),
      }));

    } catch (error) {
      console.error(error);
      alert(`Failed to update ${label}.`);
    } finally {
      setUpdating(null);
    }
  };

  const renderSection = (title: string, content: string | null | undefined) => (
    <div className="border-b border-zinc-100 py-4 last:border-0 hover:bg-zinc-50/50 transition-colors px-6">
      <h3 className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1">{title}</h3>
      <p className="text-zinc-900 text-sm leading-relaxed">{content || '—'}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
        ← Back to Dashboard
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Job Details */}
        <div className="flex-1 bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-zinc-900">Job Reference #{job.id.slice(0, 8)}</h1>
              <p className="text-zinc-500 text-xs mt-1">
                Created on {new Date(job.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <span className="px-3 py-1 bg-zinc-900 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              {job.status.replace('_', ' ')}
            </span>
          </div>
          
          <div className="flex flex-col">
            {renderSection("Customer Name", job.customerName)}
            {renderSection("Phone Number", job.customerPhone)}
            {renderSection("Item / Equipment", job.item)}
            {renderSection("Problem Description", job.problem)}
            {renderSection("Internal Notes", job.notes)}
          </div>
        </div>

        {/* Right Column: Assignments */}
        <div className="w-full md:w-80 flex flex-col gap-6">
          <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-zinc-200 bg-zinc-50">
              <h2 className="text-sm font-semibold text-zinc-900">Assignments</h2>
            </div>
            <div className="p-5 space-y-6">
              
              {/* Creator (Readonly) */}
              <div>
                <h3 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Creator</h3>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {job.creator ? `${job.creator.firstName[0]}${job.creator.lastName[0]}` : 'S'}
                  </div>
                  <span className="text-sm font-medium text-zinc-800">
                    {job.creator ? `${job.creator.firstName} ${job.creator.lastName}` : 'System'}
                  </span>
                </div>
              </div>

              {/* Supervisor Assignment */}
              <div className="pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Assigned Supervisor</h3>
                  {updating === 'supervisorId' && <span className="text-[10px] font-semibold text-zinc-500 animate-pulse">Saving...</span>}
                </div>
                
                {job.supervisor ? (
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shadow-sm ring-1 ring-amber-200">
                        {job.supervisor.firstName[0]}{job.supervisor.lastName[0]}
                      </div>
                      <span className="text-sm font-medium text-zinc-800">{job.supervisor.firstName} {job.supervisor.lastName}</span>
                    </div>
                    {canEdit && (
                      <button 
                        onClick={() => updateField({ supervisorId: '' }, 'supervisorId')}
                        className="text-[10px] uppercase font-bold text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded bg-red-50"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    {canEdit ? (
                      <select
                        onChange={(e) => updateField({ supervisorId: e.target.value }, 'supervisorId')}
                        value=""
                        className="w-full text-sm appearance-none bg-zinc-50 border border-dashed border-zinc-300 rounded-lg px-3 py-2 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
                      >
                        <option value="" disabled>+ Assign a Supervisor</option>
                        {supervisors.map(s => <option key={s.id} value={s.id}>{s.firstName} {s.lastName}</option>)}
                      </select>
                    ) : (
                      <span className="text-sm text-zinc-400 italic">Unassigned</span>
                    )}
                  </div>
                )}
              </div>

              {/* Technician Assignment */}
              <div className="pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Assigned Technician</h3>
                  {updating === 'technicianId' && <span className="text-[10px] font-semibold text-zinc-500 animate-pulse">Saving...</span>}
                </div>
                
                {job.technician ? (
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shadow-sm ring-1 ring-blue-200">
                        {job.technician.firstName[0]}{job.technician.lastName[0]}
                      </div>
                      <span className="text-sm font-medium text-zinc-800">{job.technician.firstName} {job.technician.lastName}</span>
                    </div>
                    {canEdit && (
                      <button 
                        onClick={() => updateField({ technicianId: '' }, 'technicianId')}
                        className="text-[10px] uppercase font-bold text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded bg-red-50"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    {canEdit ? (
                      <select
                        onChange={(e) => updateField({ technicianId: e.target.value }, 'technicianId')}
                        value=""
                        className="w-full text-sm appearance-none bg-zinc-50 border border-dashed border-zinc-300 rounded-lg px-3 py-2 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
                      >
                        <option value="" disabled>+ Assign a Technician</option>
                        {technicians.map(t => <option key={t.id} value={t.id}>{t.firstName} {t.lastName}</option>)}
                      </select>
                    ) : (
                      <span className="text-sm text-zinc-400 italic">Unassigned</span>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
