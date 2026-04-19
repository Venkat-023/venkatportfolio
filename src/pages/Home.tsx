import { useEffect, useState } from 'react';
import { Github, Code2, Linkedin, FileText, Briefcase, Trophy, Award, ArrowRight, Server, Container, Layers, Brain, Target, Gauge, ExternalLink, ChevronRight, Zap, Shield } from 'lucide-react';
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
      system: 'Fine-tuned DistilBERT for multi-label toxicity classification → FastAPI REST endpoints for inference → Streamlit dashboard for real-time monitoring → Docker Compose orchestrates the full stack.',
      decisions: 'Chose DistilBERT over BERT-base for 60% faster inference with <2% accuracy drop. Multi-label sigmoid output instead of softmax — comments can be toxic across multiple categories simultaneously.',
      challenges: 'Class imbalance in Jigsaw dataset (95%+ non-toxic). Applied weighted loss and per-label threshold tuning. Balanced Micro-F1 vs Macro-F1 to avoid ignoring rare toxic categories.',
      results: { 'Micro-F1': '0.75', 'Dataset': '2M+ comments', 'Pipeline': 'Data → DistilBERT → FastAPI → Docker' },
      stack: ['DistilBERT', 'TensorFlow', 'FastAPI', 'Docker Compose', 'Streamlit'],
      github: 'https://github.com/Venkat-023/TACOS-ToxicityAnalysis-Comment-Observation-System',
      demo: 'https://huggingface.co/spaces/Venkat-023/TACOS',
      color: 'primary',
    },
    {
      title: 'KCET Rank Prediction & College Recommender',
      problem: 'Karnataka CET students have no reliable tool to predict rank or find colleges matching their score — causing poor decisions during counseling.',
      system: 'ML pipeline with feature engineering from historical KCET data → FastAPI backend with normalization and post-prediction calibration → Streamlit UI for interactive exploration → Fully containerized with independent Docker images.',
      decisions: 'Used ensemble regressors (XGBoost + Gradient Boosting) over neural nets — better interpretability and lower latency for tabular data. Separated model serving from UI for independent scaling.',
      challenges: 'Historical data had inconsistent formatting across years. Built custom preprocessing pipeline. Post-prediction calibration handled edge cases at rank boundaries.',
      results: { 'Deployment': 'Live on Render', 'Architecture': 'FastAPI + Streamlit + Docker', 'Data': 'Multi-year KCET records' },
      stack: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'XGBoost', 'scikit-learn'],
      github: 'https://github.com/Venkat-023/kcet-rank-college-advisor-platform',
      demo: 'https://kcet-rank-prediction-college-tolm.onrender.com/',
      color: 'accent',
    },
    {
      title: 'Driver Drowsiness Detection System',
      problem: 'Drowsy driving causes 100,000+ crashes annually. No lightweight, camera-only solution existed for general use without expensive hardware.',
      system: 'Dual custom CNN architecture: eye state model (open/closed) + face state model (alert/drowsy). MediaPipe extracts face landmarks → OpenCV handles real-time video pipeline → Alert triggers on consecutive drowsy frames.',
      decisions: 'Evaluated 15+ CNN architectures. Chose separate eye and face models over single multi-task model — higher per-task accuracy with negligible latency increase.',
      challenges: 'Real-time inference required <50ms per frame. Optimized model size, applied frame skipping. Aggressive data augmentation for varying lighting conditions.',
      results: { 'Eye Accuracy': '98.7%', 'Face Accuracy': '98.4%', 'Inference': '<50ms/frame' },
      stack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      github: 'https://github.com/Venkat-023/Driver_Drowsiness_Alerting_System',
      demo: 'https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_driver-drowsiness-detection-using-cnn-ugcPost-7357011125185454082-OEYC',
      color: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to ML / Backend internships & roles
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] text-foreground mb-6">
            AI Systems Engineer{' '}
            <span className="text-gradient-cyan block mt-2">building AI/Backend/ML pipelines</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Deployed FastAPI-served models in Docker, trained on 2M+ samples, engineered end-to-end inference APIs. {leetcodeCount}+ LeetCode problems. {projectCount}+ ML/AI projects shipped.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
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

          {/* Signal Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: 'LeetCode Solved', value: `${leetcodeCount}+`, sub: 'Sustained algorithmic consistency' },
              { label: 'ML/AI Projects', value: `${projectCount}+`, sub: 'End-to-end deployed systems' },
              { label: 'Amazon ML Hack', value: '#1693', sub: 'of 82,790 (top ~2%)' },
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
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Proof of Work
            </h2>
            <p className="text-muted-foreground mt-2">Featured projects — structured as engineering case studies</p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, i) => (
              <div key={i} className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <div className={`h-1 bg-${project.color}`} />
                <div className="p-6 md:p-8 space-y-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">System Overview</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.system}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Key Engineering Decisions</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.decisions}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Challenges & Solutions</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 border-t border-border/30">
                    {Object.entries(project.results).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50">
                        <span className="text-xs text-muted-foreground">{key}:</span>
                        <span className="text-sm font-bold text-foreground">{val}</span>
                      </div>
                    ))}
                  </div>

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

          <div className="mt-8 text-center">
            <Link to="/projects">
              <Button variant="outline" className="border-primary/50 text-primary">
                View all {projectCount}+ projects <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW I BUILD SYSTEMS ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How I Build Systems
            </h2>
            <p className="text-muted-foreground mt-2">Engineering thinking, not tool listing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                title: 'Decompose problems into pipelines',
                desc: 'Every project starts with architecture — data flow, model boundaries, API contracts, deployment strategy. The model is one component, not the whole system.',
              },
              {
                icon: <Gauge className="w-7 h-7 text-accent" />,
                title: 'Navigate tradeoffs with intent',
                desc: 'DistilBERT over BERT for 60% faster inference. Separate CNNs over multi-task for higher per-task accuracy. Every choice is documented and justified.',
              },
              {
                icon: <Server className="w-7 h-7 text-secondary" />,
                title: 'Design for deployment from day one',
                desc: 'A model in a notebook isn\'t engineering. I build with Docker, FastAPI, and clean separation — production-ready from the first commit.',
              },
              {
                icon: <Shield className="w-7 h-7 text-primary" />,
                title: 'Prioritize reproducibility',
                desc: 'Containerized environments, pinned dependencies, structured configs. Anyone can clone, build, and run — no "works on my machine" surprises.',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-border/50 flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTION MINDSET ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Production Mindset
            </h2>
            <p className="text-muted-foreground mt-2">Engineering maturity signals</p>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Container className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Dockerized Systems</h3>
                  <p className="text-sm text-muted-foreground">Every major project ships as containers. Independent images for model serving, API backend, and frontend — deployed via Docker Compose.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Layers className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">API-Based ML Serving</h3>
                  <p className="text-sm text-muted-foreground">Models exposed through FastAPI with Pydantic validation, structured JSON responses, and proper error handling. Not scripts — services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Separation of Concerns</h3>
                  <p className="text-sm text-muted-foreground">Clean boundaries: data pipeline, model logic, API layer, UI. Each component testable and replaceable independently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING SKILLS ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Engineering Skills
            </h2>
            <p className="text-muted-foreground mt-2">Grouped by depth — fewer skills, higher credibility</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border-2 border-primary/40">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Core</h3>
              <div className="space-y-3">
                {['Python', 'Machine Learning', 'Deep Learning (TensorFlow, Keras)', 'FastAPI & REST APIs', 'Docker & Containerization', 'Computer Vision (OpenCV, MediaPipe)'].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Intermediate</h3>
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

      {/* ===== ACHIEVEMENTS (PROOF) ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Real-World Signals
            </h2>
            <p className="text-muted-foreground mt-2">Every claim backed by context and scale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-accent/30">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">Amazon ML Hackathon 2025</p>
                  <p className="text-accent font-bold">Rank #1693 / 82,790 (top ~2%)</p>
                  <p className="text-sm text-muted-foreground mt-1">Product Price Prediction using ensemble methods. Final SMAPE: 51.4 against 82K+ participants.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-primary/30">
              <div className="flex items-start gap-4">
                <Code2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">870+ LeetCode Problems</p>
                  <p className="text-primary font-bold">Sustained algorithmic consistency</p>
                  <p className="text-sm text-muted-foreground mt-1">Not a one-time grind — reflects sustained problem decomposition across arrays, graphs, DP, trees, and system design patterns.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-secondary/30">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">CodeWar — IIT Ropar</p>
                  <p className="text-secondary font-bold">Rank #3593 / 32,000+</p>
                  <p className="text-sm text-muted-foreground mt-1">National-level competitive programming contest on CodeChef.</p>
                </div>
              </div>
            </div>

            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7432691845194801152/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-2xl border border-accent/30 hover:border-accent/60 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg text-foreground">RIFT '26 Hackathon — Semifinalist</p>
                  <p className="text-accent font-bold">PhysicsWallah</p>
                  <p className="text-sm text-muted-foreground mt-1">Advanced to semifinals. Built and presented a working prototype under time constraints.</p>
                </div>
              </div>
            </a>
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
            Looking for ML / Backend roles where I can design and deploy real-world systems.
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
            <a href="mailto:venkatbaba23@gmail.com">
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                Email Me
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
