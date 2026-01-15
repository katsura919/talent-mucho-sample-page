export default function CTASection() {
    return (
        <section id="contact" className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-espresso-700/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-clay-600/20 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10 text-center">
                <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                    The Invitation
                </p>
                <h2 className="text-beige-50 mb-6">
                    Ready to build your global team?
                </h2>
                <p className="text-lg text-beige-200/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Let's start with a conversation. Tell us about your vision, your
                    challenges, and the kind of team you're looking to build. No pressure,
                    no obligations—just a genuine exchange of ideas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:hello@talentmucho.com"
                        className="inline-flex items-center justify-center px-8 py-4 bg-beige-50 text-charcoal-900 font-medium text-base rounded-lg shadow-md transition-all duration-300 ease-out hover:bg-beige-100 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Book a Free Discovery Call
                    </a>
                    <a
                        href="mailto:hello@talentmucho.com"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-beige-50 font-medium text-base border border-beige-50/30 rounded-lg transition-all duration-300 ease-out hover:bg-beige-50/10 hover:border-beige-50"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
