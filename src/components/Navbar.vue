<template>
  <header class="sticky top-0 z-40 bg-parchment-50/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-parchment-300 dark:border-ink-800 transition-colors duration-200">
    <!-- Top Editorial Sub-bar -->
    <div class="hidden sm:flex border-b border-parchment-200 dark:border-ink-900 px-4 sm:px-8 py-1 text-[11px] font-mono items-center justify-between text-ink-500 dark:text-ink-400">
      <div class="flex items-center gap-3">
        <span class="text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wider">
          Great Books Digital Portfolio
        </span>
        <span class="text-parchment-300 dark:text-ink-800">|</span>
        <span class="font-newsreader italic text-xs">
          "A mind stretched by a noble book never returns to its original dimensions."
        </span>
      </div>

      <div class="flex items-center gap-3">
        <!-- Ambient Sound Generator -->
        <AmbientAudioPlayer />

        <!-- Reading Mode Controls -->
        <ReadingModeControl />
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
      <!-- Monogram Logo (AD) & Website Title -->
      <router-link
        to="/"
        class="flex items-center gap-3 group focus:outline-none shrink-0"
        aria-label="My Literary Journey Home"
      >
        <!-- Small Monogram Logo: AD -->
        <div class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-crimson-800 to-crimson-950 dark:from-gold-600 dark:to-gold-800 p-0.5 shadow-md flex items-center justify-center shrink-0 border border-gold-400/40 group-hover:scale-105 transition-transform">
          <div class="w-full h-full rounded-full bg-parchment-50 dark:bg-ink-950 flex items-center justify-center">
            <span class="font-cinzel text-xs sm:text-sm font-extrabold tracking-tight text-crimson-800 dark:text-gold-400">
              AD
            </span>
          </div>
        </div>

        <!-- Website Title -->
        <div class="flex flex-col text-left">
          <span class="font-cinzel text-base sm:text-lg font-black tracking-wider text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors leading-tight">
            My Literary Journey
          </span>
          <span class="font-cormorant italic text-[11px] sm:text-xs text-crimson-800 dark:text-gold-400 -mt-0.5 tracking-wide">
            A Great Books Digital Portfolio
          </span>
        </div>
      </router-link>

      <!-- Desktop Navigation Links (Consistent, Balanced & Equal Spacing) -->
      <nav class="hidden lg:flex items-center justify-center gap-1.5 lg:gap-2 xl:gap-3 2xl:gap-4 font-cinzel text-[11px] xl:text-xs font-semibold tracking-wider uppercase">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="relative px-2.5 lg:px-3 xl:px-3.5 py-2 rounded-lg transition-all duration-200 group focus:outline-none whitespace-nowrap text-center"
          :class="[
            isActive(link.path)
              ? 'text-crimson-800 dark:text-gold-400 font-bold bg-parchment-200/50 dark:bg-ink-850/50'
              : 'text-ink-700 dark:text-ink-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-parchment-200/30 dark:hover:bg-ink-850/30'
          ]"
        >
          <span>{{ link.name }}</span>

          <!-- Active Navigation Indicator (Underline pill with equal symmetric margins) -->
          <span
            v-if="isActive(link.path)"
            class="absolute bottom-0 inset-x-2.5 xl:inset-x-3 h-0.5 bg-gradient-to-r from-crimson-700 via-gold-500 to-crimson-700 dark:from-gold-400 dark:via-gold-300 dark:to-gold-400 rounded-full"
          ></span>
        </router-link>
      </nav>

      <!-- Right Action Items (Search + Mobile Hamburger) -->
      <div class="flex items-center gap-2 sm:gap-2.5 shrink-0">
        <!-- Global Search Button -->
        <button
          @click="isSearchOpen = true"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-parchment-300 dark:border-ink-700 bg-parchment-100 dark:bg-ink-900 text-xs text-ink-600 dark:text-ink-300 hover:border-gold-500 transition-colors"
          title="Search the portfolio (Ctrl + K)"
          aria-label="Search portfolio"
        >
          <Search class="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span class="hidden sm:inline font-mono">Search</span>
          <kbd class="hidden md:inline text-[9px] font-mono px-1 py-0.2 bg-parchment-200 dark:bg-ink-800 rounded border border-parchment-300 dark:border-ink-700 text-ink-400">
            ⌘K
          </kbd>
        </button>

        <!-- Mobile Controls for Ambient Sound & Theme if on small screen -->
        <div class="flex sm:hidden items-center gap-1.5">
          <AmbientAudioPlayer />
          <ReadingModeControl />
        </div>

        <!-- Mobile Functional Hamburger Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg text-ink-700 dark:text-ink-200 hover:bg-parchment-200 dark:hover:bg-ink-850 border border-parchment-300 dark:border-ink-700 transition-colors"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <component :is="mobileMenuOpen ? X : Menu" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Panel (Slide-down with active indicator) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-parchment-200 dark:border-ink-800 bg-parchment-50 dark:bg-ink-950 px-4 py-4 space-y-2 shadow-2xl"
      >
        <div class="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 font-bold border-b border-parchment-200 dark:border-ink-800 mb-2">
          Portfolio Sections
        </div>

        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="mobileMenuOpen = false"
          class="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-cinzel text-xs font-bold tracking-wider uppercase transition-colors"
          :class="[
            isActive(link.path)
              ? 'bg-crimson-800 text-white shadow-sm'
              : 'text-ink-800 dark:text-ink-200 hover:bg-parchment-200 dark:hover:bg-ink-900'
          ]"
        >
          <div class="flex items-center gap-2.5">
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="isActive(link.path) ? 'bg-gold-400' : 'bg-parchment-400 dark:bg-ink-600'"
            ></span>
            <span>{{ link.name }}</span>
          </div>
          <span v-if="isActive(link.path)" class="text-[10px] font-mono text-gold-300 uppercase tracking-widest">
            Active
          </span>
        </router-link>
      </div>
    </transition>

    <!-- Global Search Modal -->
    <SearchModal v-model="isSearchOpen" />
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { Search, Menu, X } from 'lucide-vue-next'
import ReadingModeControl from './ReadingModeControl.vue'
import AmbientAudioPlayer from './AmbientAudioPlayer.vue'
import SearchModal from './SearchModal.vue'

const route = useRoute()
const isSearchOpen = ref(false)
const mobileMenuOpen = ref(false)

// All six sections requested by the user
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Student Profile', path: '/profile' },
  { name: 'Literary Analyses', path: '/analyses' },
  { name: 'My Favorite Masterpiece', path: '/masterpiece' },
  { name: 'Summary of Learning', path: '/summary' },
  { name: 'Personal Reflection', path: '/reflection' }
]

function isActive(path) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

function handleGlobalKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isSearchOpen.value = !isSearchOpen.value
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>
