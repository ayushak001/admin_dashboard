export const orders = [
  { id: "#ORD-1024", customer: "Rahul Sharma", email: "rahul@example.com", product: "Pro Plan", amount: 999, status: "Paid", date: "Sep 13, 2026" },
  { id: "#ORD-1023", customer: "Ananya Singh", email: "ananya@example.com", product: "Basic Plan", amount: 499, status: "Pending", date: "Sep 12, 2026" },
  { id: "#ORD-1022", customer: "Karan Mehta", email: "karan@example.com", product: "Pro Plan", amount: 999, status: "Paid", date: "Sep 12, 2026" },
  { id: "#ORD-1021", customer: "Priya Verma", email: "priya@example.com", product: "Enterprise", amount: 2499, status: "Paid", date: "Sep 11, 2026" },
  { id: "#ORD-1020", customer: "Aman Gupta", email: "aman@example.com", product: "Pro Plan", amount: 999, status: "Failed", date: "Sep 10, 2026" },
  { id: "#ORD-1019", customer: "Neha Kapoor", email: "neha@example.com", product: "Basic Plan", amount: 499, status: "Paid", date: "Sep 10, 2026" }
];

export const users = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "Admin", status: "Active", joined: "Jan 12, 2025", initials: "RS" },
  { id: 2, name: "Ananya Singh", email: "ananya@example.com", role: "Editor", status: "Active", joined: "Feb 20, 2025", initials: "AS" },
  { id: 3, name: "Karan Mehta", email: "karan@example.com", role: "Member", status: "Active", joined: "Mar 08, 2025", initials: "KM" },
  { id: 4, name: "Priya Verma", email: "priya@example.com", role: "Member", status: "Inactive", joined: "Apr 14, 2025", initials: "PV" },
  { id: 5, name: "Aman Gupta", email: "aman@example.com", role: "Editor", status: "Active", joined: "May 02, 2025", initials: "AG" },
  { id: 6, name: "Neha Kapoor", email: "neha@example.com", role: "Member", status: "Active", joined: "Jun 17, 2025", initials: "NK" }
];

export const notifications = [
  { id: 1, title: "New order received", text: "Order #ORD-1024 was placed by Rahul Sharma.", time: "2 min ago", type: "success", unread: true },
  { id: 2, title: "New user registered", text: "Ananya Singh created an account.", time: "15 min ago", type: "info", unread: true },
  { id: 3, title: "Payment pending", text: "Order #ORD-1023 is awaiting payment.", time: "1 hour ago", type: "warning", unread: true },
  { id: 4, title: "Weekly report ready", text: "Your performance report is ready to review.", time: "3 hours ago", type: "info", unread: false }
];

export const revenueData = [
  { name: "Mon", revenue: 3200, users: 210 },
  { name: "Tue", revenue: 4200, users: 245 },
  { name: "Wed", revenue: 3900, users: 260 },
  { name: "Thu", revenue: 5200, users: 290 },
  { name: "Fri", revenue: 4800, users: 315 },
  { name: "Sat", revenue: 6100, users: 340 },
  { name: "Sun", revenue: 7200, users: 380 }
];