import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-beige-100 to-beige-50 overflow-hidden">
            {/* Scattered Decorative Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top left area dots */}
                <div className="absolute top-20 left-12 w-2.5 h-2.5 rounded-full bg-clay-500" />
                <div className="absolute top-32 left-24 w-1.5 h-1.5 rounded-full bg-taupe-400" />
                <div className="absolute top-16 left-40 w-2 h-2 rounded-full bg-beige-300" />
                <div className="absolute top-44 left-8 w-1 h-1 rounded-full bg-espresso-700" />

                {/* Top right area dots */}
                <div className="absolute top-24 right-16 w-2 h-2 rounded-full bg-clay-500" />
                <div className="absolute top-12 right-32 w-1.5 h-1.5 rounded-full bg-taupe-400" />
                <div className="absolute top-40 right-48 w-2.5 h-2.5 rounded-full bg-beige-300" />

                {/* Middle left dots */}
                <div className="absolute top-1/3 left-4 w-2 h-2 rounded-full bg-taupe-400" />
                <div className="absolute top-1/2 left-16 w-1 h-1 rounded-full bg-clay-500" />

                {/* Middle right dots */}
                <div className="absolute top-1/3 right-8 w-1.5 h-1.5 rounded-full bg-clay-600" />
                <div className="absolute top-2/5 right-24 w-2 h-2 rounded-full bg-beige-300" />

                {/* Bottom area dots */}
                <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full bg-clay-500" />
                <div className="absolute bottom-24 left-40 w-1.5 h-1.5 rounded-full bg-taupe-400" />
                <div className="absolute bottom-40 right-16 w-2.5 h-2.5 rounded-full bg-beige-300" />
                <div className="absolute bottom-20 right-36 w-1 h-1 rounded-full bg-espresso-700" />
                <div className="absolute bottom-48 left-1/3 w-2 h-2 rounded-full bg-taupe-400" />

                {/* Soft background blurs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-beige-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-beige-300/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="section-container relative z-10 pt-32 pb-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column - Text Content */}
                    <div className="text-left order-2 lg:order-1">
                        {/* Tagline */}
                        <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-6 animate-fade-in">
                            Global Talent Studio
                        </p>

                        {/* Main Headline */}
                        <h1 className="mb-8 animate-fade-in-up">
                            Build Your{" "}
                            <span className="text-clay-500 italic">Team</span>
                            <br />
                            Anywhere.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-espresso-800 max-w-lg mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                            Talent Mucho is your thoughtful partner for building distributed
                            teams—without the overhead of traditional staffing agencies. We
                            connect you with aligned, reliable talent across borders.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animation-delay-400">
                            <a href="#contact" className="btn-primary">
                                Book a Free Discovery Call
                            </a>
                            <a href="#services" className="btn-secondary">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image with Floating Cards */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Circular backdrop */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-beige-200/60 to-beige-300/40 border border-beige-300/50" />
                            </div>

                            {/* Person Image */}
                            <div className="relative z-10 animate-fade-in-up">
                                <Image
                                    src="/hero-person.png"
                                    alt="Professional talent consultant"
                                    width={400}
                                    height={480}
                                    className="object-contain drop-shadow-lg"
                                    priority
                                />
                            </div>

                            {/* Floating Card - Experience Badge */}
                            <div className="absolute top-8 right-0 lg:-right-4 z-20 animate-fade-in-up animation-delay-300">
                                <div className="bg-clay-500 text-beige-50 px-4 py-3 rounded-lg shadow-lg">
                                    <span className="text-2xl font-bold">10+</span>
                                    <p className="text-xs opacity-90">Years<br />Experience</p>
                                </div>
                            </div>

                            {/* Floating Card - Talent Stats */}
                            <div className="absolute top-1/3 -left-4 lg:-left-12 z-20 opacity-0 animate-fade-in-up animation-delay-400">
                                <div className="bg-beige-50 px-4 py-3 rounded-xl shadow-lg border border-beige-200">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 rounded-full bg-beige-200 flex items-center justify-center">
                                            <span className="text-xs font-medium text-espresso-700">TM</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-charcoal-900">Talent Placed</p>
                                            <p className="text-xs text-taupe-400">This Month</p>
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-clay-500">250+</p>
                                </div>
                            </div>

                            {/* Floating Card - Growth Chart */}
                            <div className="absolute bottom-20 -right-4 lg:-right-8 z-20 opacity-0 animate-fade-in-up animation-delay-500">
                                <div className="bg-beige-50 px-4 py-3 rounded-xl shadow-lg border border-beige-200">
                                    <p className="text-xs text-taupe-400 mb-1">Client Growth</p>
                                    <p className="text-lg font-bold text-charcoal-900">98%</p>
                                    <div className="flex items-end gap-1 mt-2">
                                        <div className="w-2 h-3 bg-beige-300 rounded-sm" />
                                        <div className="w-2 h-4 bg-beige-300 rounded-sm" />
                                        <div className="w-2 h-5 bg-taupe-400 rounded-sm" />
                                        <div className="w-2 h-6 bg-taupe-400 rounded-sm" />
                                        <div className="w-2 h-8 bg-clay-500 rounded-sm" />
                                        <div className="w-2 h-7 bg-clay-500 rounded-sm" />
                                        <div className="w-2 h-10 bg-clay-500 rounded-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Emoji Reactions */}
                            <div className="absolute bottom-8 left-8 z-20 opacity-0 animate-fade-in-up animation-delay-400">
                                <div className="bg-beige-50 px-3 py-2 rounded-full shadow-md border border-beige-200 flex items-center gap-1">
                                    <span className="text-lg">🎯</span>
                                    <span className="text-lg">💼</span>
                                    <span className="text-lg">⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
