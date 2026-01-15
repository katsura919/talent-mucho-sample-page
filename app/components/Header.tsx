"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-beige-50/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="group flex items-center gap-2">
                    <span className="text-2xl font-serif text-charcoal-900 tracking-tight">
                        Talent<span className="text-clay-500">Mucho</span>
                    </span>
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="#services"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#process"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Process
                    </a>
                    <a
                        href="#why-us"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Why Us
                    </a>
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="btn-primary text-sm py-3 px-6"
                >
                    Book a Call
                </a>
            </div>
        </header>
    );
}
