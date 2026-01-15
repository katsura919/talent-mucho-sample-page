export default function Footer() {
    return (
        <footer className="bg-charcoal-900 border-t border-espresso-700/50 py-12">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#" className="text-xl font-serif text-beige-50">
                        Talent<span className="text-clay-500">Mucho</span>
                    </a>

                    {/* Links */}
                    <nav className="flex items-center gap-8">
                        <a
                            href="#services"
                            className="text-sm text-beige-200/60 hover:text-beige-50 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#process"
                            className="text-sm text-beige-200/60 hover:text-beige-50 transition-colors"
                        >
                            Process
                        </a>
                        <a
                            href="#why-us"
                            className="text-sm text-beige-200/60 hover:text-beige-50 transition-colors"
                        >
                            Why Us
                        </a>
                        <a
                            href="#contact"
                            className="text-sm text-beige-200/60 hover:text-beige-50 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-beige-200/40">
                        © {new Date().getFullYear()} Talent Mucho. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
