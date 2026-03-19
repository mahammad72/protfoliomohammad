import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Rare Flock Pvt Ltd",
      role: "Senior React Native Developer",
      period: "Jul 2025 – Present",
      location: "Current",
      highlights: [
        "Leading team of 5+ developers",
        "Built scalable apps with 99.9% crash-free sessions",
        "Reduced deployment time by 35% using CI/CD",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Starline Solution Pvt Ltd",
      role: "Senior React Native Developer",
      period: "Sept 2022 – Jul 2025",
      location: "3 Years",
      highlights: [
        "Delivered multiple production apps",
        "Improved app rating from 3.9 → 4.6",
        "Handled 10K+ concurrent users",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Gadgetapp Development Pvt Ltd",
      role: "React Native Developer",
      period: "Aug 2018 – Sept 2022",
      location: "4 Years",
      highlights: [
        "Built 5+ cross-platform apps",
        "Integrated Firebase, Socket.io",
        "Implemented real-time features",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="experience"
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="experience-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-16">
          <span className="text-primary font-code text-sm mb-4 block">04. CAREER</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mt-4">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent-end" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={cardVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`experience-${index}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 pl-20 md:pl-0" : "md:pl-8 pl-20"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-6 lg:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-xs font-medium mb-3`}
                        >
                          <Briefcase className="w-3 h-3" />
                          {exp.location}
                        </div>
                        <h3 className="text-xl font-heading font-bold">{exp.role}</h3>
                        <p className="text-text-secondary">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + hIndex * 0.1 + 0.5 }}
                          className="flex items-start gap-3 text-text-secondary text-sm"
                        >
                          <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
