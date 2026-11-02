import {
    ArrowDown,
    ArrowUpRight,
    GitBranch,
    BriefcaseBusiness,
} from "lucide-react";

import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__inner">
                <div className="hero__content">
                    <div className="hero__eyebrow">
                        <span className="hero__status-dot"></span>
                        SYSTEMS ENGINEER · PRODUCT DEVELOPER
                    </div>

                    <h1 className="hero__title">
                        I build technology that turns{" "}
                        <span>business problems into opportunities.</span>
                    </h1>

                    <p className="hero__description">
                        I design, engineer and deliver digital products,
                        business operating systems and automation platforms
                        that help companies work smarter, serve more customers
                        and create new revenue opportunities.
                    </p>

                    <p className="hero__supporting">
                        From an idea on paper to a fully functional product,
                        I bring together product thinking, backend engineering,
                        frontend development and commercial awareness to build
                        solutions that do more than simply exist.
                    </p>

                    <div className="hero__actions">
                        <a className="hero__primary" href="#work">
                            Explore my work
                            <ArrowDown size={16} strokeWidth={1.8} />
                        </a>

                        <a
                            className="hero__secondary"
                            href="https://github.com/Agentpat"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                            <GitBranch size={16} strokeWidth={1.8} />
                        </a>
                    </div>

                    <div className="hero__opportunity">
                        <BriefcaseBusiness size={17} strokeWidth={1.8} />

                        <span>
                            Open to serious full-time engineering opportunities
                        </span>

                        <ArrowUpRight size={15} strokeWidth={1.8} />
                    </div>
                </div>

                <aside className="hero__meta">
                    <div className="hero__meta-intro">
                        <span>WHAT I BRING</span>
                        <p>
                            Engineering with a business mindset.
                        </p>
                    </div>

                    <div className="hero__meta-item">
                        <span>Core strength</span>
                        <strong>
                            Systems & Backend Engineering
                        </strong>
                    </div>

                    <div className="hero__meta-item">
                        <span>Product capabilities</span>
                        <strong>
                            Architecture · Automation · Product Development
                        </strong>
                    </div>

                    <div className="hero__meta-item">
                        <span>Technology</span>
                        <strong>
                            React · Node.js · Express · MongoDB
                        </strong>
                    </div>

                    <div className="hero__meta-item">
                        <span>Approach</span>
                        <strong>
                            Identify · Design · Engineer · Deliver
                        </strong>
                    </div>

                    <div className="hero__meta-item">
                        <span>Location</span>
                        <strong>
                            Lagos, Nigeria · Open to Remote
                        </strong>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Hero;