import SectionHeading from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, BrainCircuit } from "lucide-react";

const skillCategories = [
    {
        title: "Languages & Databases",
        icon: <Code className="h-6 w-6" />,
        skills: ["Python", "SQL", "R", "MySQL", "PostgreSQL"]
    },
    {
        title: "Libraries & Tools",
        icon: <BrainCircuit className="h-6 w-6" />,
        skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "Jupyter"]
    },
    {
        title: "BI & Visualization",
        icon: <BarChart3 className="h-6 w-6" />,
        skills: ["Power BI", "Tableau", "Excel", "DAX"]
    },
    {
        title: "Data Engineering & Other",
        icon: <Database className="h-6 w-6" />,
        skills: ["ETL", "Git & GitHub", "Docker", "Data Warehousing"]
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-secondary/30 dark:bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading className="items-start text-left !mb-6">Skills</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <Card key={category.title} className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <span className="text-primary">{category.icon}</span>
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2 flex-grow">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm">
                                        {skill}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
