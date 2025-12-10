import { motion } from "framer-motion";
import { Globe, Users, Database, Clock } from "lucide-react";

const stats = [
  { icon: Globe, value: "20+", label: "Countries Supported" },
  { icon: Users, value: "500+", label: "Specialist Vendors" },
  { icon: Database, value: "Millions", label: "Talent Data Points" },
  { icon: Clock, value: "<48hrs", label: "To First Shortlist" },
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

export const TrustSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            A Leader in Modern Workforce Solutions
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            HX Consulting connects employers with specialist recruiters and consulting partners 
            worldwide, delivering staffing aggregation and workforce optimisation at scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-card rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-medium transition-all duration-300 text-center border border-border/50 hover:border-primary/30"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6"
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-3 tracking-tight">{stat.value}</div>
              <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
