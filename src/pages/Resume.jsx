
import { ArrowLeft, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import "./Resume.css";

const experience = [
    {
        period: "Jul 2026 — Present",
        role: "Full Stack Software Engineer",
        company: "Colossus Migration",
        description:
            "Designing and developing a production migration management platform covering client applications, document workflows, staff operations, administration, payments and notifications.",
    },
    {
        period: "2025 — Present",
        role: "Full Stack Software Engineer",
        company: "Independent / Client Projects",
        description:
            "Designing and developing production-oriented software systems, business platforms and independent products across sales operations, property, service operations, learning and consumer applications.",
    },
    {
        period: "Aug 2025 — Jan 2026",
        role: "Software Developer",
        company: "Chacon Strategies Limited · Denver, CO",
        description:
            "Built and maintained production platforms supporting operational workflows, job dispatching, driver assignment, notifications and financial tracking.",
    },
    {
        period: "Mar 2024 — Oct 2024",
        role: "Online IT Support Engineer",
        company: "AXA Mansard Insurance · Lagos",
        description:
            "Provided technical support and troubleshooting for users, systems and customer-facing technology within an insurance environment.",
    },
    {
        period: "Nov 2023 — Mar 2024",
        role: "Freelance Full-Stack Developer",
        company: "School Management Systems · Lagos",
        description:
            "Designed and developed web-based school management solutions covering core administrative and academic workflows.",
    },
    {
        period: "Jun 2023 — Nov 2023",
        role: "Frontend Developer Intern",
        company: "RESE Africa · PropTech · Lagos",
        description:
            "Completed a six-month school-directed internship contributing to responsive React interfaces for property technology solutions.",
    },
    {
        period: "Dec 2022 — Jan 2023",
        role: "Software Developer & IT Support",
        company: "Meridian Healthcare · Port Harcourt",
        description:
            "Supported healthcare technology operations while developing software modules and assisting medical staff with technical issues.",
    },
];

const projects = [
    {
        title: "Colossus Migration Platform",
        description:
            "Multi-role migration management platform covering client applications, document workflows, staff operations, administration, payments and notifications.",
        technologies: "React · Node.js · Express · MongoDB · JWT · Paystack · Cloudinary",
    },
    {
        title: "Vantage Dealer OS",
        description:
            "Automotive sales operations system for managing vehicle inventory, enquiries, sales pipelines, customers, reservations, follow-ups and reporting.",
        technologies:
            "React · Node.js · Express · MongoDB · REST APIs",
    },
    {
        title: "EstateFlow",
        description:
            "Real estate sales operations platform covering property listings, enquiries, lead management, follow-ups and property inspections.",
        technologies:
            "React · Node.js · Express · MongoDB · REST APIs",
    },
    {
        title: "SnapConfused",
        description:
            "Independent consumer web product built around everyday Snapchat confusion, community submissions and shared experiences.",
        technologies: "React · JavaScript · CSS · Vercel",
    },
];

const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT",
    "RBAC",
    "Git",
    "Vercel",
];

function Resume() {
    return (
        <main className="resume-page">
            <div className="resume-toolbar">
                <div className="container resume-toolbar__inner">
                    <Link className="resume-toolbar__back" to="/">
                        <ArrowLeft size={15} strokeWidth={1.8} />
                        Back to portfolio
                    </Link>

                    <button
                        className="resume-toolbar__print"
                        type="button"
                        onClick={() => window.print()}
                    >
                        <Download size={15} strokeWidth={1.8} />
                        Print / Save PDF
                    </button>
                </div>
            </div>

            <div className="resume-sheet">
                <header className="resume-header">
                    <div>
                        <p className="resume-kicker">
                            Full Stack Software Engineer
                        </p>

                        <h1>Akosile Olaide Joseph</h1>

                        <p className="resume-summary">
                            Full Stack Software Engineer focused on backend and
                            systems engineering. I build production-oriented
                            software systems that connect business workflows,
                            data, users and operational processes into reliable
                            applications.
                        </p>
                    </div>

                    <div className="resume-contact">
                        <a href="mailto:olaideakosile3five@gmail.com">
                            <Mail size={14} strokeWidth={1.7} />
                            olaideakosile3five@gmail.com
                        </a>

                        <span>
                            <MapPin size={14} strokeWidth={1.7} />
                            Lagos, Nigeria
                        </span>

                        <a
                            href="https://github.com/Agentpat"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExternalLink size={14} strokeWidth={1.7} />
                            github.com/Agentpat
                        </a>

                        <span>08106532809</span>
                    </div>
                </header>

                <section className="resume-section">
                    <div className="resume-section__label">
                        Professional Experience
                    </div>

                    <div className="resume-section__content">
                        {experience.map((item) => (
                            <article
                                className="resume-experience"
                                key={`${item.period}-${item.role}`}
                            >
                                <div className="resume-experience__top">
                                    <div>
                                        <h2>{item.role}</h2>
                                        <p>{item.company}</p>
                                    </div>

                                    <span>{item.period}</span>
                                </div>

                                <p className="resume-experience__description">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="resume-section">
                    <div className="resume-section__label">
                        Selected Projects
                    </div>

                    <div className="resume-section__content resume-projects">
                        {projects.map((project) => (
                            <article
                                className="resume-project"
                                key={project.title}
                            >
                                <h2>{project.title}</h2>

                                <p>{project.description}</p>

                                <span>{project.technologies}</span>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="resume-section">
                    <div className="resume-section__label">
                        Engineering Skills
                    </div>

                    <div className="resume-section__content">
                        <div className="resume-skills">
                            {skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="resume-section">
                    <div className="resume-section__label">
                        Education
                    </div>

                    <div className="resume-section__content">
                        <div className="resume-education">
                            <div>
                                <h2>B.Sc. Computer Science</h2>
                                <p>University · Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="resume-footer">
                    <span>Akosile Olaide Joseph</span>
                    <span>Full Stack Software Engineer</span>
                </footer>
            </div>
        </main>
    );
}

export default Resume;
