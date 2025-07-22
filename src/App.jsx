import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  Briefcase,
  Code,
  Brain,
  Cloud,
  Database,
  Globe,
  Users,
  Zap,
  Target,
  BookOpen,
  Calendar,
  Star
} from 'lucide-react'
import './App.css'

// Import images
import ryanHeadshot from './assets/image1.jpg'
import foxLogo from './assets/image2.jpg'
import mitLogo from './assets/image3.png'
import aiIcon from './assets/image4.png'
import mitLogoFull from './assets/mit-logo.png'
import awsLogo from './assets/aws-logo.png'
import azureLogo from './assets/azure-logo.png'
import gcpLogo from './assets/gcp-logo.png'
import ibmLogo from './assets/ibm-logo.png'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation 
          isDark={isDark} 
          setIsDark={setIsDark} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

function Navigation({ isDark, setIsDark, isMenuOpen, setIsMenuOpen }) {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={foxLogo} alt="FoxOnAI Logo" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-xl">FoxOnAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="ml-4"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="mr-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">
                AI & Cloud Solutions Expert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to{' '}
                <span className="text-primary">FoxOnAI</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming businesses through intelligent AI solutions and cutting-edge cloud architecture. 
                Led by Ryan Dear, a seasoned expert in machine learning, cloud computing, and enterprise technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/services">
                    Explore Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src={ryanHeadshot} 
                  alt="Ryan Dear - AI & Cloud Solutions Expert" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl transform scale-110"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and cloud solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Custom AI solutions, model development, and intelligent automation"
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "Scalable cloud infrastructure design and migration strategies"
              },
              {
                icon: Database,
                title: "Data Engineering",
                description: "Data pipeline development and analytics platform implementation"
              },
              {
                icon: Code,
                title: "Software Development",
                description: "Full-stack development with modern frameworks and best practices"
              },
              {
                icon: Users,
                title: "Consulting",
                description: "Strategic technology consulting and digital transformation guidance"
              },
              {
                icon: Zap,
                title: "Automation",
                description: "Process automation and workflow optimization solutions"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how AI and cloud solutions can drive your success
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started Today <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Ryan Dear</h1>
          <p className="text-xl text-muted-foreground">
            AI & Cloud Solutions Expert | Technology Leader | Innovation Driver
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <img 
              src={ryanHeadshot} 
              alt="Ryan Dear" 
              className="w-full rounded-2xl shadow-lg mb-6"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Ryan Dear</h3>
              <p className="text-muted-foreground">Founder & CEO, FoxOnAI</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                With over a decade of experience in artificial intelligence, cloud computing, and enterprise technology, 
                Ryan Dear has established himself as a leading expert in transforming businesses through intelligent solutions.
              </p>
              
              <p>
                Ryan's journey began with a deep fascination for machine learning and data science, which led him to pursue 
                advanced studies at MIT and obtain multiple certifications from leading cloud providers including AWS, Azure, 
                Google Cloud, and IBM.
              </p>

              <p>
                As the founder of FoxOnAI, Ryan combines technical expertise with strategic business acumen to deliver 
                solutions that not only solve complex problems but also drive measurable business value. His approach 
                focuses on understanding each client's unique challenges and crafting tailored solutions that scale with their growth.
              </p>

              <h3>Core Expertise</h3>
              <ul>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Cloud Architecture & Migration</li>
                <li>Data Engineering & Analytics</li>
                <li>Enterprise Software Development</li>
                <li>Digital Transformation Strategy</li>
                <li>Process Automation & Optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Mission & Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Mission</h4>
                  <p className="text-muted-foreground">
                    To democratize access to cutting-edge AI and cloud technologies, empowering businesses 
                    of all sizes to harness the power of intelligent automation and scalable infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Vision</h4>
                  <p className="text-muted-foreground">
                    A future where every organization can leverage AI and cloud computing to solve complex 
                    challenges, drive innovation, and create meaningful impact in their industries.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions tailored to your business needs",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Strategy Consulting"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable and secure cloud infrastructure design",
      features: [
        "Cloud Migration Strategy",
        "Multi-Cloud Architecture",
        "Serverless Solutions",
        "Container Orchestration",
        "Cloud Security Implementation"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data pipelines and analytics platforms",
      features: [
        "Data Pipeline Development",
        "Real-time Analytics",
        "Data Warehouse Design",
        "ETL/ELT Processes",
        "Data Governance"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development with modern technologies",
      features: [
        "Web Application Development",
        "API Design & Development",
        "Mobile App Development",
        "Microservices Architecture",
        "DevOps Implementation"
      ]
    },
    {
      icon: Users,
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Architecture Review",
        "Team Training & Mentoring",
        "Technology Assessment"
      ]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation for operational efficiency",
      features: [
        "Workflow Automation",
        "RPA Implementation",
        "Business Process Optimization",
        "Integration Solutions",
        "Performance Monitoring"
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI and cloud solutions designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Let's discuss how our services can help transform your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

function PortfolioPage() {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description: "Developed a comprehensive AI platform for a Fortune 500 company, enabling automated decision-making and predictive analytics across multiple business units.",
      technologies: ["Python", "TensorFlow", "AWS", "Kubernetes", "React"],
      category: "AI/ML"
    },
    {
      title: "Cloud Migration Strategy",
      description: "Led the complete cloud migration of a legacy enterprise system, resulting in 40% cost reduction and 99.9% uptime improvement.",
      technologies: ["AWS", "Docker", "Terraform", "Jenkins", "PostgreSQL"],
      category: "Cloud"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a real-time analytics platform processing millions of events per day, providing actionable insights for business stakeholders.",
      technologies: ["Apache Kafka", "Elasticsearch", "React", "D3.js", "Python"],
      category: "Data Engineering"
    },
    {
      title: "Intelligent Automation Suite",
      description: "Implemented RPA and AI-powered automation solutions, reducing manual processing time by 80% and improving accuracy.",
      technologies: ["UiPath", "Python", "Azure", "Power BI", "SQL Server"],
      category: "Automation"
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Designed and implemented a multi-cloud strategy ensuring high availability and disaster recovery across AWS, Azure, and GCP.",
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      category: "Cloud"
    },
    {
      title: "Machine Learning Pipeline",
      description: "Created an end-to-end ML pipeline for predictive maintenance, reducing equipment downtime by 60% and maintenance costs by 35%.",
      technologies: ["Python", "MLflow", "Apache Airflow", "Docker", "PostgreSQL"],
      category: "AI/ML"
    }
  ]

  const categories = ["All", "AI/ML", "Cloud", "Data Engineering", "Automation"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing successful implementations of AI and cloud solutions across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise: Trends and Predictions for 2024",
      excerpt: "Exploring the latest developments in artificial intelligence and their impact on enterprise operations, from generative AI to autonomous systems.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI/ML"
    },
    {
      title: "Cloud-Native Architecture: Best Practices for Scalable Applications",
      excerpt: "A comprehensive guide to designing and implementing cloud-native applications that scale efficiently and maintain high availability.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Cloud"
    },
    {
      title: "Data Engineering in the Age of Real-Time Analytics",
      excerpt: "How modern data engineering practices are evolving to support real-time analytics and decision-making in fast-paced business environments.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Data"
    },
    {
      title: "Implementing MLOps: From Model Development to Production",
      excerpt: "A practical approach to implementing MLOps practices that ensure reliable, scalable, and maintainable machine learning systems.",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "AI/ML"
    },
    {
      title: "Multi-Cloud Strategy: Benefits, Challenges, and Implementation",
      excerpt: "Understanding the advantages and complexities of multi-cloud architectures and how to implement them effectively.",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "Cloud"
    },
    {
      title: "Automation in Modern Software Development: Tools and Techniques",
      excerpt: "Exploring the latest automation tools and techniques that are transforming software development workflows and improving productivity.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Automation"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">FoxOnAI Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tutorials, and thoughts on AI, cloud computing, and technology trends
          </p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card>
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for the latest insights and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg">
                Subscribe Now <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

function CertificationsPage() {
  const certifications = [
    {
      name: "MIT Machine Learning Certificate",
      issuer: "Massachusetts Institute of Technology",
      logo: mitLogoFull,
      date: "2023",
      description: "Advanced machine learning concepts and applications"
    },
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      logo: awsLogo,
      date: "2023",
      description: "Advanced AWS cloud architecture and solutions design"
    },
    {
      name: "Microsoft Azure Solutions Architect Expert",
      issuer: "Microsoft",
      logo: azureLogo,
      date: "2023",
      description: "Expert-level Azure cloud solutions and architecture"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      logo: gcpLogo,
      date: "2022",
      description: "Professional-level GCP architecture and design"
    },
    {
      name: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      logo: ibmLogo,
      date: "2022",
      description: "Comprehensive AI and machine learning engineering"
    }
  ]

  const skills = [
    { name: "Machine Learning", level: 95 },
    { name: "Cloud Architecture", level: 92 },
    { name: "Data Engineering", level: 88 },
    { name: "Python", level: 94 },
    { name: "AWS", level: 90 },
    { name: "Azure", level: 87 },
    { name: "Google Cloud", level: 85 },
    { name: "Kubernetes", level: 83 },
    { name: "TensorFlow", level: 89 },
    { name: "React", level: 86 }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certifications & Skills</h1>
          <p className="text-xl text-muted-foreground">
            Professional certifications and technical expertise in AI and cloud technologies
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className="h-16 w-auto mx-auto mb-4 object-contain"
                    />
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline" className="mb-3">{cert.date}</Badge>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform your business with AI and cloud solutions? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach out and connect
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ryan@foxonai.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Book a time directly with Ryan Dear via Google Calendar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2fAJNPgav55so39nVnIsOtavvhMrnISXhfu27LnIAFq-sEjFow-8R6poYgsGSRqn_dsVThnXwv?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/fox-logo.png" alt="FoxOnAI Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-xl">FoxOnAI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transforming businesses through intelligent AI solutions and cutting-edge cloud architecture.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 FoxOnAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App

