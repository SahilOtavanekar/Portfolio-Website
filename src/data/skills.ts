export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Machine Learning',
    skills: [
      'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 
      'Decision Trees', 'Random Forest', 'SVM', 'Neural Networks', 
      'NLP', 'Computer Vision', 'Hyperparameter Tuning'
    ]
  },
  {
    title: 'Data Analysis',
    skills: [
      'Exploratory Data Analysis (EDA)', 'Statistical Modeling', 
      'Data Cleansing', 'Feature Engineering', 'Data Visualization', 
      'A/B Testing', 'Time Series Analysis', 'Predictive Modeling'
    ]
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      'Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 
      'TensorFlow', 'PyTorch', 'Jupyter', 'Streamlit', 'Plotly', 
      'Matplotlib', 'Git/GitHub', 'Docker'
    ]
  }
];
