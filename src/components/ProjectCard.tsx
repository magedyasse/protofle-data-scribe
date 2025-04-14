
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  repoLink,
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoLink && (
          <Button variant="default" size="sm" className="gap-1" asChild>
            <a href={demoLink} target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={14} />
            </a>
          </Button>
        )}
        {repoLink && (
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <a href={repoLink} target="_blank" rel="noreferrer">
              Code <Github size={14} />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
