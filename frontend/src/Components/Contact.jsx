import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { SiMedium } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mahammadmomin7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahammadmomin7@gmail.com",
      action: copyEmail,
      actionIcon: copied ? Check : Copy,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9662552437",
      href: "tel:+919662552437",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mahammad72", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahammad-momin-339b4b146", label: "LinkedIn" },
    { icon: SiMedium, href: "https://medium.com/@mahammadmomin7", label: "Medium" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      name="contact"
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent rounded-full blur-[100px]" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="mb-16 text-center">
          <span className="text-primary font-code text-sm mb-4 block">06. CONTACT</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div variants={cardVariants} className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="glass-card p-4 rounded-2xl flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
                  data-testid={`contact-info-${info.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text-muted text-sm">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-text-primary hover:text-primary transition-colors truncate block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-primary truncate">{info.value}</p>
                    )}
                  </div>
                  {info.action && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={info.action}
                      className="p-2 rounded-lg glass-card hover:border-primary/50 transition-colors"
                      data-testid="copy-email-btn"
                    >
                      <info.actionIcon className={`w-4 h-4 ${copied ? "text-green-500" : "text-text-muted"}`} />
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-text-muted text-sm mb-4 font-code">CONNECT WITH ME</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:border-primary/50 transition-colors"
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
            >
              <h3 className="text-xl font-heading font-bold mb-2">Ready to start a project?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Let's build something amazing together. I'm available for freelance work and full-time opportunities.
              </p>
              <motion.a
                href="/MahammadSuthar.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center gap-2 text-sm"
                data-testid="download-resume-contact"
              >
                Download Resume
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={cardVariants}>
            <form  action="https://getform.io/f/e026474a-7723-494e-aa5e-9b1e2c1902f4" method='POST'  className="glass-card p-8 rounded-3xl" data-testid="contact-form">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-highlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-primary placeholder-text-muted"
                    placeholder="John Doe"
                    data-testid="contact-name-input"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-highlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-primary placeholder-text-muted"
                    placeholder="john@example.com"
                    data-testid="contact-email-input"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-surface-highlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-primary placeholder-text-muted resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="contact-message-input"
                  />
                </div>

                {/* Status Messages */}
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-sm"
                    data-testid="contact-success-message"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm"
                    data-testid="contact-error-message"
                  >
                    {status.error}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: status.loading ? 1 : 1.02 }}
                  whileTap={{ scale: status.loading ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="contact-submit-btn"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
