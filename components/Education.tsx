import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-darker text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
            {/* University */}
            <Reveal>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-0 bg-primary h-5 w-5 rounded-full border-4 border-slate-50 dark:border-dark" />
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white dark:bg-white rounded-xl p-2 border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/Kelaniya.png"
                        alt="University of Kelaniya"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">University of Kelaniya</h3>
                    <p className="text-primary font-medium text-lg">BSc in Statistics &amp; Computer Science</p>
                    <p className="text-sm text-slate-500 dark:text-gray-500 mb-3">2022 - 2025</p>
                    <p>
                      <span className="text-slate-700 dark:text-gray-300 font-semibold">Major:</span>{" "}
                      <span className="text-slate-600 dark:text-gray-400">Statistics</span>
                    </p>
                    <p>
                      <span className="text-slate-700 dark:text-gray-300 font-semibold">GPA:</span>{" "}
                      <span className="text-slate-600 dark:text-gray-400">3.3</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* School */}
            <Reveal>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-0 bg-primary h-5 w-5 rounded-full border-4 border-slate-50 dark:border-dark" />
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white dark:bg-white rounded-xl p-2 border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/Kegalu_Vidyalaya_Logo.png"
                        alt="Kegalu Vidyalaya"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kegalu Vidyalaya</h3>
                    <p className="text-primary font-medium text-lg">Secondary Education</p>
                    <div className="space-y-4 mt-4">
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="text-slate-900 dark:text-white font-semibold">Advanced Level</h4>
                          <span className="text-xs text-primary px-2 py-1 rounded">2020</span>
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 text-sm">Physical Science Stream</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="text-slate-900 dark:text-white font-semibold">Ordinary Level</h4>
                          <span className="text-xs text-primary px-2 py-1 rounded">2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
