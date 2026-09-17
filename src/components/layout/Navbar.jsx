import { Bell, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onMenu, search, setSearch }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-6">
      <button aria-label="Open navigation" onClick={onMenu} className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
        <Menu size={21} />
      </button>

      <div className="hidden max-w-xl flex-1 md:block">
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            aria-label="Search users and orders"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-50"
            placeholder="Search users, orders..."
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Link aria-label="Notifications" to="/notifications" className="relative rounded-xl p-2.5 text-slate-600 hover:bg-slate-100">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-600 ring-2 ring-white" />
        </Link>
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-slate-800"> ayush</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">AA</div>
      </div>
    </header>
  );
}
