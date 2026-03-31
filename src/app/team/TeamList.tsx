'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: Date;
};

export default function TeamList({ initialUsers, currentUserRole }: { initialUsers: User[], currentUserRole: string }) {
  const router = useRouter();
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'text-purple-700 bg-purple-100';
      case 'SUPERVISOR': return 'text-amber-700 bg-amber-100';
      case 'TECHNICIAN': return 'text-blue-700 bg-blue-100';
      case 'USER': return 'text-zinc-600 bg-zinc-100';
      default: return 'text-zinc-600 bg-zinc-100';
    }
  };

  const updateRole = async (userId: string, newRole: string) => {
    setUpdatingId(userId);
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });
      if (!res.ok) {
        if (res.status === 403) {
          toast.error('Only admin can update roles');
          return;
        }
        throw new Error('Failed to update role');
      }
      router.refresh(); 
    } catch (error) {
      console.error(error);
      toast.error('Failed to update user role.');
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col pt-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 px-1">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Team Management</h1>
          <p className="text-zinc-500 text-sm mt-1">Designate technicians, supervisors, and admins.</p>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-zinc-600">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-900">
              <tr>
                <th className="px-5 py-4 font-medium">Team Member</th>
                <th className="px-5 py-4 font-medium">System Role</th>
                <th className="px-5 py-4 font-medium text-right">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {initialUsers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-zinc-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                initialUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-50/50 transition-colors group align-middle">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                          {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-900 leading-tight">
                            {user.firstName} {user.lastName}
                          </span>
                          <div className="flex items-center gap-1.5 mt-0.5 group/id">
                            <span className="font-mono text-[10px] text-zinc-500 bg-zinc-100 px-1.5 py-0.5 border border-zinc-200 rounded" title={user.id}>
                              ID: {user.id.slice(-8).toUpperCase()}
                            </span>
                            <button 
                              onClick={() => copyToClipboard(user.id)}
                              className="opacity-0 group-hover/id:opacity-100 transition-opacity p-0.5 text-zinc-400 hover:text-zinc-900 rounded focus:outline-none"
                              title="Copy Full User ID"
                            >
                              {copiedId === user.id ? (
                                <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              ) : (
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-medium">
                      {updatingId === user.id ? (
                        <div className="text-xs font-semibold text-zinc-500 animate-pulse py-1">Updating...</div>
                      ) : (
                        <div className="relative inline-block w-40">
                          <select
                            value={user.role}
                            onChange={(e) => updateRole(user.id, e.target.value)}
                            className={`w-full appearance-none px-3 py-1.5 text-xs font-semibold rounded-md border border-transparent hover:border-zinc-300 outline-none focus:ring-2 focus:ring-zinc-900 transition-colors cursor-pointer ${getRoleColor(user.role)}`}
                          >
                            <option value="USER">USER</option>
                            <option value="TECHNICIAN">TECHNICIAN</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="ADMIN">ADMIN</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right">
                      {new Date(user.createdAt).toLocaleDateString(undefined, { 
                        month: 'short', day: 'numeric', year: 'numeric' 
                      })}
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
