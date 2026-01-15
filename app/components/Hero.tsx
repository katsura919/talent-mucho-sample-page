export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-beige-100 to-beige-50 overflow-hidden">
            {/* Diagonal Cross Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(45deg, transparent 49%, #DED4C4 49%, #DED4C4 51%, transparent 51%),
                        linear-gradient(-45deg, transparent 49%, #DED4C4 49%, #DED4C4 51%, transparent 51%)
                    `,
                    backgroundSize: "40px 40px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />

            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-beige-200/50 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-beige-300/40 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="section-container relative z-10 text-center pt-32 pb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Tagline */}
                    <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-6 animate-fade-in">
                        Global Talent Studio
                    </p>

                    {/* Main Headline */}
                    <h1 className="mb-8 animate-fade-in-up">
                        Build Your Team.
                        <br />
                        <span className="text-clay-500">Anywhere.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-espresso-800 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                        Talent Mucho is your thoughtful partner for building distributed
                        teams—without the overhead of traditional staffing agencies. We
                        connect you with aligned, reliable talent across borders.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
                        <a href="#contact" className="btn-primary">
                            Book a Free Discovery Call
                        </a>
                        <a href="#services" className="btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}
