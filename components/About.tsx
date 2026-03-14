import Orbiter from "@/components/Orbiter";
import Reveal from "@/components/Reveal";
import { FaDatabase, FaChartLine, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <Orbiter />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-card p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all hover:-translate-y-2 group h-full">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <FaDatabase className="text-primary text-xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Science</h3>
              <p className="text-gray-400 mb-4">
                Cleaning, processing, and analyzing large datasets to extract meaningful insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-blue-400">Python</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-blue-400">R</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-blue-400">SQL</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-card p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-2 group h-full">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <FaChartLine className="text-emerald-500 text-xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visualization</h3>
              <p className="text-gray-400 mb-4">
                Building interactive dashboards to monitor KPIs and performance metrics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-emerald-400">Power BI</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-emerald-400">Plotly</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-emerald-400">Streamlit</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-card p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 group h-full">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <FaBrain className="text-purple-500 text-xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Developing statistical models for forecasting and predictive analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-purple-400">Scikit Learn</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-purple-400">XGBoost</span>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-purple-400">Stats</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
