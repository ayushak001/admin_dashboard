import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <Navbar onMenu={() => setSidebarOpen(true)} search={search} setSearch={setSearch} />
        <main className="mx-auto max-w-[1600px] p-4 md:p-6 xl:p-8">
          <Outlet context={{ globalSearch: search }} />
        </main>
      </div>
    </div>
  );
}