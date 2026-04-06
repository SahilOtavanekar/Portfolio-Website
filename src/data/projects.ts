import { Activity, ShoppingBag, Search, LineChart, Bot, TrendingUp, BarChart } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: string[];
  liveLink?: string;
  githubLink: string;
  icon: any;
  problemStatement: string;
  approach: string;
  techniques: string[];
  keyResults: string[];
}

export const projects: ProjectData[] = [
  {
    id: 'monte-carlo-risk',
    title: 'Monte Carlo Portfolio Risk Assessment',
    shortDescription: 'Simulates financial portfolios to forecast possible future performance and potential risk using Monte Carlo simulation.',
    category: 'Finance',
    tags: ['Python', 'Streamlit', 'Monte Carlo', 'Pandas', 'Finance'],
    liveLink: 'https://monte-carlo-portfolio-risk-nse-59frlgqukmehh8pwfs5ecl.streamlit.app/',
    githubLink: 'https://github.com/SahilOtavanekar/monte-carlo-portfolio-risk-nse',
    icon: LineChart,
    problemStatement: 'Investors need to understand the potential risks and future variability of their portfolios to make informed decisions.',
    approach: 'Leveraged Monte Carlo simulation techniques by modeling the historical volatility and returns of NSE stocks to project thousands of potential future paths.',
    techniques: ['Monte Carlo Simulation', 'Stochastic Modeling', 'Data Visualization', 'Statistical Analysis'],
    keyResults: [
      'Successfully simulated 10,000 parallel market scenarios for multiple assets.',
      'Provided interactive risk assessment visualizations via a Streamlit web interface.',
      'Identified the 95% Confidence Interval for Value at Risk (VaR) in simulated portfolios.'
    ]
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Analysis Dashboard',
    shortDescription: 'Interactive dashboard analyzing factors driving customer churn to identify high-risk segments.',
    category: 'Dashboard',
    tags: ['Python', 'Streamlit', 'Data Analysis', 'Plotly', 'ML'],
    liveLink: 'https://sahilotavanekar-customer-churn-analysis-interactive--app-fqinpz.streamlit.app/',
    githubLink: 'https://github.com/SahilOtavanekar/Customer_Churn_Analysis_Interactive_Dashboard',
    icon: Activity,
    problemStatement: 'Businesses lose significant revenue when customers churn. Identifying the predictive features of churn is critical for retention strategies.',
    approach: 'Cleaned and transformed customer usage data to perform exploratory data analysis and build predictive indicators using machine learning algorithms.',
    techniques: ['Exploratory Data Analysis (EDA)', 'Feature Engineering', 'Logistic Regression', 'Dashboard Creation'],
    keyResults: [
      'Developed a comprehensive interactive visualization identifying top 3 factors for churn.',
      'Enabled business stakeholders to drill down into specific customer segments seamlessly.',
      'Deployed an easily accessible, real-time dashboard.'
    ]
  },
  {
    id: 'telegram-lead-generator',
    title: 'AI-Powered Telegram Lead Generator',
    shortDescription: 'Transforms natural language chat into a structured CRM by scraping Google Maps using Gemini 2.0 and Playwright.',
    category: 'AI & Automation',
    tags: ['Python', 'Gemini AI', 'Playwright', 'Airtable', 'Telegram Bot', 'Serverless'],
    liveLink: 'https://t.me/WebScraper46666_bot',
    githubLink: 'https://github.com/SahilOtavanekar/AI-Powered-Telegram-Lead-Generator',
    icon: Search,
    problemStatement: 'Manually finding and organizing business leads from maps is time-consuming and often requires complex scraping tools or rigid commands.',
    approach: 'Built a serverless Telegram bot using Gemini 2.0\'s function-calling to understand user intent, Playwright to scrape Google Maps in a headless browser, and Airtable as a central CRM database.',
    techniques: ['Google Gemini 2.0 Flash', 'Playwright Scraping', 'Airtable CRM Integration', 'Modal Serverless Hosting', 'Function Calling', 'Async Webhooks'],
    keyResults: [
      'Automated the lead generation process from natural language input to structured CRM storage.',
      'Integrated AI-driven intent routing to decide between new scraping or querying existing data.',
      'Deployed as a cloud-native serverless application on Modal with near-zero idle costs.',
      'Implemented robust scraping handling for EU cookie dialogs and direct redirects.'
    ]
  },
  {
    id: 'fashion-product',
    title: 'Fashion Product Recommendation',
    shortDescription: 'Visual similarity-based recommendation for fashion items using deep learning techniques.',
    category: 'Computer Vision',
    tags: ['Deep Learning', 'Computer Vision', 'CNN', 'Python', 'Streamlit'],
    liveLink: 'https://fashion-pdt-recommendation.streamlit.app/',
    githubLink: 'https://github.com/SahilOtavanekar/Fashion-Product-Recommendation',
    icon: ShoppingBag,
    problemStatement: 'E-commerce users often struggle to find visually similar clothing items using only text-based searches.',
    approach: 'Implemented Convolutional Neural Networks (ResNet) to extract high-dimensional visual features from fashion images for similarity matching.',
    techniques: ['CNNs (ResNet50)', 'Transfer Learning', 'Feature Extraction', 'K-Nearest Neighbors (KNN)'],
    keyResults: [
      'Successfully extracted 2048-dimensional feature vectors for over thousands of images.',
      'Reduced visual search time to sub-second responses using optimized KNN lookups.',
      'Integrated a user-friendly UI to discover products similar to a selected source item.'
    ]
  },
  {
    id: 'startup-funding-intel',
    title: 'Startup Funding Intelligence Platform',
    shortDescription: 'A full-stack BI tool predicting startup funding success using XGBoost and real-time interactive analytics.',
    category: 'Full Stack & ML',
    tags: ['React', 'FastAPI', 'XGBoost', 'Supabase', 'Docker', 'MLflow'],
    githubLink: 'https://github.com/SahilOtavanekar/Startup-Funding-Intelligence-Platform',
    icon: TrendingUp,
    problemStatement: 'Founders and investors often lack data-driven insights to predict a startup\'s likelihood of securing funding based on historical patterns and industry trends.',
    approach: 'Developed a full-stack intelligence platform that integrates an XGBoost classification model with a React frontend and FastAPI backend, using Supabase for structured data storage and MLflow for experiment tracking.',
    techniques: ['XGBoost Machine Learning', 'React Dashboard (Recharts)', 'FastAPI REST Service', 'Supabase PostgreSQL', 'MLflow Experiment Tracking', 'Docker Containerization'],
    keyResults: [
      'Achieved reliable funding predictions with feature importance explanations for better interpretability.',
      'Built an interactive Industry Intelligence dashboard for analyzing success rates and location trends.',
      'Streamlined development and deployment with a containerized environment using Docker Compose.',
      'Integrated a scalable database solution using Supabase for real-time startup data retrieval.'
    ]
  },
  {
    id: 'ai-medical-chatbot',
    title: 'Multimodal AI Medical Chatbot',
    shortDescription: 'AI-powered medical assistant for symptom interpretation with text, image, and voice capabilities.',
    category: 'Healthcare AI',
    tags: ['Next.js', 'FastAPI', 'Gemini AI', 'Python', 'Full Stack', 'Cloud'],
    liveLink: 'https://a-multimodal-ai-medical-chatbot-for-symptom-interpre-h6kz6c14s.vercel.app/',
    githubLink: 'https://github.com/SahilOtavanekar/A-Multimodal-AI-Medical-Chatbot-for-Symptom-Interpretation-and-Health-Awareness',
    icon: Bot,
    problemStatement: 'Lack of immediate, multimodal accessibility in healthcare awareness tools, often limited by text-only interfaces or lacking medical safety guardrails.',
    approach: 'Developed a responsive multimodal chatbot integrating Gemini 2.5 Flash for image analysis and text generation, with a secure FastAPI backend and Supabase integration.',
    techniques: ['Next.js (App Router)', 'FastAPI', 'Google Gemini 2.5 Flash', 'Supabase', 'Text-to-Speech (TTS)', 'Framer Motion'],
    keyResults: [
      'Implemented seamless multimodal analysis for medical images and symptoms.',
      'Integrated multilingual Text-to-Speech (English/Hindi) for enhanced accessibility.',
      'Established a secure, rate-limited backend with robust audit logging.',
      'Delivered a premium mobile-responsive UI with smooth interactive animations.'
    ]
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-Commerce Sales Analysis',
    shortDescription: 'End-to-end data pipeline & dashboard analyzing a real-world Brazilian e-commerce dataset for business insights.',
    category: 'Data Analysis & BI',
    tags: ['Power BI', 'PostgreSQL', 'DAX', 'Data Modeling', 'SQL'],
    githubLink: 'https://github.com/SahilOtavanekar/ecommerce-analytics-dashboard',
    icon: BarChart,
    problemStatement: 'E-commerce businesses need to extract actionable business insights related to sales performance, customer behavior, and operational efficiency from raw, multi-table transactional datasets.',
    approach: 'Performed end-to-end data handling: cleaned and transformed multiple relational tables using PostgreSQL, created a star schema model, and built an interactive Power BI dashboard with custom DAX measures.',
    techniques: ['Data Preprocessing', 'Star Schema Data Modeling', 'DAX Measures', 'Interactive Dashboards', 'SQL Joins'],
    keyResults: [
      'Cleaned and joined multi-table transactional records covering orders, customers, and payments.',
      'Developed custom DAX measures for total revenue, average order value (AOV), and YoY growth.',
      'Created an interactive 4-page Power BI dashboard for Executive, Time, Category, and Geographic analytics.',
      'Derived key insights showing revenue concentration and correlation between delivery performance and customer ratings.'
    ]
  }
];
