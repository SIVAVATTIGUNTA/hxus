import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, LineChart, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Sourcing Engine",
    description: "AI-guided job and candidate matching that learns and improves with every interaction.",
  },
  {
    icon: LineChart,
    title: "Leadership Insights",
    description: "Predictive analytics and cost optimisation tools for strategic workforce decisions.",
  },
  {
    icon: Users,
    title: "Skills Graph",
    description: "Personalised upskilling and internal mobility recommendations powered by ML.",
  },
];

export const PlatformSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Platform
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI-Powered Platform: From Sourcing to Scheduling
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform uses AI to match jobs and candidates, parses CVs and job descriptions 
            for improved accuracy, and automates sourcing, shortlisting, and interview scheduling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/platform">
            <Button variant="outline" size="lg">
              Explore the Platform
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
