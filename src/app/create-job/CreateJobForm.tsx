'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type UserListOption = {
  id: string;
  firstName: string;
  lastName: string;
};

export default function CreateJobForm({ 
  technicians = [], 
  supervisors = [] 
}: { 
  technicians?: UserListOption[], 
  supervisors?: UserListOption[] 
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      customerName: formData.get('customerName'),
      customerPhone: formData.get('customerPhone'),
      item: formData.get('item'),
      problem: formData.get('problem'),
      notes: formData.get('notes'),
      technicianId: formData.get('technicianId') || null,
      supervisorId: formData.get('supervisorId') || null,
    };

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to create job');
      }

      router.push('/');
      router.refresh(); // Force refresh to show the new job on dashboard
    } catch (err) {
      console.error(err);
      setError('An error occurred while creating the job. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md border border-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="customerName" className="block text-sm font-medium text-zinc-700">
            Customer Name <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. Acme Corp"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="customerPhone" className="block text-sm font-medium text-zinc-700">
            Customer Phone <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="customerPhone"
            name="customerPhone"
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            placeholder="e.g. +1 555-0100"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="item" className="block text-sm font-medium text-zinc-700">
          Item / Equipment
        </label>
        <input
          type="text"
          id="item"
          name="item"
          required
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
          placeholder="e.g. Dell XPS 15 Laptop"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="problem" className="block text-sm font-medium text-zinc-700">
          Problem Description
        </label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={3}
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-y"
          placeholder="Describe the issue that needs addressing..."
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
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            defaultValue=""
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
            className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow"
            defaultValue=""
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
          className="w-full px-3 py-2 border border-zinc-300 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow resize-y"
          placeholder="Any additional information for the team..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-zinc-900 text-white font-medium py-2.5 px-4 rounded-md text-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Job...
            </span>
          ) : (
            'Create Job'
          )}
        </button>
      </div>
    </form>
  );
}
