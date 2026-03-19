import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Smartphone, Users, Star, TrendingUp, Zap } from "lucide-react";

const AnimatedCounter = ({ value, suffix = "", isInView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;
        
        setDisplayValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  // Format value based on whether it's a decimal
  const formattedValue = value % 1 !== 0 
    ? displayValue.toFixed(1) 
    : Math.round(displayValue);

  return (
    <span className="tabular-nums">
      {formattedValue}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      value: 6,
      suffix: "+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      value: 10,
      suffix: "+",
      label: "Production Apps",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      value: 99.9,
      suffix: "%",
      label: "Crash-Free Rate",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      value: 10,
      suffix: "K+",
      label: "Concurrent Users",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      value: 4.6,
      suffix: "",
      label: "App Store Rating",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Zap,
      value: 35,
      suffix: "%",
      label: "Faster Deployments",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      name="achievements"
      id="achievements"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="achievements-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-16 text-center">
          <span className="text-primary font-code text-sm mb-4 block">05. IMPACT</span>
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Milestones and metrics that define my professional journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
              data-testid={`achievement-${index}`}
            >
              <div className="glass-card p-6 md:p-8 rounded-3xl text-center hover:border-primary/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2 gradient-text">
                  <AnimatedCounter
                    value={achievement.value}
                    suffix={achievement.suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <p className="text-text-secondary text-sm">{achievement.label}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-r ${achievement.color} opacity-20 rounded-3xl blur-sm`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
