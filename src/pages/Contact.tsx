import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 glow-cyan">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl animate-fade-in space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground">
                Contact Details
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:venkatbaba23@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">venkatbaba23@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919741937034"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 97419 37034</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl animate-fade-in">
              <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                Connect With Me
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/Venkat-023?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 border border-border hover:border-primary transition-all group"
                >
                  <Github className="w-8 h-8 text-primary group-hover:glow-cyan transition-all" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">25+ ML/AI Projects</p>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>

                <a
                  href="https://leetcode.com/u/Venkat_Baba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-accent/10 border border-border hover:border-accent transition-all group"
                >
                  <Code2 className="w-8 h-8 text-accent group-hover:glow-orange transition-all" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">LeetCode</p>
                    <p className="text-sm text-muted-foreground">650+ Problems Solved</p>
                  </div>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6bems%2BcLQtmzBT1UYU7wWQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-secondary/10 border border-border hover:border-secondary transition-all group"
                >
                  <Linkedin className="w-8 h-8 text-secondary group-hover:glow-blue transition-all" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Let&apos;s Connect</p>
                  </div>
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
