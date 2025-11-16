import { Github, ExternalLink, Eye, Brain, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Eye,
      title: 'Driver Drowsiness Detection System',
      description: 'Real-time fatigue monitoring using deep learning and computer vision to enhance driver safety.',
      techStack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      accuracy: '99.94%',
      github: 'https://github.com/venkatbabayemineni/driver-drowsiness-detection',
      demo: '#',
      highlights: [
        'Dual custom CNNs for face and eye state classification',
        '99.94% face accuracy and 99.71% eye accuracy',
        'Real-time detection with threshold-based alerts',
        'Trained and evaluated 15+ CNN architectures',
      ],
      color: 'primary',
    },
    {
      icon: Brain,
      title: 'KCET Rank Predictor & College Recommender',
      description: 'AI-powered web system for predicting KCET ranks and recommending colleges based on user preferences.',
      techStack: ['Python', 'Streamlit', 'Gradient Boosting', 'Pandas', 'scikit-learn'],
      accuracy: 'R² = 0.9996',
      github: 'https://github.com/venkatbabayemineni/kcet-rank-predictor',
      demo: '#',
      highlights: [
        'ML model with R² = 0.9996 accuracy',
        'Personalized college recommendation engine',
        'Filters by Branch, Location, and College type',
        'Deployed on Render with interactive UI',
      ],
      color: 'accent',
    },
    {
      icon: Hand,
      title: 'SignSpeak Real-Time ASL Recognition',
      description: 'Live ASL alphabet translation using a custom-built CNN and webcam input for accessibility.',
      techStack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      accuracy: '94%+',
      github: 'https://github.com/venkatbabayemineni/signspeak-asl',
      demo: '#',
      highlights: [
        'Real-time hand gesture detection and classification',
        'Over 94% accuracy on test data',
        'Dynamic sentence construction based on confidence',
        'Preprocessed dataset with MediaPipe hand-region cropping',
      ],
      color: 'secondary',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Featured Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing real-world AI/ML solutions across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift group border-2 border-border/50 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className={`inline-flex p-4 rounded-xl bg-${project.color}/10 group-hover:glow-${project.color === 'primary' ? 'cyan' : project.color === 'accent' ? 'orange' : 'blue'} transition-all`}>
                      <Icon className={`w-10 h-10 text-${project.color}`} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Accuracy Badge */}
                  <div className={`inline-flex px-4 py-2 rounded-lg bg-${project.color}/20 border border-${project.color}/30`}>
                    <span className={`text-${project.color} font-semibold`}>
                      Accuracy: {project.accuracy}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-muted/50 text-foreground rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 glow-cyan"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={18} />
                        GitHub Repo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold mb-4 text-gradient-cyan">
            Want to see more?
          </h3>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub for 25+ AI/ML projects across various domains
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-cyan"
          >
            <a href="https://github.com/venkatbabayemineni" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
