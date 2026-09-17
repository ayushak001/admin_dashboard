import { useMemo, useState } from "react";
import { MoreHorizontal, Plus, Search } from "lucide-react";
import Avatar from "../components/common/Avatar";
import StatusBadge from "../components/common/StatusBadge";
import { users } from "../data/mockData";

export default function Users() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => users.filter(u => {
    const matchQuery = `${u.name} ${u.email}`.toLowerCase().includes(query.toLowerCase());
    const matchStatus = status === "All" || u.status === status;
    return matchQuery && matchStatus;
  }), [query, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><h1 className="page-title">Users</h1><p className="mt-2 muted">Manage your team members and customer accounts.</p></div>
        <button className="btn-primary"><Plus size={17} /> Add User</button>
      </div>

      <div className="card p-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="input pl-10" placeholder="Search users..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <select className="input md:w-40" value={status} onChange={e => setStatus(e.target.value)}>
            <option>All</option><option>Active</option><option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wider text-slate-400">
              <tr><th className="px-6 py-4">User</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Joined</th><th className="px-6 py-4"></th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(u => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><Avatar initials={u.initials} /><div><p className="font-semibold text-slate-800">{u.name}</p><p className="text-xs text-slate-400">{u.email}</p></div></div></td>
                  <td className="px-6 py-4 text-slate-600">{u.role}</td>
                  <td className="px-6 py-4"><StatusBadge status={u.status} /></td>
                  <td className="px-6 py-4 text-slate-500">{u.joined}</td>
                  <td className="px-6 py-4 text-right"><button className="rounded-lg p-2 hover:bg-slate-100"><MoreHorizontal size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No users found.</p>}
      </div>
    </div>
  );
}