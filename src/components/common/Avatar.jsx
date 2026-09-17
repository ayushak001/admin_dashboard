export default function Avatar({ initials = "AU", size = "md" }) {
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-16 w-16 text-lg" };
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-700 ${sizes[size]}`}>
      {initials}
    </div>
  );
}