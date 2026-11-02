
import { ArrowUpRight } from "lucide-react";

import "./ProjectGallery.css";

function ProjectGallery({ images = [] }) {
    if (!images.length) {
        return null;
    }

    return (
        <section className="project-gallery">
            <div className="project-gallery__header">
                <div className="project-gallery__heading">
                    <p className="project-gallery__label">
                        Product evidence
                    </p>

                    <h2 className="project-gallery__title">
                        The system in operation.
                    </h2>

                    <p className="project-gallery__description">
                        Selected views from the application showing how the
                        underlying workflow is represented through the
                        interface.
                    </p>
                </div>

                <span className="project-gallery__count">
                    {images.length} {images.length === 1 ? "screen" : "screens"}
                </span>
            </div>

            <div className="project-gallery__grid">
                {images.map((image, index) => (
                    <figure
                        className={`project-gallery__item ${index === 0
                                ? "project-gallery__item--featured"
                                : ""
                            }`}
                        key={image.src}
                    >
                        <div className="project-gallery__image-wrap">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="project-gallery__image"
                                loading={index === 0 ? "eager" : "lazy"}
                            />

                            <a
                                className="project-gallery__expand"
                                href={image.src}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${image.title} image`}
                            >
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </a>
                        </div>

                        <figcaption className="project-gallery__caption">
                            <div className="project-gallery__caption-title">
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <strong>{image.title}</strong>
                            </div>

                            <p>{image.description}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default ProjectGallery;
