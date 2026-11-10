<template>
  <div>
    <!-- Backdrop and Modal -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-ink-950/70 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="w-full max-w-2xl bg-parchment-50 dark:bg-ink-900 border border-parchment-300 dark:border-ink-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all"
        >
          <!-- Search Header -->
          <div class="p-4 border-b border-parchment-200 dark:border-ink-800 flex items-center gap-3">
            <Search class="w-5 h-5 text-gold-600 dark:text-gold-400 shrink-0" />
            <input
              ref="inputRef"
              v-model="query"
              type="text"
              placeholder="Search canon, monographs, quotes, concepts (e.g. Plato, Sisyphus, Justice)..."
              class="w-full bg-transparent border-none outline-none text-ink-900 dark:text-ink-100 placeholder:text-ink-400 font-sans text-base"
              @keydown.esc="close"
            />
            <span class="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono uppercase bg-parchment-200 dark:bg-ink-800 text-ink-500 rounded border border-parchment-300 dark:border-ink-700">
              ESC
            </span>
            <button @click="close" class="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200 p-1">
              ✕
            </button>
          </div>

          <!-- Results Scroll Area -->
          <div class="overflow-y-auto p-4 space-y-6">
            <div v-if="!query.trim()" class="text-center py-8 text-ink-400">
              <BookOpen class="w-8 h-8 mx-auto mb-2 text-gold-500/50" />
              <p class="font-newsreader italic text-sm">
                Inquire into the Western canon, seminar essays, commonplace reflections, and dialectic questions.
              </p>
              <div class="flex flex-wrap justify-center gap-2 mt-4">
                <button
                  v-for="suggestion in suggestions"
                  :key="suggestion"
                  @click="query = suggestion"
                  class="px-2.5 py-1 text-xs font-mono rounded-full bg-parchment-200 dark:bg-ink-800 text-ink-600 dark:text-ink-300 hover:text-gold-600 hover:border-gold-500/40 border border-parchment-300 dark:border-ink-700 transition-colors"
                >
                  {{ suggestion }}
                </button>
              </div>
            </div>

            <div v-else-if="totalResults === 0" class="text-center py-8 text-ink-500">
              <p class="font-cinzel text-sm uppercase tracking-wider">No canonical entries found</p>
              <p class="font-newsreader italic text-xs mt-1">Try searching for an author, theme, or concept.</p>
            </div>

            <!-- 10 Literary Works Matches -->
            <div v-if="matchedLiteraryWorks.length > 0" class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 pb-1 border-b border-parchment-200 dark:border-ink-800">
                <span>Literary Analyses & Insights ({{ matchedLiteraryWorks.length }})</span>
                <span>Works</span>
              </div>
              <div class="space-y-1">
                <button
                  v-for="work in matchedLiteraryWorks"
                  :key="work.id"
                  @click="goToLiteraryWork(work.id)"
                  class="w-full text-left p-2.5 rounded-lg hover:bg-parchment-200 dark:hover:bg-ink-800 transition-colors flex items-start gap-3 group"
                >
                  <BookMarked class="w-4 h-4 text-gold-600 dark:text-gold-400 mt-1 shrink-0" />
                  <div>
                    <h5 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100 group-hover:text-gold-600 transition-colors flex items-center gap-2">
                      <span>{{ work.title }}</span>
                      <span v-if="work.isFavorite" class="px-2 py-0.2 rounded-full text-[9px] font-mono bg-gold-500/20 text-gold-600 font-bold uppercase">
                        Favorite
                      </span>
                      <span class="text-xs font-normal text-ink-400 font-sans">— {{ work.author }}</span>
                    </h5>
                    <p class="text-xs text-ink-500 dark:text-ink-400 line-clamp-1 font-newsreader italic mt-0.5">
                      {{ work.description }}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Books Matches -->
            <div v-if="matchedBooks.length > 0" class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 pb-1 border-b border-parchment-200 dark:border-ink-800">
                <span>The Canon & Stacks ({{ matchedBooks.length }})</span>
                <span>Works</span>
              </div>
              <div class="space-y-1">
                <button
                  v-for="book in matchedBooks"
                  :key="book.id"
                  @click="goToBook(book)"
                  class="w-full text-left p-2.5 rounded-lg hover:bg-parchment-200 dark:hover:bg-ink-800 transition-colors flex items-start gap-3 group"
                >
                  <BookMarked class="w-4 h-4 text-gold-600 dark:text-gold-400 mt-1 shrink-0" />
                  <div>
                    <h5 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100 group-hover:text-gold-600 transition-colors">
                      {{ book.title }}
                      <span class="text-xs font-normal text-ink-400 font-sans ml-2">— {{ book.author }} ({{ book.year }})</span>
                    </h5>
                    <p class="text-xs text-ink-500 dark:text-ink-400 line-clamp-1 font-newsreader italic mt-0.5">
                      {{ book.thesis }}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Essays Matches -->
            <div v-if="matchedEssays.length > 0" class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-crimson-600 dark:text-crimson-400 pb-1 border-b border-parchment-200 dark:border-ink-800">
                <span>Dialectic Monographs & Papers ({{ matchedEssays.length }})</span>
                <span>Essays</span>
              </div>
              <div class="space-y-1">
                <button
                  v-for="essay in matchedEssays"
                  :key="essay.id"
                  @click="goToEssay(essay.id)"
                  class="w-full text-left p-2.5 rounded-lg hover:bg-parchment-200 dark:hover:bg-ink-800 transition-colors flex items-start gap-3 group"
                >
                  <FileText class="w-4 h-4 text-crimson-600 dark:text-crimson-400 mt-1 shrink-0" />
                  <div>
                    <h5 class="font-cinzel font-bold text-sm text-ink-900 dark:text-ink-100 group-hover:text-crimson-600 transition-colors">
                      {{ essay.title }}
                    </h5>
                    <p class="text-xs text-ink-500 dark:text-ink-400 line-clamp-1 font-newsreader italic mt-0.5">
                      {{ essay.abstract }}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Commonplace Quotes Matches -->
            <div v-if="matchedQuotes.length > 0" class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-ink-500 pb-1 border-b border-parchment-200 dark:border-ink-800">
                <span>Commonplace Book & Marginalia ({{ matchedQuotes.length }})</span>
                <span>Passages</span>
              </div>
              <div class="space-y-1">
                <button
                  v-for="q in matchedQuotes"
                  :key="q.id"
                  @click="goToCommonplace"
                  class="w-full text-left p-2.5 rounded-lg hover:bg-parchment-200 dark:hover:bg-ink-800 transition-colors group"
                >
                  <p class="font-cormorant italic text-sm text-ink-800 dark:text-ink-200 line-clamp-2">
                    "{{ q.quote }}"
                  </p>
                  <span class="text-xs font-mono text-gold-600 dark:text-gold-400 mt-1 inline-block">
                    — {{ q.author }}, {{ q.work }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="p-3 bg-parchment-100 dark:bg-ink-950 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono text-ink-400">
            <span>Navigating Canon & Corpus</span>
            <span>Total results: {{ totalResults }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Search, BookOpen, BookMarked, FileText } from 'lucide-vue-next'
import { booksData } from '../data/books.js'
import { literaryWorks } from '../data/literaryWorks.js'
import { essaysData } from '../data/essays.js'
import { commonplaceData } from '../data/commonplace.js'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'select-book'])
const router = useRouter()
const query = ref('')
const inputRef = ref(null)

