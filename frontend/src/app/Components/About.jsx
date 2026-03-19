"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="about"
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="about-section"
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
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-primary font-code text-sm mb-4 block">01. ABOUT ME</span>
          <h2 className="section-title">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 rounded-3xl overflow-hidden glass-card p-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1751200065697-4461cc2b43cb?w=600&h=600&fit=crop"
                    alt="Developer workspace"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-2 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-40" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-accent-end rounded-full blur-xl opacity-30" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold">6+</p>
                    <p className="text-sm text-text-muted">Years Exp.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              Senior React Native and React.js developer with{" "}
              <span className="text-primary font-medium">6+ years of experience</span> building
              high-performance cross-platform applications.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Skilled in TypeScript, Redux Toolkit, Firebase, Node.js, and WebRTC. Proven track
              record of delivering scalable apps with{" "}
              <span className="text-secondary font-medium">99.9% crash-free performance</span>,
              leading teams, and optimizing user experience across mobile and web platforms.
            </p>

            <p className="text-text-secondary leading-relaxed">
              I have an extensive portfolio of successful projects, including mobile apps and web
              applications that are both intuitive and visually stunning. My ability to collaborate
              with cross-functional teams has enabled me to deliver high-quality work that exceeds
              client expectations.
            </p>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm">Available for hire</span>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-6">
              <p className="text-sm text-text-muted mb-3 font-code">CORE TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "React.js", "TypeScript", "Node.js", "Firebase"].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
