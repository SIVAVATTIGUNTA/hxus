import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Sparkles,
  Globe2,
  Calendar,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  HeartHandshake,
} from "lucide-react";

const strengths = [
  { icon: Target, title: "Role-Aligned Pods", description: "Specialist recruiters and sourcers aligned to your functions." },
  { icon: Sparkles, title: "AI-Assisted Sourcing", description: "Agents and automation to expand reach and speed." },
  { icon: Globe2, title: "Global Talent Pools", description: "Multi-country sourcing with local compliance partners." },
  { icon: BarChart3, title: "Reporting & KPIs", description: "Clear dashboards on time-to-hire, quality, and cost." },
];

const offerings = [
  "Dedicated squads for permanent and critical roles",
  "Pipelining and talent pooling for evergreen hiring",
  "Diversity-focused sourcing and inclusive processes",
  "Interview design, scorecards, and training",
  "Employer brand alignment and candidate experience",
  "Tech stack optimisation across ATS/CRM",
];

const outcomes = [
  { value: "30-50%", label: "Time-to-hire improvement" },
  { value: "2-3x", label: "Qualified shortlist depth" },
  { value: "NPS 60+", label: "Candidate experience" },
  { value: "Audit-ready", label: "Process compliance" },
];

const RPO = () => {
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
              Services · RPO
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Recruitment Process Outsourcing that Blends Human Expertise with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build a dedicated, data-driven recruiting engine that scales with your hiring plans—without sacrificing
              quality or experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Talk to RPO Lead
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

      {/* Strengths */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why Our RPO</h2>
            <p className="text-muted-foreground text-lg">
              Dedicated pods, AI-assisted sourcing, and transparent reporting tuned to your hiring goals.
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
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Hands-on teams that feel like an extension of your TA function, with clear ownership and metrics.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Outcomes We Target</h3>
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
                Embedded recruiters, sourcers, coordinators, and talent ops.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Weekly hiring cadence with dashboards and hiring manager feedback loops.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">A Partner That Scales With You</h2>
          <p className="text-background/70 text-lg mb-8">
            Start with a squad, scale to multiple regions or functions, and keep full visibility on performance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="white" size="lg" asChild>
              <a href="/contact">
                Book an RPO Workshop
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/solutions">See Related Solutions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 rounded-2xl border border-border shadow-soft bg-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Ready to scale your hiring engine?</h3>
              <p className="text-muted-foreground">Tell us about your roles, locations, and timelines.</p>
            </div>
            <Button size="lg" asChild>
              <a href="/contact">
                Start the Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RPO;

