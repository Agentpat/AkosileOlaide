
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./ProjectCard.css";

function ProjectCard({ project, featured = false }) {
    const previewImage = project.images?.[0];

    return (
        <article
            className={`project-card ${featured ? "project-card--featured" : ""
                }`}
        >
            <div className="project-card__visual">
                {previewImage ? (
                    <img
                        className="project-card__image"
                        src={previewImage.src}
                        alt={previewImage.alt}
                        loading={featured ? "eager" : "lazy"}
                    />
                ) : (
                    <>
                        <div className="project-card__visual-grid" />

                        <div className="project-card__visual-label">
                            {project.category}
                        </div>

                        <span className="project-card__visual-name">
                            {project.title}
                        </span>
                    </>
                )}
            </div>

            <div className="project-card__body">
                <div className="project-card__heading">
                    <div className="project-card__title-group">
                        <p className="project-card__status">
                            {project.status}
                        </p>

                        <h3>{project.title}</h3>
                    </div>

                    <Link
                        className="project-card__link"
                        to={`/projects/${project.slug}`}
                        aria-label={`View ${project.title} project`}
                    >
                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>

                <p className="project-card__description">
                    {project.description}
                </p>

                <div className="project-card__capabilities">
                    {project.capabilities
                        .slice(0, featured ? 5 : 4)
                        .map((capability) => (
                            <span key={capability}>
                                {capability}
                            </span>
                        ))}
                </div>

                <div className="project-card__footer">
                    <div className="project-card__technologies">
                        {project.technologies
                            .slice(0, featured ? 5 : 4)
                            .map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                    </div>

                    <Link
                        className="project-card__view"
                        to={`/projects/${project.slug}`}
                    >
                        View project
                        <ArrowUpRight
                            size={14}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
