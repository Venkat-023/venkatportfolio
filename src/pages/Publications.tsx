import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      title:
        'Intelligent Forecasting of Power Consumption of Smart Grids with Machine Learning and Full-Stack Implementation on Machine Learning',
      date: 'Mar 30, 2026',
      abstract:
        'Understanding the amount of electricity that people will consume becomes extremely important in operating a smart grid, scheduling the utilization of renewable energy, as well as ensuring that the entire process remains stable. In this project, we employed machine-learning based on the forecasting of electricity demand based on a 5 year history of hourly smart-grid data. We compared ensemble models such as Random Forest, Extra Trees, Gradient Boosting, LightGBM, and XGBoost using MAE and RMSE. XGBoost presented the lowest MAE of 2236.70, and Gradient Boosting presented the lowest RMSE of 3192.55. A full-stack system consisting of FastAPI (backend) and Streamlit (frontend) was used to deploy the winning model. The system achieves MAE not much more than 2.7% of the average demand, demonstrating that machine learning may be used to forecast smart-grid use in real-time.',
      techStack: ['XGBoost', 'LightGBM', 'FastAPI', 'Streamlit', 'Optuna', 'scikit-learn'],
      link: 'http://hbrppublication.com/OJS/index.php/JACNS/article/view/9490',
    },
    {
      title:
        'Stock Price Prediction using Deep Learning Models: A Comparative Study of LSTM, GRU, Bi-LSTM, and Hybrid Architectures',
      date: 'May 2026',
      venue: 'International Research Journal of Engineering and Technology (IRJET), Volume 13, Issue 05, S.No: 57',
      abstract:
        'A comparative study of deep learning architectures for stock price prediction, evaluating LSTM, GRU, Bi-LSTM, and hybrid models on historical market data. The work benchmarks each architecture on forecasting accuracy and stability, analyzing how sequence modeling choices and hybridization influence predictive performance for financial time-series.',
      techStack: ['LSTM', 'GRU', 'Bi-LSTM', 'Hybrid Models', 'TensorFlow', 'Keras', 'Python'],
      link: 'https://www.irjet.net/archives/V13/i5/IRJET-V13I0557.pdf',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Publications
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Research papers and academic contributions
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border-2 border-primary/30 hover:border-primary transition-all animate-fade-in hover-lift"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-bold text-foreground leading-tight">
                      {pub.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.date}</span>
                    </div>
                  </div>
                </div>

                {pub.authors && (
                  <p className="text-sm text-foreground/80"><span className="text-muted-foreground">Authors: </span>{pub.authors}</p>
                )}
                {pub.venue && (
                  <p className="text-sm text-primary/90 font-medium">{pub.venue}</p>
                )}

                <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Paper
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
