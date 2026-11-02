
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const navigation = [
    { label: "Work", href: "/#work" },
    { label: "Engineering", href: "/#engineering" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    const handleSectionClick = (event, href) => {
        closeMenu();

        if (location.pathname !== "/") {
            event.preventDefault();
            window.location.href = href;
        }
    };

    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <Link
                    className="navbar__brand"
                    to="/"
                    onClick={closeMenu}
                >
                    <span className="navbar__name">Akosile</span>
                    <span className="navbar__role">
                        Software Engineer
                    </span>
                </Link>

                <nav
                    className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""
                        }`}
                >
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            className="navbar__link"
                            href={item.href}
                            onClick={(event) =>
                                handleSectionClick(event, item.href)
                            }
                        >
                            {item.label}
                        </a>
                    ))}

                    <Link
                        className="navbar__resume"
                        to="/resume"
                        onClick={closeMenu}
                    >
                        Resume
                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                        />
                    </Link>
                </nav>

                <button
                    className="navbar__toggle"
                    type="button"
                    aria-label={
                        isOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={isOpen}
                    onClick={() =>
                        setIsOpen((current) => !current)
                    }
                >
                    {isOpen ? (
                        <X size={21} strokeWidth={1.8} />
                    ) : (
                        <Menu size={21} strokeWidth={1.8} />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Navbar;
