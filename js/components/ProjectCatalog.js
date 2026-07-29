import { projects } from "../data/projects.js";
import "./ProjectCard.js";

export class ProjectCatalog extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="projects" class="py-20 bg-slate-100 dark:bg-brand-dark border-t-4 border-brand-dark dark:border-brand-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span class="text-brand-emerald font-mono font-extrabold uppercase tracking-widest text-sm">Complete Portfolio</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-brand-dark dark:text-brand-cream mt-1">All Software Projects</h2>
            </div>
            <div class="flex flex-wrap gap-2 mt-4 md:mt-0 font-mono text-xs">
              <button data-filter="all" class="filter-btn active-filter px-3 py-1.5 rounded-lg border-2 border-brand-dark bg-brand-dark text-white font-bold dark:border-brand-cream dark:bg-brand-cream dark:text-brand-dark">All</button>
              <button data-filter="ai" class="filter-btn px-3 py-1.5 rounded-lg border-2 border-brand-dark bg-white text-brand-dark font-bold dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">AI / RAG</button>
              <button data-filter="web" class="filter-btn px-3 py-1.5 rounded-lg border-2 border-brand-dark bg-white text-brand-dark font-bold dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">Full-Stack Web</button>
              <button data-filter="python" class="filter-btn px-3 py-1.5 rounded-lg border-2 border-brand-dark bg-white text-brand-dark font-bold dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">Python &amp; ML</button>
              <button data-filter="apps" class="filter-btn px-3 py-1.5 rounded-lg border-2 border-brand-dark bg-white text-brand-dark font-bold dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">Mobile &amp; Games</button>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="project-grid"></div>
        </div>
      </section>
    `;

    this.renderProjects("all");
    this.attachEvents();
  }

  renderProjects(category) {
    const grid = this.querySelector("#project-grid");
    grid.innerHTML = "";

    projects.forEach((project) => {
      if (category === "all" || project.category.includes(category)) {
        const card = document.createElement("project-card");
        card.project = project;
        grid.appendChild(card);
      }
    });
  }

  attachEvents() {
    this.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        this.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove(
            "bg-brand-dark",
            "text-white",
            "dark:bg-brand-cream",
            "dark:text-brand-dark",
          );
          btn.classList.add(
            "bg-white",
            "text-brand-dark",
            "dark:bg-brand-cardDark",
            "dark:text-brand-cream",
          );
        });
        button.classList.remove(
          "bg-white",
          "text-brand-dark",
          "dark:bg-brand-cardDark",
          "dark:text-brand-cream",
        );
        button.classList.add(
          "bg-brand-dark",
          "text-white",
          "dark:bg-brand-cream",
          "dark:text-brand-dark",
        );
        this.renderProjects(button.dataset.filter);
      });
    });
  }
}
