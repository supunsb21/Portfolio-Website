import Reveal from "@/components/Reveal";
import { FaCertificate, FaCode, FaRobot } from "react-icons/fa";

const certs = [
  {
    icon: <FaCertificate className="text-emerald-500" />,
    title: "Data Science with Python",
    issuer: "University of Colombo School of Computing (UCSC)",
    year: "2025",
  },
  {
    icon: <FaCode className="text-emerald-500" />,
    title: "Python Libraries for Data Science",
    issuer: "Simplilearn",
    year: "2025",
  },
  {
    icon: <FaRobot className="text-emerald-500" />,
    title: "NLP in Python",
    issuer: "Udemy",
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <div className="bg-card p-6 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors h-full">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-3">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
