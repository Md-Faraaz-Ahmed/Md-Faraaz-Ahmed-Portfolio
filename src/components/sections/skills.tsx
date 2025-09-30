import SectionHeading from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Settings, BrainCircuit } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="h-6 w-6" />,
        skills: [
            { name: "Python", proficiency: 95 },
            { name: "SQL", proficiency: 90 },
            { name: "R", proficiency: 70 },
        ]
    },
    {
        title: "Libraries & Tools",
        icon: <BrainCircuit className="h-6 w-6" />,
        skills: [
            { name: "Pandas & NumPy", proficiency: 90 },
            { name: "Scikit-learn", proficiency: 80 },
            { name: "Matplotlib & Seaborn", proficiency: 85 },
            { name: "Plotly", proficiency: 80 },
        ]
    },
    {
        title: "BI & Visualization",
        icon: <BarChart3 className="h-6 w-6" />,
        skills: [
            { name: "Power BI", proficiency: 90 },
            { name: "Tableau", proficiency: 85 },
            { name: "Excel", proficiency: 95 },
        ]
    },
    {
        title: "Data Engineering & Other",
        icon: <Database className="h-6 w-6" />,
        skills: [
            { name: "ETL Basics", proficiency: 80 },
            { name: "Git & GitHub", proficiency: 85 },
            { name: "Docker", proficiency: 60 },
        ]
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-secondary/30 dark:bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading>Technical Skills</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <Card key={category.title} className="shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <span className="text-primary">{category.icon}</span>
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                                            <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
                                        </div>
                                        <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency`} />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
