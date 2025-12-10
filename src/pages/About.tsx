import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Target,
  Heart,
  Lightbulb,
  Shield,
  Users as UsersIcon,
  Globe,
  Briefcase,
  Bot,
  Code,
  MapPin
} from "lucide-react";

const offerings = [
  { icon: Briefcase, title: "Business Consulting" },
  { icon: UsersIcon, title: "MSP, RPO, RaaS" },
  { icon: Target, title: "Direct Sourcing & Global Staffing" },
  { icon: Bot, title: "AI Agents and Platform Enablement" },
];

const approach = [
  { title: "Strategy first, technology second" },
  { title: "Human + AI collaboration" },
  { title: "Transparency and measurable outcomes" },
  { title: "Global reach with local expertise" },
];

const values = [
  { icon: Shield, title: "Integrity", description: "Honest, ethical, and transparent in all we do." },
  { icon: Heart, title: "Customer Obsession", description: "Your success is our primary measure of success." },
  { icon: Lightbulb, title: "Innovation", description: "Continuously pushing the boundaries of what's possible." },
  { icon: Target, title: "Accountability", description: "We own our commitments and deliver on our promises." },
  { icon: UsersIcon, title: "Inclusion", description: "Diverse perspectives make us stronger." },
];

const locations = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "India", flag: "🇮🇳" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              HX is an AI-Powered Consulting and Talent Solutions Firm
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We unite consulting expertise, AI, and global talent networks to shape the future of work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-foreground/90 text-lg">
                To transform how organisations find, engage, and manage talent through 
                innovative technology, expert consulting, and global partnerships.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                A future of work where AI augments human potential, responsible technology 
                drives decisions, and long-term partnerships create lasting value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive suite of services designed to optimise your workforce operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {offerings.map((offering, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <offering.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{offering.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {approach.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-foreground font-medium pt-1">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Leadership & Team</h2>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <p className="text-muted-foreground text-lg mb-6">
                Our leadership team brings decades of combined experience across HR technology, 
                workforce management, and enterprise consulting. We've built and scaled teams at 
                global organisations and understand the challenges our clients face firsthand.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="px-4 py-2 rounded-full bg-accent">HR Technology</span>
                <span className="px-4 py-2 rounded-full bg-accent">Operations Excellence</span>
                <span className="px-4 py-2 rounded-full bg-accent">Enterprise Consulting</span>
                <span className="px-4 py-2 rounded-full bg-accent">AI & Data Science</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
            <p className="text-background/70 text-lg">
              Serving clients worldwide from our offices in key regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {locations.map((location, index) => (
              <div key={index} className="bg-background/5 rounded-xl px-8 py-6 text-center backdrop-blur-sm border border-background/10">
                <span className="text-4xl mb-2 block">{location.flag}</span>
                <span className="font-semibold">{location.name}</span>
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
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
