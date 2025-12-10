import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Phone,
  Calendar,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

const interests = [
  "Business Consulting",
  "Managed Service Provider (MSP)",
  "Recruitment Process Outsourcing (RPO)",
  "Recruitment-as-a-Service (RaaS)",
  "Direct Sourcing",
  "Global Staffing",
  "AI Agents",
  "Platform Enablement",
  "Partnership Enquiry",
  "Other",
];

const faqs = [
  {
    question: "How long does a typical engagement last?",
    answer: "Engagement length varies based on scope — from short-term strategic advisory (4-8 weeks) to ongoing managed services relationships.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work across Technology & SaaS, Financial Services, Engineering & Manufacturing, Retail & Services, and more.",
  },
  {
    question: "How quickly can you start a project?",
    answer: "Depending on scope and resource availability, we can typically kick off within 2-4 weeks of agreement.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    interest: "",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you for your enquiry! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      region: "",
      interest: "",
      message: "",
      contactMethod: "email",
    });
    setIsSubmitting(false);
  };

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
              Contact
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Talk About Your Workforce Strategy
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your challenges and goals with us. We're here to help you find the 
              right solution for your organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Contact Details */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
                      <Input
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Country / Region</label>
                      <Input
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        placeholder="e.g., United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Area of Interest *</label>
                      <div className="relative">
                        <select
                          required
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full h-11 px-4 pr-10 rounded-xl border border-input bg-background text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select an option</option>
                          {interests.map((interest) => (
                            <option key={interest} value={interest}>{interest}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message / Requirements</label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your challenges and what you're looking to achieve..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === "email"}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm text-foreground">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === "phone"}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm text-foreground">Phone</span>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:info@hxinc.us" className="text-foreground hover:text-primary">
                        info@hxinc.us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Locations</div>
                      <div className="text-foreground">UK • US • India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Option */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Prefer a Quick Call?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  We can schedule a 30-minute consultation to discuss your needs.
                </p>
                <Button variant="white" size="sm">
                  Book a Discovery Call
                </Button>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-medium text-foreground mb-1">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
