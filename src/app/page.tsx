"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, X } from "lucide-react";
import { useEffect, useState } from "react";

// Motion-enabled Link
const MotionLink = motion(Link);

// Star Field Component
const StarField = () => {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size }}
          animate={{ opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Optional shooting star */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        initial={{ x: -50, y: 50 }}
        animate={{ x: 1100, y: 200, opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 3 }}
      />
    </div>
  );
};

// Gradient Orbs Component (soft blue glows)
const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(173,216,230,0.3) 0%, transparent 70%)",
          left: "50%",
          top: "20%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(100,149,237,0.4) 0%, transparent 70%)",
          right: "-10%",
          top: "10%",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(65,105,225,0.3) 0%, transparent 70%)",
          left: "-5%",
          bottom: "10%",
        }}
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
  borderColor,
  delay = 0
}: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      <div className={`relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer overflow-hidden ${gradient} ${borderColor}`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent skew-x-12" />
        </motion.div>
        <div className="relative z-10">
          <motion.div
            className="text-6xl mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Problem Item Component
const ProblemItem = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex items-start gap-4 p-6 rounded-xl bg-background/30 hover:bg-background/50 border border-destructive/10 hover:border-destructive/30 transition-all duration-300 cursor-pointer"
    >
      <X className="w-7 h-7 text-destructive flex-shrink-0 mt-0.5" />
      <p className="text-foreground/90 text-lg">{text}</p>
    </motion.div>
  );
};

// Feature Pill Component
const FeaturePill = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-6 py-3 rounded-full glass border-muted/50 hover:border-primary/50 cursor-pointer transition-colors duration-300 animate-float-slow"
    >
      <span className="text-foreground/80 font-medium">{text}</span>
    </motion.div>
  );
};

// Main Index Component
const Page = () => {
  const features = [
    {
      icon: '🔄',
      title: 'Version Control',
      description: 'Git-like versioning for every prompt. See diffs, track changes, rollback instantly.',
      gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
      borderColor: 'border-primary/20 hover:border-primary/50',
    },
    {
      icon: '🧪',
      title: 'Side-by-Side Testing',
      description: "Compare outputs across versions and models. Know what's better before you ship.",
      gradient: 'bg-gradient-to-br from-secondary/10 to-accent/10',
      borderColor: 'border-secondary/20 hover:border-secondary/50',
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Share prompts, review changes, and manage access—all in one place.',
      gradient: 'bg-gradient-to-br from-accent/10 to-primary/10',
      borderColor: 'border-accent/20 hover:border-accent/50',
    },
  ];

  const problems = [
    'Prompts scattered across tools',
    'No version history',
    "Can't roll back changes",
    'Manual testing is slow',
  ];

  const featurePills = ['🔄 Version Control', '🧪 A/B Testing', '👥 Collaboration'];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-dark via-secondary/20 to-accent/20" />
      <GradientOrbs />
      <StarField />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-primary/30 hover:border-primary/50 transition-colors">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Now in Beta</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 relative"
          >
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-30 animate-pulse-glow" />
            <h1 className="relative text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-tight">
              <span className="text-gradient-primary">Versio.ai</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground/90 mb-6 text-center"
          >
            Version control for AI prompts
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl text-center"
          >
            Track every change. Test every version. Ship with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <MotionLink
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 text-lg font-bold rounded-xl overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:shadow-[0_0_50px_hsl(187_94%_52%_/_0.6)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center text-primary-foreground gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </MotionLink>

            <MotionLink
              href="/login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 text-lg font-bold rounded-xl glass border-foreground/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_30px_hsl(187_94%_52%_/_0.3)] inline-block"
            >
              Sign In
            </MotionLink>
          </motion.div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {featurePills.map((feature, i) => (
              <FeaturePill key={i} text={feature} delay={i * 0.2} />
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold font-display mb-4">
              Built for <span className="text-gradient-cyan">speed</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage AI prompts</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                borderColor={feature.borderColor}
                delay={i * 0.15}
              />
            ))}
          </div>
        </section>

        {/* Problem Section */}
        <section className="container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-3xl p-12 border border-destructive/30 overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, hsl(0 84% 60% / 0.1), hsl(30 84% 50% / 0.1))',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent" />
            <h2 className="relative text-4xl font-bold font-display text-center mb-12">
              Stop managing prompts <span className="text-destructive">the hard way</span>
            </h2>
            <div className="relative grid md:grid-cols-2 gap-6">
              {problems.map((problem, i) => (
                <ProblemItem key={i} text={problem} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
              Ready to ship <span className="text-gradient-cyan">faster</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join developers building the future of AI with proper version control
            </p>

            <MotionLink
              href="/signup"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-6 text-xl font-bold rounded-2xl overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-3 text-primary-foreground">
                Start Free Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </MotionLink>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-muted/50 backdrop-blur-sm py-12">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>© 2025 Versio.ai • Built with ❤️ for AI teams</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
