'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type UserInfo = { id?: string, firstName: string, lastName: string };
type Task = {
  id: string;
  title: string;
  description: string | null;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  createdAt: string | Date;
  creator: UserInfo;
};
type Job = {
  id: string;
  tenderNo: string;
  title?: string | null;
  percentageCompleted: number;
  scopeOfWork?: string | null;
  firm: string;
  contract: number;
  startDate: string | Date | null;
  endDate: string | Date | null;
  description: string;
  notes: string | null;
  status: string;
  createdAt: string | Date;
  creatorId: string | null;
  creator?: UserInfo | null;
  technicianId?: string | null;
  technician?: UserInfo | null;
  supervisorId?: string | null;
  supervisor?: UserInfo | null;
  tasks: Task[];
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
  const [job, setJob] = useState<Job>({ ...initialJob, tasks: initialJob.tasks || [] });
  const [updating, setUpdating] = useState<string | null>(null);

  const completedTasks = job.tasks?.filter(t => t.status === 'COMPLETED').length || 0;
  const totalTasks = job.tasks?.length || 0;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const [addingTask, setAddingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskSubmitting, setTaskSubmitting] = useState(false);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    
    setTaskSubmitting(true);
    try {
      const res = await fetch(`/api/jobs/${job.id}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: taskTitle, description: taskDesc }),
      });
      if (!res.ok) throw new Error('Failed to create task');
      
      const createdTask = await res.json();
      setJob(prev => ({
        ...prev,
        tasks: [createdTask, ...prev.tasks]
      }));
      setTaskTitle('');
      setTaskDesc('');
      setAddingTask(false);
    } catch (err) {
      console.error(err);
      alert('Failed to create task');
    } finally {
      setTaskSubmitting(false);
    }
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      setJob(prev => ({
        ...prev,
        tasks: prev.tasks.map(t => t.id === taskId ? { ...t, status: newStatus as any } : t)
      }));
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update task');
    } catch (err) {
      console.error(err);
      alert('Failed to update task');
    }
  };

  const updateField = async (payload: any, label: string) => {
    setUpdating(label);
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!res.ok) {
        if (res.status === 403) {
          alert('You are not authorized to update this job. Only the job creator or assigned users can make changes.');
          return;
        }
        throw new Error('Failed to update field');
      }
      
      router.refresh();
      
      setJob(prev => ({
        ...prev,
        ...payload,
        technician: payload.technicianId === '' ? null : (payload.technicianId ? technicians.find(t => t.id === payload.technicianId) : prev.technician),
        supervisor: payload.supervisorId === '' ? null : (payload.supervisorId ? supervisors.find(s => s.id === payload.supervisorId) : prev.supervisor),
      }));

    } catch (err) {
      console.error(err);
      alert(`Failed to update ${label}.`);
    } finally {
      setUpdating(null);
    }
  };

  const renderSection = (title: string, content: string | number | null | undefined) => (
    <div className="border-b border-zinc-100 py-4 last:border-0 hover:bg-zinc-50/50 transition-colors px-6">
      <h3 className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1">{title}</h3>
      <p className="text-zinc-900 text-sm leading-relaxed">{content || '—'}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          ← Back to Dashboard
        </Link>
        <div className="flex items-center gap-3">
          {canEdit && (
            <Link
              href={`/jobs/${job.id}/edit`}
              className="bg-white border border-zinc-200 text-zinc-700 text-sm px-4 py-2 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors font-medium flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Job
            </Link>
          )}
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Job
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-zinc-900">Tender #{job.tenderNo || job.id.slice(0, 8)}</h1>
              <p className="text-zinc-500 text-xs mt-1">
                Created on {new Date(job.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <span className="px-3 py-1 bg-zinc-900 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
              {job.status.replace('_', ' ')}
            </span>
            {canEdit && (
              <select
                value={job.status}
                onChange={(e) => updateField({ status: e.target.value }, 'status')}
                disabled={updating === 'status'}
                className="text-xs px-3 py-1.5 rounded-full font-medium outline-none bg-zinc-50 border border-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="PENDING">PENDING</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="WAITING_PARTS">WAITING_PARTS</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            )}
            {updating === 'status' && (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-xs text-zinc-600">Updating...</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-col">
            {job.title && renderSection("Project Title", job.title)}
            {renderSection("Firm Name", job.firm)}
            {job.startDate && renderSection("Start Date", new Date(job.startDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }))}
            {job.endDate && renderSection("End Date", new Date(job.endDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }))}
            {renderSection("Contract Value", job.contract > 0 ? `KSH ${job.contract.toLocaleString()}` : job.contract)}
            {job.scopeOfWork && renderSection("Scope of Work", job.scopeOfWork)}
            {renderSection("Description", job.description)}
            {renderSection("Internal Notes", job.notes)}
          </div>

          {/* Tasks Section */}
          <div className="border-t border-zinc-200">
            <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-6 flex-1">
                <h2 className="text-sm font-semibold text-zinc-900 whitespace-nowrap">Task List</h2>
                {totalTasks > 0 && (
                  <div className="flex-col gap-1.5 w-full max-w-[200px] hidden sm:flex">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                      <span>Progress</span>
                      <span className={progressPercent === 100 ? "text-green-600" : "text-emerald-600"}>{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-zinc-200/80 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${progressPercent === 100 ? 'bg-green-500' : 'bg-emerald-500'}`} 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              {canEdit && (
                <button 
                  onClick={() => setAddingTask(!addingTask)}
                  className="text-xs bg-zinc-900 text-white px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
                >
                  {addingTask ? 'Cancel' : '+ Add Task'}
                </button>
              )}
            </div>
            
            {addingTask && (
              <form onSubmit={handleCreateTask} className="p-6 border-b border-zinc-100 bg-zinc-50 border border-t-0 space-y-3">
                <div>
                  <label htmlFor="taskTitle" className="block text-xs font-semibold text-zinc-700 mb-1 tracking-wide uppercase">Title</label>
                  <input
                    id="taskTitle"
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                    placeholder="E.g., Site survey and assessment"
                    className="w-full px-3 py-2 border border-zinc-200 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
                <div>
                  <label htmlFor="taskDesc" className="block text-xs font-semibold text-zinc-700 mb-1 tracking-wide uppercase">Description (Optional)</label>
                  <textarea
                    id="taskDesc"
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    rows={2}
                    placeholder="Provide detailed instructions..."
                    className="w-full px-3 py-2 border border-zinc-200 rounded-md bg-white text-zinc-900 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 resize-y"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={taskSubmitting || !taskTitle.trim()}
                    className="bg-zinc-900 text-white text-xs px-4 py-2 rounded-md hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {taskSubmitting ? 'Creating...' : 'Create Task'}
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-col">
              {job.tasks?.length === 0 ? (
                <div className="px-6 py-8 text-center text-zinc-500 text-sm italic">
                  No tasks created for this job yet.
                </div>
              ) : (
                <ul className="divide-y divide-zinc-100">
                  {job.tasks?.map((task) => (
                    <li key={task.id} className="p-6 hover:bg-zinc-50/50 transition-colors flex gap-4">
                      <div className="pt-1 select-none">
                        <select
                          value={task.status}
                          disabled={!canEdit}
                          onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                          className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider outline-none shadow-sm appearance-none border transition-colors disabled:opacity-50 ${canEdit ? 'cursor-pointer' : 'cursor-not-allowed'} ${
                            task.status === 'COMPLETED' ? 'bg-green-50 text-green-700 border-green-200' :
                            task.status === 'IN_PROGRESS' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            'bg-zinc-100 text-zinc-600 border-zinc-200'
                          }`}
                        >
                          <option value="PENDING">Pending</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="COMPLETED">Completed</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-semibold transition-colors ${task.status === 'COMPLETED' ? 'text-zinc-400 line-through' : 'text-zinc-900'}`}>
                          {task.title}
                        </h4>
                        {task.description && (
                          <p className={`text-sm mt-1 mb-2 ${task.status === 'COMPLETED' ? 'text-zinc-400 line-through opacity-70' : 'text-zinc-600'}`}>
                            {task.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2">
                          <span className="font-medium text-zinc-500">
                            {task.creator?.firstName} {task.creator?.lastName}
                          </span>
                          <span>•</span>
                          <span>{new Date(task.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 flex flex-col gap-6">
          <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-zinc-200 bg-zinc-50">
              <h2 className="text-sm font-semibold text-zinc-900">Assignments</h2>
            </div>
            <div className="p-5 space-y-6">
              
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
