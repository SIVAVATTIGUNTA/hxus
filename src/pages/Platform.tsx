import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cpu,
  Users,
  Settings,
  BarChart3,
  Link2,
  Shield,
  Lock,
  FileText
} from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Job & Candidate Matching Engine",
    description: "AI-powered matching that learns from every interaction to deliver better results.",
  },
  {
    icon: Users,
    title: "Vendor and Partner Management",
    description: "Centralised management of your entire staffing partner ecosystem.",
  },
  {
    icon: Settings,
    title: "Workflow Automation & AI Agents",
    description: "Automate repetitive tasks while keeping humans in control of key decisions.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Real-time visibility into all aspects of your workforce operations.",
  },
  {
    icon: Link2,
    title: "Integrations (ATS/HRIS/CRM/VMS)",
    description: "Connect seamlessly with your existing technology stack.",
  },
];

const userTypes = [
  { title: "Recruiters", description: "Streamlined workflows and AI-assisted sourcing." },
  { title: "Hiring Managers", description: "Faster time-to-fill and better candidate quality." },
  { title: "Vendors / Partners", description: "Clear requirements and transparent performance tracking." },
  { title: "Leadership & Procurement", description: "Complete visibility and cost control." },
];

const Platform = () => {
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
              Platform
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The HX Platform: AI, Automation, and Insight in One Place
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect employers, vendors, and talent on a single intelligent platform 
              that drives efficiency and delivers insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Book a Platform Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Platform Capabilities</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to manage your workforce operations effectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Different Users */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">For Different Users</h2>
            <p className="text-muted-foreground text-lg">
              Tailored experiences for every stakeholder in your workforce ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {userTypes.map((user, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <h3 className="font-semibold text-foreground mb-2">{user.title}</h3>
                <p className="text-muted-foreground text-sm">{user.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-background/70 text-lg">
              Enterprise-grade security built into every layer of the platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-background/5 rounded-xl p-6 text-center backdrop-blur-sm border border-background/10">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Data Protection</h3>
              <p className="text-background/60 text-sm">End-to-end encryption and secure data handling.</p>
            </div>
            <div className="bg-background/5 rounded-xl p-6 text-center backdrop-blur-sm border border-background/10">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Role-Based Access</h3>
              <p className="text-background/60 text-sm">Granular permissions for every user type.</p>
            </div>
            <div className="bg-background/5 rounded-xl p-6 text-center backdrop-blur-sm border border-background/10">
              <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Audit Logs</h3>
              <p className="text-background/60 text-sm">Complete visibility into all platform activity.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button variant="white" size="lg">
                Book a Platform Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
