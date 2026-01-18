import Section from "./Section";
import { Users, Search, Briefcase, UserCheck, Layers } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: Users,
            title: "Remote Staffing Solutions",
            description:
                "Access a global talent pool of carefully vetted professionals ready to integrate seamlessly with your team.",
            highlight: "500+ placements",
            size: "large", // spans 2 columns
        },
        {
            icon: Search,
            title: "Talent Sourcing & Vetting",
            description:
                "We go beyond resumes deep screening for skills, culture fit, and long-term potential.",
            highlight: "98% retention",
            size: "medium",
        },
        {
            icon: Briefcase,
            title: "Role-Based Placements",
            description:
                "From developers to designers, marketers to operations, we match the right talent to your specific needs.",
            highlight: "50+ roles",
            size: "medium",
        },
        {
            icon: UserCheck,
            title: "Dedicated Team Members",
            description:
                "Build your extended team with professionals who work exclusively for you, fully aligned with your mission.",
            highlight: "Full-time focus",
            size: "medium",
        },
        {
            icon: Layers,
            title: "Flexible Hiring Models",
            description:
                "Part-time, full-time, project-based, we adapt our approach to fit your business requirements.",
            highlight: "Your terms",
            size: "large", // spans 2 columns
        },
    ];

    return (
        <Section id="services" variant="alt">
            <div className="text-center mb-16">
                <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                    What We Do
                </p>
                <h2 className="mb-6">Thoughtful talent solutions</h2>
                <p className="editorial-subheading">
                    We offer a range of services designed to help you build and scale your
                    team with intention and care.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Card 1 - Large (spans 2 cols) */}
                <div className="card hover:bg-beige-100/80 group md:col-span-2 lg:col-span-2 lg:row-span-1 flex flex-col justify-between min-h-[280px] ">
                    <div>
                        <div className="w-14 h-14 bg-clay-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-7 h-7 text-beige-50" />
                        </div>
                        <h3 className="text-2xl mb-3">{services[0].title}</h3>
                        <p className="text-taupe-400 leading-relaxed text-base">
                            {services[0].description}
                        </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-beige-300/50">
                        <span className="text-clay-500 font-semibold text-lg">{services[0].highlight}</span>
                        <span className="text-taupe-400 text-sm ml-2">globally</span>
                    </div>
                </div>

                {/* Card 2 - Medium */}
                <div className="card group flex flex-col justify-between min-h-[280px] hover:bg-beige-100/80">
                    <div>
                        <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mb-5 group-hover:bg-clay-500 transition-colors duration-300">
                            <Search className="w-6 h-6 text-clay-500 group-hover:text-beige-50 transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl mb-3">{services[1].title}</h3>
                        <p className="text-taupe-400 leading-relaxed text-sm">
                            {services[1].description}
                        </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-beige-200">
                        <span className="text-clay-500 font-medium">{services[1].highlight}</span>
                    </div>
                </div>

                {/* Card 3 - Medium */}
                <div className="card group flex flex-col justify-between min-h-[280px] hover:bg-beige-100/80">
                    <div>
                        <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mb-5 group-hover:bg-clay-500 transition-colors duration-300">
                            <Briefcase className="w-6 h-6 text-clay-500 group-hover:text-beige-50 transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl mb-3">{services[2].title}</h3>
                        <p className="text-taupe-400 leading-relaxed text-sm">
                            {services[2].description}
                        </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-beige-200">
                        <span className="text-clay-500 font-medium">{services[2].highlight}</span>
                    </div>
                </div>

                {/* Card 4 - Medium with accent bg */}
                <div className="card group flex flex-col justify-between min-h-[280px] bg-clay-500 border-clay-600 hover:bg-clay-600 transition-colors duration-300">
                    <div>
                        <div className="w-12 h-12 bg-beige-50/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-beige-50/30 transition-colors duration-300">
                            <UserCheck className="w-6 h-6 text-beige-50" />
                        </div>
                        <h3 className="text-xl mb-3 text-beige-50">{services[3].title}</h3>
                        <p className="text-beige-100/80 leading-relaxed text-sm">
                            {services[3].description}
                        </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-beige-50/20">
                        <span className="text-beige-50 font-medium">{services[3].highlight}</span>
                    </div>
                </div>

                {/* Card 5 - Large (spans 3 cols on lg) */}
                <div className="card group md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center gap-6 min-h-[180px] hover:bg-beige-100/80">
                    <div className="w-14 h-14 bg-beige-200 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-clay-500 transition-colors duration-300">
                        <Layers className="w-7 h-7 text-clay-500 group-hover:text-beige-50 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl mb-2">{services[4].title}</h3>
                        <p className="text-taupe-400 leading-relaxed">
                            {services[4].description}
                        </p>
                    </div>
                    <div className="md:text-right shrink-0">
                        <span className="inline-block px-4 py-2 bg-clay-500 text-beige-50 rounded-lg font-medium">
                            {services[4].highlight}
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
}
