import { useEffect, useState } from 'react';
import { Github, Code2, Linkedin, FileText, Briefcase, Trophy, Award, ArrowRight, Server, Container, Layers, Brain, Target, Gauge, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [leetcodeCount, setLeetcodeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const targets = { leetcode: 870, projects: 30 };
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setLeetcodeCount(Math.min(Math.floor((targets.leetcode / steps) * currentStep), targets.leetcode));
      setProjectCount(Math.min(Math.floor((targets.projects / steps) * currentStep), targets.projects));
      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = [
    {
      title: 'TACOS — Real-Time Toxic Comment Moderation',
      problem: 'Online platforms need automated, low-latency moderation to handle millions of user comments without manual review bottlenecks.',
      built: 'Fine-tuned DistilBERT for multi-label toxicity classification. FastAPI serves inference via REST endpoints. Streamlit dashboard for real-time monitoring. Docker Compose orchestrates the full stack.',
      decisions: 'Chose DistilBERT over BERT-base for 60% faster inference with minimal accuracy trade-off. Multi-label sigmoid output instead of softmax — comments can be toxic in multiple categories simultaneously.',
      challenges: 'Class imbalance in the Jigsaw dataset (95%+ non-toxic). Applied weighted loss and threshold tuning per label. Balanced Micro-F1 vs Macro-F1 to avoid ignoring rare toxic categories.',
      results: { 'Micro-F1': '0.75', 'Dataset': '2M+ comments', 'Architecture': 'DistilBERT → FastAPI → Docker' },
      stack: ['DistilBERT', 'TensorFlow', 'FastAPI', 'Docker Compose', 'Streamlit'],
      github: 'https://github.com/Venkat-023/TACOS-ToxicityAnalysis-Comment-Observation-System',
      color: 'primary',
    },
    {
      title: 'KCET Rank Prediction & College Recommender',
      problem: 'Karnataka CET students have no reliable tool to predict their rank or find colleges matching their score — leading to poor decision-making during counseling.',
      built: 'ML pipeline with feature engineering from historical KCET data. FastAPI backend serving predictions with normalization and post-prediction calibration. Streamlit UI for interactive exploration. Fully containerized with independent Docker images.',
      decisions: 'Used ensemble regressors (XGBoost + Gradient Boosting) for rank prediction over neural nets — better interpretability and lower latency for a tabular dataset. Separated model serving from UI for independent scaling.',
      challenges: 'Historical data had inconsistent formatting across years. Built custom preprocessing pipeline to normalize scores. Post-prediction calibration was needed to handle edge cases at rank boundaries.',
      results: { 'Deployment': 'Live on Render', 'Architecture': 'FastAPI + Streamlit + Docker', 'Data': 'Multi-year KCET records' },
      stack: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'XGBoost', 'scikit-learn'],
      github: 'https://github.com/Venkat-023/kcet-rank-college-advisor-platform',
      demo: 'https://kcet-rank-prediction-college-tolm.onrender.com/',
      color: 'accent',
    },
    {
      title: 'Driver Drowsiness Detection System',
      problem: 'Drowsy driving causes 100,000+ crashes annually. Existing solutions rely on expensive hardware or vehicle-specific sensors — no lightweight, camera-only solution existed for general use.',
      built: 'Dual custom CNN architecture: one model for eye state (open/closed), another for face state (alert/drowsy). MediaPipe extracts face landmarks, OpenCV handles real-time video pipeline. Alert system triggers on consecutive drowsy frames.',
      decisions: 'Designed and evaluated 15+ CNN architectures to find the best accuracy-latency balance. Chose separate eye and face models over a single multi-task model — higher accuracy on each sub-task with negligible latency increase.',
      challenges: 'Real-time inference required <50ms per frame. Optimized model size and used frame skipping strategy. Handled varying lighting conditions through aggressive data augmentation.',
      results: { 'Eye Accuracy': '98.7%', 'Face Accuracy': '98.4%', 'Inference': 'Real-time (<50ms/frame)' },
      stack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      github: 'https://github.com/Venkat-023/Driver_Drowsiness_Alerting_System',
      demo: 'https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_driver-drowsiness-detection-using-cnn-ugcPost-7357011125185454082-OEYC',
      color: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="container mx-auto px-4 py-16 md:py-28">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to ML/Backend internships & roles
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground">
              ML Engineer who{' '}
              <span className="text-gradient-cyan">ships production systems</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Deployed FastAPI-served ML models in Docker, trained on 2M+ samples, and built end-to-end pipelines — from data preprocessing to containerized inference APIs. {leetcodeCount}+ LeetCode problems solved. {projectCount}+ ML/AI projects on GitHub.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
                  <Briefcase className="mr-2" size={20} />
                  View Projects
                </Button>
              </Link>
              <a href="https://github.com/Venkat-023?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </a>
              <Link to="/resume">
                <Button size="lg" variant="outline" className="border-muted-foreground/30 text-muted-foreground hover:bg-muted/50">
                  <FileText className="mr-2" size={20} />
                  Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Signal Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: 'LeetCode Solved', value: `${leetcodeCount}+`, sub: 'Consistent daily practice' },
              { label: 'ML/AI Projects', value: `${projectCount}+`, sub: 'End-to-end deployed' },
              { label: 'Amazon ML Hackathon', value: '#1693', sub: 'of 82,790 participants' },
              { label: 'CodeWar IIT Ropar', value: '#3593', sub: 'of 32,000+ participants' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5 rounded-xl border border-border/50">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS (CASE STUDIES) ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Proof of Work
              </h2>
              <p className="text-muted-foreground mt-2">Featured projects — structured as engineering case studies</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors">
              All projects <ChevronRight size={16} />
            </Link>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, i) => (
              <div key={i} className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <div className={`h-1 bg-${project.color}`} />
                <div className="p-6 md:p-8 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{project.title}</h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Github size={14} className="mr-1.5" /> Code
                        </Button>
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <ExternalLink size={14} className="mr-1.5" /> Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Case Study Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">What I Built</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.built}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Key Engineering Decisions</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.decisions}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Challenges & Tradeoffs</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-border/30">
                    {Object.entries(project.results).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
                        <span className="text-xs text-muted-foreground">{key}:</span>
                        <span className="text-sm font-bold text-foreground">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 text-xs font-medium bg-primary/5 text-primary border border-primary/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects">
              <Button variant="outline" className="border-primary/50 text-primary">
                View all {projectCount}+ projects <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING SKILLS ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Engineering Skills
          </h2>
          <p className="text-muted-foreground mb-10">Grouped by depth — not a buzzword list</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border-2 border-primary/40">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Core Strengths</h3>
              <div className="space-y-3">
                {['Python', 'Machine Learning (scikit-learn, XGBoost)', 'Deep Learning (TensorFlow, Keras)', 'FastAPI & REST APIs', 'Docker & Containerization', 'Computer Vision (OpenCV, MediaPipe)'].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Working Knowledge</h3>
              <div className="space-y-3">
                {['AWS (EC2, S3, Lambda)', 'NLP & Transformers (DistilBERT)', 'CI/CD Pipelines', 'Streamlit & Deployment', 'Pandas, NumPy, Matplotlib'].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/30">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Familiar</h3>
              <div className="space-y-3">
                {['Java', 'C', 'Power BI', 'Git/GitHub workflows'].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REAL-WORLD SIGNALS ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Real-World Signals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-accent/30">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">Amazon ML Hackathon 2025</p>
                  <p className="text-accent font-bold">Rank #1693 / 82,790</p>
                  <p className="text-sm text-muted-foreground mt-1">Product Price Prediction using ensemble methods. Competed against 82K+ participants from across India. Final SMAPE: 51.4</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-primary/30">
              <div className="flex items-start gap-4">
                <Code2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">870+ LeetCode Problems</p>
                  <p className="text-primary font-bold">Consistent daily practice</p>
                  <p className="text-sm text-muted-foreground mt-1">Not a one-time grind — this reflects sustained algorithmic thinking and problem decomposition across arrays, graphs, DP, trees, and system design patterns.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-secondary/30">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">CodeWar — IIT Ropar</p>
                  <p className="text-secondary font-bold">Rank #3593 / 32,000+</p>
                  <p className="text-sm text-muted-foreground mt-1">National-level competitive programming contest hosted on CodeChef.</p>
                </div>
              </div>
            </div>

            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7432691845194801152/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl border border-accent/30 hover:border-accent/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">RIFT '26 Hackathon — Semifinalist</p>
                  <p className="text-accent font-bold">PhysicsWallah</p>
                  <p className="text-sm text-muted-foreground mt-1">Advanced to semifinals in a national-level hackathon. Built and presented a working prototype under time constraints.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== HOW I THINK ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            How I Approach Problems
          </h2>
          <p className="text-muted-foreground mb-10">Not just models — systems thinking</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-border/50">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Break problems into systems</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every project starts with architecture — data flow, model boundaries, API contracts, and deployment strategy. The model is one component, not the whole system.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50">
              <Gauge className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Navigate tradeoffs deliberately</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                DistilBERT over BERT for 60% faster inference. Separate CNNs over multi-task for higher per-task accuracy. Every choice has a reason — accuracy vs latency, complexity vs maintainability.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50">
              <Server className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Focus on deployability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A model that only runs in a notebook isn't engineering. I build with Docker, FastAPI, and clean separation of concerns — ready for production from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILDING FOR PRODUCTION ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Building for Production
          </h2>
          <p className="text-muted-foreground mb-10">Engineering maturity signals</p>

          <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Container className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Dockerized Systems</h3>
                  <p className="text-sm text-muted-foreground">Every major project ships as Docker containers. Independent images for model serving, API backend, and frontend — deployed via Docker Compose.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Layers className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">API-Based ML Serving</h3>
                  <p className="text-sm text-muted-foreground">Models exposed through FastAPI with Pydantic validation, proper error handling, and structured JSON responses. Not scripts — services.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Brain className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Separation of Concerns</h3>
                  <p className="text-sm text-muted-foreground">Clean boundaries between data pipeline, model logic, API layer, and UI. Each component testable and replaceable independently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center glass-card p-10 rounded-2xl border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Let's build something real.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Actively looking for internships and ML/backend roles where I can build and scale real-world systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
                Get in Touch
              </Button>
            </Link>
            <a href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </a>
            <a href="https://leetcode.com/u/Venkat_Baba/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                <Code2 className="mr-2" size={20} />
                LeetCode
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
