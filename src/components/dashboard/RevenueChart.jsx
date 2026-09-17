import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { revenueData } from "../../data/mockData";

export default function RevenueChart() {
  return (
    <div className="card p-5 md:p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="font-bold text-slate-900">Revenue Overview</h2>
          <p className="mt-1 text-sm text-slate-500">Revenue performance over the last 7 days</p>
        </div>
        <select className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-600 outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]} contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0" }} />
            <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fill="url(#revenueFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}