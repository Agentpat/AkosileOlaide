import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    ExternalLink,
    BriefcaseBusiness,
    Users,
    TrendingUp,
    Target,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import ProjectGallery from "../components/projects/ProjectGallery";
import projects from "../data/projects";
import "./Project.css";

function Project() {
    const { slug } = useParams();


    const project = projects.find((item) => item.slug === slug);
    const heroImage = project?.images?.[0];

    if (!project) {
        return (
            <main className="project-page project-page--not-found">
                <div className="container">
                    <Link className="project-page__back" to="/">
                        <ArrowLeft size={16} strokeWidth={1.8} />
                        Back to portfolio
                    </Link>

                    <div className="project-page__not-found">
                        <p className="project-page__label">404</p>
                        <h1>Project not found.</h1>
                        <p>
                            The project you are looking for does not exist or
                            may have been moved.
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    const liveLinkLabel =
        project.linkLabel ||
        (project.status === "Live Product"
            ? "Open live product"
            : "Open live demo");

    return (
        <main className="project-page">
            <div className="container">

                {/* BACK NAVIGATION */}

                <Link className="project-page__back" to="/">
                    <ArrowLeft size={16} strokeWidth={1.8} />
                    Back to portfolio
                </Link>

                {/* PROJECT HERO */}

                <header className="project-page__hero">
                    <div className="project-page__eyebrow">
                        <span>{project.status}</span>
                        <span>{project.category}</span>
                    </div>

                    <h1>{project.title}</h1>

                    <p className="project-page__intro">
                        {project.description}
                    </p>

                    {project.link && (
                        <a
                            className="project-page__live-link"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {liveLinkLabel}
                            <ArrowUpRight size={16} strokeWidth={1.8} />
                        </a>
                    )}
                </header>

                {/* PROJECT METADATA */}

                <div className="project-page__meta">
                    <div className="project-page__meta-item">
                        <span>Status</span>
                        <strong>{project.status}</strong>
                    </div>

                    <div className="project-page__meta-item">
                        <span>Category</span>
                        <strong>{project.category}</strong>
                    </div>

                    <div className="project-page__meta-item">
                        <span>Stack</span>
                        <strong>
                            {project.technologies.slice(0, 3).join(" · ")}
                        </strong>
                    </div>

                    <div className="project-page__meta-item">
                        <span>System areas</span>
                        <strong>{project.capabilities.length}</strong>
                    </div>
                </div>

                {/* PROJECT HERO IMAGE */}

                <section className="project-page__visual">
                    {heroImage ? (
                        <img
                            className="project-page__hero-image"
                            src={heroImage.src}
                            alt={heroImage.alt}
                        />
                    ) : (
                        <>
                            <div className="project-page__visual-grid" />

                            <div className="project-page__visual-content">
                                <span>{project.category}</span>
                                <strong>{project.title}</strong>
                            </div>
                        </>
                    )}
                </section>

                {/* SCREENSHOT GALLERY */}

                <ProjectGallery images={project.images} />

                <div className="project-page__content">

                    {/* PROJECT CONTEXT */}

                    <section className="project-page__section project-page__section--intro">
                        <p className="project-page__label">
                            Project context
                        </p>

                        <div className="project-page__copy">
                            <h2>The problem behind the interface.</h2>

                            <p>{project.overview}</p>

                            <p>{project.problem}</p>
                        </div>
                    </section>

                    {/* BUSINESS PURPOSE */}

                    {project.businessPurpose && (
                        <section className="project-page__section project-page__section--business">
                            <p className="project-page__label">
                                <BriefcaseBusiness size={15} />
                                Business purpose
                            </p>

                            <div className="project-page__copy">
                                <h2>
                                    Built around a real business opportunity.
                                </h2>

                                <p>{project.businessPurpose}</p>
                            </div>
                        </section>
                    )}

                    {/* TARGET CUSTOMERS */}

                    {project.targetCustomers && (
                        <section className="project-page__section project-page__section--customers">
                            <p className="project-page__label">
                                <Users size={15} />
                                Target market
                            </p>

                            <div className="project-page__copy">
                                <h2>Who the product is designed for.</h2>

                                <p>{project.targetCustomers}</p>
                            </div>
                        </section>
                    )}

                    {/* VALUE PROPOSITION */}

                    {project.valueProposition && (
                        <section className="project-page__section project-page__section--value">
                            <p className="project-page__label">
                                <Target size={15} />
                                Value proposition
                            </p>

                            <div className="project-page__copy">
                                <h2>Why customers would use it.</h2>

                                <p>{project.valueProposition}</p>
                            </div>
                        </section>
                    )}

                    {/* REVENUE MODEL */}

                    {project.revenueModel && (
                        <section className="project-page__section project-page__section--revenue">
                            <p className="project-page__label">
                                <TrendingUp size={15} />
                                Revenue model
                            </p>

                            <div className="project-page__copy">
                                <h2>Turning the product into a business.</h2>

                                <p>{project.revenueModel}</p>
                            </div>
                        </section>
                    )}

                    {/* REVENUE OPPORTUNITY */}

                    {project.revenueOpportunity && (
                        <section className="project-page__section project-page__section--opportunity">
                            <p className="project-page__label">
                                Commercial opportunity
                            </p>

                            <div className="project-page__copy">
                                <h2>Where the business can grow.</h2>

                                <p>{project.revenueOpportunity}</p>
                            </div>
                        </section>
                    )}

                    {/* SYSTEM DESIGN */}

                    <section className="project-page__section">
                        <p className="project-page__label">
                            System design
                        </p>

                        <div className="project-page__copy">
                            <h2>How the system is organized.</h2>

                            <p>{project.system}</p>
                        </div>
                    </section>

                    {/* CORE CAPABILITIES */}

                    <section className="project-page__section">
                        <p className="project-page__label">
                            Core capabilities
                        </p>

                        <div className="project-page__capabilities">
                            {project.capabilities.map((capability) => (
                                <div
                                    className="project-page__capability"
                                    key={capability}
                                >
                                    <Check size={15} strokeWidth={1.8} />
                                    <span>{capability}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* WORKFLOW */}

                    <section className="project-page__section">
                        <p className="project-page__label">
                            Workflow
                        </p>

                        <div className="project-page__workflow">
                            <div className="project-page__copy">
                                <h2>
                                    The work is represented as a system,
                                    not isolated screens.
                                </h2>

                                <p>
                                    The important part of the application is
                                    how information moves through the
                                    workflow. These are the primary
                                    operational paths represented in the
                                    system.
                                </p>
                            </div>

                            <div className="project-page__workflow-list">
                                {project.workflows.map((workflow, index) => (
                                    <div
                                        className="project-page__workflow-item"
                                        key={workflow}
                                    >
                                        <span>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <strong>{workflow}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ARCHITECTURE */}

                    <section className="project-page__section">
                        <p className="project-page__label">
                            Architecture
                        </p>

                        <div className="project-page__architecture">
                            <div className="project-page__copy">
                                <h2>Engineering foundation.</h2>

                                <p>{project.architecture}</p>
                            </div>

                            <div className="project-page__engineering">
                                {project.engineering.map((item) => (
                                    <div
                                        className="project-page__engineering-item"
                                        key={item}
                                    >
                                        <Check size={15} strokeWidth={1.8} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* TECHNOLOGY STACK */}

                    <section className="project-page__section project-page__section--stack">
                        <p className="project-page__label">
                            Technology
                        </p>

                        <div className="project-page__stack">
                            {project.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>

                </div>

                {/* PROJECT FOOTER */}

                <div className="project-page__footer">
                    <Link to="/">
                        <ArrowLeft size={16} strokeWidth={1.8} />
                        Back to selected work
                    </Link>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {liveLinkLabel}
                            <ExternalLink size={15} strokeWidth={1.8} />
                        </a>
                    )}
                </div>

            </div>
        </main>
    );


}

export default Project;
