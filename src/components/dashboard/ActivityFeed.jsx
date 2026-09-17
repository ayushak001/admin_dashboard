import { Bell, CheckCircle2, CreditCard, UserPlus } from "lucide-react";

const activity = [
  { icon: UserPlus, title: "New user registered", text: "Ananya Singh joined", time: "15 min ago" },
  { icon: CreditCard, title: "Payment received", text: "₹999 from Rahul Sharma", time: "32 min ago" },
  { icon: CheckCircle2, title: "Order completed", text: "#ORD-1022 marked paid", time: "1 hour ago" },
  { icon: Bell, title: "System update", text: "Weekly report generated", time: "3 hours ago" }
];

export default function ActivityFeed() {
  return (
    <div className="card p-5 md:p-6">
      <div className="mb-5"><h2 className="font-bold text-slate-900">Recent Activity</h2><p className="mt-1 text-sm text-slate-500">What’s happening in your workspace</p></div>
      <div className="space-y-5">
        {activity.map(({ icon: Icon, title, text, time }) => (
          <div key={title} className="flex gap-3">
            <div className="rounded-xl bg-brand-50 p-2.5 text-brand-600"><Icon size={17} /></div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-800">{title}</p>
              <p className="truncate text-xs text-slate-500">{text}</p>
              <p className="mt-1 text-[11px] text-slate-400">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}