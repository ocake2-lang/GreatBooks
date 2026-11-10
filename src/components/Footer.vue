<template>
  <footer class="bg-parchment-100 dark:bg-ink-950 border-t border-parchment-300 dark:border-ink-800 transition-colors duration-200 mt-24">
    <!-- Colophon Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- Colophon Column -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-crimson-800 text-parchment-50 font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
              AD
            </div>
            <div>
              <h3 class="font-cinzel text-lg font-bold text-ink-950 dark:text-parchment-100 leading-tight">
                My Literary Journey
              </h3>
              <p class="font-cormorant italic text-xs text-crimson-800 dark:text-gold-300">
                A Great Books Digital Portfolio • Aldrin Danila (AD) — University of Nueva Caceres
              </p>
            </div>
          </div>

          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Constructed as an intellectual record of close-reading, seminar dialectic, and hermeneutic growth across the Western canonical tradition. This portfolio synthesizes ancient epic, classical philosophy, renaissance drama, and modern existentialism into a living dialogue.
          </p>
          <div class="pt-2 text-xs font-mono text-ink-500 space-y-1">
            <p>✦ Typeset in Google Cinzel, Cormorant Garamond & Newsreader</p>
            <p>✦ Built with Vue 3 Composition API & Tailwind CSS</p>
          </div>
        </div>

        <!-- Directory Links (Six Core Sections) -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="font-cinzel text-xs font-bold uppercase tracking-widest text-ink-900 dark:text-ink-200">
            Portfolio Sections
          </h4>
          <ul class="space-y-2 text-xs font-mono text-ink-600 dark:text-ink-400">
            <li>
              <router-link to="/" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/profile" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>Student Profile</span>
              </router-link>
            </li>
            <li>
              <router-link to="/analyses" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>Literary Analyses</span>
              </router-link>
            </li>
            <li>
              <router-link to="/masterpiece" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>My Favorite Masterpiece</span>
              </router-link>
            </li>
            <li>
              <router-link to="/summary" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>Summary of Learning</span>
              </router-link>
            </li>
            <li>
              <router-link to="/reflection" class="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <span>→</span>
                <span>Personal Reflection</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Curated Motto & Scroll To Top -->
        <div class="md:col-span-4 space-y-4 flex flex-col justify-between">
          <div class="p-5 rounded-xl bg-parchment-50 dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 space-y-2">
            <span class="text-[10px] font-mono uppercase text-gold-600 dark:text-gold-400 font-bold tracking-wider">
              Canonical Aphorism
            </span>
            <p class="font-cormorant italic text-base text-ink-800 dark:text-ink-200">
              "The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy."
            </p>
            <p class="text-xs font-mono text-ink-400 text-right">— Albert Camus (1942)</p>
          </div>

          <div class="flex items-center justify-between pt-4">
            <span class="text-xs font-mono text-ink-500">
              © 2023–2026 Aldrin Danila (AD) • University of Nueva Caceres
            </span>
            <button
              @click="scrollToTop"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-parchment-300 dark:border-ink-700 bg-parchment-50 dark:bg-ink-900 hover:border-gold-500 text-xs font-mono transition-colors text-ink-600 dark:text-ink-300"
            >
              <ArrowUp class="w-3.5 h-3.5 text-gold-600" />
              <span>Return to Top</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowUp } from 'lucide-vue-next'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
