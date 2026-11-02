
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import "./Contact.css";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact__panel">
                    <div className="contact__content">
                        <p className="section-label">Contact</p>

                        <h2 className="contact__title">
                            Have a system that needs to be built?
                        </h2>

                        <p className="contact__description">
                            I’m open to software engineering opportunities, product
                            work and business systems that require thoughtful
                            backend and full-stack development.
                        </p>
                    </div>

                    <div className="contact__actions">
                        <a
                            className="contact__action contact__action--primary"
                            href="mailto:olaideakosile35@gmail.com"
                        >
                            <span>
                                <Mail size={18} strokeWidth={1.7} />
                                Email me
                            </span>

                            <ArrowUpRight size={17} strokeWidth={1.8} />
                        </a>

                        <a
                            className="contact__action"
                            href="https://wa.me/2348106532809"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                <MessageCircle size={18} strokeWidth={1.7} />
                                WhatsApp
                            </span>

                            <ArrowUpRight size={17} strokeWidth={1.8} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
