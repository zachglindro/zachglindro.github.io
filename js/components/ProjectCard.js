export class ProjectCard extends HTMLElement {
  set project(project) {
    this._project = project;
    this.render();
  }

  render() {
    if (!this._project) return;

    const accent = this._project.badgeColor;
    const badgeClass =
      {
        emerald:
          "text-brand-emerald bg-emerald-50 border-brand-emerald dark:bg-brand-emerald dark:text-brand-dark dark:border-brand-cream",
        amber:
          "text-brand-amber bg-amber-50 border-brand-amber dark:bg-brand-amber dark:text-brand-dark dark:border-brand-cream",
        sky: "text-sky-600 bg-sky-50 border-sky-400 dark:bg-sky-400 dark:text-brand-dark dark:border-brand-cream",
        purple:
          "text-purple-600 bg-purple-50 border-purple-400 dark:bg-purple-400 dark:text-brand-dark dark:border-brand-cream",
        green:
          "text-green-700 bg-green-50 border-green-500 dark:bg-green-400 dark:text-brand-dark dark:border-brand-cream",
        red: "text-red-600 bg-red-50 border-red-400 dark:bg-red-400 dark:text-brand-dark dark:border-brand-cream",
        indigo:
          "text-indigo-600 bg-indigo-50 border-indigo-400 dark:bg-indigo-400 dark:text-brand-dark dark:border-brand-cream",
        orange:
          "text-orange-600 bg-orange-50 border-orange-400 dark:bg-orange-400 dark:text-brand-dark dark:border-brand-cream",
        yellow:
          "text-yellow-600 bg-yellow-50 border-yellow-400 dark:bg-yellow-400 dark:text-brand-dark dark:border-brand-cream",
      }[accent] ||
      "text-brand-emerald bg-emerald-50 border-brand-emerald dark:bg-brand-emerald dark:text-brand-dark dark:border-brand-cream";

    this.innerHTML = `
      <div class="project-card card-brutal bg-white dark:bg-brand-cardDark p-6 rounded-2xl border-3 border-brand-dark dark:border-brand-cream shadow-brutal flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-mono font-extrabold ${badgeClass} px-2 py-0.5 border rounded">${this._project.badge}</span>
            <span class="text-xs font-mono text-slate-400 dark:text-slate-300">${this._project.id}</span>
          </div>
          <h3 class="text-xl font-extrabold text-brand-dark dark:text-brand-cream mb-2">${this._project.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-4">${this._project.description}</p>
        </div>
        <div class="pt-4 border-t-2 border-slate-100 dark:border-slate-700">
          <div class="flex flex-wrap gap-1.5 mb-3 font-mono text-[11px]">
            ${this._project.tags.map((tag) => `<span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded border border-slate-200 dark:border-slate-700">${tag}</span>`).join("")}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400">${this._project.keyFeatures.slice(0, 1).join("")}</span>
            ${this._project.codeUrl ? `<a href="${this._project.codeUrl}" target="_blank" class="font-bold text-xs text-brand-emerald hover:underline">Code →</a>` : '<span class="text-xs text-slate-400 dark:text-slate-400 font-mono">Mobile App</span>'}
          </div>
        </div>
      </div>
    `;
  }
}
