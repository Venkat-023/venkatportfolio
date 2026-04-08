import { Trophy, Award, GraduationCap, Shield, Code2, Brain, Cpu, Cloud, FileText } from 'lucide-react';

const Achievements = () => {
  const hackathons = [
    {
      title: 'Amazon ML Hackathon 2025',
      org: 'Amazon',
      result: 'Rank #1693 / 82,790',
      description: 'Product Price Prediction using ensemble ML methods. Final SMAPE Score: 51.4',
      date: 'Jan 2026',
      highlight: true,
    },
    {
      title: 'Artpark CodeForge Hackathon',
      org: 'Indian Institute of Science (IISc)',
      result: 'Participant',
      description: 'Built CareerDNA — AI-Adaptive Onboarding Engine that parses resumes, identifies skill gaps, and generates personalized training pathways.',
      date: 'Apr 2026',
    },
    {
      title: 'CodeWar — IIT Ropar',
      org: 'IIT Ropar (CodeChef)',
      result: 'Rank #4367 / 32,000+',
      description: 'National-level competitive programming contest on CodeChef.',
      date: '2026',
      highlight: true,
    },
    {
      title: 'AWS Summit & Kharagpur Data Science Hackathon',
      org: 'Indian Institute of Technology, Kharagpur',
      result: 'Participation Certificate',
      description: 'Data Science hackathon at IIT Kharagpur AWS Summit.',
      date: 'Jan 2026',
    },
    {
      title: 'Elan & nVision — IIT Hyderabad',
      org: 'IIT Hyderabad',
      result: 'Participant',
      description: 'Technical fest participation focused on Data Structures and Algorithms.',
      date: 'Jan 2026',
    },
    {
      title: 'Policy Hackathon — Policy Conclave\'26',
      org: 'Indian Institute of Technology, Kanpur',
      result: 'Participant',
      description: 'Policy-focused hackathon at IIT Kanpur.',
      date: 'Feb 2026',
    },
    {
      title: 'RIFT \'26 Hackathon',
      org: 'PW (PhysicsWallah)',
      result: 'Certificate Participant',
      description: 'Hackathon organized by PhysicsWallah.',
      date: 'Feb 2026',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certifications',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jun 2025',
      skills: ['Cloud Computing'],
      category: 'Cloud',
    },
    {
      title: 'Machine Learning',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Model Training', 'Data Preprocessing', 'Data Analysis'],
      category: 'AI/ML',
    },
    {
      title: 'Deep Learning',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['CNN', 'NLP', 'Neural Networks', 'TensorFlow', 'Keras'],
      category: 'AI/ML',
    },
    {
      title: 'Data Analysis with Python and Pandas',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Pandas', 'Exploratory Data Analysis', 'Python'],
      category: 'Data Science',
    },
    {
      title: 'Introduction to Programming Using Python',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Python'],
      category: 'Programming',
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorgan Chase via Forage',
      date: 'Jan 2026',
      skills: ['Software Engineering', 'Java'],
      category: 'Engineering',
    },
    {
      title: 'Software Development with Jira',
      issuer: 'Simplilearn',
      date: 'Nov 2025',
      skills: ['Jira', 'Agile', 'Project Management'],
      category: 'Engineering',
    },
  ];

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Cloud': <Cloud className="w-5 h-5 text-primary" />,
      'AI/ML': <Brain className="w-5 h-5 text-accent" />,
      'Data Science': <Cpu className="w-5 h-5 text-secondary" />,
      'Programming': <Code2 className="w-5 h-5 text-primary" />,
      'Engineering': <Shield className="w-5 h-5 text-accent" />,
    };
    return icons[category] || <FileText className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Hackathons & Certifications
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitions, hackathons, and professional certifications
          </p>
        </div>

        {/* Hackathons */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" />
            Hackathons & Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hack, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl hover-lift transition-all animate-fade-in ${
                  hack.highlight ? 'border-2 border-accent/50' : 'border border-border/50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${hack.highlight ? 'bg-accent/20' : 'bg-primary/10'} flex-shrink-0`}>
                    {hack.highlight ? (
                      <Trophy className="w-6 h-6 text-accent" />
                    ) : (
                      <Award className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-display font-bold text-foreground">{hack.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{hack.date}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mt-1">{hack.org}</p>
                    {hack.result !== 'Participant' && hack.result !== 'Participation Certificate' && hack.result !== 'Certificate Participant' && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                        {hack.result}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{hack.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift border border-border/50 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted/50">
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cert.category}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">Issued {cert.date}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs bg-muted/50 text-foreground rounded-full border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
