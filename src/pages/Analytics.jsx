import { BarChart3, DollarSign, UsersRound } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts";
import StatCard from "../components/common/StatCard";
import { revenueData } from "../data/mockData";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div><h1 className="page-title">Analytics</h1><p className="mt-2 muted">Understand revenue, users and growth trends.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Monthly Revenue" value="₹1.84L" change="+18.2%" icon={DollarSign} />
        <StatCard title="Active Users" value="6,821" change="+11.8%" icon={UsersRound} />
        <StatCard title="Growth Rate" value="24.6%" change="+5.4%" icon={BarChart3} />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="card p-5 md:p-6"><h2 className="font-bold">Revenue by Day</h2><p className="mt-1 text-sm text-slate-500">Daily revenue performance</p><div className="mt-6 h-80"><ResponsiveContainer width="100%" height="100%"><BarChart data={revenueData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" /><XAxis dataKey="name" axisLine={false} tickLine={false} /><YAxis axisLine={false} tickLine={false} /><Tooltip formatter={v => [`₹${v}`, "Revenue"]} /><Bar dataKey="revenue" fill="#6366f1" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></div></div>
        <div className="card p-5 md:p-6"><h2 className="font-bold">User Growth</h2><p className="mt-1 text-sm text-slate-500">New users over the last 7 days</p><div className="mt-6 h-80"><ResponsiveContainer width="100%" height="100%"><LineChart data={revenueData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" /><XAxis dataKey="name" axisLine={false} tickLine={false} /><YAxis axisLine={false} tickLine={false} /><Tooltip /><Line type="monotone" dataKey="users" stroke="#0f172a" strokeWidth={3} dot={{ r: 4 }} /></LineChart></ResponsiveContainer></div></div>
      </div>
    </div>
  );
}