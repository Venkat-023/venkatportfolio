import { Download, Github, Code2, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="glass-card p-8 rounded-2xl mb-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Venkat Baba Yemineni
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <a href="mailto:venkatbaba23@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              venkatbaba23@gmail.com
            </a>
            <a href="tel:+919741937034" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              +91 97419 37034
            </a>
          </div>

          {/* Social Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="https://github.com/Venkat-023?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-primary hover:glow-cyan transition-all">
              <Github className="text-primary" size={24} />
              <span className="font-semibold">GitHub - 30+ Projects</span>
            </a>
            <a href="https://leetcode.com/u/Venkat_Baba/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-accent hover:glow-orange transition-all">
              <Code2 className="text-accent" size={24} />
              <span className="font-semibold">LeetCode - 870+ Solved</span>
            </a>
            <a href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6bems%2BcLQtmzBT1UYU7wWQ%3D%3D"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-secondary hover:glow-blue transition-all">
              <Linkedin className="text-secondary" size={24} />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          <a href="/resume.pdf" download="Venkat_Baba_Yemineni_Resume.pdf">
            <Button size="lg" className="mt-6 bg-primary hover:bg-primary/90 glow-cyan">
              <Download className="mr-2" size={20} />
              Download PDF Resume
            </Button>
          </a>
        </div>

        {/* Education */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Education</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Bachelor of Engineering: Computer Science</h3>
            <p className="text-primary font-medium">RV Institute of Technology</p>
            <p className="text-muted-foreground">Chaithanya Layout, 8th Phase, J.P • 2023-2027</p>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Languages</h3>
              <p className="text-muted-foreground">Python (Proficient), Java, C</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Backend & APIs</h3>
              <p className="text-muted-foreground">FastAPI, REST, Pydantic</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Cloud & DevOps</h3>
              <p className="text-muted-foreground">Docker, AWS (EC2, S3, Lambda), CI/CD</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Machine Learning & AI</h3>
              <p className="text-muted-foreground">Deep Learning, scikit-learn, TensorFlow, Keras, OpenCV</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Data & Tools</h3>
              <p className="text-muted-foreground">Pandas, NumPy, Matplotlib, Seaborn, Power BI</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Data Structures & Algorithms</h3>
              <p className="text-muted-foreground">Strong foundation with hands-on experience; solved over 870+ problems on LeetCode</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Development</h3>
              <p className="text-muted-foreground">Git/GitHub</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Featured Projects</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Driver Drowsiness Detection System</h3>
              <p className="text-sm text-muted-foreground mb-3">Real-time fatigue monitoring using deep learning and computer vision</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Built real-time drowsiness detection using custom CNN models for eye and face state classification</li>
                <li>Designed and evaluated 15+ CNN architectures, achieving 98.7% eye and 98.4% face accuracy</li>
                <li>Engineered low-latency video inference pipeline with alert triggering</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">KCET Rank Prediction & College Recommendation System</h3>
              <p className="text-sm text-muted-foreground mb-3">End-to-End ML System | API-Driven Architecture | Dockerized Deployment</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Built ML system with FastAPI REST APIs and Streamlit UI for KCET rank prediction</li>
                <li>Integrated ML inference with feature normalization and post-prediction calibration</li>
                <li>Containerized as independent Docker images and published to Docker Hub</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">TACOS — Real-Time Toxic Comment Moderation System</h3>
              <p className="text-sm text-muted-foreground mb-3">AI moderation system using multi-label transformer models</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Fine-tuned DistilBERT on 2M+ toxic comments dataset with Micro-F1 (0.75) and Macro-F1 (0.54)</li>
                <li>Designed production-grade ML architecture with FastAPI and Streamlit</li>
                <li>Containerized pipeline using Docker & Docker Compose</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Achievements</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Ranked #1693 / 82,790 in the Amazon ML Hackathon 2025 (Product Price Prediction)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Ranked #3593 / 32,000+ in CodeWar (IIT Ropar) — National-level CodeChef contest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>870+ LeetCode challenges solved and 30+ end-to-end AI/ML projects on GitHub</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Semifinalist in RIFT '26 Hackathon organized by PhysicsWallah</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Presented research paper on GAN-based age-invariant face recognition at ICDTE-2025 (International Conference)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Presented TACOS — Real-Time Toxic Comment Moderation System at IndiAIgnite (RVITM, Feb 2026)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Developed intelligent systems across Medical, Cybersecurity, Automobile, Educational, Robotics, Agriculture, and Sales domains</span>
            </li>
          </ul>
        </div>

        {/* Volunteer Experience */}
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Volunteer Experience</h2>
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">Volunteer Teacher — U&I</h3>
              <p className="text-muted-foreground mt-2">Contributing to education of underprivileged students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
