<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded-full border border-parchment-300 dark:border-ink-700 bg-parchment-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
      title="Reading Aesthetics & Theme"
      aria-label="Customize Reading Appearance"
    >
      <Eye class="w-4 h-4" />
    </button>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-64 p-4 rounded-xl shadow-2xl bg-parchment-50 dark:bg-ink-900 border border-parchment-300 dark:border-ink-700 z-50 text-ink-900 dark:text-ink-100"
      >
        <div class="flex items-center justify-between pb-2 border-b border-parchment-200 dark:border-ink-800 mb-3">
          <span class="font-cinzel text-xs font-bold tracking-wider uppercase">Reading Atmosphere</span>
          <button @click="isOpen = false" class="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200 text-sm">✕</button>
        </div>

        <!-- Mode Buttons -->
        <div class="space-y-1.5 mb-4">
          <label class="text-[11px] font-mono uppercase text-ink-500 tracking-wider">Palette</label>
          <div class="grid grid-cols-3 gap-1.5 pt-1">
            <button
              @click="setMode('light')"
              :class="[
                'p-2 rounded border text-xs flex flex-col items-center gap-1 transition-all',
                currentMode === 'light'
                  ? 'border-gold-500 bg-white text-ink-900 shadow-sm font-semibold ring-1 ring-gold-500'
                  : 'border-parchment-300 bg-parchment-100 text-ink-600 hover:bg-white'
              ]"
            >
              <Sun class="w-3.5 h-3.5 text-gold-600" />
              <span class="text-[10px] font-mono">Parchment</span>
            </button>

            <button
              @click="setMode('sepia')"
              :class="[
                'p-2 rounded border text-xs flex flex-col items-center gap-1 transition-all',
                currentMode === 'sepia'
                  ? 'border-gold-600 bg-[#EFE4CE] text-[#2D2319] shadow-sm font-semibold ring-1 ring-gold-600'
                  : 'border-[#DECEB4] bg-[#F4EBD9] text-[#5A4833] hover:bg-[#EFE4CE]'
              ]"
            >
              <BookOpen class="w-3.5 h-3.5 text-amber-700" />
              <span class="text-[10px] font-mono">Sepia</span>
            </button>

            <button
              @click="setMode('dark')"
              :class="[
                'p-2 rounded border text-xs flex flex-col items-center gap-1 transition-all',
                currentMode === 'dark'
                  ? 'border-gold-500 bg-ink-950 text-gold-300 shadow-sm font-semibold ring-1 ring-gold-500'
                  : 'border-ink-700 bg-ink-800 text-ink-300 hover:bg-ink-700'
              ]"
            >
              <Moon class="w-3.5 h-3.5 text-gold-400" />
              <span class="text-[10px] font-mono">Nocturne</span>
            </button>
          </div>
        </div>

        <!-- Font Size Scale -->
        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-[11px] font-mono uppercase text-ink-500 tracking-wider">
            <span>Reading Type Scale</span>
            <span class="text-gold-600 dark:text-gold-400 font-bold">{{ fontSizeLabel }}</span>
          </div>
          <div class="flex items-center gap-2 pt-1">
            <button
              @click="changeFontSize(-1)"
              class="flex-1 py-1 px-2 rounded border border-parchment-300 dark:border-ink-700 hover:bg-parchment-200 dark:hover:bg-ink-800 font-serif text-xs font-bold transition-colors"
              :disabled="fontLevel <= 0"
            >
              A-
            </button>
            <button
              @click="resetFontSize"
              class="px-2 py-1 text-[11px] font-mono text-ink-400 hover:text-ink-600 dark:hover:text-ink-200"
            >
              Reset
            </button>
            <button
              @click="changeFontSize(1)"
              class="flex-1 py-1 px-2 rounded border border-parchment-300 dark:border-ink-700 hover:bg-parchment-200 dark:hover:bg-ink-800 font-serif text-sm font-bold transition-colors"
              :disabled="fontLevel >= 3"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Eye, Sun, Moon, BookOpen } from 'lucide-vue-next'

const isOpen = ref(false)
const currentMode = ref('light')
const fontLevel = ref(1)

const fontLabels = ['Compact', 'Default', 'Expanded', 'Generous']
const fontClasses = ['prose-compact', 'prose-default', 'prose-expanded', 'prose-generous']

const fontSizeLabel = computed(() => fontLabels[fontLevel.value] || 'Default')

function applyTheme(mode) {
  const root = document.documentElement
  root.classList.remove('dark', 'theme-sepia')

  if (mode === 'dark') {
    root.classList.add('dark')
  } else if (mode === 'sepia') {
    root.classList.add('theme-sepia')
  }
  localStorage.setItem('greatbooks-theme', mode)
  currentMode.value = mode
}

function setMode(mode) {
  applyTheme(mode)
}

function applyFontScale(level) {
  const root = document.documentElement
  fontClasses.forEach(cls => root.classList.remove(cls))
  root.classList.add(fontClasses[level])
  localStorage.setItem('greatbooks-font-level', level)
  fontLevel.value = level
}

function changeFontSize(delta) {
  const next = Math.max(0, Math.min(3, fontLevel.value + delta))
  applyFontScale(next)
}

function resetFontSize() {
  applyFontScale(1)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('greatbooks-theme') || 'light'
  applyTheme(savedTheme)

  const savedFont = parseInt(localStorage.getItem('greatbooks-font-level') || '1', 10)
  applyFontScale(isNaN(savedFont) ? 1 : savedFont)
})
</script>

