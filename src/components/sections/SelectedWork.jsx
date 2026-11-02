
import projects from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

import "./SelectedWork.css";

function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section className="selected-work section" id="work">
      <div className="container">
        <div className="section-heading selected-work__heading">
          <p className="section-label">Selected Work</p>

          <h2 className="section-title">
            Systems built around real workflows.
          </h2>

          <p className="section-description">
            A selection of production systems, operational platforms and
            independent products spanning migration services, sales operations,
            property, service operations and learning.
          </p>
        </div>

        <div className="selected-work__featured">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured
            />
          ))}
        </div>

        <div className="selected-work__additional">
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
