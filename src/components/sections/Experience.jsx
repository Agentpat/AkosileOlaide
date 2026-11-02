import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import "./Experience.css";

const experience = [
    {
        period: "Jul 2026 — Present",
        role: "Full Stack Software Engineer",
        company: "Colossus Migration",
        description:
            "Designing and developing a production migration management platform covering client applications, document workflows, staff operations, administration, payments and notifications.",
        responsibilities: [
            "Design backend architecture, APIs and data models",
            "Build client, staff and admin portals",
            "Implement application and document management workflows",
            "Develop role-based authentication and access control",
            "Integrate payments, cloud storage and notifications",
            "Manage production deployment and ongoing system development",
        ],
    },
    {
        period: "2025 — Present",
        role: "Full Stack Software Engineer",
        company: "Independent / Client Projects",
        description:
            "Designing and developing production-oriented software systems, business platforms and independent products across sales operations, property, service operations, learning and consumer applications.",
        responsibilities: [
            "Build full-stack business systems and operational platforms",
            "Design APIs, data models and business workflows",
            "Develop dashboards and role-based applications",
            "Integrate external services and production infrastructure",
            "Take projects from requirements through deployment",
        ],
    },
    {
        period: "Aug 2025 — Jan 2026",
        role: "Software Developer",
        company: "Chacon Strategies Limited · Denver, CO",
        description:
            "Built and maintained production platforms supporting operational workflows, job dispatching, driver assignment, notifications and financial tracking.",
        responsibilities: [
            "Develop production APIs and application features",
            "Implement workflow automation and real-time job dispatching",
            "Build driver assignment and operational workflows",
            "Integrate SMS and IVR notification systems",
            "Develop financial tracking and reporting functionality",
            "Maintain systems throughout the application lifecycle",
        ],
    },
    {
        period: "Mar 2024 — Oct 2024",
        role: "Online IT Support Engineer",
        company: "AXA Mansard Insurance · Lagos",
        description:
            "Provided technical support and troubleshooting for users, systems and customer-facing technology within an insurance environment.",
        responsibilities: [
            "Provide remote technical support and troubleshooting",
            "Diagnose software and system-related issues",
            "Assist users with technical problems and application access",
            "Support reliable day-to-day technology operations",
        ],
    },
    {
        period: "Nov 2023 — Mar 2024",
        role: "Freelance Full-Stack Developer",
        company: "School Management Systems · Lagos",
        description:
            "Designed and developed web-based school management solutions covering core administrative and academic workflows.",
        responsibilities: [
            "Design and develop school management applications",
            "Implement student registration and management workflows",
            "Build staff management functionality",
            "Develop reporting and administrative modules",
            "Connect frontend interfaces with backend APIs",
        ],
    },
    {
        period: "Jun 2023 — Nov 2023",
        role: "Frontend Developer Intern",
        company: "RESE Africa · PropTech · Lagos",
        description:
            "Completed a six-month, school-directed internship contributing to responsive web interfaces for property technology solutions using React and modern frontend development practices.",
        responsibilities: [
            "Build responsive React interfaces",
            "Implement reusable frontend components",
            "Translate product requirements into functional interfaces",
            "Improve usability and responsiveness across application screens",
            "Work with modern frontend development workflows",
        ],
    },
    {
        period: "Dec 2022 — Jan 2023",
        role: "Software Developer & IT Support",
        company: "Meridian Healthcare · Port Harcourt",
        description:
            "Supported healthcare technology operations while developing software modules and assisting medical staff with technical issues.",
        responsibilities: [
            "Support healthcare IT systems and daily technical operations",
            "Develop software modules for internal workflows",
            "Troubleshoot software and hardware-related issues",
            "Provide technical assistance to medical and administrative staff",
        ],
    },
];

function Experience() {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="experience__layout">
                    <div className="section-heading">
                        <p className="section-label">Experience</p>

                        <h2 className="section-title">
                            Building software across the full stack.
                        </h2>

                        <p className="section-description">
                            From software development and IT support to production systems
                            engineering, my experience has grown around solving practical
                            technical and operational problems with software.
                        </p>

                        <a
                            className="experience__resume"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View full resume
                            <ArrowUpRight size={15} strokeWidth={1.8} />
                        </a>
                    </div>

                    <div className="experience__list">
                        {experience.map((item) => (
                            <article
                                className="experience__item"
                                key={`${item.period}-${item.role}-${item.company}`}
                            >
                                <div className="experience__period">
                                    {item.period}
                                </div>

                                <div className="experience__main">
                                    <div className="experience__title-row">
                                        <div>
                                            <h3>{item.role}</h3>

                                            <p className="experience__company">
                                                {item.company}
                                            </p>
                                        </div>

                                        <div className="experience__icon">
                                            <BriefcaseBusiness
                                                size={17}
                                                strokeWidth={1.7}
                                            />
                                        </div>
                                    </div>

                                    <p className="experience__description">
                                        {item.description}
                                    </p>

                                    <ul className="experience__responsibilities">
                                        {item.responsibilities.map((responsibility) => (
                                            <li key={responsibility}>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;