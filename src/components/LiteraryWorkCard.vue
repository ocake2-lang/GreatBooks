<template>
  <div
    class="group relative flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500/70 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden"
  >
    <!-- Card Visual Cover Image -->
    <div class="relative h-56 sm:h-60 overflow-hidden bg-ink-950">
      <img
        :src="work.image"
        :alt="work.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>

      <!-- Top Badges Row -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
        <!-- Special "My Favorite" Label for The Odyssey -->
        <span
          v-if="work.isFavorite"
          class="px-3 py-1 rounded-full text-xs font-cinzel font-bold tracking-wider uppercase bg-gradient-to-r from-gold-500 to-amber-600 text-ink-950 shadow-lg border border-gold-300 flex items-center gap-1.5 animate-pulse"
        >
          <Crown class="w-3.5 h-3.5 fill-ink-950 text-ink-950" />
          <span>My Favorite</span>
        </span>

        <span
          v-else
          class="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-ink-950/80 text-parchment-300 backdrop-blur-sm border border-parchment-700/50"
        >
          {{ work.period ? work.period.split('(')[0].trim() : 'Canonical Text' }}
        </span>

        <!-- Lens Badge if assigned -->
        <span
          v-if="currentLens"
          class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-900/80 text-emerald-200 border border-emerald-500/40 backdrop-blur-sm"
        >
          {{ currentLens }}
        </span>
      </div>

      <!-- Title & Author on Cover Bottom -->
      <div class="absolute bottom-3 left-3 right-3 text-white">
        <h3 class="font-cinzel font-bold text-lg sm:text-xl leading-tight text-parchment-100 group-hover:text-gold-300 transition-colors">
          {{ work.title }}
        </h3>
        <p class="font-cormorant italic text-sm text-gold-200/90 mt-0.5">
          {{ work.author }}
        </p>
      </div>
    </div>

    <!-- Body Information -->
    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        <!-- Literary Description -->
        <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed line-clamp-3">
          {{ work.description }}
        </p>

        <!-- Literary Lens Indicator / Approach Tag -->
        <div class="pt-2 flex items-center gap-2 text-xs font-mono">
          <span class="text-ink-400 text-[11px] uppercase tracking-wider">Approach:</span>
          <span
            v-if="currentLens"
            class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-bold"
          >
            {{ currentLens }}
          </span>
          <span
            v-else
            class="px-2 py-0.5 rounded bg-parchment-200 dark:bg-ink-800 text-ink-500 text-[10px] italic"
          >
            Lens Pending Assignment
          </span>
        </div>
      </div>

      <!-- Action Button: Read Personal Insight -->
      <div class="pt-4 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between">
        <span v-if="work.isFavorite" class="text-[11px] font-mono text-gold-600 dark:text-gold-400 font-bold flex items-center gap-1">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Crown Masterpiece</span>
        </span>
        <span v-else class="text-[11px] font-mono text-ink-400">
          Folio #{{ work.id }}
        </span>

        <router-link
          :to="`/analyses/${work.id}`"
          :class="[
            'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all shadow-sm',
            work.isFavorite
              ? 'bg-gold-500 hover:bg-gold-400 text-ink-950 font-extrabold shadow-md'
              : 'bg-crimson-800 hover:bg-crimson-700 text-parchment-50'
          ]"
        >
          <span>Read Personal Insight</span>
          <span>→</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Crown, Sparkles } from 'lucide-vue-next'

const props = defineProps({
  work: {
    type: Object,
    required: true
  }
})

// Check if user set a lens in the data file or in localStorage
const currentLens = computed(() => {
  const localSaved = localStorage.getItem(`greatbooks-lens-${props.work.id}`)
  return localSaved || props.work.literaryLens || ''
})
</script>

