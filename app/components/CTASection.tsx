import Image from "next/image";
import { Calendar } from "lucide-react";

export default function CTASection() {
    return (
        <section id="contact" className="relative bg-charcoal-900 overflow-hidden">
            {/* Diagonal Cross Grid Pattern */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `
                        linear-gradient(45deg, transparent 49%, #524639 49%, #524639 51%, transparent 30%),
                        linear-gradient(-45deg, transparent 49%, #524639 49%, #524639 51%, transparent 30%)
                    `,
                    backgroundSize: "40px 40px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
                    maskImage:
                        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
                }}
            />

            {/* CTA Content */}
            <div className="section-container relative z-10 text-center py-24 md:py-32">
                <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                    The Invitation
                </p>
                <h2 className="text-beige-50 mb-6">
                    Ready to build your global team?
                </h2>
                <p className="text-lg text-beige-200/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Let's start with a conversation. Tell us about your vision, your
                    challenges, and the kind of team you're looking to build. No pressure,
                    no obligations, just a genuine exchange of ideas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://calendly.com/talentmucho/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-beige-50 text-charcoal-900 font-medium text-base rounded-lg shadow-md transition-all duration-300 ease-out hover:bg-beige-100 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a Free Discovery Call
                    </a>
                    <a
                        href="mailto:hello@talentmucho.com"
                        className="bg-charcoal-900 inline-flex items-center justify-center px-8 py-4  text-beige-50 font-medium text-base border border-beige-50/30 rounded-lg transition-all duration-300 ease-out hover:bg-beige-50/10 hover:border-beige-50"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Footer Content */}
            <footer className="relative z-10 py-12">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <Image
                                src="/tm-logo.png"
                                alt="Talent Mucho"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </a>


                        {/* Copyright */}
                        <p className="text-sm text-beige-200/40">
                            © {new Date().getFullYear()} Talent Mucho. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
