import Section from "./Section";

export default function PhilosophySection() {
    const pillars = [
        {
            title: "People First",
            description:
                "Every hire represents a person with dreams, skills, and potential. We take time to understand both sides deeply.",
        },
        {
            title: "Intentional Matching",
            description:
                "We don't just fill roles, we find alignment between your culture, values, and the professionals who will thrive with you.",
        },
        {
            title: "Long-term Relationships",
            description:
                "Great teams aren't built overnight. We invest in relationships that grow stronger with time.",
        },
    ];

    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                        Our Philosophy
                    </p>
                    <h2 className="mb-6">Hiring should feel human</h2>
                    <p className="editorial-subheading">
                        At Talent Mucho, we believe in a people-first approach to building
                        teams. Every connection we make is intentional, every relationship
                        nurtured with care.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-beige-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-clay-500 font-serif text-xl">
                                    {index + 1}
                                </span>
                            </div>
                            <h3 className="text-xl mb-4">{pillar.title}</h3>
                            <p className="text-taupe-400 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
