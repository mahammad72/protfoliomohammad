import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Apple, Play, TrendingUp } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Sparepartwale Marketplace",
      description:
        "Buyer & seller marketplace app for automotive spare parts with payments, order tracking, and vendor management.",
      result: "Increased transactions by 89%",
      tech: ["React Native", "Firebase", "Node.js"],
      link: "https://apps.apple.com/in/app/sparepartwale/id6746368341",
      linkType: "ios",
      image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?w=800&h=500&fit=crop",
      featured: true,
    },
    {
      title: "Me Time",
      description:
        "Talent-sharing video platform (#VocalForLocal) with video recording, editing, feed, and notifications.",
      result: "75% increase in  weekly uploads",
      tech: ["React Native", "Firebase",""],
      link: "https://play.google.com/store/apps/details?id=com.metime.application",
      linkType: "android",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      featured: true,
    },
    {
      title: "Gigs Live",
      description:
        "Live concert streaming app with real-time chat, ticketing system, and Apple TV integration.",
      result: "Apple TV Integration",
      tech: ["React Native", "WebRTC", "Socket.io"],
      link: "https://play.google.com/store/apps/details?id=live.gigs.app",
      linkType: "android",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      title: "Peardrop Smart Realty",
      description:
        "Real estate search & recommendation app with smart search, saved listings, and realtor suggestions.",
      result: "Smart Recommendations",
      tech: ["React Native", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.drisana.ezrealtortest",
      linkType: "android",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="projects"
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="projects-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-16">
          <span className="text-primary font-code text-sm mb-4 block">03. PORTFOLIO</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            A selection of projects that showcase my expertise in mobile development
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative ${
                project.featured ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-2"
              }`}
              data-testid={`project-${index}`}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="block h-full"
              >
                <div className="relative h-full glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

                    {/* Store Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="glass-card p-2 rounded-xl">
                        {project.linkType === "ios" ? (
                          <Apple className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Link */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Result Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 text-sm font-medium">{project.result}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-code bg-surface-highlight rounded-full text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent-end/20 rounded-3xl blur-sm" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div variants={cardVariants} className="mt-12 text-center">
          <motion.a
            href="https://github.com/mahammad72"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
            data-testid="view-more-projects"
          >
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
