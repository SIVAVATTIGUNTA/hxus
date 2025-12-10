import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, BarChart3, Settings } from "lucide-react";

const highlights = [
  { icon: Sparkles, text: "AI-guided talent sourcing" },
  { icon: Globe, text: "Global staffing reach" },
  { icon: BarChart3, text: "Data-driven decisions" },
  { icon: Settings, text: "Flexible engagement model" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial"
      />

      <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              AI-Powered HRTech & Consulting Platform
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight"
          >
            Optimise Your{" "}
            <span className="text-gradient-magenta">Talent Supply Chain</span>{" "}
            with AI & Data
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            HX Consulting delivers enterprise workforce solutions powered by AI, machine learning, 
            and big data analytics — driving measurable ROI across global talent operations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl" className="text-lg px-10 py-7 shadow-magenta hover:shadow-strong transition-all duration-300">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="text-lg px-10 py-7">
                Talk to an Expert
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
