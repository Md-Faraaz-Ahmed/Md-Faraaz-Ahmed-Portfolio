import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  const interests = [
    'Data Storytelling & Visualization',
    'Dashboard Development & Automation',
    'ETL Pipelines and Data Warehousing',
    'Predictive Analytics & Machine Learning',
  ];

  return (
    <section id="about">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading>About Me</SectionHeading>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8 md:p-12 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate data analytics enthusiast currently pursuing my Bachelor's in Computer Science Engineering (Data Science). My journey into the world of data began with a fascination for uncovering hidden patterns and stories within complex datasets. I thrive on transforming raw information into clear, actionable insights that drive business decisions. My goal is to leverage my skills in Python, SQL, and data visualization to solve real-world problems and contribute to data-driven cultures.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary/90">My Core Interests</h3>
              <ul className="space-y-3">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
