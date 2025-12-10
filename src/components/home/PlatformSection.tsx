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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export const PlatformSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
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
            Platform
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            AI-Powered Platform: From Sourcing to Scheduling
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Our platform uses AI to match jobs and candidates, parses CVs and job descriptions 
            for improved accuracy, and automates sourcing, shortlisting, and interview scheduling.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-14"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-card rounded-3xl p-10 shadow-soft hover:shadow-strong transition-all duration-500 group border border-border/50 hover:border-primary/30"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
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
          <Link to="/platform">
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              Explore the Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
