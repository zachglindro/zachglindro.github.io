import { education, workExperience } from "../data/experience.js";

export class ExperienceEducation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-brand-amber font-mono font-extrabold uppercase tracking-widest text-sm">Academic Background</span>
              <h2 class="text-3xl font-extrabold text-brand-dark mt-1">Education</h2>
            </div>

            <div class="bg-white rounded-2xl border-4 border-brand-dark p-6 shadow-brutal space-y-4">
              <div class="flex items-center justify-between border-b-2 border-slate-100 pb-3">
                <span class="font-mono text-xs font-extrabold text-brand-emerald bg-emerald-50 px-2 py-1 rounded border border-brand-emerald">${education.period}</span>
                <span class="font-mono text-xs font-bold text-slate-500">${education.location}</span>
              </div>

              <div>
                <h3 class="text-xl font-extrabold text-brand-dark">${education.school}</h3>
                <p class="text-sm font-semibold text-brand-emerald">${education.degree}</p>
              </div>

              <div class="p-3 bg-brand-amber/15 border-2 border-brand-dark rounded-xl space-y-1">
                <div class="font-extrabold text-brand-dark text-sm">Academic Honors:</div>
                ${education.honors.map((honor) => `<div class="text-xs text-slate-700 font-semibold">• ${honor.label}: <span class="font-mono font-extrabold text-brand-dark">${honor.value}</span></div>`).join("")}
              </div>

              <div>
                <div class="text-xs font-mono font-bold text-slate-500 uppercase mb-2">Core Coursework:</div>
                <div class="flex flex-wrap gap-1.5 font-mono text-xs">
                  ${education.coursework.map((course) => `<span class="px-2 py-1 bg-slate-100 text-slate-700 rounded border">${course}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div>
              <span class="text-brand-emerald font-mono font-extrabold uppercase tracking-widest text-sm">Industry Experience</span>
              <h2 class="text-3xl font-extrabold text-brand-dark mt-1">Work &amp; Internship</h2>
            </div>

            <div class="space-y-6">
              ${workExperience
                .map(
                  (item) => `
                <div class="bg-white rounded-2xl border-4 border-brand-dark p-6 shadow-brutal relative">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-slate-100 pb-3 mb-4 gap-2">
                    <div>
                      <h3 class="text-xl font-extrabold text-brand-dark">${item.company}</h3>
                      <p class="text-sm font-bold text-brand-emerald">${item.role}</p>
                    </div>
                    <span class="font-mono text-xs font-extrabold bg-brand-amber text-brand-dark px-3 py-1 rounded-lg border-2 border-brand-dark w-fit">${item.period}</span>
                  </div>

                  <ul class="text-xs sm:text-sm text-slate-700 space-y-2.5 list-disc list-inside leading-relaxed mb-4">
                    ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>

                  <div class="flex flex-wrap gap-1.5 font-mono text-xs pt-2 border-t border-slate-100">
                    ${item.technologies.map((tech) => `<span class="px-2 py-0.5 bg-slate-100 text-slate-800 rounded border border-slate-300">${tech}</span>`).join("")}
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
