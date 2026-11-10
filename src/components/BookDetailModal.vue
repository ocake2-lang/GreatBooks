<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="book"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-950/80 backdrop-blur-md overflow-y-auto"
      @click.self="close"
    >
      <div
        class="w-full max-w-4xl bg-parchment-50 dark:bg-ink-900 border border-parchment-300 dark:border-ink-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
      >
        <!-- Modal Top Bar -->
        <div class="px-6 py-3.5 bg-parchment-100 dark:bg-ink-950 border-b border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ink-500">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-gold-500"></span>
            <span>Canonical Folio #{{ book.id }}</span>
            <span class="hidden sm:inline">•</span>
            <span class="hidden sm:inline text-gold-600 dark:text-gold-400 font-semibold">{{ book.era }}</span>
          </div>
          <div class="flex items-center gap-3">
            <button
              @click="toggleBookmark(book.id)"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded border border-parchment-300 dark:border-ink-700 hover:text-gold-600 text-[11px] transition-colors"
            >
              <Bookmark :class="['w-3.5 h-3.5', isBookmarked(book.id) ? 'fill-gold-500 text-gold-500' : '']" />
              <span>{{ isBookmarked(book.id) ? 'Bookmarked' : 'Pin to Study Stack' }}</span>
            </button>
            <button
              @click="close"
              class="p-1 hover:bg-parchment-200 dark:hover:bg-ink-800 rounded text-ink-500 hover:text-ink-900 dark:hover:text-ink-100 transition-colors text-base"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Modal Content Scroll Area -->
        <div class="overflow-y-auto p-6 sm:p-8 space-y-8">
          <!-- Hero Header Section -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <!-- Book Visual Dust-Jacket / Cover -->
            <div class="md:col-span-4 relative group">
              <div class="relative rounded-lg overflow-hidden shadow-book-lg border border-parchment-300 dark:border-ink-700 aspect-[3/4] bg-ink-900">
                <img
                  :src="book.coverImage"
                  :alt="book.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-5 flex flex-col justify-end text-white">
                  <span class="text-[10px] font-mono tracking-widest uppercase text-gold-400 mb-1">
                    {{ book.genre }}
                  </span>
                  <h3 class="font-cinzel font-bold text-xl leading-tight text-parchment-100">
                    {{ book.title }}
                  </h3>
                  <p class="font-newsreader italic text-xs text-parchment-300 mt-1">
                    {{ book.author }} • {{ book.year }}
                  </p>
                </div>
              </div>

              <!-- Impact Laurels -->
              <div class="mt-4 p-3 rounded-lg bg-parchment-100 dark:bg-ink-800/60 border border-parchment-200 dark:border-ink-700/60 flex items-center justify-between">
                <span class="text-xs font-mono uppercase text-ink-500">Intellectual Impact</span>
                <div class="flex items-center text-gold-500 gap-1 text-sm" title="5/5 Laurels">
                  <span v-for="n in 5" :key="n">👑</span>
                </div>
              </div>
            </div>

            <!-- Header Info & Key Question -->
            <div class="md:col-span-8 space-y-4">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
                  {{ book.originalTitle }}
                </span>
                <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-ink-50 tracking-tight mt-1">
                  {{ book.title }}
                </h2>
                <p class="font-cormorant text-xl text-crimson-700 dark:text-crimson-400 italic">
                  by {{ book.author }} ({{ book.year }})
                </p>
              </div>

              <!-- Metadata Pills -->
              <div class="flex flex-wrap gap-2 text-xs font-mono">
                <span class="px-2.5 py-1 rounded-full bg-parchment-200 dark:bg-ink-800 text-ink-700 dark:text-ink-300 border border-parchment-300 dark:border-ink-700">
                  {{ book.theme }}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/30">
                  Status: {{ book.readStatus }}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-parchment-200 dark:bg-ink-800 text-ink-500">
                  Seminar: {{ book.readingDate }}
                </span>
              </div>

              <!-- Philosophical Key Question Box -->
              <div class="p-4 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 text-ink-900 dark:text-ink-100 space-y-1">
                <div class="text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 font-bold">
                  The Central Philosophical Inquiry
                </div>
                <p class="font-cormorant text-lg italic text-ink-800 dark:text-ink-200 leading-snug">
                  "{{ book.keyQuestion }}"
                </p>
              </div>

              <!-- Central Thesis Statement -->
              <div class="space-y-1">
                <h4 class="font-cinzel text-xs font-bold uppercase tracking-wider text-ink-500">
                  Canonical Thesis
                </h4>
                <p class="font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                  {{ book.thesis }}
                </p>
              </div>

              <!-- Dialectic Counterpoint with Interactive Folio Switcher -->
              <div class="p-3.5 rounded-lg bg-parchment-200 dark:bg-ink-800/80 border border-parchment-300 dark:border-ink-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-start gap-3">
                  <Compass class="w-4 h-4 text-crimson-600 dark:text-crimson-400 mt-0.5 shrink-0" />
                  <div class="text-xs">
                    <span class="font-bold text-ink-900 dark:text-ink-100 font-cinzel">Dialectical Counterpart:</span>
                    <p class="font-newsreader italic text-ink-600 dark:text-ink-300 mt-0.5">
                      {{ book.dialecticOpposite }}
                    </p>
                  </div>
                </div>

                <button
                  v-if="counterpartBook"
                  @click="switchToBook(counterpartBook)"
                  class="shrink-0 px-3 py-1.5 rounded-lg font-cinzel text-[11px] font-bold uppercase tracking-wider bg-crimson-800 hover:bg-crimson-700 text-parchment-50 transition-colors shadow-sm self-start sm:self-auto"
                >
                  Examine Counterpart →
                </button>
              </div>
            </div>
          </div>

          <!-- Personal Academic Synthesis / Reflection -->
          <div class="space-y-3 pt-4 border-t border-parchment-200 dark:border-ink-800">
            <div class="flex items-center gap-2">
              <Feather class="w-4 h-4 text-gold-600 dark:text-gold-400" />
              <h3 class="font-cinzel text-base font-bold uppercase tracking-wider text-ink-900 dark:text-ink-100">
                My Critical Reading Synthesis & Seminar Reflection
              </h3>
            </div>
            <div class="prose dark:prose-invert max-w-none">
              <p class="font-newsreader text-base text-ink-800 dark:text-ink-200 leading-relaxed drop-cap">
                {{ book.personalReflection }}
              </p>
            </div>
          </div>

          <!-- Notable Close-Reading Excerpts -->
          <div class="space-y-4 pt-4 border-t border-parchment-200 dark:border-ink-800">
            <h3 class="font-cinzel text-sm font-bold uppercase tracking-wider text-ink-500">
              Annotated Canonical Passages
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(exc, idx) in book.notableExcerpts"
                :key="idx"
                class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-800 border border-parchment-200 dark:border-ink-700 flex flex-col justify-between"
              >
                <blockquote class="font-cormorant italic text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed mb-3">
                  "{{ exc.quote }}"
                </blockquote>
                <div class="text-[11px] font-mono text-gold-600 dark:text-gold-400 pt-2 border-t border-parchment-200 dark:border-ink-700">
                  ✦ {{ exc.context }}
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive Personal Seminar Annotator -->
          <div class="p-5 rounded-xl bg-white dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <PenLine class="w-3.5 h-3.5 text-gold-600" />
                <span class="font-cinzel text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-ink-100">
                  Your Personal Seminar Notes on this Folio
                </span>
              </div>
              <span v-if="savedNoteStatus" class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ Inscribed in Local Storage
              </span>
            </div>

            <textarea
              v-model="personalUserNote"
              rows="3"
              placeholder="Inscribe your personal reflections, seminar questions, or close-reading notes for this book..."
              class="w-full p-3 rounded-lg border border-parchment-300 dark:border-ink-700 bg-parchment-50 dark:bg-ink-900 text-xs font-newsreader text-ink-900 dark:text-ink-100 outline-none focus:border-gold-500"
              @input="savePersonalNote"
            ></textarea>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="text-xs font-mono uppercase text-ink-400">Indexed Themes:</span>
            <span
              v-for="t in book.tags"
              :key="t"
              class="px-2 py-0.5 text-xs font-mono rounded bg-parchment-200 dark:bg-ink-800 text-ink-600 dark:text-ink-400"
            >
              #{{ t }}
            </span>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-4 bg-parchment-100 dark:bg-ink-950 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between">
          <span class="text-xs font-newsreader italic text-ink-500">
            Great Books Program • Dialectic Portfolio
          </span>
          <button
            @click="close"
            class="px-5 py-2 rounded-lg font-cinzel text-xs font-bold tracking-widest uppercase bg-ink-900 dark:bg-parchment-100 text-parchment-50 dark:text-ink-900 hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
          >
            Close Folio
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Bookmark, Compass, Feather, PenLine } from 'lucide-vue-next'
import { booksData } from '../data/books.js'

