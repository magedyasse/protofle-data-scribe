
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Dashboard',
      description: 'Interactive sales analysis dashboard with forecasting models and regional breakdowns to identify growth opportunities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      tags: ['Tableau', 'SQL', 'Excel'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'K-means clustering algorithm to segment customers based on purchasing behavior and demographic information.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Market Trends Forecasting',
      description: 'Time series analysis of market trends with ARIMA models to predict future performance and seasonal patterns.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1306&auto=format&fit=crop',
      tags: ['R', 'Python', 'Matplotlib'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Data-driven approach to optimize supply chain operations, reducing costs and improving delivery times.',
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1470&auto=format&fit=crop',
      tags: ['Power BI', 'Excel', 'SQL Server'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'A/B Testing Analysis',
      description: 'Statistical analysis of A/B test results to optimize website conversion rates and user engagement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      tags: ['Python', 'Pandas', 'Matplotlib'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Healthcare Data Analysis',
      description: 'Analysis of patient data to identify patterns and improve healthcare outcomes and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop',
      tags: ['Tableau', 'R', 'Excel'],
      demoLink: '#',
      repoLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of data analysis projects showcasing my skills in visualization,
            statistical analysis, and data-driven problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`animate-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
