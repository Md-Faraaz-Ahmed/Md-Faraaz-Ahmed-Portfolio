import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart3, BrainCircuit } from "lucide-react";

const skillCategories = [
    {
        title: "Languages & Databases",
        icon: <Code className="h-6 w-6" />,
        skills: ["Python", "SQL", "R"]
    },
    {
        title: "Libraries & Tools",
        icon: <BrainCircuit className="h-6 w-6" />,
        skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "VS Code", "Git", "GitHub", "Firebase"]
    },
    {
        title: "BI & Visualization",
        icon: <BarChart3 className="h-6 w-6" />,
        skills: ["Power BI", "Tableau", "Excel", "DAX"]
    },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-secondary/30 dark:bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading className="items-start text-left !mb-8">Skills</SectionHeading>
                <div className="flex flex-col gap-10">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="flex flex-col space-y-4">
                             <h3 className="flex items-center gap-3 text-xl font-semibold text-primary/90">
                                <span className="text-primary">{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
