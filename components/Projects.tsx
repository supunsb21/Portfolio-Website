import Reveal from "@/components/Reveal";
import { FaChartArea, FaGasPump, FaUsersCog } from "react-icons/fa";
import { ReactNode } from "react";
import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';

interface Project {
  icon: ReactNode;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  tags: { label: string; color: string }[];
}

const projects: Project[] = [
  {
    icon: <FaChartArea className="text-6xl text-slate-600" />,
    category: "Research Project",
    categoryColor: "text-primary",
    title: "Homicide Rate Analysis",
    description:
      "Analyzed socio-economic factors influencing homicide rates in Sri Lanka (1994–2023). Used OLS, Elastic Net, and XGBoost models.",
    tags: [
      { label: "ML", color: "text-blue-600 dark:text-blue-300" },
      { label: "Python", color: "text-blue-600 dark:text-blue-300" },
      { label: "XGBoost", color: "text-blue-600 dark:text-blue-300" },
    ],
  },
  {
    icon: <FaGasPump className="text-6xl text-slate-600" />,
    category: "Statistical Modeling",
    categoryColor: "text-emerald-600 dark:text-emerald-400",
    title: "Fuel Consumption Analysis",
    description:
      "Used R regression models to analyze factors impacting automotive fuel usage. Identified critical variables to improve fuel efficiency.",
    tags: [
      { label: "R Language", color: "text-emerald-600 dark:text-emerald-300" },
      { label: "Regression", color: "text-emerald-600 dark:text-emerald-300" },
      { label: "EDA", color: "text-emerald-600 dark:text-emerald-300" },
    ],
  },
  {
    icon: <FaUsersCog className="text-6xl text-slate-600" />,
    category: "Business Intelligence",
    categoryColor: "text-purple-600 dark:text-purple-400",
    title: "CSI Score Forecasting",
    description:
      "Forecasting future customer complaints and analyzing Customer Satisfaction Index (CSI) scores to enhance decision-making.",
    tags: [
      { label: "Power BI", color: "text-purple-600 dark:text-purple-300" },
      { label: "Time Series", color: "text-purple-600 dark:text-purple-300" },
      { label: "Streamlit", color: "text-purple-600 dark:text-purple-300" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <BubbleBackground
        interactive={false}
        className="py-20 bg-slate-50 dark:bg-darker text-slate-900 dark:text-white w-full"
        colors={{
          first: "168,85,247",
          second: "59,130,246",
          third: "168,85,247",
          fourth: "59,130,246",
          fifth: "168,85,247",
          sixth: "59,130,246",
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-card border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                <div className="w-full h-56 flex items-center justify-center bg-slate-100 dark:bg-slate-800/50 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  {project.icon}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className={`${project.categoryColor} text-xs font-bold uppercase tracking-wider mb-2 block`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag.label} className={`px-2 py-1 bg-slate-100 dark:bg-slate-700/50 rounded text-xs ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </BubbleBackground>
    </section>
  );
}
