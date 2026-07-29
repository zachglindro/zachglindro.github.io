import { projects } from "../data/projects.js";

export class FeaturedProjects extends HTMLElement {
  connectedCallback() {
    const featured = projects.filter((project) => project.isFeatured);

    this.innerHTML = `
      <section id="featured" class="bg-brand-dark text-white py-20 border-y-4 border-brand-dark dark:bg-slate-950 dark:border-brand-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span class="text-brand-mint font-mono font-extrabold uppercase tracking-widest text-sm">Flagship Projects</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold mt-1">Featured Systems</h2>
            </div>
            <p class="text-slate-400 dark:text-slate-300 max-w-md text-sm sm:text-base mt-2 md:mt-0">
              Real-world applications built for research institutions, agricultural systems, and real-time operations.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${featured.map((project) => this.renderProjectCard(project)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  renderProjectCard(project) {
    const accent = project.badgeColor;
    const border =
      {
        emerald: "border-brand-mint",
        amber: "border-brand-amber",
        sky: "border-sky-400",
      }[accent] || "border-brand-mint";
    const badgeClass =
      {
        emerald: "bg-brand-emerald text-brand-dark",
        amber: "bg-brand-amber text-brand-dark",
        sky: "bg-sky-400 text-brand-dark",
      }[accent] || "bg-brand-emerald text-brand-dark";
    const accentText =
      {
        emerald: "text-brand-mint",
        amber: "text-brand-amber",
        sky: "text-sky-300",
      }[accent] || "text-brand-mint";

    return `
      <div class="bg-brand-cardDark rounded-2xl border-3 ${border} p-6 flex flex-col justify-between shadow-brutal-emerald hover:translate-y-[-4px] transition-transform dark:bg-slate-900 dark:border-brand-cream">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 ${badgeClass} text-xs font-extrabold uppercase font-mono rounded-md border border-white dark:border-brand-cream">${project.badge}</span>
            <span class="text-xs font-mono ${accentText}">${project.id}</span>
          </div>
          <h3 class="text-2xl font-extrabold text-white dark:text-brand-cream mb-2">${project.title}</h3>
          <p class="text-slate-300 dark:text-slate-300 text-sm leading-relaxed mb-4">${project.description}</p>
          <div class="space-y-2 mb-6">
            <div class="text-xs font-mono text-slate-400 dark:text-slate-300">Key Features:</div>
            <ul class="text-xs text-slate-300 dark:text-slate-300 space-y-1 list-disc list-inside">
              ${project.keyFeatures.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div>
          <div class="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
            ${project.tags.map((tag) => `<span class="px-2 py-0.5 bg-slate-700 dark:bg-slate-800 ${accentText} rounded">${tag}</span>`).join("")}
          </div>
          ${project.codeUrl ? `<a href="${project.codeUrl}" target="_blank" class="w-full text-center block ${badgeClass} font-extrabold py-2.5 rounded-xl border-2 border-white dark:border-brand-cream hover:opacity-90 transition-colors text-sm">View on Github →</a>` : ""}
        </div>
      </div>
    `;
  }
}
