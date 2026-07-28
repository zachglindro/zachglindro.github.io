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
        emerald: "text-brand-emerald bg-emerald-50 border-brand-emerald",
        amber: "text-brand-amber bg-amber-50 border-brand-amber",
        sky: "text-sky-600 bg-sky-50 border-sky-400",
        purple: "text-purple-600 bg-purple-50 border-purple-400",
        green: "text-green-700 bg-green-50 border-green-500",
        red: "text-red-600 bg-red-50 border-red-400",
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-400",
        orange: "text-orange-600 bg-orange-50 border-orange-400",
        yellow: "text-yellow-600 bg-yellow-50 border-yellow-400",
      }[accent] || "text-brand-emerald bg-emerald-50 border-brand-emerald";

    this.innerHTML = `
      <div class="project-card card-brutal bg-white p-6 rounded-2xl border-3 border-brand-dark shadow-brutal flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-mono font-extrabold ${badgeClass} px-2 py-0.5 border rounded">${this._project.badge}</span>
            <span class="text-xs font-mono text-slate-400">${this._project.id}</span>
          </div>
          <h3 class="text-xl font-extrabold text-brand-dark mb-2">${this._project.title}</h3>
          <p class="text-slate-600 text-xs leading-relaxed mb-4">${this._project.description}</p>
        </div>
        <div class="pt-4 border-t-2 border-slate-100">
          <div class="flex flex-wrap gap-1.5 mb-3 font-mono text-[11px]">
            ${this._project.tags.map((tag) => `<span class="px-2 py-0.5 bg-slate-100 text-slate-700 rounded border">${tag}</span>`).join("")}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-mono text-slate-500">${this._project.keyFeatures.slice(0, 1).join("")}</span>
            ${this._project.codeUrl ? `<a href="${this._project.codeUrl}" target="_blank" class="font-bold text-xs text-brand-emerald hover:underline">Code →</a>` : '<span class="text-xs text-slate-400 font-mono">Mobile App</span>'}
          </div>
        </div>
      </div>
    `;
  }
}
