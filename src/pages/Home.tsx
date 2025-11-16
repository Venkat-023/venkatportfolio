import { useEffect, useState } from 'react';
import { Github, Code2, Linkedin, FileText, Briefcase, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [leetcodeCount, setLeetcodeCount] = useState(0);
  const [githubCount, setGithubCount] = useState(0);

  useEffect(() => {
    // Animate counters
    const leetcodeTarget = 650;
    const githubTarget = 25;
    const duration = 2000;
    const steps = 60;
    const leetcodeIncrement = leetcodeTarget / steps;
    const githubIncrement = githubTarget / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setLeetcodeCount(Math.min(Math.floor(leetcodeIncrement * currentStep), leetcodeTarget));
      setGithubCount(Math.min(Math.floor(githubIncrement * currentStep), githubTarget));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-cyan animate-float">
              Venkat Baba Yemineni
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI Engineer • ML Developer • Problem Solver
            </p>
          </div>

          {/* Social Stats - Prominent & Clickable */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* GitHub */}
            <a
              href="https://github.com/Venkat-023?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover-lift group cursor-pointer border-2 border-primary/30 hover:border-primary transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <Github className="w-16 h-16 text-primary group-hover:glow-cyan transition-all" />
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary">{githubCount}+</p>
                  <p className="text-lg text-muted-foreground mt-2">ML Projects</p>
                  <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View GitHub
                  </Button>
                </div>
              </div>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Venkat_Baba/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover-lift group cursor-pointer border-2 border-accent/30 hover:border-accent transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <Code2 className="w-16 h-16 text-accent group-hover:glow-orange transition-all" />
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-accent">{leetcodeCount}+</p>
                  <p className="text-lg text-muted-foreground mt-2">Problems Solved</p>
                  <Button variant="outline" className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View LeetCode
                  </Button>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6bems%2BcLQtmzBT1UYU7wWQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover-lift group cursor-pointer border-2 border-secondary/30 hover:border-secondary transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <Linkedin className="w-16 h-16 text-secondary group-hover:glow-blue transition-all" />
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-secondary">Connect</p>
                  <p className="text-lg text-muted-foreground mt-2">Let&apos;s Network</p>
                  <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    View LinkedIn
                  </Button>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link to="/resume">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan">
                <FileText className="mr-2" size={20} />
                View Resume
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Briefcase className="mr-2" size={20} />
                Explore Projects
              </Button>
            </Link>
          </div>

          {/* Achievement Badge */}
          <div className="glass-card p-6 rounded-xl mt-12 inline-block animate-glow">
            <div className="flex items-center gap-3">
              <Trophy className="text-accent w-8 h-8" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Amazon ML Hackathon 2025</p>
                <p className="font-bold text-lg text-accent">Rank #1693 / 82,790</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-display font-bold text-center mb-8 text-gradient-cyan">
            Core Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python',
              'Machine Learning',
              'Deep Learning',
              'TensorFlow',
              'Computer Vision',
              'Data Science',
              'Neural Networks',
              'Problem Solving',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-muted/50 p-4 rounded-lg text-center font-medium hover:bg-primary/10 hover:text-primary transition-all hover-lift"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
