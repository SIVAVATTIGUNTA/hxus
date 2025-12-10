import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Code,
  Plug,
  Workflow,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LineChart,
  Shield,
} from "lucide-react";

const focusAreas = [
  { icon: Sparkles, title: "Platform Selection", description: "ATS, VMS, CRM, and HR tech selection with use-case fit." },
  { icon: Plug, title: "Integration & Data", description: "APIs, webhooks, and data pipelines for clean handoffs." },
  { icon: Workflow, title: "Process Design", description: "Blueprints, approvals, and automation that mirror your ops." },
  { icon: Shield, title: "Security & Access", description: "RBAC, audit trails, and data minimisation by design." },
];

const services = [
  "Current-state audit of tools, data, and workflows",
  "Requirements mapping and vendor scorecards",
  "Implementation and migration support",
  "Configuration of workflows, approvals, and automations",
  "Integration to HRIS/finance and data quality checks",
  "Dashboards and adoption training for teams",
];

const outcomes = [
  { label: "Time-to-value", value: "Launch in weeks" },
  { label: "Adoption", value: "Usage reporting & training" },
  { label: "Data quality", value: "Validated pipelines" },
  { label: "Governance", value: "RBAC + audit logs" },
];

const SaaSEnablement = () => {
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
              Services · SaaS Enablement
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              SaaS Platform Enablement for Talent & Workforce Teams
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Select, implement, and optimise your ATS, VMS, CRM, or HX Platform with clean data, strong governance, and
              workflows people love to use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Plan My Implementation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services">Back to Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What We Prioritise</h2>
            <p className="text-muted-foreground text-lg">
              Practical enablement that connects process, people, and platforms—without unnecessary complexity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Outcomes */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Enablement Services</h2>
              <p className="text-muted-foreground text-lg mb-6">
                From selection to rollout, we pair technical expertise with change management and adoption support.
              </p>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <h3 className="text-xl font-semibold text-foreground mb-6">Outcomes to Expect</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-xl bg-muted p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <LineChart className="w-4 h-4" />
                Usage dashboards and training to drive adoption post go-live.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <Code className="w-4 h-4" />
                Engineering support for integrations and data quality checks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Plug className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Launch with Confidence</h2>
          <p className="text-background/70 text-lg mb-8">
            Share your use cases and toolset—we'll design the roadmap, configuration, and rollout plan.
          </p>
          <Button variant="white" size="lg" asChild>
            <a href="/contact">
              Book an Enablement Session
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SaaSEnablement;

