import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Wrench,
  Code2,
  Database,
  Cloud,
  GitBranch,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiGraphql,
  SiGit,
  SiDocker,
  SiJest,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React Native", icon: SiReact },
        { name: "iOS/Android", icon: Smartphone },
        { name: "Expo", icon: Code2 },
        { name: "WebRTC", icon: Globe },
      ],
    },
    {
      title: "Frontend",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "GraphQL", icon: SiGraphql },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Redux", icon: SiRedux },
        { name: "Jest", icon: SiJest },
        { name: "Docker", icon: SiDocker },
      ],
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      name="skills"
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="skills-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-16 text-center">
          <span className="text-primary font-code text-sm mb-4 block">02. EXPERTISE</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-6 lg:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group"
              data-testid={`skill-category-${index}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface-highlight/50 hover:bg-surface-highlight transition-colors cursor-default"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <skill.icon className="w-5 h-5 text-text-secondary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={cardVariants} className="mt-12">
          <p className="text-center text-text-muted text-sm mb-6 font-code">
            ALSO EXPERIENCED WITH
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Socket.io",
              "REST APIs",
              "CI/CD",
              "Agile/Scrum",
              "App Store Deployment",
              "Payment Integration",
              "Push Notifications",
              "Real-time Chat",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="skill-badge"
                data-testid={`additional-skill-${index}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
