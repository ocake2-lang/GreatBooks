<template>
  <div v-if="work" class="min-h-screen paper-grain pb-24">
    <!-- Top Reading Navigation Bar -->
    <div class="sticky top-16 z-30 bg-parchment-50/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-parchment-300 dark:border-ink-800 transition-colors">
      <div class="max-w-5xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between text-xs font-mono">
        <!-- Back to Library Button -->
        <router-link
          to="/analyses"
          class="flex items-center gap-1.5 text-crimson-700 dark:text-gold-400 hover:underline uppercase font-bold tracking-wider"
        >
          <span>← Back to Literary Library</span>
        </router-link>

        <!-- Previous / Next Controls -->
        <div class="flex items-center gap-2">
          <router-link
            v-if="prevWork"
            :to="`/analyses/${prevWork.id}`"
            class="px-3 py-1 rounded-lg border border-parchment-300 dark:border-ink-700 hover:border-gold-500 hover:text-gold-600 transition-colors text-ink-600 dark:text-ink-300 flex items-center gap-1"
            title="Previous work"
          >
            <span>←</span>
            <span class="hidden sm:inline line-clamp-1 max-w-[120px]">{{ prevWork.title }}</span>
          </router-link>

          <span class="text-ink-400">
            {{ currentIndex + 1 }} / {{ literaryWorks.length }}
          </span>

          <router-link
            v-if="nextWork"
            :to="`/analyses/${nextWork.id}`"
            class="px-3 py-1 rounded-lg border border-parchment-300 dark:border-ink-700 hover:border-gold-500 hover:text-gold-600 transition-colors text-ink-600 dark:text-ink-300 flex items-center gap-1"
            title="Next work"
          >
            <span class="hidden sm:inline line-clamp-1 max-w-[120px]">{{ nextWork.title }}</span>
            <span>→</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- MAIN READING CONTAINER -->
    <main class="max-w-4xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 space-y-12">
      <!-- A. LITERARY INFORMATION HEADER -->
      <section class="space-y-6">
        <!-- Special Favorite Ribbon if The Odyssey -->
        <div v-if="work.isFavorite" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-ink-950 font-cinzel text-xs font-black tracking-widest uppercase shadow-md">
          <Crown class="w-4 h-4 fill-ink-950" />
          <span>My Favorite Literary Masterpiece</span>
        </div>

        <div class="space-y-3">
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            {{ work.period || 'Canonical Masterpiece' }}
          </span>

          <!-- Large Literary Title -->
          <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 leading-tight">
            {{ work.title }}
          </h1>

          <!-- Author Information -->
          <p class="font-cormorant italic text-xl sm:text-2xl text-crimson-800 dark:text-gold-400">
            {{ work.author }}
          </p>
        </div>

        <!-- Short Literary Description -->
        <p class="font-newsreader text-base sm:text-lg text-ink-700 dark:text-ink-300 leading-relaxed max-w-3xl">
          {{ work.description }}
        </p>

        <!-- Featured Artwork / Illustration -->
        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-parchment-300 dark:border-ink-700 aspect-[16/9] bg-ink-950 group">
          <img
            :src="work.image"
            :alt="work.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
            <span class="text-[11px] font-mono tracking-widest uppercase text-gold-300">
              Featured Artwork & Archival Illustration
            </span>
            <p class="font-cinzel font-bold text-lg text-parchment-100 mt-1">
              {{ work.title }} — {{ work.author }}
            </p>
          </div>
        </div>
      </section>

      <!-- B. LITERARY LENS (EDITABLE SECTION) -->
      <section class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
          <div class="flex items-center gap-2">
            <Compass class="w-4 h-4 text-gold-600 dark:text-gold-400" />
            <h3 class="font-cinzel text-sm font-bold uppercase tracking-wider text-ink-950 dark:text-parchment-100">
              Literary Lens & Critical Approach
            </h3>
          </div>

          <!-- Approach Assignment Trigger -->
          <button
            @click="isEditingLens = !isEditingLens"
            class="text-xs font-mono text-gold-700 dark:text-gold-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <Edit3 class="w-3.5 h-3.5" />
            <span>{{ isEditingLens ? 'Done' : (currentLens ? 'Change Lens' : 'Assign Literary Lens') }}</span>
          </button>
        </div>

        <!-- Editable Lens Dropdown Selector -->
        <div v-if="isEditingLens" class="space-y-3 pt-2">
          <label class="block text-xs font-mono text-ink-500">
            Select the critical literary approach for this work:
          </label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="lensOption in literaryLensOptions"
              :key="lensOption"
              @click="setLens(lensOption)"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-mono transition-all border',
                currentLens === lensOption
                  ? 'bg-emerald-800 text-white border-emerald-900 font-bold shadow-sm'
                  : 'bg-parchment-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-700 hover:border-gold-500'
              ]"
            >
              {{ lensOption }}
            </button>
            <button
              v-if="currentLens"
              @click="clearLens"
              class="px-3 py-2 rounded-xl text-xs font-mono text-crimson-600 border border-crimson-300 hover:bg-crimson-50 dark:hover:bg-ink-800"
            >
              Clear Lens
            </button>
          </div>
        </div>

        <!-- Display Lens Status -->
        <div v-else class="flex items-center gap-3">
          <span class="text-xs font-mono uppercase tracking-wider text-ink-400">Assigned Approach:</span>
          <span
            v-if="currentLens"
            class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold"
          >
            {{ currentLens }}
          </span>
          <span
            v-else
            class="text-xs font-newsreader italic text-ink-500"
          >
            No literary lens assigned yet. (Click "Assign Literary Lens" or configure in literaryWorks.js).
          </span>
        </div>
      </section>

      <!-- C. PERSONAL INSIGHT (THE MOST IMPORTANT SECTION) -->
      <section class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-ink-900 border-2 border-gold-500/40 shadow-book-lg space-y-6">
        <div class="flex items-center gap-2.5 border-b border-parchment-200 dark:border-ink-800 pb-4">
          <Feather class="w-5 h-5 text-crimson-800 dark:text-gold-400" />
          <h2 class="font-cinzel text-xl sm:text-2xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Personal Insight
          </h2>
        </div>

        <!-- CASE 1: When personalInsight HAS content -->
        <div
          v-if="hasInsightContent"
          class="prose dark:prose-invert max-w-none space-y-4"
        >
          <div
            v-for="(para, pIdx) in effectiveInsight.split('\n\n')"
            :key="pIdx"
            :class="pIdx === 0 ? 'drop-cap' : ''"
            class="font-newsreader text-base sm:text-lg text-ink-900 dark:text-ink-100 leading-relaxed"
          >
            {{ para }}
          </div>
        </div>

        <!-- CASE 2: When personalInsight is EMPTY -->
        <div
          v-else
          class="py-14 sm:py-20 text-center space-y-3 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-dashed border-parchment-300 dark:border-ink-800"
        >
          <BookOpen class="w-8 h-8 text-gold-500/60 mx-auto" />
          <p class="font-cormorant italic text-xl sm:text-2xl text-ink-500 dark:text-ink-400">
            Personal insight will be added soon.
          </p>
          <p class="font-mono text-xs text-ink-400 max-w-md mx-auto">
            This space is reserved for personal analysis, close-reading insights, and critical reflection.
          </p>
        </div>

        <!-- Sign-off / Attribution -->
        <div class="pt-6 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500">
          <span>Aldrin Danila (AD) • Great Books Portfolio</span>
          <span class="font-cinzel font-bold text-ink-900 dark:text-ink-100">{{ work.title }}</span>
        </div>
      </section>

      <!-- PREVIOUS & NEXT NAVIGATION FOOTER -->
      <nav class="pt-8 border-t border-parchment-300 dark:border-ink-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <router-link
          v-if="prevWork"
          :to="`/analyses/${prevWork.id}`"
          class="p-5 rounded-2xl border border-parchment-300 dark:border-ink-800 bg-white dark:bg-ink-900 hover:border-gold-500 transition-colors flex flex-col justify-between group shadow-sm"
        >
          <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 group-hover:text-gold-600 transition-colors">
            ← Previous Literary Work
          </span>
          <span class="font-cinzel font-bold text-sm sm:text-base text-ink-950 dark:text-parchment-100 line-clamp-1 mt-1 group-hover:text-gold-600 transition-colors">
            {{ prevWork.title }}
          </span>
        </router-link>
        <div v-else></div>

        <router-link
          v-if="nextWork"
          :to="`/analyses/${nextWork.id}`"
          class="p-5 rounded-2xl border border-parchment-300 dark:border-ink-800 bg-white dark:bg-ink-900 hover:border-gold-500 transition-colors flex flex-col justify-between text-right group shadow-sm"
        >
          <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 group-hover:text-gold-600 transition-colors">
            Next Literary Work →
          </span>
          <span class="font-cinzel font-bold text-sm sm:text-base text-ink-950 dark:text-parchment-100 line-clamp-1 mt-1 group-hover:text-gold-600 transition-colors">
            {{ nextWork.title }}
          </span>
        </router-link>
      </nav>
    </main>
  </div>

  <!-- Fallback if work not found -->
  <div v-else class="text-center py-24 space-y-4">
    <h2 class="font-cinzel text-xl font-bold">Literary Work Not Found</h2>
    <router-link to="/analyses" class="text-gold-600 hover:underline font-mono text-sm">
      Return to Literary Analyses Library
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Crown, Compass, Feather, Edit3, BookOpen } from 'lucide-vue-next'
import { literaryWorks, literaryLensOptions } from '../data/literaryWorks.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const route = useRoute()
const currentWorkId = computed(() => props.id || route.params.id)

