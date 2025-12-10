import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Clock,
  Keyboard,
  Shield,
  Zap,
  Workflow,
  ArrowRight,
  Cpu,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Sparkles,
    title: "Autonomous Sourcing",
    description: "Multi-channel searches, outreach, and shortlists with human approval gates.",
  },
  {
    icon: Clock,
    title: "Scheduling & Coordination",
    description: "Automate interview scheduling, reminders, and follow-ups with calendar sync.",
  },
  {
    icon: Keyboard,
    title: "Screening & Summaries",
    description: "Conversational pre-screens, structured notes, and scorecards for hiring teams.",
  },
  {
    icon: Shield,
    title: "Guardrails & Compliance",
    description: "Human-in-the-loop controls, audit logs, and bias-aware prompts and safeguards.",
  },
];

const outcomes = [
  { value: "60%+", label: "Manual effort reduced in top-of-funnel" },
  { value: "<24h", label: "Time to first shortlist" },
  { value: "3x", label: "More qualified profiles per role" },
  { value: "Human-led", label: "Controls and approvals remain" },
];

const useCases = [
  "Role intake copilots that convert hiring manager asks into search plans",
  "Automated talent pooling for recurring or evergreen roles",
  "Candidate engagement, nurture, and follow-up sequences",
  "Interview prep packs for hiring managers and recruiters",
  "Slack / Teams assistants for quick search and market insights",
];

const AIAgents = () => {
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
              Services · AI Agents
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AI Agents for Talent Teams—Built with Governance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deploy task-specific agents that automate sourcing, screening, engagement, and scheduling—paired with
              auditability, approvals, and human oversight at every step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Book a Demo
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

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Agent Capabilities</h2>
            <p className="text-muted-foreground text-lg">
              AI agents designed for recruiting workflows, with secure data handling and transparent decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Use cases */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Outcomes You Can Track</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Every agent ships with dashboards, approvals, and logs so you can see what changed, who approved it,
                and the impact on cycle times and quality.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="bg-card rounded-xl p-4 shadow-soft border border-border/60">
                    <div className="text-3xl font-bold text-primary mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">High-Impact Use Cases</h3>
              </div>
              <div className="space-y-3">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-primary mt-1" />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Built with data minimisation, RBAC, logging, and human approval steps.
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4" />
                Weekly agent performance reports to drive continuous optimisation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Launch an AI Agent in Weeks</h2>
          <p className="text-background/70 text-lg mb-8">
            Start with a single workflow, prove the value, then scale to more roles and regions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="white" size="lg" asChild>
              <a href="/contact">
                Schedule a Build Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/solutions">Explore Solutions</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAgents;

