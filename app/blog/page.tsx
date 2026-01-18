import Header from "../components/Header";
import CTASection from '../components/CTASection'
import Image from "next/image";
import { Calendar, ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
    title: "Blog | Talent Mucho",
    description:
        "Insights and resources on remote work, hiring strategies, and building distributed teams from Talent Mucho.",
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="section-padding bg-beige-100">
                    <div className="section-container">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                                Insights & Resources
                            </p>
                            <h1 className="mb-6">From Our Journal</h1>
                            <p className="text-lg md:text-xl text-taupe-400 leading-relaxed">
                                Thoughts on remote work, hiring strategies, and
                                building meaningful distributed teams across the
                                globe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="section-padding bg-beige-50">
                    <div className="section-container">
                        <div className="max-w-6xl mx-auto">
                            {/* Featured Post */}
                            <article className="mb-16">
                                <Link
                                    href={`/blog/${blogPosts[0].id}`}
                                    className="group block"
                                >
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
                                            <Image
                                                src={blogPosts[0].image}
                                                alt={blogPosts[0].title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-beige-50/90 backdrop-blur-sm text-clay-500 text-xs font-medium rounded-full uppercase tracking-wider">
                                                    <Tag className="w-3 h-3" />
                                                    {blogPosts[0].category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <div className="flex items-center gap-4 text-sm text-taupe-400 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {blogPosts[0].date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {blogPosts[0].readTime}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl mb-4 group-hover:text-clay-500 transition-colors">
                                                {blogPosts[0].title}
                                            </h2>
                                            <p className="text-taupe-400 leading-relaxed text-lg mb-6">
                                                {blogPosts[0].excerpt}
                                            </p>
                                            <span className="inline-flex items-center gap-2 text-clay-500 font-medium group-hover:gap-3 transition-all">
                                                Read Article
                                                <ArrowLeft className="w-4 h-4 rotate-180" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>

                            {/* Divider */}
                            <div className="divider mb-16" />

                            {/* Posts Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogPosts.slice(1).map((post) => (
                                    <article key={post.id} className="group">
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="block"
                                        >
                                            <div className="card p-0 overflow-hidden hover:bg-beige-100/80">
                                                {/* Cover Image */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    {/* Category Badge */}
                                                    <div className="absolute top-4 left-4">
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-beige-50/90 backdrop-blur-sm text-clay-500 text-xs font-medium rounded-full uppercase tracking-wider">
                                                            <Tag className="w-3 h-3" />
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    {/* Title */}
                                                    <h3 className="text-xl mb-3 group-hover:text-clay-500 transition-colors duration-300">
                                                        {post.title}
                                                    </h3>

                                                    {/* Excerpt */}
                                                    <p className="text-taupe-400 leading-relaxed text-sm mb-6 line-clamp-2">
                                                        {post.excerpt}
                                                    </p>

                                                    {/* Meta */}
                                                    <div className="flex items-center gap-4 text-xs text-taupe-400 pt-4 border-t border-beige-200">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {post.date}
                                                        </span>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <CTASection/>
            </main>
        </>
    );
}
