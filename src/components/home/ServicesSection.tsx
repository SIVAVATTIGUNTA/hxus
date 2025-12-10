import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Settings, 
  Users, 
  Repeat, 
  Code,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting Services",
    description: "Design hiring strategies, reduce costs, improve time-to-hire, and ensure compliance with expert guidance.",
    href: "/services/business-consulting",
  },
  {
    icon: Settings,
    title: "Managed Service Provider (MSP)",
    description: "Centralised management of your contingent workforce programmes and vendor relationships.",
    href: "/services/msp",
  },
  {
    icon: Users,
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Dedicated recruitment teams powered by AI tools and global sourcing capabilities.",
    href: "/services/rpo",
  },
  {
    icon: Repeat,
    title: "Recruitment-as-a-Service (RaaS)",
    description: "Flexible, subscription-style recruitment support with predictable monthly costs.",
    href: "/services/raas",
  },
  {
    icon: Code,
    title: "SaaS Platform Enablement",
    description: "Select, implement, and optimise ATS, VMS, CRM, and HR platforms for maximum value.",
    href: "/services/saas-enablement",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Consulting & Managed Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategic advisory to hands-on delivery, we provide the expertise and resources 
            to transform your workforce operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center text-primary text-sm font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/services">
            <Button size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
