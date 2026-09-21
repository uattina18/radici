import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { getAdjacentProject, getProjectBySlug } from "../data/projects";

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return <Navigate to="/progetti" replace />;
  }

  const nextProject = getAdjacentProject(project.slug, 1);

  return (
    <section
      className="project-detail"
      data-header-color="dark"
      aria-labelledby="project-detail-title"
    >
      <header className="project-detail__top projects-page__top">
        <p>Archivio progetti</p>
        <Link to="/progetti">
          <span aria-hidden="true">←</span>
          Torna all'archivio
        </Link>
      </header>

      <div className="project-detail__intro">
        <h1 id="project-detail-title">{project.name}</h1>

        <ul className="project-detail__meta">
          <li>{project.category}</li>
          <li>{project.surface}</li>
          <li>{project.location}</li>
          <li>{project.year}</li>
        </ul>
      </div>

      <img
        className="project-detail__cover"
        src={project.image}
        alt={project.imageAlt}
      />

      <div className="project-detail__text">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="project-detail__gallery">
        {project.gallery.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>

      <Link
        className="project-detail__next"
        to={`/progetti/${nextProject.slug}`}
      >
        <span className="project-detail__next-label">Prossimo progetto</span>
        <strong className="project-detail__next-name">
          {nextProject.name}
        </strong>
        <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export default ProjectDetailPage;
