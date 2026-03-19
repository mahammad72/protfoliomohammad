"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10" data-testid="footer">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer"
              data-testid="footer-logo"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">M</span>
                </div>
                <span className="font-heading font-bold gradient-text">Mohammad</span>
              </div>
            </Link>
            <p className="text-text-muted text-sm flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Mohammad Hasan
            </p>
            <p className="text-text-muted text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-80}
                className="text-text-muted hover:text-white text-sm transition-colors cursor-pointer"
                data-testid={`footer-link-${link.toLowerCase()}`}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/mahammad72"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass-card hover:border-primary/50 transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mahammad-momin-339b4b146"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass-card hover:border-primary/50 transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:mahammadmomin7@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass-card hover:border-primary/50 transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Link to="home" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer"
                data-testid="scroll-to-top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
