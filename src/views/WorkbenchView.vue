<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 paper-grain">
    <!-- View Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
        Syntopical Scholarly Arena
      </span>
      <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
        Dialectic Workbench
      </h1>
      <p class="font-cormorant italic text-lg sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
        The Great Conversation across the ages: putting canonical minds in direct dialogue to forge critical synthesis.
      </p>
      <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
    </div>

    <!-- Mode Selector Tabs: Thinker Head-to-Head vs Syntopicon Great Ideas -->
    <div class="flex items-center justify-center">
      <div class="inline-flex p-1 rounded-xl bg-parchment-200 dark:bg-ink-900 border border-parchment-300 dark:border-ink-800">
        <button
          @click="activeTool = 'comparator'"
          :class="[
            'px-5 py-2 rounded-lg font-cinzel text-xs font-bold uppercase tracking-wider transition-all',
            activeTool === 'comparator'
              ? 'bg-crimson-800 text-white shadow-sm'
              : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200'
          ]"
        >
          Thinker Head-to-Head
        </button>
        <button
          @click="activeTool = 'syntopicon'"
          :class="[
            'px-5 py-2 rounded-lg font-cinzel text-xs font-bold uppercase tracking-wider transition-all',
            activeTool === 'syntopicon'
              ? 'bg-crimson-800 text-white shadow-sm'
              : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200'
          ]"
        >
          Adler's Syntopicon (Great Ideas)
        </button>
      </div>
    </div>

    <!-- Active Tool: 1. Head-to-Head Comparator -->
    <div v-if="activeTool === 'comparator'" class="space-y-12">
      <!-- Dialectical Framework Banner -->
      <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-mono">
        <div class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-850 space-y-1">
          <span class="text-gold-600 font-bold uppercase tracking-wider block">1. The Thesis</span>
          <p class="font-newsreader italic text-ink-700 dark:text-ink-300 text-sm">
            A coherent philosophical proposition establishing order, virtue, or metaphysics.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-850 space-y-1">
          <span class="text-crimson-600 font-bold uppercase tracking-wider block">2. The Antithesis</span>
          <p class="font-newsreader italic text-ink-700 dark:text-ink-300 text-sm">
            The fierce counter-reality of historical necessity, psychological rebellion, or the Absurd.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-850 space-y-1">
          <span class="text-gold-600 font-bold uppercase tracking-wider block">3. The Synthesis</span>
          <p class="font-newsreader italic text-ink-700 dark:text-ink-300 text-sm">
            A higher-order integration that holds competing truths in dynamic intellectual tension.
          </p>
        </div>
      </div>

      <DialecticComparator />
    </div>

    <!-- Active Tool: 2. Syntopicon Explorer -->
    <div v-else-if="activeTool === 'syntopicon'" class="space-y-12">
      <SyntopiconExplorer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DialecticComparator from '../components/DialecticComparator.vue'
import SyntopiconExplorer from '../components/SyntopiconExplorer.vue'

const activeTool = ref('comparator')
</script>
