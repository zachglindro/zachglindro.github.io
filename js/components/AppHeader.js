export class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-3 left-0 w-full bg-white/90 backdrop-blur-md border-b-4 border-brand-dark z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" class="flex items-center gap-3 group">
            <div class="w-12 h-12 bg-brand-amber border-3 border-brand-dark rounded-xl flex items-center justify-center font-extrabold text-2xl text-brand-dark shadow-brutal group-hover:rotate-6 transition-transform">
              ZG
            </div>
            <div class="hidden sm:block">
              <span class="font-extrabold text-lg leading-tight block tracking-tight">Zach Glindro</span>
              <span class="text-xs font-semibold text-brand-emerald tracking-wide uppercase font-mono">UPLB • CS '26</span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-6 font-bold text-sm lg:text-base">
            <a href="#featured" class="hover:text-brand-emerald transition-colors py-1">Featured</a>
            <a href="#projects" class="hover:text-brand-emerald transition-colors py-1">Projects</a>
            <a href="#experience" class="hover:text-brand-emerald transition-colors py-1">Experience</a>
            <a href="#skills" class="hover:text-brand-emerald transition-colors py-1">Skills</a>
          </nav>

          <div class="flex items-center gap-3">
            <button data-action="contact" class="btn-brutal bg-brand-emerald text-brand-dark font-extrabold px-5 py-2.5 rounded-xl border-3 border-brand-dark shadow-brutal text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact Me
            </button>
            <button data-action="menu" class="md:hidden p-2 rounded-lg border-2 border-brand-dark bg-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;

    this.querySelector('[data-action="contact"]').addEventListener(
      "click",
      () => {
        window.dispatchEvent(new CustomEvent("toggle-contact-drawer"));
      },
    );

    this.querySelector('[data-action="menu"]').addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("toggle-mobile-nav"));
    });
  }
}
