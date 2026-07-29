export class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="top" class="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber/20 border-2 border-brand-dark dark:border-brand-cream rounded-full font-extrabold text-sm text-brand-dark dark:text-brand-cream shadow-sm">
              <span class="w-3 h-3 rounded-full bg-brand-amber animate-pulse"></span>
              BS Computer Science @ UPLB • Magna Cum Laude (GPA 1.44)
            </div>

            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-brand-dark dark:text-brand-cream">
              Building intelligent
              <span class="text-brand-emerald underline decoration-brand-amber decoration-wavy decoration-2">search</span>, full-stack &amp; agritech.
            </h1>

            <p class="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hey! I'm <strong class="text-brand-dark dark:text-brand-cream font-bold">Zach Dwayne M. Glindro</strong>, a full-stack software engineer and AI systems builder. I specialize in Retrieval-Augmented Generation (RAG), FastAPI, Next.js, and practical software solutions for domain-specific problems.
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div class="bg-white dark:bg-brand-cardDark p-4 rounded-xl border-3 border-brand-dark dark:border-brand-cream shadow-brutal">
                <div class="text-2xl font-extrabold text-brand-emerald">1.44 GPA</div>
                <div class="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase font-mono">UPLB Honor Rank</div>
              </div>
              <div class="bg-white dark:bg-brand-cardDark p-4 rounded-xl border-3 border-brand-dark dark:border-brand-cream shadow-brutal">
                <div class="text-2xl font-extrabold text-brand-amber">RAG &amp; Search</div>
                <div class="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase font-mono">ChromaDB + BM25</div>
              </div>
              <div class="bg-white dark:bg-brand-cardDark p-4 rounded-xl border-3 border-brand-dark dark:border-brand-cream shadow-brutal col-span-2 sm:col-span-1">
                <div class="text-2xl font-extrabold text-brand-dark dark:text-brand-cream">IPB Intern</div>
                <div class="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase font-mono">Cereal Crops Sec.</div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-4">
              <a href="#featured" class="btn-brutal bg-brand-dark text-white font-extrabold px-6 py-3.5 rounded-xl border-3 border-brand-dark shadow-brutal flex items-center gap-2 text-base dark:border-brand-cream dark:bg-brand-cream dark:text-brand-dark">
                View Featured Projects
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <a href="https://github.com/zachglindro" target="_blank" rel="noopener noreferrer" class="btn-brutal bg-white text-brand-dark font-extrabold px-6 py-3.5 rounded-xl border-3 border-brand-dark shadow-brutal flex items-center gap-2 text-base dark:border-brand-cream dark:bg-brand-cardDark dark:text-brand-cream">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 order-first lg:order-last">
            <div class="bg-white dark:bg-brand-cardDark rounded-2xl border-4 border-brand-dark dark:border-brand-cream p-5 sm:p-6 shadow-brutal-emerald relative overflow-hidden">
              <div class="flex items-center justify-between border-b-3 border-brand-dark dark:border-brand-cream pb-4 mb-5">
                <div class="flex items-center gap-2">
                  <span class="w-3.5 h-3.5 rounded-full bg-red-400 border border-brand-dark"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-brand-dark"></span>
                  <span class="w-3.5 h-3.5 rounded-full bg-green-400 border border-brand-dark"></span>
                </div>
                <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-300">zachglindro.dev ~ profile</span>
              </div>

              <div class="space-y-4 sm:space-y-5">
                <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                  <div class="w-full max-w-[18rem] sm:max-w-[12rem] mx-auto sm:mx-0 shrink-0">
                    <div class="aspect-[2/3] rounded-2xl overflow-hidden border-2 border-brand-dark dark:border-brand-cream shadow-brutal bg-slate-100 dark:bg-brand-dark">
                      <img
                        src="images/profile.jpg"
                        alt="Portrait of Zach Dwayne Glindro"
                        class="h-full w-full object-cover object-top"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <div class="text-center sm:text-left space-y-1">
                    <h3 class="font-extrabold text-xl sm:text-2xl text-brand-dark dark:text-brand-cream leading-tight">Zach Dwayne Glindro</h3>
                    <p class="text-xs font-mono text-brand-emerald font-bold">zachglindro.dev@gmail.com</p>
                    <p class="text-xs text-slate-500 dark:text-slate-300">Calamba / Los Baños, Laguna</p>
                  </div>
                </div>

                <div class="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 text-slate-200 font-mono text-xs border-2 border-brand-dark dark:border-brand-cream space-y-2">
                  <div class="text-emerald-400">// Primary Stack Highlight</div>
                  <div><span class="text-amber-400">const</span> developer = {</div>
                  <div class="pl-4"><span class="text-sky-300">core</span>: [<span class="text-green-300">"Next.js"</span>, <span class="text-green-300">"FastAPI"</span>, <span class="text-green-300">"TypeScript"</span>, <span class="text-green-300">"Python"</span>],</div>
                  <div class="pl-4"><span class="text-sky-300">ai_rag</span>: [<span class="text-green-300">"ChromaDB"</span>, <span class="text-green-300">"BM25 Search"</span>, <span class="text-green-300">"Cross-Encoders"</span>],</div>
                  <div class="pl-4"><span class="text-sky-300">cloud_db</span>: [<span class="text-green-300">"Firebase"</span>, <span class="text-green-300">"SQLite"</span>, <span class="text-green-300">"Docker"</span>],</div>
                  <div class="pl-4"><span class="text-sky-300">status</span>: <span class="text-amber-300">"Graduated UPLB Magna Cum Laude 2026"</span></div>
                  <div>};</div>
                </div>

                <div class="p-3 bg-brand-amber/15 border-2 border-brand-dark dark:border-brand-cream rounded-xl flex items-center justify-between text-xs font-bold">
                  <span>🎓 BS CS UPLB (2022 - 2026)</span>
                  <span class="bg-brand-amber text-brand-dark px-2 py-0.5 rounded border border-brand-dark font-mono">GPA 1.44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
