import {
  Award,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Layers,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tilt3D from '@/components/three/Tilt3D';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const skills = [
  ['Languages', ['Python', 'Java']],
  ['Backend', ['FastAPI', 'REST', 'Pydantic']],
  ['AI Skills', ['Deep Learning', 'Machine Learning', 'RAG', 'TensorFlow', 'scikit-learn']],
  ['AI Engineering', ['Agentic AI', 'LLMs', 'GraphRAG', 'Computer Vision', 'NLP']],
  ['Data Manipulation', ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MySQL']],
  ['Cloud & DevOps', ['Docker', 'AWS', 'FastAPI']],
  ['Engineering', ['DSA', 'CN', 'DBMS', 'OOPs']],
];

const projects = [
  {
    title: 'Driver Drowsiness Detection System',
    tag: 'Computer Vision',
    accent: 'border-primary/60',
    text: 'Real-time CNN safety system for detecting driver fatigue.',
    points: ['98%+ accuracy', 'Live video pipeline'],
  },
  {
    title: 'Insight Weaver',
    tag: 'GraphRAG + Gemma',
    accent: 'border-accent/60',
    text: 'Scientific discovery copilot using evidence graphs and Gemma reasoning.',
    points: ['GraphRAG', 'Hypothesis generation'],
  },
  {
    title: 'TACOS',
    tag: 'NLP Moderation',
    accent: 'border-secondary/60',
    text: 'Real-time toxic comment moderation using DistilBERT and FastAPI.',
    points: ['2M+ comments', 'Docker deployment'],
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 [perspective:1400px] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_18%_12%,hsl(var(--primary)/0.16),transparent_28%),radial-gradient(circle_at_82%_8%,hsl(var(--accent)/0.15),transparent_30%),radial-gradient(circle_at_50%_92%,hsl(var(--secondary)/0.14),transparent_35%)]" />
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <Tilt3D max={8} scale={1.015}>
          <section className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card/85 via-muted/50 to-card/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_32px_100px_hsl(var(--primary)/0.16),inset_0_1px_0_hsl(var(--foreground)/0.10)]">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/22 blur-3xl" />
            <div className="absolute left-1/3 -top-20 h-48 w-48 rounded-full bg-secondary/18 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-5 shadow-[0_0_24px_hsl(var(--primary)/0.16)]">
                  <Sparkles className="w-4 h-4" />
                  AI Systems Engineer
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                  Venkat Baba
                  <span className="block text-gradient-cyan">Yemineni</span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  AI systems engineer building practical AI products with RAG, LLMs, agentic workflows, computer vision, APIs, and Dockerized deployments.
                </p>
                <p className="mt-4 text-xl md:text-2xl font-display font-bold text-gradient-orange">
                  Always learning, always improving, always building.
                </p>

                <div className="flex flex-wrap gap-3 mt-6 text-sm text-muted-foreground">
                  <a href="mailto:venkatbaba23@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail size={16} />
                    venkatbaba23@gmail.com
                  </a>
                  <a href="tel:+919741937034" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone size={16} />
                    +91 97419 37034
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ['900+', 'LeetCode'],
                  ['25+', 'AI Projects'],
                  ['8.23', 'CGPA'],
                  ['AI Intern', 'GoAi'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/12 via-muted/35 to-accent/10 p-5 text-center shadow-[0_16px_40px_hsl(var(--primary)/0.08)]">
                    <p className="text-2xl md:text-3xl font-display font-bold text-primary">{value}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-wrap gap-3 mt-8">
              <a href={resumeUrl} download="Venkat_Baba_Yemineni_Resume.pdf">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
                  <Download className="mr-2" size={20} />
                  Download PDF
                </Button>
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                  <ExternalLink className="mr-2" size={20} />
                  Open PDF
                </Button>
              </a>
              <a href="https://github.com/Venkat-023?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </a>
              <a href="https://leetcode.com/u/Venkat_Baba/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                  <Code2 className="mr-2" size={20} />
                  LeetCode
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </a>
            </div>
          </section>
        </Tilt3D>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Tilt3D max={7} scale={1.018}>
            <section className="glass-card p-8 rounded-2xl h-full border border-primary/35 bg-gradient-to-br from-primary/12 via-card/55 to-muted/35 shadow-[0_24px_70px_hsl(var(--primary)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]">
              <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education
              </h2>
              <div className="relative pl-6 border-l-2 border-primary/40">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.8)]" />
                <h3 className="text-xl font-semibold text-foreground">B.E. Computer Science</h3>
                <p className="text-primary font-medium mt-1">RV Institute of Technology</p>
                <p className="text-sm text-muted-foreground mt-2">2023 - 2027 | CGPA: 8.23</p>
                <p className="text-sm text-muted-foreground mt-4">Core CS foundation with DSA, DBMS, CN, and OS.</p>
              </div>
            </section>
          </Tilt3D>

          <Tilt3D max={7} scale={1.018}>
            <section className="glass-card p-8 rounded-2xl h-full border border-accent/35 bg-gradient-to-br from-accent/12 via-card/55 to-muted/35 shadow-[0_24px_70px_hsl(var(--accent)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]">
              <h2 className="text-3xl font-display font-bold mb-6 text-gradient-orange flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-accent" />
                Experience
              </h2>
              <div className="relative pl-6 border-l-2 border-accent/40">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.8)]" />
                <h3 className="text-xl font-semibold text-foreground">AI Intern - GoAi</h3>
                <p className="text-sm text-muted-foreground mt-2">June 2026 - December 2026</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Applied AI work across LLM-backed features, agentic workflows, testing, and deployment support.
                </p>
              </div>
            </section>
          </Tilt3D>
        </div>

        <Tilt3D max={7} scale={1.018}>
          <section className="glass-card p-8 rounded-2xl border border-secondary/35 bg-gradient-to-br from-secondary/12 via-card/60 to-primary/8 shadow-[0_24px_70px_hsl(var(--secondary)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]">
            <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan flex items-center gap-3">
              <Layers className="w-7 h-7 text-secondary" />
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skills.map(([group, items]) => (
                <div key={group as string} className="rounded-2xl border border-border/40 bg-gradient-to-br from-muted/45 via-card/45 to-primary/8 p-5 hover:border-primary/35 transition-colors">
                  <h3 className="font-display font-bold text-foreground mb-3">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Tilt3D>

        <section>
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Tilt3D key={project.title} max={8} scale={1.025}>
                <div className={`glass-card p-6 rounded-2xl h-full border ${project.accent} bg-gradient-to-br from-card/70 via-muted/35 to-primary/8 shadow-[0_24px_70px_hsl(var(--primary)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]`}>
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold border border-accent/30 mb-4">
                    {project.tag}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.points.map((point) => (
                      <p key={point} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Tilt3D max={7} scale={1.018}>
            <section className="glass-card p-8 rounded-2xl h-full border border-accent/35 bg-gradient-to-br from-accent/12 via-card/55 to-muted/35 shadow-[0_24px_70px_hsl(var(--accent)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]">
              <h2 className="text-3xl font-display font-bold mb-6 text-gradient-orange flex items-center gap-3">
                <Trophy className="w-7 h-7 text-accent" />
                Achievements
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                {[
                  'Ranked #1693 / 82,790 in Amazon AI Hackathon 2025.',
                  '900+ LeetCode challenges solved.',
                  'Semifinalist, RIFT 26 - 24 Hour Hackathon by PhysicsWallah.',
                  'Semifinalist, Adivya 2.0 at IIT Ropar for SkillQuest AI.',
                  'Ranked #3593 among 32,000+ in CodeWar, IIT Ropar.',
                  '25+ AI projects across RAG, APIs, Docker, and AWS.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </Tilt3D>

          <Tilt3D max={7} scale={1.018}>
            <section className="glass-card p-8 rounded-2xl h-full border border-primary/35 bg-gradient-to-br from-primary/12 via-card/55 to-muted/35 shadow-[0_24px_70px_hsl(var(--primary)/0.12),inset_0_1px_0_hsl(var(--foreground)/0.08)]">
              <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Community
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Volunteer Teacher - U&I</h3>
                    <p className="text-sm text-muted-foreground mt-2">Mentoring students through weekly academic support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">NSS Coordinator</h3>
                    <p className="text-sm text-muted-foreground mt-2">Coordinating volunteers, logistics, workshops, and campus events.</p>
                  </div>
                </div>
              </div>
            </section>
          </Tilt3D>
        </div>
      </div>
    </div>
  );
};

export default Resume;
