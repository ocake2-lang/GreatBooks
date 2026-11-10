<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center space-y-2">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 dark:text-gold-300 text-xs font-mono uppercase tracking-widest font-bold">
        <span>The Great Ideas of the Western World</span>
      </div>
      <h3 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100">
        Mortimer Adler's Syntopicon
      </h3>
      <p class="font-newsreader italic text-sm text-ink-600 dark:text-ink-400 max-w-xl mx-auto">
        Tracing how the greatest minds across thirty centuries converse, clash, and synthesize perennial philosophical questions.
      </p>
    </div>

    <!-- Ideas Tabs -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button
        v-for="idea in ideas"
        :key="idea.id"
        @click="activeIdeaId = idea.id"
        :class="[
          'px-3.5 py-1.5 rounded-full text-xs font-cinzel transition-all border',
          activeIdeaId === idea.id
            ? 'bg-crimson-800 text-parchment-50 border-crimson-900 font-bold shadow-sm'
            : 'bg-parchment-100 dark:bg-ink-850 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-700 hover:border-gold-500'
        ]"
      >
        <span>{{ idea.name }}</span>
      </button>
    </div>

    <!-- Active Idea Card -->
    <div v-if="activeIdea" class="p-6 sm:p-10 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-8 animate-fade-in">
      <!-- Title & Latin Tag -->
      <div class="border-b border-parchment-200 dark:border-ink-800 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
            Perennial Concept: {{ activeIdea.latin }}
          </span>
          <h4 class="font-cinzel text-2xl sm:text-3xl font-bold text-ink-950 dark:text-parchment-100 mt-1">
            {{ activeIdea.name }}
          </h4>
        </div>
        <p class="font-newsreader italic text-xs text-ink-500 max-w-md text-left sm:text-right">
          {{ activeIdea.definition }}
        </p>
      </div>

      <!-- Core Dialectic Question Box -->
      <div class="p-4 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 space-y-1">
        <span class="text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 font-bold block">
          The Perennial Question
        </span>
        <p class="font-cormorant italic text-base sm:text-lg text-ink-900 dark:text-ink-100">
          "{{ activeIdea.coreDialectic }}"
        </p>
      </div>

      <!-- The Conversing Canonical Voices -->
      <div class="space-y-4">
        <span class="text-xs font-mono uppercase tracking-wider text-ink-400 block font-bold">
          The Great Conversation: Competing Canonical Perspectives
        </span>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(debater, dIdx) in activeIdea.canonicalDebaters"
            :key="dIdx"
            class="p-5 rounded-xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 flex flex-col justify-between space-y-4"
          >
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100">
                  {{ debater.author }}
                </span>
                <span class="text-[10px] font-mono text-gold-600 dark:text-gold-400">
                  {{ debater.work }}
                </span>
              </div>
              <p class="font-newsreader text-xs text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ debater.stance }}
              </p>
            </div>

            <blockquote class="p-3 rounded-lg bg-white/70 dark:bg-ink-900/70 border-l-2 border-crimson-600 font-cormorant italic text-xs text-ink-800 dark:text-ink-200">
              "{{ debater.quote }}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { syntopiconData } from '../data/syntopicon.js'

const ideas = syntopiconData
const activeIdeaId = ref(ideas[0].id)

const activeIdea = computed(() => ideas.find(i => i.id === activeIdeaId.value) || ideas[0])
</script>

