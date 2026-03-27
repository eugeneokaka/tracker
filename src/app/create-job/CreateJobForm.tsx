'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateJobForm() {
  const router = useRouter();
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [item, setItem] = useState('');
  const [problem, setProblem] = useState('');
  const [notes, setNotes] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          customerPhone,
          item,
          problem,
          notes
        }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong creating the job.');
      }

      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {error && (
        <div className="p-3 rounded-md bg-red-50 text-red-600 text-sm border border-red-100 mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Customer Name</label>
          <input
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
            placeholder="John Doe"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Customer Phone</label>
          <input
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
            placeholder="(555) 123-4567"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Item / Equipment</label>
        <input
          required
          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors"
          placeholder="E.g. ThinkPad T14 or Office Printer"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Problem Description</label>
        <textarea
          required
          rows={3}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors resize-none"
          placeholder="Describe the issue in detail..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Additional Notes (Optional)</label>
        <textarea
          rows={2}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors resize-none"
          placeholder="Any other relevant details..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="pt-2 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 mb-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-zinc-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Job...' : 'Create Job'}
        </button>
      </div>
    </form>
  );
}
