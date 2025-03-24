// app/dashboard/layout.js
export default function PortfolioLayout({ children }: any) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">Portfolio Layout</aside>
      <main className="dashboard-content">
        {children} {/* This is where nested route content will appear */}
      </main>
    </div>
  );
}
