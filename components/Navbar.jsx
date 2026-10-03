"use client";

import { useEffect, useRef, useState } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { profile } from "@data/portfolio";

const links = [
  ["About", "home"],
  ["Research", "research"],
  ["Experience", "experiences"],
  ["Projects", "project"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    function closeOnOutsideClick(event) {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark" onClick={() => setIsOpen(false)}>
          <span className="monogram" aria-hidden="true">
            t.
          </span>
          <span>Tahmid Islam Tomal</span>
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="navigation-links"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cv"
            href={profile.cv}
            onClick={() => setIsOpen(false)}
          >
            CV <FiMail aria-hidden="true" />
            <span className="sr-only"> (request by email)</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
