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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            Services
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Consulting & Managed Services
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            From strategic advisory to hands-on delivery, we provide the expertise and resources 
            to transform your workforce operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={service.href}
                className="block h-full bg-card rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-strong transition-all duration-500 group border border-transparent hover:border-primary/30 hover:-translate-y-2"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6"
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base mb-5 leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
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
            <Button size="lg" className="text-base px-8 py-6">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