const work = computed(() => {
  return literaryWorks.find(w => w.id === currentWorkId.value) || literaryWorks[0]
})

const currentIndex = computed(() => {
  return literaryWorks.findIndex(w => w.id === currentWorkId.value)
})

const prevWork = computed(() => {
  return currentIndex.value > 0 ? literaryWorks[currentIndex.value - 1] : null
})

const nextWork = computed(() => {
  return currentIndex.value < literaryWorks.length - 1 ? literaryWorks[currentIndex.value + 1] : null
})

// Literary Lens handling (data file or localStorage)
const isEditingLens = ref(false)
const localLens = ref('')

const currentLens = computed(() => {
  return localLens.value || (work.value ? work.value.literaryLens : '') || ''
})

function setLens(lens) {
  localLens.value = lens
  localStorage.setItem(`greatbooks-lens-${work.value.id}`, lens)
  isEditingLens.value = false
}

function clearLens() {
  localLens.value = ''
  localStorage.removeItem(`greatbooks-lens-${work.value.id}`)
  isEditingLens.value = false
}

// Personal Insight — read from data file or localStorage (read-only display)
const localInsight = ref('')

function loadLocalData() {
  if (work.value) {
    localLens.value = localStorage.getItem(`greatbooks-lens-${work.value.id}`) || ''
    localInsight.value = localStorage.getItem(`greatbooks-insight-${work.value.id}`) || ''
  }
}

watch(() => currentWorkId.value, () => {
  loadLocalData()
  isEditingLens.value = false
})

const effectiveInsight = computed(() => {
  return localInsight.value || (work.value ? work.value.personalInsight : '') || ''
})

const hasInsightContent = computed(() => {
  return !!effectiveInsight.value.trim()
})

onMounted(() => {
  loadLocalData()
})
</script>
