import { CreditCard, ShoppingCart, TrendingUp, Users } from "lucide-react";
import StatCard from "../components/common/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import ActivityFeed from "../components/dashboard/ActivityFeed";

const today = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="animate-[fadeIn_.35s_ease-out]">
        <p className="text-sm font-semibold text-brand-600">{today}</p>
        <h1 className="page-title mt-1">Good morning, ayush👋</h1>
        <p className="mt-2 muted">Here’s what’s happening across your business today.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Revenue" value="₹24,580" change="+12.5%" icon={CreditCard} />
        <StatCard title="Total Orders" value="1,284" change="+8.2%" icon={ShoppingCart} />
        <StatCard title="Total Users" value="8,549" change="+14.6%" icon={Users} />
        <StatCard title="Conversion Rate" value="6.84%" change="+2.4%" icon={TrendingUp} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(300px,1fr)]">
        <RevenueChart />
        <ActivityFeed />
      </section>

      <RecentOrders />
    </div>
  );
}
