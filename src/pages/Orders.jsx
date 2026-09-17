import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import StatusBadge from "../components/common/StatusBadge";
import Avatar from "../components/common/Avatar";
import { orders } from "../data/mockData";

export default function Orders() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => orders.filter(o => {
    const matchQuery = `${o.id} ${o.customer} ${o.product}`.toLowerCase().includes(query.toLowerCase());
    return matchQuery && (status === "All" || o.status === status);
  }), [query, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div><h1 className="page-title">Orders</h1><p className="mt-2 muted">Track and manage customer transactions.</p></div>
        <button className="btn-secondary"><Download size={17} /> Export</button>
      </div>
      <div className="card p-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1"><Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /><input className="input pl-10" placeholder="Search orders..." value={query} onChange={e => setQuery(e.target.value)} /></div>
          <select className="input md:w-40" value={status} onChange={e => setStatus(e.target.value)}><option>All</option><option>Paid</option><option>Pending</option><option>Failed</option></select>
        </div>
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wider text-slate-400">
              <tr><th className="px-6 py-4">Order</th><th className="px-6 py-4">Customer</th><th className="px-6 py-4">Product</th><th className="px-6 py-4">Amount</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Date</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(o => <tr key={o.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-brand-600">{o.id}</td>
                <td className="px-6 py-4"><div className="flex items-center gap-3"><Avatar initials={o.customer.split(" ").map(x => x[0]).join("")} size="sm" /><span className="font-medium text-slate-700">{o.customer}</span></div></td>
                <td className="px-6 py-4 text-slate-600">{o.product}</td><td className="px-6 py-4 font-semibold">₹{o.amount.toLocaleString()}</td><td className="px-6 py-4"><StatusBadge status={o.status} /></td><td className="px-6 py-4 text-slate-500">{o.date}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No orders found.</p>}
      </div>
    </div>
  );
}