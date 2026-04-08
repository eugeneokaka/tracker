'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type UserListOption = {
  id: string;
  firstName: string;
  lastName: string;
};

type JobData = {
  id: string;
  tenderNo: string;
  title: string | null;
  firm: string;
  contract: number;
  startDate: string | Date | null;
  endDate: string | Date | null;
  scopeOfWork: string | null;
  description: string;
  notes: string | null;
  technicianId: string | null;
  supervisorId: string | null;
};

export default function EditJobForm({ 
  initialJob,
  technicians = [], 
  supervisors = [] 
}: { 
  initialJob: JobData;
  technicians?: UserListOption[];
  supervisors?: UserListOption[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Helper to format date for input[type="date"] (YYYY-MM-DD)
  const formatDateForInput = (date: string | Date | null) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      tenderNo: formData.get('tenderNo'),
      title: formData.get('title') || null,
      firm: formData.get('firm'),
      contract: parseFloat(formData.get('contract') as string) || 0,
      startDate: formData.get('startDate') || null,
      endDate: formData.get('endDate') || null,
      scopeOfWork: formData.get('scopeOfWork') || null,
      description: formData.get('description'),
      notes: formData.get('notes'),
      technicianId: formData.get('technicianId') || null,
      supervisorId: formData.get('supervisorId') || null,
    };

    try {
      const res = await fetch(`/api/jobs/${initialJob.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 409) {
          const errorMsg = await res.text();
          toast.error(errorMsg);
          return;
        }
        throw new Error('Failed to update job');
      }

      toast.success('Job updated successfully!');
      router.push(`/jobs/${initialJob.id}`);
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error('An error occurred while updating the job. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="tenderNo" className="block text-sm font-medium text-zinc-700">
            Tender No
          </label>
          <input
            type="text"
            id="tenderNo"
            name="tenderNo"
            required
            defaultValue={initialJob.tenderNo}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. TND-2026-001"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-zinc-700">
            Project Title <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={initialJob.title || ''}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. Server Room Installation"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="firm" className="block text-sm font-medium text-zinc-700">
            Firm
          </label>
          <input
            type="text"
            id="firm"
            name="firm"
            required
            defaultValue={initialJob.firm}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. Acme Builders Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="contract" className="block text-sm font-medium text-zinc-700">
            Contract Value
          </label>
          <input
            type="number"
            step="0.01"
            id="contract"
            name="contract"
            required
            defaultValue={initialJob.contract}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. 50000"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="startDate" className="block text-sm font-medium text-zinc-700">
            Start Date <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            defaultValue={formatDateForInput(initialJob.startDate)}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="endDate" className="block text-sm font-medium text-zinc-700">
            End Date <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            defaultValue={formatDateForInput(initialJob.endDate)}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="scopeOfWork" className="block text-sm font-medium text-zinc-700">
          Scope of Work <span className="text-zinc-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="scopeOfWork"
          name="scopeOfWork"
          rows={3}
          defaultValue={initialJob.scopeOfWork || ''}
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-y"
          placeholder="Define the specific scope of work..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-zinc-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          defaultValue={initialJob.description}
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-y"
          placeholder="Describe the job requirements..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
        <div className="space-y-2">
          <label htmlFor="technicianId" className="block text-sm font-medium text-zinc-700">
            Assign Technician <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <select
            id="technicianId"
            name="technicianId"
            defaultValue={initialJob.technicianId || ""}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
          >
            <option value="">Unassigned</option>
            {technicians.map(tech => (
              <option key={tech.id} value={tech.id}>{tech.firstName} {tech.lastName}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="supervisorId" className="block text-sm font-medium text-zinc-700">
            Assign Supervisor <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <select
            id="supervisorId"
            name="supervisorId"
            defaultValue={initialJob.supervisorId || ""}
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
          >
            <option value="">Unassigned</option>
            {supervisors.map(sup => (
              <option key={sup.id} value={sup.id}>{sup.firstName} {sup.lastName}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t border-zinc-100">
        <label htmlFor="notes" className="block text-sm font-medium text-zinc-700">
          Internal Notes <span className="text-zinc-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={2}
          defaultValue={initialJob.notes || ''}
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-y"
          placeholder="Any additional internal information..."
        />
      </div>

      <div className="pt-4 flex gap-4">
        <button
          type="button"
          onClick={() => router.push(`/jobs/${initialJob.id}`)}
          className="flex-1 bg-white border border-zinc-300 text-zinc-700 font-medium py-2.5 px-4 rounded-md text-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-[2] bg-zinc-900 text-white font-medium py-2.5 px-4 rounded-md text-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating Job...
            </span>
          ) : (
            'Save Changes'
          )}
        </button>
      </div>
    </form>
  );
}