const suggestions = ['Plato', 'Dostoevsky', 'Justice', 'Sisyphus', 'Frankenstein', 'Stoicism']

watch(() => props.modelValue, (open) => {
  if (open) {
    query.value = ''
    nextTick(() => {
      inputRef.value?.focus()
    })
  }
})

const matchedLiteraryWorks = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return literaryWorks.filter(w =>
    w.title.toLowerCase().includes(q) ||
    w.author.toLowerCase().includes(q) ||
    (w.description && w.description.toLowerCase().includes(q))
  )
})

function goToLiteraryWork(id) {
  close()
  router.push(`/analyses/${id}`)
}

const matchedBooks = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return booksData.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.theme.toLowerCase().includes(q) ||
    b.thesis.toLowerCase().includes(q) ||
    b.tags.some(t => t.toLowerCase().includes(q))
  )
})

const matchedEssays = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return essaysData.filter(e =>
    e.title.toLowerCase().includes(q) ||
    e.subtitle.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.abstract.toLowerCase().includes(q)
  )
})

const matchedQuotes = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return commonplaceData.filter(qItem =>
    qItem.quote.toLowerCase().includes(q) ||
    qItem.author.toLowerCase().includes(q) ||
    qItem.work.toLowerCase().includes(q) ||
    qItem.themeTag.toLowerCase().includes(q)
  )
})

const totalResults = computed(() =>
  matchedBooks.value.length +
  matchedEssays.value.length +
  matchedQuotes.value.length +
  matchedLiteraryWorks.value.length
)

function close() {
  emit('update:modelValue', false)
}

function goToBook(book) {
  close()
  if (book.id === 'homer-odyssey' || book.id === 'dostoevsky-brothers-karamazov') {
    router.push('/masterpiece')
  } else {
    router.push('/analyses')
  }
}

function goToEssay(id) {
  close()
  router.push(`/analyses/${id}`)
}

function goToCommonplace() {
  close()
  router.push('/reflection')
}
</script>

