import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Settings,
  Shield,
  Globe2,
  Handshake,
  LineChart,
  Users,
  Timer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const levers = [
  { icon: Shield, title: "Governance", description: "Clear SLAs, compliance, and auditability across suppliers." },
  { icon: Globe2, title: "Global Reach", description: "Multi-country support with local partners and playbooks." },
  { icon: Settings, title: "Process Control", description: "Standardised workflows, approvals, and exception handling." },
  { icon: LineChart, title: "Data & Cost", description: "Rate cards, benchmarks, and performance scorecards." },
];

const programmes = [
  "End-to-end contingent workforce programme setup and transition",
  "Supplier management and rationalisation with performance governance",
  "Rate card strategy, negotiation support, and compliance guardrails",
  "Centralised requisition intake, approvals, and fulfilment SLAs",
  "VMS selection/optimisation and integration to HRIS/finance",
  "Analytics packs: cycle time, spend, quality, DEI, and risk",
];

const metrics = [
  { label: "Time-to-fill", value: "30-40% faster" },
  { label: "Cost savings", value: "8-15% YoY" },
  { label: "Supplier performance", value: "Scorecards & incentives" },
  { label: "Compliance", value: "Audit-ready controls" },
];

const steps = [
  "Mobilise: current-state review, supplier mapping, and risk scan.",
  "Stabilise: standardise workflows, SLAs, and governance cadence.",
  "Optimise: rate cards, automation, and performance incentives.",
  "Scale: expand to new regions/lines of business with repeatable playbooks.",
];

const MSP = () => {
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
              Services · MSP
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Managed Service Provider for Contingent Workforce Programs
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Centralise suppliers, standardise processes, and gain full visibility over contingent talent programmes—
              with measurable savings and faster fulfilment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Talk to Our MSP Team
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

      {/* Levers */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Programme Levers</h2>
            <p className="text-muted-foreground text-lg">
              Governance, visibility, and partner performance—anchored by clear SLAs and data.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levers.map((lever) => (
              <div
                key={lever.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <lever.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{lever.title}</h3>
                <p className="text-sm text-muted-foreground">{lever.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes & Metrics */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Run for You</h2>
              <p className="text-muted-foreground text-lg mb-6">
                An end-to-end MSP that balances control with flexibility, backed by experienced programme managers.
              </p>
              <div className="space-y-3">
                {programmes.map((programme) => (
                  <div key={programme} className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{programme}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <h3 className="text-xl font-semibold text-foreground mb-6">Metrics We Track</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-muted p-4">
                    <div className="text-xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                Dedicated programme leads, sourcing pods, and supplier managers.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <Timer className="w-4 h-4" />
                Weekly ops cadence, QBRs, and scorecards for transparency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Settings className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Transition & Run</h2>
            <p className="text-background/70 text-lg">Proven playbook to mobilise, stabilise, and scale your programme.</p>
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
                Book an MSP Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MSP;

