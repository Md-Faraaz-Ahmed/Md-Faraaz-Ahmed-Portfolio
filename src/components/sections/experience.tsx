import SectionHeading from "@/components/section-heading";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const timelineItems = [
    {
        icon: <GraduationCap className="h-5 w-5" />,
        date: "2023 - Present",
        title: "Master of Computer Applications",
        organization: "University College of Engineering, Osmania University",
        description: "Focusing on advanced data structures, algorithms, and software engineering principles with a specialization in data science and machine learning applications.",
    },
    {
        icon: <Briefcase className="h-5 w-5" />,
        date: "Summer 2024 (Upcoming)",
        title: "Data Analytics Intern",
        organization: "Tech Solutions Inc. (Hypothetical)",
        description: "Assisted the data science team with data cleaning, exploratory data analysis, and developing segments for a customer-facing sales dashboard.",
    },
    {
        icon: <Award className="h-5 w-5" />,
        date: "2023",
        title: "Google Data Analytics Professional Certificate",
        organization: "Coursera",
        description: "Completed a rigorous, hands-on program covering the entire data analysis lifecycle, from data collection and cleaning to analysis, visualization, and reporting.",
    },
    {
        icon: <GraduationCap className="h-5 w-5" />,
        date: "2020 - 2023",
        title: "Bachelor of Science in Computer Science",
        organization: "St. Mary's Centenary Degree College",
        description: "Built a strong foundation in computer science fundamentals, database management, and programming, graduating with honors.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-secondary/30 dark:bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading>Experience & Achievements</SectionHeading>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    <div className="relative space-y-12">
                        {timelineItems.map((item, index) => (
                            <div key={item.title} className="flex items-start gap-6 md:gap-12 relative">
                                <div className="hidden md:block flex-1 text-right">
                                    {index % 2 === 0 && (
                                        <div className="p-6 bg-card rounded-lg shadow-md border">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="font-semibold text-primary">{item.organization}</p>
                                            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                                    <span className="text-primary">{item.icon}</span>
                                </div>

                                <div className="flex-1 md:text-left">
                                     <p className="md:absolute md:-top-1 text-sm font-medium text-muted-foreground mb-2">
                                        {index % 2 === 0 ? ` ` : ` `}
                                        {item.date}
                                        {index % 2 !== 0 ? ` ` : ` `}
                                     </p>
                                    <div className={`p-6 bg-card rounded-lg shadow-md border ${index % 2 !== 0 ? '' : 'md:hidden'}`}>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="font-semibold text-primary">{item.organization}</p>
                                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                    </div>
                                    <div className={`p-6 bg-card rounded-lg shadow-md border ${index % 2 === 0 ? '' : 'hidden md:block'}`}>
                                       <div className="md:hidden">
                                           <h3 className="font-bold text-lg">{item.title}</h3>
                                           <p className="font-semibold text-primary">{item.organization}</p>
                                           <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                       </div>
                                       <div className="hidden md:block">
                                           {index % 2 !== 0 && (
                                                <div className="p-6 bg-card rounded-lg shadow-md border">
                                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                                    <p className="font-semibold text-primary">{item.organization}</p>
                                                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
