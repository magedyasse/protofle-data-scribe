
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Download
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and approach to data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-in">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <User size={120} className="text-white" />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <ProfileItem icon={<User size={18} />} text="John Doe" />
                  <ProfileItem icon={<Mail size={18} />} text="john.doe@example.com" />
                  <ProfileItem icon={<Phone size={18} />} text="+1 (555) 123-4567" />
                  <ProfileItem icon={<MapPin size={18} />} text="San Francisco, CA" />
                </div>

                <div className="flex space-x-3 mt-6">
                  <SocialButton icon={<Linkedin size={18} />} />
                  <SocialButton icon={<Github size={18} />} />
                  <SocialButton icon={<Twitter size={18} />} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Data Analyst & Visualization Expert</h3>
              
              <p className="text-foreground/80">
                I'm a passionate data analyst with 5+ years of experience translating complex 
                datasets into clear, actionable business insights. My approach combines 
                strong technical skills with business acumen to deliver data-driven solutions
                that create real value.
              </p>
              
              <p className="text-foreground/80">
                Throughout my career, I've collaborated with cross-functional teams to
                implement data strategies that have improved decision-making processes,
                identified growth opportunities, and optimized operational efficiency.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Education</h4>
                <div className="space-y-2">
                  <EducationItem 
                    degree="Master of Science in Data Analytics" 
                    school="University of Data Science"
                    year="2017-2019"
                  />
                  <EducationItem 
                    degree="Bachelor of Science in Statistics" 
                    school="State University"
                    year="2013-2017"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Google Data Analytics</Badge>
                  <Badge variant="outline">IBM Data Science Professional</Badge>
                  <Badge variant="outline">Tableau Desktop Specialist</Badge>
                  <Badge variant="outline">Power BI Data Analyst</Badge>
                  <Badge variant="outline">SQL Advanced Certification</Badge>
                </div>
              </div>

              <Button className="gap-2 mt-4">
                Download Resume <Download size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-primary">{icon}</div>
    <span>{text}</span>
  </div>
);

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <Button variant="outline" size="icon" className="rounded-full">
    {icon}
  </Button>
);

const EducationItem = ({ degree, school, year }: { degree: string; school: string; year: string }) => (
  <div>
    <h5 className="font-medium">{degree}</h5>
    <p className="text-sm text-muted-foreground">{school} • {year}</p>
  </div>
);

export default About;
