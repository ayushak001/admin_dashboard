import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Avatar from "../common/Avatar";
import StatusBadge from "../common/StatusBadge";
import { orders } from "../../data/mockData";

export default function RecentOrders() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between p-5 md:p-6">
        <div>
          <h2 className="font-bold text-slate-900">Recent Orders</h2>
          <p className="mt-1 text-sm text-slate-500">Latest customer transactions</p>
        </div>
        <Link to="/orders" className="flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">View all <ArrowRight size={15} /></Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="border-y border-slate-100 bg-slate-50/70 text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-6 py-3 font-semibold">Customer</th>
              <th className="px-6 py-3 font-semibold">Product</th>
              <th className="px-6 py-3 font-semibold">Amount</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.slice(0, 5).map((order) => (
              <tr key={order.id} className="transition hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar initials={order.customer.split(" ").map(x => x[0]).join("")} size="sm" />
                    <div><p className="font-semibold text-slate-800">{order.customer}</p><p className="text-xs text-slate-400">{order.id}</p></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{order.product}</td>
                <td className="px-6 py-4 font-semibold text-slate-800">₹{order.amount.toLocaleString()}</td>
                <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                <td className="px-6 py-4 text-slate-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}