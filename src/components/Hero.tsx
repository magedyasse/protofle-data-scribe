
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BarChart2, Database, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <LineChart size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Database size={100} className="text-primary" />
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-10">
        <BarChart2 size={140} className="text-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-3 animate-in-fast">
            Data Analyst Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in">
            Transforming <span className="highlight-text">data</span> into 
            <br />actionable <span className="highlight-text">insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in-slow">
            Specializing in data analysis, visualization, and business intelligence to help
            organizations make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in-slow">
            <Button size="lg" className="gap-2">
              View Projects <ArrowDown size={16} className="animate-bounce" />
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard value="5+" label="Years Experience" />
            <StatCard value="30+" label="Projects Completed" />
            <StatCard value="15+" label="Visualizations" />
            <StatCard value="8+" label="Tools Mastered" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="p-4 rounded-lg animate-in-slow">
    <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

export default Hero;
