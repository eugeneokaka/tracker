"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserInfo = { id?: string; firstName: string; lastName: string };
type Tender = {
  id: string;
  tenderNo: string;
  description: string;
  contractValue: number;
  contractorName: string;
  contractorAddress?: string | null;
  ward?: string | null;
  subCounty?: string | null;
  status: string;
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
  creatorId?: string | null;
  technicianId?: string | null;
  supervisorId?: string | null;
  creator?: UserInfo | null;
  supervisor?: UserInfo | null;
  technician?: UserInfo | null;
};

type SelectUser = { id: string; firstName: string; lastName: string };

export default function TenderList({
  initialTenders,
  currentUserId,
  technicians,
  supervisors,
}: {
  initialTenders: Tender[];
  currentUserId: string;
  technicians: SelectUser[];
  supervisors: SelectUser[];
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("ALL");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTenders =
    filter === "ALL"
      ? initialTenders
      : initialTenders.filter((t) => t.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "text-zinc-600 bg-zinc-100";
      case "IN_PROGRESS":
        return "text-blue-700 bg-blue-100";
      case "WAITING_PARTS":
        return "text-amber-700 bg-amber-100";
      case "COMPLETED":
        return "text-emerald-700 bg-emerald-100";
      default:
        return "text-zinc-600 bg-zinc-100";
    }
  };

  const updateField = async (tenderId: string, payload: any) => {
    setUpdatingId(`${tenderId}-${Object.keys(payload)[0]}`);
    try {
      const res = await fetch(`/api/tenders/${tenderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to update field");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update tender.");
    } finally {
      setUpdatingId(null);
    }
  };

  const renderUserDropdown = (
    user: UserInfo | null | undefined,
    label: string,
    options: SelectUser[],
    tenderId: string,
    fieldKey: string,
    canEdit: boolean,
  ) => {
    const isUpdating = updatingId === `${tenderId}-${fieldKey}`;

    return (
      <div className="flex items-center gap-1.5 mt-1.5 relative group/select">
        {user ? (
          <div className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-700 flex shrink-0 items-center justify-center text-[9px] font-bold shadow-sm">
            {user.firstName[0]}
            {user.lastName[0]}
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-zinc-100 border border-dashed shrink-0 border-zinc-300 flex items-center justify-center text-[9px] font-bold text-zinc-400">
            ?
          </div>
        )}

        <div className="flex flex-col relative w-full pr-4">
          {isUpdating ? (
            <span className="text-[11px] font-medium text-zinc-500 animate-pulse leading-none py-1">
              Updating...
            </span>
          ) : canEdit ? (
            <div className="relative">
              <select
                value={user?.id || ""}
                onChange={(e) =>
                  updateField(tenderId, { [fieldKey]: e.target.value })
                }
                className="appearance-none bg-transparent w-full text-[11px] font-medium text-zinc-800 leading-none outline-none cursor-pointer hover:text-blue-600 transition-colors py-0.5"
              >
                <option value="">Unassigned {label}</option>
                {options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.firstName} {opt.lastName}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 opacity-0 group-hover/select:opacity-100 transition-opacity">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <span
              className={`text-[11px] font-medium leading-none ${
                user ? "text-zinc-800" : "text-zinc-400 italic"
              }`}
            >
              {user
                ? `${user.firstName} ${user.lastName}`
                : `Unassigned ${label}`}
            </span>
          )}
          <span className="text-[9px] text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
            {label}
          </span>
        </div>
      </div>
    );
  };

  const renderCreator = (user: UserInfo | null | undefined) => {
    return (
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex shrink-0 items-center justify-center text-[9px] font-bold shadow-sm">
          {user ? `${user.firstName[0]}${user.lastName[0]}` : "S"}
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-medium text-zinc-800 leading-none py-0.5">
            {user ? `${user.firstName} ${user.lastName}` : "System"}
          </span>
          <span className="text-[9px] text-zinc-400 font-medium uppercase tracking-wider mt-0.5">
            Creator
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex-1 flex flex-col pt-4 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 px-1">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
          <p className="text-zinc-500 text-sm mt-1">
            Manage all your tenders and assignments.
          </p>
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
            href="/create-tender"
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm whitespace-nowrap"
          >
            + Create Tender
          </Link>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-zinc-600">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-900">
              <tr>
                <th className="px-5 py-4 font-medium">Tender No</th>
                <th className="px-5 py-4 font-medium">Contractor</th>
                <th className="px-5 py-4 font-medium min-w-[200px]">
                  Description
                </th>
                <th className="px-5 py-4 font-medium min-w-[200px]">Notes</th>
                <th className="px-5 py-4 font-medium min-w-[200px]">
                  Assignments
                </th>
                <th className="px-5 py-4 font-medium">Status / Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {filteredTenders.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-zinc-500"
                  >
                    No tenders found matching this status.
                  </td>
                </tr>
              ) : (
                filteredTenders.map((tender) => {
                  const canEditRoles = tender.creatorId === currentUserId;

                  return (
                    <tr
                      key={tender.id}
                      className="hover:bg-zinc-50/50 transition-colors group align-top"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 group/id">
                          <div
                            className="font-mono text-xs font-medium text-zinc-900 bg-zinc-100 px-2 py-1 rounded inline-block border border-zinc-200 shadow-sm"
                            title={tender.id}
                          >
                            #{tender.tenderNo.slice(-8).toUpperCase()}
                          </div>
                          <button
                            onClick={() => copyToClipboard(tender.id)}
                            className="opacity-0 group-hover/id:opacity-100 transition-opacity p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded focus:outline-none"
                            title="Copy Full Tender ID"
                          >
                            {copiedId === tender.id ? (
                              <svg
                                className="w-3.5 h-3.5 text-emerald-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                ></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="font-medium text-zinc-900">
                          {tender.contractorName}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {tender.contractorAddress || "—"}
                        </div>
                      </td>
                      <td className="px-5 py-4 max-w-xs">
                        <div className="font-medium text-zinc-800 mb-1">
                          {tender.description}
                        </div>
                      </td>
                      <td className="px-5 py-4 max-w-sm">
                        <p
                          className="text-xs italic text-zinc-500 line-clamp-4 leading-relaxed"
                          title={tender.notes || ""}
                        >
                          {tender.notes || "No additional notes provided."}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-2">
                          {renderCreator(tender.creator)}
                          <div className="w-full h-px bg-zinc-100 my-1"></div>
                          {renderUserDropdown(
                            tender.supervisor,
                            "Supervisor",
                            supervisors,
                            tender.id,
                            "supervisorId",
                            canEditRoles,
                          )}
                          {renderUserDropdown(
                            tender.technician,
                            "Technician",
                            technicians,
                            tender.id,
                            "technicianId",
                            canEditRoles,
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-medium">
                        <div className="flex flex-col gap-2 relative mt-1">
                          {updatingId === `${tender.id}-status` ? (
                            <div className="text-xs font-semibold text-zinc-500 animate-pulse py-1">
                              Updating...
                            </div>
                          ) : (
                            <div className="relative inline-block w-32">
                              <select
                                value={tender.status}
                                onChange={(e) =>
                                  updateField(tender.id, {
                                    status: e.target.value,
                                  })
                                }
                                className={`w-full appearance-none px-3 py-1.5 text-[11px] font-semibold rounded-md border border-transparent ${
                                  canEditRoles
                                    ? "hover:border-zinc-300 cursor-pointer"
                                    : "cursor-default"
                                } outline-none focus:ring-2 focus:ring-zinc-900 transition-colors ${getStatusColor(
                                  tender.status,
                                )}`}
                                disabled={!canEditRoles}
                              >
                                <option value="PENDING">PENDING</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="WAITING_PARTS">
                                  WAITING_PARTS
                                </option>
                                <option value="COMPLETED">COMPLETED</option>
                              </select>
                            </div>
                          )}
                          <span className="text-[11px] text-zinc-400 mt-1 block px-1">
                            {new Date(tender.createdAt).toLocaleDateString(
                              undefined,
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-zinc-100">
                          <Link
                            href={`/tenders/${tender.id}`}
                            className="inline-flex w-full justify-center items-center bg-zinc-900 hover:bg-zinc-800 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded transition-colors shadow-sm"
                          >
                            Manage Tender Details →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
