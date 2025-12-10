import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Target, 
  Globe2, 
  Bot, 
  Settings,
  Code,
  BarChart2,
  Users,
  DollarSign,
  Briefcase,
  Cpu,
  TrendingDown,
  TrendingUp,
  ThumbsUp,
  RefreshCw
} from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Direct Sourcing & Talent Communities",
    description: "Build private talent clouds of contractors and permanent talent to reduce agency dependency and cost.",
    href: "/solutions/direct-sourcing",
  },
  {
    icon: Globe2,
    title: "Global Workforce & Staffing Solutions",
    description: "Enable hiring and contingent workforce programmes across multiple countries with local compliance.",
    href: "/solutions/global-staffing",
  },
  {
    icon: Bot,
    title: "AI-Enabled Talent Operations",
    description: "Use autonomous AI agents and automation to support sourcing, screening, engagement, scheduling, and insights.",
    href: "/services/ai-agents",
  },
  {
    icon: Settings,
    title: "Workforce Programme Governance & Optimisation",
    description: "Combine MSP, data, and consulting to govern vendors, standardise processes, and optimise spend.",
    href: "/services/msp",
  },
  {
    icon: Code,
    title: "Digital Talent Platform & SaaS Enablement",
    description: "Implement and optimise ATS, VMS, HR platforms, and the HX Platform as the control centre of talent operations.",
    href: "/services/saas-enablement",
  },
  {
    icon: BarChart2,
    title: "Data, Analytics & Leadership Insight",
    description: "Dashboards, benchmarks, and forecast models to support HR, procurement, and executive decision-making.",
    href: "/solutions/data-insights",
  },
];

const stakeholders = [
  {
    icon: Users,
    title: "For HR & Talent Leaders",
    focus: "Focus on hiring quality, experience, and employer brand.",
  },
  {
    icon: DollarSign,
    title: "For Procurement & Finance",
    focus: "Focus on cost control, supplier management, and risk.",
  },
  {
    icon: Briefcase,
    title: "For Business & Operations Leaders",
    focus: "Focus on speed, flexibility, and project delivery.",
  },
  {
    icon: Cpu,
    title: "For Technology Leaders",
    focus: "Focus on integration, data, and governance.",
  },
];

const outcomes = [
  { icon: TrendingDown, value: "40%", label: "Reduction in time-to-hire" },
  { icon: DollarSign, value: "25%", label: "Savings in talent acquisition spend" },
  { icon: ThumbsUp, value: "95%", label: "Hiring manager satisfaction" },
  { icon: RefreshCw, value: "3x", label: "Increase in internal mobility" },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Solutions
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              End-to-End Solutions for the Future of Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HX Consulting combines consulting, services, AI, and technology into solutions 
              that solve real workforce problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Talk About Your Challenges
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">From Services to Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Services</h3>
                <p className="text-muted-foreground">
                  Building blocks — consulting, MSP, RPO, RaaS, AI agents, platform enablement.
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Solutions</h3>
                <p className="text-muted-foreground">
                  Integrated programmes designed around outcomes like cost control, speed, quality, and compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Themes */}
      <section id="solutions" className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Solution Themes</h2>
            <p className="text-muted-foreground text-lg">
              Integrated approaches designed to address your specific workforce challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.href}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{solution.description}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* By Stakeholder */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Solutions by Stakeholder</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <stakeholder.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{stakeholder.title}</h3>
                <p className="text-muted-foreground text-sm">{stakeholder.focus}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Measurable Outcomes</h2>
            <p className="text-background/70 text-lg">
              Real results from real implementations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-background/5 rounded-2xl p-6 text-center backdrop-blur-sm border border-background/10">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{outcome.value}</div>
                <p className="text-background/70 text-sm">{outcome.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button variant="white" size="lg">
                Book a Solution Design Workshop
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
