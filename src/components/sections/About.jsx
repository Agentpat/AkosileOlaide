import { ArrowUpRight } from "lucide-react";

import "./About.css";

function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about__layout">
                    <div className="about__image-wrap">
                        <div className="about__image-frame">
                            <img
                                src="/images/profile/akosile.jpg"
                                alt="Akosile Olaide Joseph"
                                className="about__image"
                            />
                        </div>

                        <p className="about__image-caption">
                            Akosile Olaide Joseph · Systems Engineer & Product Developer
                        </p>
                    </div>

                    <div className="about__content">
                        <div className="section-heading">
                            <p className="section-label">
                                Beyond Writing Code
                            </p>

                            <h2 className="section-title">
                                I don't just build software. I build systems that move businesses forward.
                            </h2>
                        </div>

                        <div className="about__copy">
                            <p className="about__lead">
                                I'm a systems-focused full-stack software engineer
                                who approaches technology from both an engineering
                                and business perspective. I identify problems,
                                understand the processes behind them and build
                                digital products that turn complex operations into
                                structured, scalable and commercially useful systems.
                            </p>

                            <p>
                                My work goes beyond conventional website development.
                                I build business operating systems, workflow
                                automation platforms, customer portals, management
                                tools, internal applications and independent digital
                                products. I've worked across migration services,
                                automotive sales, real estate, healthcare, service
                                operations, education and consumer technology.
                            </p>

                            <p>
                                What makes my approach different is that I don't
                                look at a project as simply a collection of screens
                                that needs to be developed. I look at the business
                                behind it. Where is the company losing time?
                                Where are potential customers being missed?
                                Which processes are unnecessarily manual?
                                What can be automated? What technology can help
                                the business serve more customers, convert more
                                opportunities and create additional revenue?
                            </p>

                            <p>
                                I build with those questions in mind. Whether it's
                                a dealership operating system designed to improve
                                lead conversion, a migration platform that organizes
                                the client journey, a property sales system that
                                connects enquiries to inspections, or a healthcare
                                application that structures administrative workflows,
                                my objective is to create technology with a clear
                                business purpose.
                            </p>

                            <p>
                                Technically, I work across the full development
                                lifecycle using JavaScript, React, Node.js, Express
                                and MongoDB. My strengths include backend
                                architecture, API development, database design,
                                authentication, role-based access control, business
                                logic, workflow engineering, integrations and
                                production deployment. I am comfortable moving
                                between product planning, system architecture,
                                frontend development and backend implementation.
                            </p>

                            <p>
                                I am particularly interested in building outside
                                conventional boundaries. I enjoy taking an idea
                                that may initially exist only as a business problem
                                or an opportunity, breaking it down, designing
                                the solution and turning it into a working product.
                                I don't need every solution to follow an existing
                                template. I think critically, explore alternatives
                                and build around what the problem actually requires.
                            </p>

                            <p>
                                I also understand that building software is only
                                part of the job. A successful product must serve
                                its users, support the company's objectives,
                                operate reliably and have a reason to exist in
                                the market. I bring that commercial awareness
                                into the engineering process, thinking about
                                customer acquisition, operational efficiency,
                                monetization and long-term product value.
                            </p>

                            <p>
                                I am looking for opportunities where I can take
                                meaningful ownership, solve challenging problems
                                and contribute beyond assigned development tasks.
                                I want to work with teams that value initiative,
                                independent thinking, execution and the ability
                                to turn ideas into real business capabilities.
                            </p>

                            <p>
                                If you need someone who can understand a business
                                problem, think through the solution, engineer the
                                system and take responsibility for getting it
                                working, that's the kind of value I bring.
                            </p>
                        </div>

                        <div className="about__links">
                            <a
                                href="https://github.com/Agentpat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                                <ArrowUpRight size={15} strokeWidth={1.8} />
                            </a>

                            <a href="#contact">
                                Let's work together
                                <ArrowUpRight size={15} strokeWidth={1.8} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about__copy">
                    <p className="section-label">
                        A Note About This Portfolio
                    </p>

                    <h3>
                        Built to demonstrate capability, not to compete for attention.
                    </h3>

                    <p>
                        This portfolio was intentionally designed to be direct,
                        lightweight and easy to navigate. I didn't want excessive
                        animations, unnecessary visual effects or complicated
                        interactions getting between you and the actual work.
                    </p>

                    <p>
                        The objective is to make it easy for you to explore the
                        systems I've worked on, understand the problems they
                        address, see the technologies behind them and evaluate
                        my approach to engineering. The projects are the focus.
                        The presentation simply makes them accessible.
                    </p>

                    <p>
                        I take engineering seriously. I value clarity, execution,
                        thoughtful architecture and software that serves a real
                        purpose. This portfolio reflects that mindset.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;