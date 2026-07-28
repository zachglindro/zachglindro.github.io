export class AppFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="bg-white border-t-4 border-brand-dark py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-brand-amber border-2 border-brand-dark rounded-lg flex items-center justify-center font-extrabold text-xl text-brand-dark">ZG</div>
            <div>
              <div class="font-extrabold text-brand-dark">Zach Dwayne M. Glindro</div>
              <div class="text-xs text-slate-500 font-mono">BS CS UPLB '26 • Magna Cum Laude</div>
            </div>
          </div>

          <div class="text-xs text-slate-600 font-mono text-center md:text-right">
            <div>Designed &amp; Built by Zach Glindro © <span id="year">${year}</span></div>
            <div class="text-slate-400 mt-0.5">Calamba / Los Baños, Laguna • Philippines</div>
          </div>
        </div>
      </footer>
    `;
  }
}
