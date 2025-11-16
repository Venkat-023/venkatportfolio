import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Biodata = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Bio-Data
          </h1>
          <p className="text-muted-foreground text-lg">Professional Information</p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8 animate-fade-in">
          <table className="w-full border-collapse">
            <tbody className="space-y-4">
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Full Name</td>
                <td className="py-4 text-foreground">Venkat Baba Yemineni</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Email</td>
                <td className="py-4 text-foreground">venkatbaba23@gmail.com</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Phone</td>
                <td className="py-4 text-foreground">+91 97419 37034</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Profession</td>
                <td className="py-4 text-foreground">AI Engineer & ML Developer</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Education</td>
                <td className="py-4 text-foreground">B.E. Computer Science, RV Institute of Technology (2023-2027)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Specialization</td>
                <td className="py-4 text-foreground">Deep Learning, Computer Vision, Data Science</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Programming</td>
                <td className="py-4 text-foreground">Python, Java, C</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">LeetCode</td>
                <td className="py-4 text-foreground">650+ Problems Solved</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">GitHub</td>
                <td className="py-4 text-foreground">25+ ML/AI Projects</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Key Achievement</td>
                <td className="py-4 text-foreground">Rank #1693 / 82,790 - Amazon ML Hackathon 2025</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">Domains</td>
                <td className="py-4 text-foreground">Medical, Cybersecurity, Automobile, Education, Robotics, Agriculture, Sales</td>
              </tr>
              <tr>
                <td className="py-4 pr-8 font-semibold text-primary whitespace-nowrap">LinkedIn</td>
                <td className="py-4">
                  <a
                    href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6bems%2BcLQtmzBT1UYU7wWQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    linkedin.com/in/venkat-baba-yemineni-49a7612b4
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
              <Download className="mr-2" size={20} />
              Download Bio-Data PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
