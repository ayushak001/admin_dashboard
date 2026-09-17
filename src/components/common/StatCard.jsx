import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function StatCard({ title, value, change, icon: Icon, positive = true }) {
  return (
    <div className="card group p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
        </div>
        <div className="rounded-xl bg-brand-50 p-3 text-brand-600 transition group-hover:scale-105">
          <Icon size={20} />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold">
        {positive ? <ArrowUpRight size={15} className="text-emerald-600" /> : <ArrowDownRight size={15} className="text-rose-600" />}
        <span className={positive ? "text-emerald-600" : "text-rose-600"}>{change}</span>
        <span className="font-normal text-slate-400">vs last month</span>
      </div>
    </div>
  );
}