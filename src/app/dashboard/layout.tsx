// app/dashboard/layout.tsx

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      DashboardLayout
      <main>{children}</main>
    </div>
  );
}
