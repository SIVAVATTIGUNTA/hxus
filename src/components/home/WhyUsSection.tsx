import { motion } from "framer-motion";
import { Shield, TrendingUp, Target, Eye } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategic Talent Dispositioning",
    description: "Long-term cost savings through intelligent workforce planning and placement.",
  },
  {
    icon: TrendingUp,
    title: "Workforce Consolidation",
    description: "Vendor optimisation and streamlined operations across your talent ecosystem.",
  },
  {
    icon: Shield,
    title: "Strong Governance",
    description: "Compliance, risk mitigation, and robust governance frameworks.",
  },
  {
    icon: Eye,
    title: "Clear Visibility",
    description: "Dashboards and reporting for complete transparency in workforce operations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const WhyUsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6 backdrop-blur-sm border border-primary-foreground/20"
          >
            Why HX Consulting
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Why Leading Enterprises Choose Us
          </h2>
          <p className="text-primary-foreground/70 text-lg lg:text-xl leading-relaxed">
            We combine strategic consulting with hands-on delivery, human expertise with AI, 
            and global reach with local knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-primary-foreground/5 backdrop-blur-md rounded-3xl p-8 hover:bg-primary-foreground/10 transition-all duration-300 border border-primary-foreground/10 hover:border-primary/50"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6"
              >
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/60 text-base leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
