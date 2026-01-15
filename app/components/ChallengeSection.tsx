import Section from "./Section";

export default function ChallengeSection() {
    return (
        <Section variant="alt">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                    The Challenge
                </p>
                <h2 className="mb-8">
                    Finding the right talent has never been more complex
                </h2>
                <div className="divider" />
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
        </Section>
    );
}
