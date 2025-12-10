import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
  Timer,
  Briefcase,
} from "lucide-react";

const strengths = [
  { icon: Globe2, title: "Multi-Country Reach", description: "Specialist partners across UK, US, India, and emerging markets." },
  { icon: ShieldCheck, title: "Compliance First", description: "Worker classification, payroll, and data privacy handled with care." },
  { icon: Users, title: "Talent Quality", description: "Pre-vetted recruiters and domain specialists matched to your roles." },
  { icon: Timer, title: "Speed to Shortlist", description: "Coordinated sourcing pods for rapid delivery and coverage." },
];

const offerings = [
  "Contingent and permanent hiring across priority markets",
  "EOR/PEO partnerships where local entities are not present",
  "Country playbooks covering contracts, onboarding, and compliance",
  "Follow-the-sun delivery with overlapping coverage windows",
  "Rate guidance, salary benchmarks, and market intelligence",
];

const outcomes = [
  { label: "Time to first shortlist", value: "<48 hours" },
  { label: "Coverage", value: "20+ countries" },
  { label: "Quality", value: "Role-aligned specialist vendors" },
  { label: "Risk", value: "Compliance checked and tracked" },
];

const GlobalStaffing = () => {
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
              Solutions · Global Staffing
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Global Staffing with Local Compliance and Speed
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Multi-country hiring, coordinated through HX, with local partners, compliance guardrails, and fast delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start a Global Search
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/solutions">Back to Solutions</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Coverage & Control</h2>
            <p className="text-muted-foreground text-lg">
              A coordinated network of specialist vendors with HX as your single accountable owner.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{strength.title}</h3>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings & Outcomes */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Deliver</h2>
              <p className="text-muted-foreground text-lg mb-6">
                A single programme team orchestrating local partners, compliance, and reporting—so you stay in control.
              </p>
              <div className="space-y-3">
                {offerings.map((offering) => (
                  <div key={offering} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{offering}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <h3 className="text-xl font-semibold text-foreground mb-6">Outcomes to Expect</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-xl bg-muted p-4">
                    <div className="text-3xl font-bold text-primary mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Country playbooks cover contracts, onboarding, and worker classification.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                EOR/PEO options available for markets without entities.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Globe2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Expand with Confidence</h2>
          <p className="text-background/70 text-lg mb-8">
            Share your roles, locations, and timelines—we'll map the best partners and a compliance-ready plan.
          </p>
          <Button variant="white" size="lg" asChild>
            <a href="/contact">
              Plan Global Staffing
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalStaffing;

