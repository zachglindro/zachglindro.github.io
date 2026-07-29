export class MobileNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="mobile-nav" class="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-50 md:hidden flex flex-col justify-center px-8 hidden">
        <button data-action="close" class="absolute top-8 right-8 text-white p-2 border-2 border-white rounded-xl">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="flex flex-col gap-6 text-center text-white text-2xl font-extrabold">
          <a href="#featured" data-close="true" class="hover:text-brand-mint">Featured Work</a>
          <a href="#projects" data-close="true" class="hover:text-brand-mint">All Projects</a>
          <a href="#experience" data-close="true" class="hover:text-brand-mint">Experience &amp; Edu</a>
          <a href="#skills" data-close="true" class="hover:text-brand-mint">Skills &amp; Interests</a>
          <a href="mailto:zachglindro.dev@gmail.com?subject=Hello%20Zach" data-close="true" class="mt-4 inline-flex items-center justify-center bg-brand-amber text-brand-dark px-6 py-3 rounded-xl border-3 border-white font-extrabold shadow-brutal-white">
            Contact Me
          </a>
        </div>
      </div>
    `;

    window.addEventListener("toggle-mobile-nav", () => {
      this.querySelector("#mobile-nav").classList.toggle("hidden");
    });

    this.querySelector('[data-action="close"]').addEventListener("click", () =>
      this.hide(),
    );
    this.querySelectorAll('[data-close="true"]').forEach((link) => {
      link.addEventListener("click", () => this.hide());
    });
  }

  hide() {
    this.querySelector("#mobile-nav").classList.add("hidden");
  }
}
