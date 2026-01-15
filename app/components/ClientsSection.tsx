import Section from "./Section";

export default function ClientsSection() {
    const clients = [
        "Startups",
        "Scale-ups",
        "Digital Agencies",
        "SaaS Companies",
        "Founders",
        "Growing Teams",
    ];

    return (
        <Section variant="alt">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                    Who We Work With
                </p>
                <h2 className="mb-12">Built for builders</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {clients.map((client, index) => (
                        <span
                            key={index}
                            className="px-6 py-3 bg-beige-50 border border-beige-300 rounded-full text-espresso-800 text-sm hover:border-clay-500 hover:text-clay-500 transition-colors duration-300"
                        >
                            {client}
                        </span>
                    ))}
                </div>

                <p className="mt-12 text-taupe-400 max-w-2xl mx-auto">
                    Whether you're a solo founder scaling your first hire or an
                    established company building a distributed team, we adapt our approach
                    to meet you where you are.
                </p>
            </div>
        </Section>
    );
}
