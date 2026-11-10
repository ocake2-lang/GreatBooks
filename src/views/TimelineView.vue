<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 paper-grain">
    <!-- View Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
        Intellectual Autobiography
      </span>
      <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
        Reader's Evolution
      </h1>
      <p class="font-cormorant italic text-lg sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
        Tracing the progressive transformation of consciousness, critical skepticism, and hermeneutic capacity across four seminar epochs.
      </p>
      <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
    </div>

    <!-- Timeline Progression Flow -->
    <div class="relative space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-crimson-700 before:via-gold-500 before:to-crimson-800">
      <div
        v-for="(epoch, idx) in timelineData"
        :key="epoch.epochId"
        class="relative flex flex-col sm:flex-row items-center gap-8 group"
      >
        <!-- Center Stage Node Indicator -->
        <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-ink-900 border-4 border-gold-500 flex items-center justify-center font-cinzel font-bold text-xs text-crimson-800 dark:text-gold-400 z-10 shadow-lg group-hover:scale-110 transition-transform">
          {{ epoch.stageNumber }}
        </div>

        <!-- Left/Right Alternating Card Structure -->
        <div
          :class="[
            'w-full sm:w-1/2 pl-12 sm:pl-0',
            idx % 2 === 0 ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 sm:ml-auto text-left'
          ]"
        >
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book hover:border-gold-500/60 transition-all duration-300 space-y-5">
            <!-- Epoch Header -->
            <div class="space-y-1">
              <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
                Stage {{ epoch.stageNumber }} • {{ epoch.semester }}
              </span>
              <h3 class="font-cinzel text-xl sm:text-2xl font-bold text-ink-950 dark:text-parchment-100 leading-snug">
                {{ epoch.title }}
              </h3>
              <p class="font-cormorant italic text-sm text-crimson-800 dark:text-gold-300">
                {{ epoch.tagline }}
              </p>
            </div>

            <!-- Summary -->
            <p class="font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              {{ epoch.summary }}
            </p>

            <!-- Core Canonical Authors Studied -->
            <div class="pt-2">
              <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 block mb-1.5 font-bold">
                Anchor Thinkers & Texts:
              </span>
              <div :class="['flex flex-wrap gap-1.5', idx % 2 === 0 ? 'sm:justify-end' : 'justify-start']">
                <span
                  v-for="author in epoch.coreAuthors"
                  :key="author"
                  class="px-2.5 py-0.5 rounded text-xs font-mono bg-parchment-200 dark:bg-ink-800 text-ink-800 dark:text-ink-200"
                >
                  {{ author }}
                </span>
              </div>
            </div>

            <!-- Milestones Accordion / List -->
            <div class="space-y-3 pt-3 border-t border-parchment-200 dark:border-ink-800 text-left">
              <span class="text-[10px] font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 font-bold block">
                Seminar Breakthrough Milestones:
              </span>

              <div
                v-for="(ms, msIdx) in epoch.milestones"
                :key="msIdx"
                class="p-3 rounded-lg bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 text-xs space-y-1"
              >
                <div class="font-cinzel font-bold text-ink-900 dark:text-ink-100 flex items-center gap-1.5">
                  <span class="text-gold-600">✦</span>
                  <span>{{ ms.title }}</span>
                </div>
                <p class="font-newsreader text-ink-600 dark:text-ink-300">
                  {{ ms.description }}
                </p>
                <p class="font-newsreader italic text-gold-700 dark:text-gold-300 pt-1 border-t border-parchment-200 dark:border-ink-700 text-[11px]">
                  Takeaway: {{ ms.insight }}
                </p>
              </div>
            </div>

            <!-- Intellectual Shift Callout -->
            <div class="p-4 rounded-xl bg-gold-500/10 border-l-2 border-gold-500 text-left space-y-1">
              <span class="text-[10px] font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 font-bold block">
                The Paradigm Shift:
              </span>
              <p class="font-newsreader italic text-xs sm:text-sm text-ink-800 dark:text-ink-200">
                "{{ epoch.intellectualShift }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Adler's 4 Levels of Reading Synthesis Box -->
    <section class="p-8 sm:p-12 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-8">
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
          Methodological Framework
        </span>
        <h2 class="font-cinzel text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50">
          Mortimer Adler's Four Levels of Reading
        </h2>
        <p class="font-newsreader italic text-sm text-ink-500">
          How my literary practice evolved from passive information absorption to active Syntopical synthesis.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
        <div class="p-5 rounded-xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-800 space-y-2">
          <span class="text-gold-600 font-bold block">LEVEL I</span>
          <h4 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100">Elementary</h4>
          <p class="font-newsreader text-ink-600 dark:text-ink-400 text-xs">
            Basic comprehension of grammar and syntax: "What does the text literally say?"
          </p>
        </div>

        <div class="p-5 rounded-xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-800 space-y-2">
          <span class="text-gold-600 font-bold block">LEVEL II</span>
          <h4 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100">Inspectional</h4>
          <p class="font-newsreader text-ink-600 dark:text-ink-400 text-xs">
            Systematic skimming and structural anatomy: "What kind of book is this, and what is its overarching architecture?"
          </p>
        </div>

        <div class="p-5 rounded-xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-800 space-y-2">
          <span class="text-gold-600 font-bold block">LEVEL III</span>
          <h4 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100">Analytical</h4>
          <p class="font-newsreader text-ink-600 dark:text-ink-400 text-xs">
            Interrogating the author's terms, propositions, arguments, and moral validity: "Is it true, and what of it?"
          </p>
        </div>

        <div class="p-5 rounded-xl bg-crimson-900 text-white border border-crimson-800 space-y-2 shadow-sm">
          <span class="text-gold-400 font-bold block">LEVEL IV (Capstone)</span>
          <h4 class="font-cinzel font-bold text-sm text-parchment-100">Syntopical</h4>
          <p class="font-newsreader text-parchment-200 text-xs">
            Reading multiple authors comparatively on a single fundamental inquiry: creating a living dialogue across millennia.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { timelineData } from '../data/timeline.js'
</script>

