import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Shield,
  Sparkles,
  Megaphone,
  FolderSearch,
  ArrowRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";

const pillars = [
  { icon: Target, title: "Private Talent Pools", description: "Build owned pipelines of contractors and perm talent." },
  { icon: Megaphone, title: "Brand & Experience", description: "Branded campaigns, nurture, and community engagement." },
  { icon: Sparkles, title: "AI Matching", description: "AI-guided search, shortlisting, and recommendations." },
  { icon: Shield, title: "Compliance", description: "Worker classification, data privacy, and consent by design." },
];

const offerings = [
  "Talent community and microsite design with campaign calendars",
  "ATS/CRM setup or optimisation with playbooks for sourcing and nurture",
  "AI-powered search, parsing, and shortlist automation with approvals",
  "Events and content to engage niche talent segments",
  "Governance for data, consent, and compliant re-engagement",
];

const outcomes = [
  { label: "Agency cost reduction", value: "20-40%" },
  { label: "Time-to-shortlist", value: "<48 hours" },
  { label: "Talent re-use rate", value: "3x higher" },
  { label: "Brand lift", value: "Stronger candidate NPS" },
];

const DirectSourcing = () => {
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
              Solutions · Direct Sourcing
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Direct Sourcing & Talent Communities You Own
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build private talent pools, activate your brand, and re-use candidates faster—powered by AI matching and
              compliant engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Design My Talent Community
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

      {/* Pillars */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Core Pillars</h2>
            <p className="text-muted-foreground text-lg">
              Own the relationship with talent while keeping speed, quality, and compliance in balance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
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

      {/* Offerings & Outcomes */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We design and operationalise direct sourcing programmes with the right mix of tech, content, and talent
                operations.
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
              <h3 className="text-xl font-semibold text-foreground mb-6">Outcomes That Matter</h3>
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
                Talent communities curated by specialist sourcers and campaign managers.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <FolderSearch className="w-4 h-4" />
                Searchable profiles with rich notes, consent, and history for re-use.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Globe2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Launch Your Direct Sourcing Program</h2>
          <p className="text-background/70 text-lg mb-8">
            Start with a pilot role family, prove the savings, and scale across functions and regions.
          </p>
          <Button variant="white" size="lg" asChild>
            <a href="/contact">
              Plan a Pilot
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DirectSourcing;

