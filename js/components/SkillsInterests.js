import { skillGroups, interests } from "../data/skills.js";

export class SkillsInterests extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="skills" class="py-20 bg-brand-dark text-white border-t-4 border-brand-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-brand-mint font-mono font-extrabold uppercase tracking-widest text-sm">Capabilities</span>
            <h2 class="text-3xl sm:text-5xl font-extrabold mt-1">Skills &amp; Personal Interests</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${skillGroups
              .map(
                (group) => `
              <div class="bg-brand-cardDark p-6 rounded-2xl border-3 ${group.accent === "emerald" ? "border-brand-emerald shadow-brutal-emerald" : group.accent === "amber" ? "border-brand-amber shadow-brutal-amber" : "border-sky-400 shadow-brutal"}">
                <div class="w-12 h-12 ${group.accent === "emerald" ? "bg-brand-emerald text-brand-dark" : group.accent === "amber" ? "bg-brand-amber text-brand-dark" : "bg-sky-400 text-brand-dark"} rounded-xl border-2 border-white flex items-center justify-center text-xl font-bold mb-4">${group.icon}</div>
                <h3 class="text-xl font-extrabold mb-3">${group.title}</h3>
                <div class="flex flex-wrap gap-2 font-mono text-xs">
                  ${group.items.map((item) => `<span class="px-3 py-1.5 bg-slate-800 ${group.accent === "emerald" ? "text-brand-mint" : group.accent === "amber" ? "text-brand-amber" : "text-sky-300"} rounded-lg border border-slate-600">${item}</span>`).join("")}
                </div>
              </div>
            `,
              )
              .join("")}

            <div class="bg-brand-cardDark p-6 rounded-2xl border-3 border-sky-400 shadow-brutal">
              <div class="w-12 h-12 bg-sky-400 text-brand-dark rounded-xl border-2 border-white flex items-center justify-center text-xl font-bold mb-4">🎮</div>
              <h3 class="text-xl font-extrabold mb-3">Beyond Coding</h3>
              <p class="text-slate-300 text-xs leading-relaxed mb-4">When I'm not writing software or optimizing linear programming models, you'll find me engaging with:</p>
              <div class="space-y-2 text-sm font-bold">
                ${interests
                  .map(
                    (interest) => `
                  <div class="flex items-center gap-3 p-2 bg-slate-800 rounded-lg border border-slate-700">
                    <span>${interest.icon}</span> <span>${interest.label}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
