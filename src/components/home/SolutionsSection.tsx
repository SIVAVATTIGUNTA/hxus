import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Globe2, 
  Bot, 
  BarChart2,
  ArrowRight 
} from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Direct Sourcing",
    description: "Build private talent pools and branded talent communities to reduce agency dependency and costs.",
    href: "/solutions/direct-sourcing",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe2,
    title: "Global Staffing",
    description: "Multi-country hiring and contingent workforce support with local compliance handled by partners.",
    href: "/solutions/global-staffing",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "AI co-pilots that assist recruiters and hiring managers in automating repetitive tasks.",
    href: "/services/ai-agents",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: BarChart2,
    title: "Data & Insights",
    description: "Market rate intelligence, performance dashboards, and real-time analytics for better decisions.",
    href: "/solutions/data-insights",
    gradient: "from-green-500/20 to-green-500/5",
  },
];

export const SolutionsSection = () => {
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
            Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Solutions Tailored to Your Workforce Strategy
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end solutions designed around your specific challenges — from cost control 
            and speed to quality and compliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10"
        >
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.href}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/solutions">
            <Button variant="outline" size="lg">
              Explore All Solutions
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