const props = defineProps({
  book: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'select-book'])

const bookmarkedIds = ref(JSON.parse(localStorage.getItem('greatbooks-bookmarks') || '[]'))
const personalUserNote = ref('')
const savedNoteStatus = ref(false)

watch(() => props.book, (newBook) => {
  if (newBook) {
    personalUserNote.value = localStorage.getItem(`greatbooks-folio-note-${newBook.id}`) || ''
    savedNoteStatus.value = false
  }
}, { immediate: true })

const counterpartBook = computed(() => {
  if (!props.book || !props.book.dialecticOpposite) return null
  const text = props.book.dialecticOpposite.toLowerCase()
  return booksData.find(b =>
    text.includes(b.title.toLowerCase()) ||
    text.includes(b.author.toLowerCase())
  )
})

function close() {
  emit('close')
}

function switchToBook(target) {
  emit('select-book', target)
}

function isBookmarked(id) {
  return bookmarkedIds.value.includes(id)
}

function toggleBookmark(id) {
  if (isBookmarked(id)) {
    bookmarkedIds.value = bookmarkedIds.value.filter(item => item !== id)
  } else {
    bookmarkedIds.value.push(id)
  }
  localStorage.setItem('greatbooks-bookmarks', JSON.stringify(bookmarkedIds.value))
}

let timeoutId = null
function savePersonalNote() {
  if (!props.book) return
  localStorage.setItem(`greatbooks-folio-note-${props.book.id}`, personalUserNote.value)
  savedNoteStatus.value = true
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    savedNoteStatus.value = false
  }, 2500)
}
</script>
