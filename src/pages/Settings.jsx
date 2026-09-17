import { Bell, Lock, User, Palette, Save } from "lucide-react";
import { useState } from "react";
import Avatar from "../components/common/Avatar";

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 1800); };

  return (
    <div className="space-y-6">
      <div><h1 className="page-title">Settings</h1><p className="mt-2 muted">Manage your profile and dashboard preferences.</p></div>
      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="card h-fit p-3">
          {[["Profile", User], ["Notifications", Bell], ["Appearance", Palette], ["Security", Lock]].map(([label, Icon], i) => <button key={label} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium ${i === 0 ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}><Icon size={17} />{label}</button>)}
        </div>
        <div className="space-y-6">
          <div className="card p-5 md:p-6">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6"><Avatar initials="AA" size="lg" /><div><h2 className="font-bold text-slate-900">Profile information</h2><p className="mt-1 text-sm text-slate-500">Update your personal details.</p></div></div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">Full name<input className="input mt-2" defaultValue="ayush" /></label>
              <label className="text-sm font-semibold text-slate-700">Email<input className="input mt-2" defaultValue="admin@nexus.app" /></label>
              <label className="text-sm font-semibold text-slate-700">Role<input className="input mt-2 bg-slate-50" defaultValue="Administrator" disabled /></label>
              <label className="text-sm font-semibold text-slate-700">Location<input className="input mt-2" defaultValue="New Delhi, India" /></label>
            </div>
            <div className="mt-6 flex items-center justify-end gap-3"><span className={`text-sm text-emerald-600 transition ${saved ? "opacity-100" : "opacity-0"}`}>Saved successfully!</span><button onClick={save} className="btn-primary"><Save size={16} /> Save changes</button></div>
          </div>
          <div className="card p-5 md:p-6"><h2 className="font-bold">Email notifications</h2><div className="mt-5 space-y-4">{["New orders", "Product updates", "Weekly reports"].map(x => <label key={x} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0"><span className="text-sm font-medium text-slate-700">{x}</span><input type="checkbox" defaultChecked className="h-4 w-4 accent-brand-600" /></label>)}</div></div>
        </div>
      </div>
    </div>
  );
}