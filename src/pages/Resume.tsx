import { Download, Github, Code2, Linkedin, Mail, Phone } from 'lucide-react';
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
            <a
              href="https://github.com/Venkat-023?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-primary hover:glow-cyan transition-all"
            >
              <Github className="text-primary" size={24} />
              <span className="font-semibold">GitHub - 25+ Projects</span>
            </a>
            <a
              href="https://leetcode.com/u/Venkat_Baba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-accent hover:glow-orange transition-all"
            >
              <Code2 className="text-accent" size={24} />
              <span className="font-semibold">LeetCode - 650+ Solved</span>
            </a>
            <a
              href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6bems%2BcLQtmzBT1UYU7wWQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-secondary hover:glow-blue transition-all"
            >
              <Linkedin className="text-secondary" size={24} />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          <Button size="lg" className="mt-6 bg-primary hover:bg-primary/90 glow-cyan">
            <Download className="mr-2" size={20} />
            Download PDF Resume
          </Button>
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
              <p className="text-muted-foreground">Python (Proficient), Java (College level), C (Basics)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Data Structures & Algorithms</h3>
              <p className="text-muted-foreground">Strong foundation with hands-on experience; solved over 650+ problems on LeetCode</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">Data Preprocessing, EDA, Visualization, PCA, Model Training/Evaluation using scikit-learn, pandas, and TensorFlow</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Deep Learning</h3>
              <p className="text-muted-foreground">Proficient in ANN, CNN, RNN, and LSTM architectures; applied to NLP and computer vision using TensorFlow, Keras, and OpenCV</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Libraries & Tools</h3>
              <p className="text-muted-foreground">scikit-learn, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn, OpenCV, Plotly, MySQL, Power BI, GitHub</p>
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
                <li>Engineered dual custom CNNs achieving 99.94% (face) and 99.71% (eye) accuracy</li>
                <li>Integrated OpenCV, Haar Cascades, and MediaPipe for real-time detection</li>
                <li>Designed threshold-based alert mechanism with interactive validation</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">KCET Rank Prediction & College Recommendation System</h3>
              <p className="text-sm text-muted-foreground mb-3">AI-powered web system for predicting KCET ranks</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Developed ML model (Gradient Boosting, R² = 0.9996) using historical KEA data</li>
                <li>Built personalized recommendation engine filtering by Branch, Location, College type</li>
                <li>Deployed on Render with Streamlit for intuitive UI</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">SignSpeak Real-Time ASL Recognition</h3>
              <p className="text-sm text-muted-foreground mb-3">Live ASL alphabet translation using custom CNN</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Built real-time ASL recognition achieving over 94% accuracy</li>
                <li>Designed and trained 15+ CNN models using TensorFlow/Keras</li>
                <li>Developed dynamic prediction pipeline with OpenCV for live output</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Achievements & Summary</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Ranked #1693 / 82,790 in the Amazon ML Hackathon 2025 (Product Price Prediction)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Demonstrated strong problem-solving through 650+ LeetCode challenges and 25+ end-to-end AI/ML projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Developed intelligent systems across Medical, Cybersecurity, Automobile, Educational, Robotics, Agriculture, and Sales domains</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
