import Image from "next/image";
import Section from "./Section";

export default function ChallengeSection() {
    return (
        <Section variant="alt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Content - Left */}
                <div className="text-left">
                    <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                        The Challenge
                    </p>
                    <h2 className="mb-6">
                        Finding the right talent has never been more complex
                    </h2>
                    <div className="w-16 h-px bg-beige-300 my-6" />
                    <p className="text-lg leading-relaxed mb-6">
                        The modern workforce spans continents, time zones, and cultures.
                        Building a reliable team across borders requires more than job
                        postings—it demands deep understanding, trust, and alignment.
                    </p>
                    <p className="text-lg leading-relaxed text-taupe-400">
                        Traditional agencies offer volume. We offer intention. In a world of
                        endless options, finding talent that truly fits your vision requires a
                        different approach—one rooted in relationships, not transactions.
                    </p>
                </div>

                {/* Image Card - Right */}
                <div className="relative">
                    <div className="card overflow-hidden p-0">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src="/challenge-visual.png"
                                alt="Digital nomad working remotely, representing the complexity of global talent"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-beige-300 rounded-xl -z-10" />
                </div>
            </div>
        </Section>
    );
}
