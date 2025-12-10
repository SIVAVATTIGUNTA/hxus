import { motion } from "framer-motion";
import { Clock, PiggyBank, Award } from "lucide-react";

const testimonials = [
  {
    icon: Clock,
    quote: "Reduced our time-to-hire by 40% within the first quarter.",
    metric: "40%",
    label: "Faster Hiring",
  },
  {
    icon: PiggyBank,
    quote: "Achieved significant cost savings across our contingent workforce.",
    metric: "25%",
    label: "Cost Savings",
  },
  {
    icon: Award,
    quote: "Improved talent quality and retention across all departments.",
    metric: "35%",
    label: "Better Retention",
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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
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
            className="inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Results
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Delivering Measurable Outcomes
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Our clients achieve real, quantifiable improvements in their workforce operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-strong text-center border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-8"
              >
                <item.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-5xl lg:text-6xl font-extrabold text-primary mb-3 tracking-tight"
              >
                {item.metric}
              </motion.div>
              <div className="text-xl font-bold text-foreground mb-5">{item.label}</div>
              <p className="text-muted-foreground text-lg leading-relaxed">{item.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
