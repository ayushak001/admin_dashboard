import { Bell, Check, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { notifications as initial } from "../data/mockData";

const iconMap = { success: CheckCircle2, info: Info, warning: AlertTriangle };

export default function Notifications() {
  const [items, setItems] = useState(initial);
  const markAll = () => setItems(items.map(n => ({ ...n, unread: false })));
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-end justify-between gap-4"><div><h1 className="page-title">Notifications</h1><p className="mt-2 muted">Stay up to date with activity in your workspace.</p></div><button onClick={markAll} className="btn-secondary"><Check size={16} /> Mark all read</button></div>
      <div className="card overflow-hidden">
        {items.map(n => { const Icon = iconMap[n.type] || Bell; return (
          <div key={n.id} className={`flex gap-4 border-b border-slate-100 p-5 last:border-0 ${n.unread ? "bg-brand-50/30" : "bg-white"}`}>
            <div className="rounded-xl bg-white p-2.5 text-brand-600 shadow-sm"><Icon size={19} /></div>
            <div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><p className="font-semibold text-slate-800">{n.title}</p>{n.unread && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />}</div><p className="mt-1 text-sm text-slate-500">{n.text}</p><p className="mt-2 text-xs text-slate-400">{n.time}</p></div>
          </div>
        )})}
      </div>
    </div>
  );
}