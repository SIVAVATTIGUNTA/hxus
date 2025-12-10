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
    color: "from-primary to-primary/60",
  },
  {
    icon: Globe2,
    title: "Global Staffing",
    description: "Multi-country hiring and contingent workforce support with local compliance handled by partners.",
    href: "/solutions/global-staffing",
    color: "from-blue-500 to-blue-500/60",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "AI co-pilots that assist recruiters and hiring managers in automating repetitive tasks.",
    href: "/services/ai-agents",
    color: "from-purple-500 to-purple-500/60",
  },
  {
    icon: BarChart2,
    title: "Data & Insights",
    description: "Market rate intelligence, performance dashboards, and real-time analytics for better decisions.",
    href: "/solutions/data-insights",
    color: "from-emerald-500 to-emerald-500/60",
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

export const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-section-alt relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
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
            Solutions
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Solutions Tailored to Your Workforce Strategy
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            End-to-end solutions designed around your specific challenges — from cost control 
            and speed to quality and compliance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={solution.href}
                className="relative block bg-card rounded-3xl p-10 shadow-soft hover:shadow-strong transition-all duration-500 group overflow-hidden border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-8`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{solution.description}</p>
                  <span className="inline-flex items-center text-primary text-base font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
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
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              Explore All Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
