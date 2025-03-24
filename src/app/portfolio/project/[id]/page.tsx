export default function ProjectPage({ params }: any) {
  return (
    <section className="project-details">
      <h1>Project ID: {params.id}</h1>
      {/* Project-specific content */}
    </section>
  );
}
