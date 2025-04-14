
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  Database, 
  LineChart,
  GitBranch,
  ServerCog,
  PieChart,
  Workflow,
  TableProperties
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Data Analysis', level: 95 },
    { name: 'Data Visualization', level: 90 },
    { name: 'SQL & Database Management', level: 85 },
    { name: 'Python Programming', level: 80 },
    { name: 'Statistical Analysis', level: 88 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Excel & Spreadsheets', level: 95 },
    { name: 'Business Intelligence', level: 85 }
  ];

  const tools = [
    { name: 'Tableau', icon: <PieChart className="h-8 w-8 text-primary" /> },
    { name: 'Power BI', icon: <BarChart3 className="h-8 w-8 text-primary" /> },
    { name: 'SQL', icon: <Database className="h-8 w-8 text-primary" /> },
    { name: 'Python', icon: <LineChart className="h-8 w-8 text-primary" /> },
    { name: 'R', icon: <TableProperties className="h-8 w-8 text-primary" /> },
    { name: 'Excel', icon: <ServerCog className="h-8 w-8 text-primary" /> },
    { name: 'Git', icon: <GitBranch className="h-8 w-8 text-primary" /> },
    { name: 'Jupyter', icon: <Workflow className="h-8 w-8 text-primary" /> }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and tools I regularly use to transform raw data into meaningful insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-in">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <Card key={index} className="card-hover border border-border/50">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    {tool.icon}
                    <h4 className="mt-3 font-medium">{tool.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
