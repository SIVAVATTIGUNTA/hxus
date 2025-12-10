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

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Delivering Measurable Outcomes
          </h2>
          <p className="text-muted-foreground text-lg">
            Our clients achieve real, quantifiable improvements in their workforce operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft text-center border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-lg font-semibold text-foreground mb-4">{item.label}</div>
              <p className="text-muted-foreground">{item.quote}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
