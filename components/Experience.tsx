import Reveal from "@/components/Reveal";

const experiences = [
  {
    title: "Customer Insights Analyst",
    company: "Diesel & Motor Engineering PLC (DIMO)",
    period: "January 2026 - Present | Colombo 14",
    bullets: [
      "Analyzing customer data and market insights to drive business growth and informed decision-making.",
    ],
  },
  {
    title: "Intern Data Analyst",
    company: "Diesel & Motor Engineering PLC (DIMO)",
    period: "May 2025 - December 2025 | Colombo 14",
    bullets: [
      "Collaborated with Customer Experience team to analyze complaints and improve service quality.",
      "Developed interactive Power BI dashboards to monitor daily complaints and KPIs.",
      "Built statistical models (Python) to analyze CSI scores and evaluate service advisor and branch effectiveness.",
      "Applied time series analysis and machine learning to forecast future complaints.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative">
                  <div className="absolute -left-[41px] bg-primary h-5 w-5 rounded-full border-4 border-white dark:border-dark" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-slate-500 dark:text-gray-500 mb-4">{exp.period}</p>
                  <ul className="list-disc list-outside text-slate-600 dark:text-gray-400 space-y-2 ml-4">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
