import { useState } from 'react';
import { Github, ExternalLink, Eye, Brain, Hand, Shield, Activity, Leaf, Cpu, BarChart3, Heart, Microscope, Zap, Film, Cloud, Gamepad2, Bot, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  category: string;
  highlight?: string;
  demo?: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    // Featured
    {
      title: 'Driver Drowsiness Detection System',
      description: 'Real-time fatigue monitoring using dual custom CNNs for face & eye state classification. 98.7% eye and 98.4% face accuracy.',
      techStack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      github: 'https://github.com/Venkat-023/Driver_Drowsiness_Alerting_System',
      category: 'Computer Vision',
      highlight: '98.7% Accuracy',
      demo: 'https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_driver-drowsiness-detection-using-cnn-ugcPost-7357011125185454082-OEYC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuTA3YBtKXkRvQ4qp0EdqsKhy16Bz2w33k',
    },
    {
      title: 'KCET Rank Predictor & College Recommender',
      description: 'End-to-end ML system with FastAPI REST APIs and Streamlit UI. Dockerized deployment with ML inference and college recommendation engine.',
      techStack: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'scikit-learn'],
      github: 'https://github.com/Venkat-023/kcet-rank-college-advisor-platform',
      category: 'Full Stack ML',
      highlight: 'Dockerized',
      demo: 'https://kcet-rank-prediction-college-tolm.onrender.com/',
    },
    {
      title: 'TACOS — Toxic Comment Moderation',
      description: 'Real-time AI moderation system using fine-tuned DistilBERT on 2M+ toxic comments. Multi-label classification with FastAPI & Docker Compose.',
      techStack: ['DistilBERT', 'TensorFlow', 'FastAPI', 'Docker', 'NLP'],
      github: 'https://github.com/Venkat-023/TACOS-ToxicityAnalysis-Comment-Observation-System',
      category: 'NLP',
      highlight: 'Micro-F1: 0.75',
      demo: 'https://huggingface.co/spaces/Venkat-023/TACOS',
    },
    {
      title: 'SignSpeak Real-Time ASL Recognition',
      description: 'Live ASL alphabet translation using custom CNN and webcam input. Dynamic sentence construction based on prediction confidence.',
      techStack: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'CNN'],
      github: 'https://github.com/Venkat-023/HandSignTranslator-CNN',
      category: 'Computer Vision',
      highlight: '94%+ Accuracy',
      demo: 'https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_aiforgood-deeplearning-computervision-ugcPost-7354503710384791574-dv_S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuTA3YBtKXkRvQ4qp0EdqsKhy16Bz2w33k',
    },
    // Reinforcement Learning
    {
      title: 'OpenEnv Reinforcement Learning',
      description: 'Emergency First-Response Decision Engine — a deterministic OpenEnv-compatible environment for evaluating AI agents supporting non-expert first responders.',
      techStack: ['Python', 'Reinforcement Learning', 'OpenAI Gym'],
      github: 'https://github.com/Venkat-023/OpenEnv-ReinforcementLearning',
      category: 'Reinforcement Learning',
      demo: 'https://huggingface.co/spaces/Venkat-023/Ai_First_Minute',
    },
    // Deep Learning & Time Series
    {
      title: 'Deep Sequential Stock Price Prediction',
      description: 'Comparative analysis of LSTM, GRU, Bi-LSTM and Transformer architectures for time-series stock price forecasting.',
      techStack: ['TensorFlow', 'LSTM', 'GRU', 'Transformer', 'Pandas'],
      github: 'https://github.com/Venkat-023/Deep-Sequential-Based-Stock-Price-Prediction',
      category: 'Deep Learning',
    },
    {
      title: 'Longitudinal Disease Progression',
      description: 'Deep learning pipeline predicting cardiac condition progression across ICU admissions using temporal patient data.',
      techStack: ['Python', 'Deep Learning', 'Medical AI', 'Time Series'],
      github: 'https://github.com/Venkat-023/Longitudinal-Temporal-Disease-Progression',
      category: 'Medical AI',
    },
    // NLP & AI Tools
    {
      title: 'CareerDNA — AI Adaptive Onboarding',
      description: 'AI-driven adaptive learning engine that parses resumes and job descriptions, identifies skill gaps, and generates personalized learning paths.',
      techStack: ['Python', 'NLP', 'Resume Parsing', 'AI'],
      github: 'https://github.com/Venkat-023/CareerDNA',
      category: 'NLP',
    },
    {
      title: 'AI-Based Query Support System',
      description: 'Interactive AI-powered data exploration, analysis, and visualization platform. Deployed live on Render.',
      techStack: ['Python', 'Streamlit', 'AI', 'Data Visualization'],
      github: 'https://github.com/Venkat-023/AI-Based-Query-Support-System',
      category: 'Full Stack ML',
      demo: 'https://ai-based-query-support-system-1.onrender.com/',
    },
    {
      title: 'Email Content Classifier',
      description: 'Machine learning system for automatic email content classification and categorization.',
      techStack: ['Python', 'NLP', 'scikit-learn', 'Jupyter'],
      github: 'https://github.com/Venkat-023/Email-Content-Classifier',
      category: 'NLP',
    },
    // Computer Vision
    {
      title: 'Artificial Face Generator (DCGAN)',
      description: 'GAN trained on CelebA dataset to synthesize realistic human face images. Includes dataset downloading, preprocessing, and model construction.',
      techStack: ['TensorFlow', 'DCGAN', 'CelebA', 'Deep Learning'],
      github: 'https://github.com/Venkat-023/Artificial-Face-Generator-DCGAN',
      category: 'Deep Learning',
    },
    {
      title: 'Rice Leaf Disease Detection',
      description: 'Deep learning web app for automatic rice leaf disease detection using U-Net segmentation + CNN classification with Streamlit.',
      techStack: ['U-Net', 'CNN', 'Streamlit', 'OpenCV', 'TensorFlow'],
      github: 'https://github.com/Venkat-023/Rice-Leaf-Disease-Detection-Classification',
      category: 'Computer Vision',
    },
    {
      title: 'GreenGuard AI',
      description: 'Plant disease detection and health monitoring system using UGNet for precise leaf and disease segmentation.',
      techStack: ['UGNet', 'Deep Learning', 'Computer Vision', 'Segmentation'],
      github: 'https://github.com/Venkat-023/GreenGaurd-Ai',
      category: 'Computer Vision',
    },
    {
      title: 'Hand Cricket Gestures CNN',
      description: 'Hand gesture classification for cricket signals using custom CNN. 97% accuracy with TensorFlow/Keras and MediaPipe.',
      techStack: ['TensorFlow', 'Keras', 'MediaPipe', 'CNN'],
      github: 'https://github.com/Venkat-023/Hand_Cricket_Gestures_CNN',
      category: 'Computer Vision',
      highlight: '97% Accuracy',
    },
    {
      title: 'Pneumonia X-Ray Detection',
      description: 'Custom CNN for pneumonia detection from chest X-ray images. 99.90% validation accuracy without overfitting.',
      techStack: ['TensorFlow', 'CNN', 'Medical Imaging', 'Keras'],
      github: 'https://github.com/Venkat-023/Pneumonia-Xray-Detection',
      category: 'Medical AI',
      highlight: '99.9% Accuracy',
    },
    {
      title: 'MNIST Digit Classification (ANN)',
      description: 'Fully connected ANN achieving 97.84% accuracy on the MNIST dataset for handwritten digit classification.',
      techStack: ['TensorFlow', 'Keras', 'ANN', 'Deep Learning'],
      github: 'https://github.com/Venkat-023/MNIST-Digit-Classification-with-Artificial-Neural-Network',
      category: 'Deep Learning',
      highlight: '97.84% Accuracy',
    },
    // Robotics
    {
      title: 'Robotic Surgical Gesture Recognition',
      description: 'Deep learning framework for automatic surgical gesture identification using 3D CNNs for video-based gesture classification.',
      techStack: ['3D CNN', 'TensorFlow', 'Video Processing', 'Deep Learning'],
      github: 'https://github.com/Venkat-023/Robotic-Surgical-Gesture-Recognition-Using-Deep-Learning-',
      category: 'Deep Learning',
    },
    // ML Projects
    {
      title: 'Power Consumption Regressor',
      description: 'Full-stack ML project comparing XGBoost, Gradient Boosting and other regression models. FastAPI backend for predictions.',
      techStack: ['XGBoost', 'FastAPI', 'scikit-learn', 'Pandas'],
      github: 'https://github.com/Venkat-023/Power-Consumption-Regressor',
      category: 'Full Stack ML',
      demo: 'https://huggingface.co/spaces/Venkat-023/Power-Consumption-Regressor',
    },
    {
      title: 'Amazon ML Hackathon 2025',
      description: 'Product Price Prediction — Rank 1.6K / 82K registrations. Final SMAPE Score: 51.4 using ensemble methods.',
      techStack: ['Python', 'XGBoost', 'Ensemble Methods', 'Pandas'],
      github: 'https://github.com/Venkat-023/Amazon_MachineLearning-Hackathon',
      category: 'Machine Learning',
      highlight: 'Rank 1693/82K',
    },
    {
      title: 'Heart Risk Analysis & Prediction',
      description: 'Heart disease risk prediction with thorough EDA, PCA dimensionality reduction, and model evaluation.',
      techStack: ['scikit-learn', 'Pandas', 'Matplotlib', 'PCA'],
      github: 'https://github.com/Venkat-023/Heart_Risk_Analysis-Predction',
      category: 'Medical AI',
    },
    {
      title: 'Heart Disease Prediction',
      description: '93.85% accuracy with KNN and Random Forest after tuning with RandomizedSearchCV. Includes detailed EDA.',
      techStack: ['scikit-learn', 'KNN', 'Random Forest', 'Pandas'],
      github: 'https://github.com/Venkat-023/Heart_Disease_Prediction',
      category: 'Medical AI',
      highlight: '93.85% Accuracy',
    },
    {
      title: 'Thyroid Cancer Prediction',
      description: 'ML pipeline for thyroid cancer prediction using ensemble methods with comprehensive data cleaning and hyperparameter tuning.',
      techStack: ['scikit-learn', 'Ensemble Methods', 'Deep Learning', 'Pandas'],
      github: 'https://github.com/Venkat-023/Thyroid-Cancer-Prediction',
      category: 'Medical AI',
    },
    {
      title: 'Breast Cancer Prediction',
      description: 'Dual-approach system using ML (KNN, RF, Logistic) and Deep Learning (ANN with Keras) with hyperparameter tuning.',
      techStack: ['Keras', 'scikit-learn', 'ANN', 'Random Forest'],
      github: 'https://github.com/Venkat-023/Breast_Cancer_Prediction',
      category: 'Medical AI',
    },
    {
      title: 'Loan Approval Prediction',
      description: 'Loan default prediction using stacking ensemble with Random Forest, Logistic Regression, and feature selection.',
      techStack: ['scikit-learn', 'Stacking Ensemble', 'Pandas', 'EDA'],
      github: 'https://github.com/Venkat-023/Loan_Approval_Prediction',
      category: 'Machine Learning',
    },
    {
      title: 'Movie Recommendation System',
      description: 'Film recommendation using KNN algorithm on genre data with Streamlit UI for interactive exploration.',
      techStack: ['KNN', 'Streamlit', 'scikit-learn', 'Python'],
      github: 'https://github.com/Venkat-023/Movie_Recomandation_System',
      category: 'Machine Learning',
    },
    {
      title: 'Human Activity Analysis',
      description: 'Sensor signal classification for physical activities using ML with EDA, PCA, and model evaluation.',
      techStack: ['scikit-learn', 'PCA', 'Pandas', 'Seaborn'],
      github: 'https://github.com/Venkat-023/Human_Activity_Analysis',
      category: 'Machine Learning',
    },
    {
      title: 'Subscription Churn Prediction',
      description: 'Customer churn prediction for targeted retention strategies using classification models.',
      techStack: ['scikit-learn', 'Pandas', 'Classification', 'EDA'],
      github: 'https://github.com/Venkat-023/Subscription_Analysis-Prediction',
      category: 'Machine Learning',
    },
    {
      title: 'Weather Classification & Prediction',
      description: 'Classifies weather into Sunny, Cloudy, Partly Cloudy, and Rainy based on humidity, altitude, and region features.',
      techStack: ['scikit-learn', 'Pandas', 'Classification', 'Matplotlib'],
      github: 'https://github.com/Venkat-023/Weather_Classification_Prediction',
      category: 'Machine Learning',
    },
    // Cybersecurity
    {
      title: 'CipherFlow',
      description: 'Cybersecurity-focused project for encrypted communication flow analysis and security monitoring.',
      techStack: ['Python', 'JavaScript', 'Cybersecurity', 'Encryption'],
      github: 'https://github.com/Venkat-023/CipherFlow',
      category: 'Cybersecurity',
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const baseFiltered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  const filteredProjects = [...baseFiltered].sort((a, b) => Number(!!b.demo) - Number(!!a.demo));

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Computer Vision': <Eye className="w-5 h-5" />,
      'NLP': <Brain className="w-5 h-5" />,
      'Deep Learning': <Cpu className="w-5 h-5" />,
      'Machine Learning': <BarChart3 className="w-5 h-5" />,
      'Medical AI': <Heart className="w-5 h-5" />,
      'Full Stack ML': <Zap className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Reinforcement Learning': <Bot className="w-5 h-5" />,
    };
    return icons[category] || <FlaskConical className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {projects.length} AI/ML projects across multiple domains
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-primary text-primary-foreground glow-cyan'
                  : 'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50'
              }`}
            >
              {cat} {cat !== 'All' && `(${projects.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover-lift group border border-border/50 hover:border-primary/50 transition-all animate-fade-in flex flex-col"
              style={{ animationDelay: `${(index % 9) * 0.05}s` }}
            >
              <div className="flex-1 space-y-4">
                {/* Category & Highlight */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-medium bg-muted/50 text-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-border/30 flex gap-2">
                <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold mb-4 text-gradient-cyan">
            Want to see more?
          </h3>
          <p className="text-muted-foreground mb-6">
            Explore all my repositories on GitHub
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
            <a href="https://github.com/Venkat-023?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
