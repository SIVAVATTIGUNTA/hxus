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

export const WhyUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium mb-4">
            Why HX Consulting
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Leading Enterprises Choose Us
          </h2>
          <p className="text-background/70 text-lg">
            We combine strategic consulting with hands-on delivery, human expertise with AI, 
            and global reach with local knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/10 transition-colors border border-background/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-background/60 text-sm">{reason.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
