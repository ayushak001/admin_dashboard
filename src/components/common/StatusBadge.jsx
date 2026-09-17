const styles = {
  Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  Pending: "bg-amber-50 text-amber-700 ring-amber-600/10",
  Failed: "bg-rose-50 text-rose-700 ring-rose-600/10",
  Inactive: "bg-slate-100 text-slate-600 ring-slate-500/10"
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status] || styles.Inactive}`}>
      {status}
    </span>
  );
}