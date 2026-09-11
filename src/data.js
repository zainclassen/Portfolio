import {
  Code2, Brain, Server, GitBranch, Cpu, BarChart3, Cloud, Layers, Terminal,
  Award, Mail, Phone, MapPin, Linkedin, Globe,
  MessageSquare, PenTool, Sparkles, Bot, LineChart, HeartPulse, Stethoscope,
} from 'lucide-react'
import introductionToAi from './components/Certificates/ZAin_Classen_Introduction_to_Ai.pdf'
import prompting from './components/Certificates/Zain_Classen_Discover_the_Art_of_Prompting.pdf'
import productivity from './components/Certificates/Zain_Classen_MaximizenProductivity_WIth_Ai_Tools.pdf'
import aiForEveryone from './components/Certificates/Zain_Classen_Ai_for_everyone.pdf'
import promptEngineering from './components/Certificates/Zain_Classen_Generative_AI_Prompt_Engineering_Basics.pdf'
import stayAhead from './components/Certificates/Zain_Classen_Stay_Ahead_of_the_Ai_Curve.pdf'
import responsibleAi from './components/Certificates/Zain_Clasen_Use_Ai_responsibly.pdf'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const externalLinks = {
  livePortfolio: 'https://zain-classen-portfolio.netlify.app',
  linkedin: 'https://www.linkedin.com/in/zainclassen/',
  cv: '/Zain_Classen_CV.html',
}

export const heroHighlights = [
  { icon: Brain, label: 'Applied AI Practitioner' },
]

export const skills = [
  { name: 'Python', icon: Terminal },
  { name: 'NumPy', icon: Cpu },
  { name: 'pandas', icon: BarChart3 },
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Server },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Sparkles },
  { name: 'REST APIs', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'scikit-learn', icon: Brain },
  { name: 'NLTK', icon: MessageSquare },
]

export const workItems = [
  {
    title: 'Tech Support Chatbot',
    role: 'AI Marketing Assistant',
    icon: Bot,
    description: 'A conversational AI assistant featuring real-time natural language processing, streaming response generation, and custom context memory handling.',
    techStack: ['React', 'Node.js', 'Python', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/zainclassen/AiChatBot',
    liveDemo: 'https://whitesmoke-profuse-searchengine--zainclassen.replit.app/',
  },
  {
    title: 'Content Forge',
    role: 'AI Content Marketing Tool',
    icon: PenTool,
    description: 'A dynamic content generation dashboard featuring live preview drawers, customized export toolbars, real-time token tracking counters, and dark mode controls.',
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Express', 'REST API'],
    github: 'https://github.com/zainclassen/ContentForge',
    liveDemo: 'https://ai-content-generator-h1db.bolt.host',
  },
  {
    title: 'Social Media Sentiment Analysis',
    role: 'AI Marketing Analytics',
    icon: LineChart,
    description: 'A data processing pipeline and model that classifies social media posts into sentiment categories using text preprocessing, feature extraction, and classification algorithms.',
    techStack: ['Python', 'NumPy', 'pandas', 'scikit-learn', 'NLTK'],
    liveDemo: 'https://social-media-sentime-ehtf.bolt.host',
  },
  {
    title: 'MediGuide',
    role: 'AI Healthcare Triage',
    icon: Stethoscope,
    description: 'An AI-powered healthcare triage assistant that helps users assess symptoms, understand potential conditions, and navigate to appropriate care with safety-first guidance.',
    techStack: ['React', 'Tailwind CSS', 'OpenAI API'],
    liveDemo: 'https://healthcare-ai-triage-7nxv.bolt.host/#safety',
  },
]

export const certificates = [
  {
    name: 'Google AI Essentials',
    organization: 'Google / Coursera',
    date: 'Aug 19, 2026',
    icon: Award,
    link: '/certificates/Zain_Classen_Google_Ai_Essentiials.pdf',
  },
  {
    name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    organization: 'DeepLearning.AI / Stanford Online',
    date: 'Sep 3, 2026',
    icon: Brain,
    link: '/certificates/Zain_Classen_Unsupervised_Learning.pdf',
  },
  {
    name: 'Maximize Productivity With AI Tools',
    organization: 'Google / Coursera',
    date: 'Aug 19, 2026',
    icon: Sparkles,
    link: productivity,
  },
  {
    name: 'Introduction to AI',
    organization: 'Google / Coursera',
    date: 'Aug 18, 2026',
    icon: Brain,
    link: introductionToAi,
  },
  {
    name: 'Discover the Art of Prompting',
    organization: 'Google / Coursera',
    date: 'Aug 19, 2026',
    icon: MessageSquare,
    link: prompting,
  },
  {
    name: 'AI for Everyone',
    organization: 'DeepLearning.AI / Coursera',
    date: 'Aug 21, 2026',
    icon: Brain,
    link: aiForEveryone,
  },
  {
    name: 'Generative AI: Prompt Engineering Basics',
    organization: 'IBM / Coursera',
    date: 'Aug 21, 2026',
    icon: Sparkles,
    link: promptEngineering,
  },
  {
    name: 'Stay Ahead of the AI Curve',
    organization: 'Google / Coursera',
    date: 'Aug 19, 2026',
    icon: Award,
    link: stayAhead,
  },
  {
    name: 'Use AI Responsibly',
    organization: 'Google / Coursera',
    date: 'Aug 19, 2026',
    icon: Award,
    link: responsibleAi,
  },
]

export const contactInfo = [
  { label: 'Email', value: 'zainclassen9@gmail.com', icon: Mail, href: 'mailto:zainclassen9@gmail.com' },
  { label: 'Phone', value: '+27 63 174 4273', icon: Phone, href: 'tel:+27631744273' },
  { label: 'Location', value: 'Cape Town, South Africa', icon: MapPin, href: null },
  { label: 'LinkedIn', value: 'Zain Classen', icon: Linkedin, href: 'https://www.linkedin.com/in/zainclassen/' },
]

export const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/zainclassen/' },
  { label: 'Live Portfolio', icon: Globe, href: 'https://zain-classen-portfolio.netlify.app' },
]
