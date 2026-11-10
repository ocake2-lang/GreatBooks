<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 paper-grain pb-24">
    <!-- View Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-crimson-800/10 text-crimson-800 dark:text-gold-400 border border-crimson-800/20 text-xs font-mono uppercase tracking-widest font-bold">
        <span>Curated Digital Library</span>
      </div>
      <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
        Literary Analyses
      </h1>
      <p class="font-cormorant italic text-lg sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
        A structured digital repository of ten foundational works across ancient scriptures, eastern epics, classical antiquity, medieval chivalry, and modern literature.
      </p>
      <div class="w-16 h-0.5 bg-crimson-800 dark:bg-gold-500 mx-auto"></div>
    </div>

    <!-- Search & Literary Lens Filter Bar -->
    <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-5">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Search Input -->
        <div class="relative w-full md:w-96">
          <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by title, author, or keyword..."
            class="w-full pl-10 pr-4 py-2.5 text-xs font-sans rounded-xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-700 text-ink-900 dark:text-ink-100 placeholder:text-ink-400 outline-none focus:border-gold-500 transition-colors"
          />
        </div>

        <!-- Counter & Info -->
        <div class="flex items-center gap-3 text-xs font-mono text-ink-500">
          <span>Showing {{ filteredWorks.length }} of {{ literaryWorks.length }} Literary Works</span>
          <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span class="text-gold-600 dark:text-gold-400 font-bold">10 Entries</span>
        </div>
      </div>

      <!-- Literary Lens Filters -->
      <div class="space-y-2 pt-2 border-t border-parchment-200 dark:border-ink-800">
        <label class="text-[11px] font-mono uppercase tracking-wider text-ink-400 block font-bold">
          Filter by Literary Lens / Critical Approach:
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="lens in lensFilterOptions"
            :key="lens"
            @click="selectedLens = lens"
            :class="[
              'px-3.5 py-1.5 rounded-full text-xs font-cinzel transition-all border',
              selectedLens === lens
                ? 'bg-crimson-800 text-white border-crimson-900 font-bold shadow-sm'
                : 'bg-parchment-100 dark:bg-ink-950 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-800 hover:border-gold-500'
            ]"
          >
            {{ lens }}
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredWorks.length === 0"
      class="text-center py-16 bg-white dark:bg-ink-900 rounded-2xl border border-parchment-300 dark:border-ink-800 space-y-3"
    >
      <BookOpen class="w-10 h-10 text-gold-500 mx-auto" />
      <h3 class="font-cinzel text-lg font-bold text-ink-950 dark:text-ink-100 uppercase">
        No Literary Works Match Filter
      </h3>
      <p class="font-newsreader italic text-sm text-ink-500">
        Try adjusting your search query or reset your literary lens filter.
      </p>
      <button
        @click="resetFilters"
        class="px-4 py-2 bg-gold-600 hover:bg-gold-700 text-white text-xs font-mono uppercase rounded-lg transition-colors"
      >
        Show All 10 Works
      </button>
    </div>

    <!-- 10 LITERARY WORK CARDS GRID -->
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <LiteraryWorkCard
        v-for="work in filteredWorks"
        :key="work.id"
        :work="work"
      />
    </div>

    <!-- Bottom Navigation Bar to Next Section -->
    <div class="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-parchment-300 dark:border-ink-800">
      <router-link
        to="/profile"
        class="text-xs font-cinzel font-bold uppercase tracking-wider text-ink-500 hover:text-gold-600 flex items-center gap-1.5"
      >
        <span>← Student Profile</span>
      </router-link>

      <router-link
        to="/masterpiece"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-700 text-parchment-50 font-cinzel text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
      >
        <span>My Favorite Masterpiece (The Odyssey)</span>
        <span>→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, BookOpen } from 'lucide-vue-next'
import { literaryWorks, literaryLensOptions } from '../data/literaryWorks.js'
import LiteraryWorkCard from '../components/LiteraryWorkCard.vue'

const searchQuery = ref('')
const selectedLens = ref('All Approaches')

const lensFilterOptions = [
  'All Approaches',
  ...literaryLensOptions,
  'Unassigned'
]

const filteredWorks = computed(() => {
  return literaryWorks.filter(work => {
    // Search query match
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch = !q || (
      work.title.toLowerCase().includes(q) ||
      work.author.toLowerCase().includes(q) ||
      work.description.toLowerCase().includes(q)
    )

    // Check effective lens (either in data file or in localStorage)
    const effectiveLens = localStorage.getItem(`greatbooks-lens-${work.id}`) || work.literaryLens || ''

    let matchesLens = true
    if (selectedLens.value === 'All Approaches') {
      matchesLens = true
    } else if (selectedLens.value === 'Unassigned') {
      matchesLens = !effectiveLens
    } else {
      matchesLens = effectiveLens === selectedLens.value
    }

    return matchesSearch && matchesLens
  })
})

function resetFilters() {
  searchQuery.value = ''
  selectedLens.value = 'All Approaches'
}
</script>
