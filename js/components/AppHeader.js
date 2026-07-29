export class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-3 left-0 w-full bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b-4 border-brand-dark dark:border-brand-cream z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" class="flex items-center gap-3 group">
            <div class="w-12 h-12 bg-brand-amber border-3 border-brand-dark rounded-xl flex items-center justify-center font-extrabold text-2xl text-brand-dark shadow-brutal group-hover:rotate-6 transition-transform dark:border-brand-cream">
              ZG
            </div>
            <div class="hidden sm:block">
              <span class="font-extrabold text-lg leading-tight block tracking-tight text-brand-dark dark:text-brand-cream">Zach Glindro</span>
              <span class="text-xs font-semibold text-brand-emerald tracking-wide uppercase font-mono">UPLB • CS '26</span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-6 font-bold text-sm lg:text-base">
            <a href="#featured" class="hover:text-brand-emerald dark:hover:text-brand-mint transition-colors py-1 text-brand-dark dark:text-brand-cream">Featured</a>
            <a href="#projects" class="hover:text-brand-emerald dark:hover:text-brand-mint transition-colors py-1 text-brand-dark dark:text-brand-cream">Projects</a>
            <a href="#experience" class="hover:text-brand-emerald dark:hover:text-brand-mint transition-colors py-1 text-brand-dark dark:text-brand-cream">Experience</a>
            <a href="#skills" class="hover:text-brand-emerald dark:hover:text-brand-mint transition-colors py-1 text-brand-dark dark:text-brand-cream">Skills</a>
          </nav>

          <div class="flex items-center gap-3">
            <a href="mailto:zachglindro.dev@gmail.com?subject=Hello%20Zach" class="btn-brutal bg-brand-emerald text-brand-dark font-extrabold px-5 py-2.5 rounded-xl border-3 border-brand-dark shadow-brutal text-sm flex items-center gap-2 dark:border-brand-cream">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact Me
            </a>
            <button type="button" data-action="theme-toggle" aria-label="Toggle theme" aria-pressed="false" class="btn-brutal inline-flex h-12 w-12 items-center justify-center rounded-xl border-3 border-brand-dark bg-white text-brand-dark shadow-brutal dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">
              <svg data-icon="moon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"></path>
              </svg>
              <svg data-icon="sun" class="hidden h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12h2.25m12.02 5.27 1.59 1.59M5.14 5.14l1.59 1.59m10.04 0 1.59-1.59M5.14 18.86l1.59-1.59M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
              </svg>
            </button>
            <button data-action="menu" class="md:hidden p-2 rounded-lg border-2 border-brand-dark bg-gray-100 dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;

    const themeToggle = this.querySelector('[data-action="theme-toggle"]');
    const moonIcon = this.querySelector('[data-icon="moon"]');
    const sunIcon = this.querySelector('[data-icon="sun"]');

    const updateThemeToggle = () => {
      const isDark = document.documentElement.classList.contains("dark");
      moonIcon.classList.toggle("hidden", isDark);
      sunIcon.classList.toggle("hidden", !isDark);
      themeToggle.setAttribute("aria-pressed", String(isDark));
    };

    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeToggle();
    });

    updateThemeToggle();

    this.querySelector('[data-action="menu"]').addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("toggle-mobile-nav"));
    });
  }
}
