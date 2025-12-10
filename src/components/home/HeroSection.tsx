import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, BarChart3, Settings } from "lucide-react";

const highlights = [
  { icon: Sparkles, text: "AI-guided talent sourcing" },
  { icon: Globe, text: "Global staffing reach" },
  { icon: BarChart3, text: "Data-driven decisions" },
  { icon: Settings, text: "Flexible engagement model" },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" },
  }),
};

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.15 + 0.08 * i, ease: "easeOut" },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-aerial-of-downtown-4465/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-transparent to-background/70" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      <motion.div
        aria-hidden
        className="absolute top-10 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-10 -left-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
        <div className="max-w-5xl mx-auto text-center bg-background/60 backdrop-blur-xl border border-border/60 rounded-3xl px-6 lg:px-10 py-10 shadow-soft">
          <motion.div
            initial="hidden"
            animate="show"
            variants={textVariants}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered HRTech & Consulting Platform
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={textVariants}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Optimise Your{" "}
            <span className="text-gradient-magenta">Talent Supply Chain</span>{" "}
            with AI & Data
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={textVariants}
            custom={2}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            HX Consulting delivers enterprise workforce solutions powered by AI, machine learning, 
            and big data analytics — driving measurable ROI across global talent operations.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={textVariants}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Talk to an Expert
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="show"
                variants={highlightVariants}
                custom={index}
                className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 shadow-soft hover:shadow-medium transition-all duration-200"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
