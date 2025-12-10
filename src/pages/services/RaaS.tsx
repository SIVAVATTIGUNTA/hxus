import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Repeat,
  CalendarClock,
  Coins,
  Rocket,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  { icon: CalendarClock, title: "Always-On Delivery", description: "Monthly capacity with clear SLAs for sourcing and shortlists." },
  { icon: Coins, title: "Predictable Spend", description: "Subscription-style pricing to avoid surprise agency fees." },
  { icon: Sparkles, title: "AI-Enabled Sprints", description: "Automated sourcing, enrichment, and outreach to speed cycles." },
  { icon: Layers, title: "Scalable Pods", description: "Add sourcing or recruiting capacity as demand spikes." },
];

const inclusions = [
  "Role intake, search strategy, and weekly cadence calls",
  "Sourcing, outreach, screening, and shortlisting",
  "Optional coordination support for interviews and feedback",
  "Simple reporting on pipeline health, quality, and velocity",
  "Playbooks for recurring roles and locations",
];

const steps = [
  "Scope: define roles, volumes, and locations.",
  "Sprint: launch sourcing with AI-assisted outreach.",
  "Shortlist: share calibrated profiles and notes.",
  "Iterate: tune messaging, channels, and scorecards.",
  "Scale: add capacity or convert to RPO when needed.",
];

const RaaS = () => {
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
              Services · RaaS
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Recruitment-as-a-Service for Flexible, Predictable Hiring
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Monthly recruiting capacity that scales with demand—ideal for bursts of hiring, new markets, and recurring roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Start a RaaS Sprint
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

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why RaaS</h2>
            <p className="text-muted-foreground text-lg">
              A subscription-style model for talent teams that need speed without long-term headcount commitments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Steps */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">What’s Included</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Everything you need to get quality shortlists quickly, with clear ownership and steady cadence.
              </p>
              <div className="space-y-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">How We Run It</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <div key={step} className="rounded-xl bg-muted p-4">
                    <div className="text-sm font-semibold text-primary mb-1">Step {index + 1}</div>
                    <p className="text-sm text-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                Dedicated pod with sourcing lead, recruiter, and coordinator on demand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Repeat className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Spin Up Capacity in Days</h2>
          <p className="text-background/70 text-lg mb-8">
            Ideal for burst hiring, new site launches, or bridging until full RPO. Start small and expand when ready.
          </p>
          <Button variant="white" size="lg" asChild>
            <a href="/contact">
              Book a RaaS Pilot
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default RaaS;

