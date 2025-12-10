import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BarChart2,
  PieChart,
  Gauge,
  Database,
  Sparkles,
  Shield,
  ArrowRight,
  CheckCircle2,
  LineChart,
} from "lucide-react";

const pillars = [
  { icon: Database, title: "Clean Data Foundations", description: "Normalised pipelines from ATS/VMS/HRIS and partner feeds." },
  { icon: Gauge, title: "Dashboards & KPIs", description: "Executive, TA, procurement, and operations views with drill-downs." },
  { icon: Sparkles, title: "Predictive Insights", description: "Forecasts for demand, time-to-hire, and supplier performance." },
  { icon: Shield, title: "Governance", description: "Access controls, PII minimisation, and audit-ready lineage." },
];

const useCases = [
  "Market rate intelligence by role, region, and contract type",
  "Performance scorecards for suppliers and internal teams",
  "Funnel analytics: conversion, drop-off, and bottleneck detection",
  "Diversity, equity, and inclusion reporting with responsible guardrails",
  "Capacity planning and scenario modelling for hiring plans",
];

const outcomes = [
  { label: "Time-to-hire forecast accuracy", value: "+20%" },
  { label: "Supplier optimisation", value: "Top performers surfaced" },
  { label: "Cost visibility", value: "Rate cards & variance" },
  { label: "Data confidence", value: "Lineage + QA checks" },
];

const DataInsights = () => {
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
              Solutions · Data & Insights
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Data, Analytics, and Leadership Insight for Talent Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Turn ATS, VMS, HRIS, and partner data into actionable dashboards, forecasts, and decisions—securely and
              responsibly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Request an Insights Demo
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
            <h2 className="text-3xl font-bold text-foreground mb-3">Built for Decisions</h2>
            <p className="text-muted-foreground text-lg">
              From clean data to curated dashboards and predictive insight—ready for leadership.
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

      {/* Use Cases & Outcomes */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">High-Value Use Cases</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Insight packs tailored for TA, procurement, finance, and executive teams.
              </p>
              <div className="space-y-3">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <h3 className="text-xl font-semibold text-foreground mb-6">Outcomes</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-xl bg-muted p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <PieChart className="w-4 h-4" />
                Executive-ready visuals and narratives to support decisions.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <LineChart className="w-4 h-4" />
                Forecasts and scenarios to plan budgets and capacity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <BarChart2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">See the Insight Pack</h2>
          <p className="text-background/70 text-lg mb-8">
            We’ll show you sample dashboards and map the data we need to deliver them quickly.
          </p>
          <Button variant="white" size="lg" asChild>
            <a href="/contact">
              Book an Insights Walkthrough
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DataInsights;

