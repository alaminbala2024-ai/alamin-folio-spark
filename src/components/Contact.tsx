import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alamin@example.com",
    href: "mailto:alamin@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    href: "tel:+234XXXXXXXXX",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6 mb-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl card-hover"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-lg">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card rounded-full card-hover hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
