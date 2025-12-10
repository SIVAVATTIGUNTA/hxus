import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Users,
  Briefcase,
  Code,
  CheckCircle2,
  Handshake,
  BarChart3,
  Globe
} from "lucide-react";

const partnerTypes = [
  {
    icon: Users,
    title: "Talent & Staffing Partners",
    description: "Specialist recruitment firms, niche agencies, and regional staffing providers supporting permanent, contract, and project-based hiring.",
  },
  {
    icon: Briefcase,
    title: "Consulting & Delivery Partners",
    description: "Firms that support implementation, change management, and specialised programmes.",
  },
  {
    icon: Code,
    title: "Technology & Platform Partners",
    description: "Providers of HR, ATS, CRM, VMS, and analytics platforms that integrate with HX solutions.",
  },
];

const howWeWork = [
  { step: "1", title: "Onboarding & Due Diligence", description: "Capabilities assessment, compliance verification, and agreements." },
  { step: "2", title: "Integration into HX Programmes", description: "Connection to our platform and client opportunities." },
  { step: "3", title: "Performance Tracking", description: "SLAs and scorecards for transparent accountability." },
  { step: "4", title: "Continuous Improvement", description: "Joint growth planning and optimisation." },
];

const standards = [
  "Commitment to quality and candidate experience",
  "Compliance with local employment and data protection laws",
  "Transparent communication and reporting",
  "Diversity, equity, and inclusion expectations",
];

const benefits = [
  "Access to global enterprise clients",
  "Structured programmes with clear demand visibility",
  "Shared tools and data insights",
  "Co-marketing and joint solution opportunities",
];

const Partners = () => {
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
              Partners
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Global Ecosystem of Specialist Partners
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HX Consulting works with carefully selected partners to deliver talent, 
              technology, and consulting value to clients worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Become a Partner
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Talk to Our Partner Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partners Matter */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Partners Matter</h2>
            <p className="text-muted-foreground text-lg">
              HX's model of aggregating best-in-class providers focuses on quality, compliance, 
              and long-term relationships. Our clients benefit from broader reach, niche skills, 
              and local expertise that only a carefully curated partner ecosystem can deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types of Partners */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Partners</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {partnerTypes.map((partner, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <partner.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{partner.title}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Work with Partners</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {howWeWork.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Standards & Benefits */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Standards & Expectations</h2>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <ul className="space-y-4">
                  {standards.map((standard, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Partner Benefits</h2>
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-background/70 text-lg mb-8">
              We're looking for staffing firms, consulting boutiques, and tech vendors 
              who share our commitment to quality and client success.
            </p>
            <Link to="/contact">
              <Button variant="white" size="lg">
                Submit Partner Application
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
