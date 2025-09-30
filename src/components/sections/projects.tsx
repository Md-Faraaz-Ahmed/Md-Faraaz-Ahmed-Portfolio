import Image from 'next/image';
import SectionHeading from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 1,
    title: 'Interactive Sales Dashboard',
    description: 'Developed an end-to-end interactive dashboard in Power BI to visualize sales data, enabling stakeholders to track KPIs and identify trends in real-time.',
    tech: ['Power BI', 'DAX', 'SQL', 'ETL'],
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Customer Churn Prediction',
    description: 'Built a machine learning model to predict customer churn. The project involved data cleaning, feature engineering, and model evaluation to provide actionable insights for retention strategies.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    github: '#',
    live: '',
  },
  {
    id: 3,
    title: 'Automated Reporting Pipeline',
    description: 'Designed and implemented a basic ETL pipeline to automate the generation of weekly performance reports, reducing manual effort by 90% and ensuring timely data delivery.',
    tech: ['Python', 'SQL', 'Pandas', 'Task Scheduling'],
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    github: '#',
    live: '',
  },
  {
    id: 4,
    title: 'Exploratory Data Analysis on COVID-19',
    description: 'Conducted a comprehensive exploratory data analysis (EDA) on a global COVID-19 dataset, creating insightful visualizations with Plotly to highlight the pandemic\'s impact over time.',
    tech: ['Python', 'Plotly', 'Pandas', 'Data Analysis'],
    image: PlaceHolderImages.find(p => p.id === 'project-4'),
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
            <SectionHeading>My Projects</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {project.image && (
                    <div className="overflow-hidden">
                        <Image
                        src={project.image.imageUrl}
                        alt={project.title}
                        data-ai-hint={project.image.imageHint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                    </Button>
                    {project.live && (
                    <Button asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                    )}
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
