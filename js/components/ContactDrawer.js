export class ContactDrawer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="contact-drawer" class="fixed inset-y-0 right-0 w-full sm:w-[500px] bg-brand-dark text-white border-l-4 border-brand-dark z-50 transform transition-transform duration-300 ease-in-out p-6 sm:p-8 flex flex-col justify-between overflow-y-auto translate-x-full">
        <div>
          <div class="flex items-center justify-between border-b-2 border-slate-700 pb-4 mb-6">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-brand-emerald"></span>
              <h3 class="text-2xl font-extrabold text-white">Get in Touch</h3>
            </div>
            <button data-action="close" class="p-2 text-slate-400 hover:text-white border-2 border-slate-700 rounded-xl hover:border-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="space-y-3 mb-8">
            <div class="p-3 bg-brand-cardDark rounded-xl border border-slate-700 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-mono">Email:</span>
              <a href="mailto:zachglindro.dev@gmail.com" class="font-bold text-brand-mint hover:underline">zachglindro.dev@gmail.com</a>
            </div>
            <div class="p-3 bg-brand-cardDark rounded-xl border border-slate-700 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-mono">GitHub:</span>
              <a href="https://github.com/zachglindro" target="_blank" class="font-bold text-brand-amber hover:underline">github.com/zachglindro</a>
            </div>
          </div>

          <form id="contact-form" class="space-y-4">
            <div>
              <label class="block text-xs font-mono text-slate-300 mb-1">Your Name</label>
              <input type="text" required class="w-full p-3 rounded-xl bg-slate-800 border-2 border-slate-700 text-white text-sm focus:outline-none focus:border-brand-emerald" />
            </div>
            <div>
              <label class="block text-xs font-mono text-slate-300 mb-1">Your Email</label>
              <input type="email" required class="w-full p-3 rounded-xl bg-slate-800 border-2 border-slate-700 text-white text-sm focus:outline-none focus:border-brand-emerald" />
            </div>
            <div>
              <label class="block text-xs font-mono text-slate-300 mb-1">Message</label>
              <textarea rows="4" required class="w-full p-3 rounded-xl bg-slate-800 border-2 border-slate-700 text-white text-sm focus:outline-none focus:border-brand-emerald"></textarea>
            </div>
            <button type="submit" class="btn-brutal w-full bg-brand-emerald text-brand-dark font-extrabold py-3.5 rounded-xl border-2 border-white text-sm shadow-brutal-white">Send Message 🚀</button>
          </form>
        </div>

        <div class="text-center text-xs text-slate-500 font-mono pt-6">Zach Dwayne M. Glindro • UPLB</div>
      </div>
    `;

    window.addEventListener("toggle-contact-drawer", () => this.toggle());
    this.querySelector('[data-action="close"]').addEventListener("click", () =>
      this.hide(),
    );
    this.querySelector("#contact-form").addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Thank you! Your message has been recorded. I'll get back to you shortly!",
      );
      this.hide();
    });
  }

  toggle() {
    this.querySelector("#contact-drawer").classList.toggle("translate-x-full");
  }

  hide() {
    this.querySelector("#contact-drawer").classList.add("translate-x-full");
  }
}
