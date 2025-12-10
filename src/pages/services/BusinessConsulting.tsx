import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Gauge,
  ShieldCheck,
  Workflow,
  Users,
  LineChart,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Strategy & Operating Model",
    description:
      "Define the talent strategy, operating model, and governance needed to scale hiring with clarity.",
  },
  {
    icon: Target,
    title: "Demand & Workforce Planning",
    description:
      "Build demand forecasts, skills taxonomies, and hiring plans that align to business outcomes.",
  },
  {
    icon: Gauge,
    title: "Process & Experience",
    description:
      "Design streamlined, candidate-first processes with SLAs, KPIs, and automation woven in.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description:
      "Address worker classification, data privacy, and supplier risk with strong controls and playbooks.",
  },
];

const services = [
  "Workforce strategy and operating model design",
  "Vendor rationalisation and MSP advisory",
  "Hiring process design (perm, contract, executive)",
  "Change management and enablement for talent teams",
  "Data, analytics, and KPI frameworks",
  "Technology selection and roadmap (ATS/VMS/CRM/HRIS)",
];

const outcomes = [
  { label: "Time-to-hire reduction", value: "30-50%" },
  { label: "Supplier cost savings", value: "10-25%" },
  { label: "Hiring manager satisfaction", value: "90%+" },
  { label: "Process compliance", value: "Audit-ready" },
];

const steps = [
  "Discovery & diagnostics on current processes, vendors, data, and tech stack.",
  "Target state design with playbooks, KPIs, and governance.",
  "Enablement and rollout with change, training, and tooling.",
  "Ongoing optimisation with dashboards and continuous improvement.",
];

const BusinessConsulting = () => {
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
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Services · Advisory
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Business Consulting for Modern Workforce Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We design talent strategies, operating models, and governance that connect business outcomes to
              measurable hiring performance—powered by data, automation, and pragmatic change management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What We Solve</h2>
            <p className="text-muted-foreground text-lg">
              Strategy, operating model, and controls—built to reduce time, risk, and cost while improving experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Advisory & Delivery Offerings</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Pragmatic consulting delivered by leaders who have built, scaled, and optimised global talent functions.
              </p>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <h3 className="text-xl font-semibold text-foreground mb-6">Measurable Outcomes</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-xl bg-muted p-4">
                    <div className="text-3xl font-bold text-primary mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                Delivered by senior consultants, programme leaders, and data practitioners.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <LineChart className="w-4 h-4" />
                Dashboards and KPI packs shipped with every engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Engagement Approach</h2>
            <p className="text-background/70 text-lg">
              Fast diagnostics, collaborative design, clear ownership, and a focus on adoption.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step} className="bg-background/5 rounded-2xl p-6 backdrop-blur-sm border border-background/10">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-background/80 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="white" size="lg" asChild>
              <a href="/contact">
                Book a Discovery Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessConsulting;

