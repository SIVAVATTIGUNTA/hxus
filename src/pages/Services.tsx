import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Briefcase, 
  Settings, 
  Users, 
  Repeat, 
  Code, 
  Bot,
  Target,
  Globe2,
  BarChart2,
  Sparkles,
  Factory,
  DollarSign,
  Wrench,
  ShoppingCart
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting Services",
    description: "Strategy, workforce design, cost optimisation, vendor rationalisation.",
    href: "/services/business-consulting",
  },
  {
    icon: Settings,
    title: "Managed Service Provider (MSP)",
    description: "End-to-end management of contingent workforce programmes and vendors.",
    href: "/services/msp",
  },
  {
    icon: Users,
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Dedicated teams to run recruitment for permanent and key roles.",
    href: "/services/rpo",
  },
  {
    icon: Repeat,
    title: "Recruitment-as-a-Service (RaaS)",
    description: "Flexible, subscription-like ongoing recruitment support.",
    href: "/services/raas",
  },
  {
    icon: Target,
    title: "Direct Sourcing Solutions",
    description: "Private talent pools, branded talent communities, and internal talent clouds.",
    href: "/solutions/direct-sourcing",
  },
  {
    icon: Globe2,
    title: "Global Staffing Solutions",
    description: "Multi-country hiring and contingent staffing with local compliance.",
    href: "/solutions/global-staffing",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "AI-powered agents to automate sourcing, screening, engagement, and insights.",
    href: "/services/ai-agents",
  },
  {
    icon: Code,
    title: "SaaS Platform Enablement",
    description: "Selection, implementation, integration, and optimisation of talent and HR platforms.",
    href: "/services/saas-enablement",
  },
  {
    icon: BarChart2,
    title: "Data & Insights",
    description: "Dashboards, analytics, and market intelligence for continuous improvement.",
    href: "/solutions/data-insights",
  },
];

const businessNeeds = [
  {
    title: "Scale Hiring Quickly",
    solutions: "RPO, RaaS, Global Staffing",
    icon: Users,
  },
  {
    title: "Control Cost and Vendors",
    solutions: "MSP, Business Consulting, Direct Sourcing",
    icon: DollarSign,
  },
  {
    title: "Modernise Technology & Data",
    solutions: "SaaS Platform Enablement, AI Agents, Data & Insights",
    icon: Sparkles,
  },
];

const industries = [
  { icon: Sparkles, name: "Technology & SaaS" },
  { icon: DollarSign, name: "Financial Services" },
  { icon: Wrench, name: "Engineering & Manufacturing" },
  { icon: ShoppingCart, name: "Retail & Services" },
];

const Services = () => {
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
              Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Services That Connect Strategy, Talent, and Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HX Consulting delivers consulting, managed services, and AI-powered solutions 
              to modernise workforce and hiring operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Services at a Glance</h2>
            <p className="text-muted-foreground text-lg">
              Workforce and business consulting • Managed workforce programmes • 
              Scalable recruitment delivery • AI and platform enablement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group border border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* By Business Need */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">By Business Need</h2>
            <p className="text-muted-foreground text-lg">
              Find the right combination of services based on your challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {businessNeeds.map((need, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft text-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <need.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{need.title}</h3>
                <p className="text-primary font-medium">{need.solutions}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-soft"
              >
                <industry.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{industry.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Why Work With HX Consulting</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                "Strategy plus hands-on delivery",
                "Human expertise enhanced by AI",
                "Global reach with strong governance",
                "Transparent reporting and KPIs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/contact">
                <Button variant="white" size="lg">
                  Book a Discovery Session
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
