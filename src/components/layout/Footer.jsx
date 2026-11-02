import { ArrowUpRight, GitBranch } from "lucide-react";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div>
                        <p className="footer__name">Akosile</p>

                        <p className="footer__role">
                            Full Stack Software Engineer · Backend & Systems Engineering
                        </p>
                    </div>

                    <div className="footer__links">
                        <a
                            href="https://github.com/Agentpat"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                            <GitBranch size={15} strokeWidth={1.8} />
                        </a>

                        <a href="#work">
                            Selected work
                            <ArrowUpRight size={15} strokeWidth={1.8} />
                        </a>

                        <a
                            href="https://akosile-dev.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View catalog
                            <ArrowUpRight size={15} strokeWidth={1.8} />
                        </a>

                        <a href="#contact">
                            Contact
                            <ArrowUpRight size={15} strokeWidth={1.8} />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>© {new Date().getFullYear()} Akosile Olaide Joseph</span>

                    <a
                        href="https://akosile-dev.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View systems catalog via Akosile Dev
                        <ArrowUpRight size={13} strokeWidth={1.8} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;