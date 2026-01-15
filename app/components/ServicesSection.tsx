import Section from "./Section";
import { Users, Search, Briefcase, UserCheck, Layers } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: Users,
            title: "Remote Staffing Solutions",
            description:
                "Access a global talent pool of carefully vetted professionals ready to integrate seamlessly with your team.",
        },
        {
            icon: Search,
            title: "Talent Sourcing & Vetting",
            description:
                "We go beyond resumes—deep screening for skills, culture fit, and long-term potential.",
        },
        {
            icon: Briefcase,
            title: "Role-Based Placements",
            description:
                "From developers to designers, marketers to operations—we match the right talent to your specific needs.",
        },
        {
            icon: UserCheck,
            title: "Dedicated Team Members",
            description:
                "Build your extended team with professionals who work exclusively for you, fully aligned with your mission.",
        },
        {
            icon: Layers,
            title: "Flexible Hiring Models",
            description:
                "Part-time, full-time, project-based—we adapt our approach to fit your business requirements.",
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="card group">
                        <div className="w-12 h-12 bg-beige-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-clay-500 transition-colors duration-300">
                            <service.icon className="w-6 h-6 text-clay-500 group-hover:text-beige-50 transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl mb-3">{service.title}</h3>
                        <p className="text-taupe-400 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
