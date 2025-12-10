import { motion } from "framer-motion";
import { Globe, Users, Database, Clock } from "lucide-react";

const stats = [
  { icon: Globe, value: "20+", label: "Countries Supported" },
  { icon: Users, value: "500+", label: "Specialist Vendors" },
  { icon: Database, value: "Millions", label: "Talent Data Points" },
  { icon: Clock, value: "<48hrs", label: "To First Shortlist" },
];

export const TrustSection = () => {
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
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            A Leader in Modern Workforce Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            HX Consulting connects employers with specialist recruiters and consulting partners 
            worldwide, delivering staffing aggregation and workforce optimisation at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-shadow text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
