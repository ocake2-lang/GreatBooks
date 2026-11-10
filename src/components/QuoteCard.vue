<template>
  <div class="p-6 rounded-xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500/50 shadow-sm transition-all duration-300 flex flex-col justify-between">
    <div>
      <!-- Top Meta Bar -->
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-parchment-200 dark:border-ink-800 text-xs font-mono">
        <span class="px-2.5 py-0.5 rounded-full bg-parchment-200 dark:bg-ink-800 text-ink-600 dark:text-ink-400">
          {{ quoteItem.themeTag }}
        </span>
        <button
          @click="copyCitation"
          class="flex items-center gap-1 text-ink-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          :title="copied ? 'Citation Copied!' : 'Copy Academic Citation'"
        >
          <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-600" />
          <Copy v-else class="w-3.5 h-3.5" />
          <span class="text-[10px] uppercase font-bold">{{ copied ? 'Copied' : 'Cite' }}</span>
        </button>
      </div>

      <!-- Quotation Text -->
      <blockquote class="font-cormorant italic text-lg sm:text-xl text-ink-900 dark:text-ink-100 leading-relaxed relative pl-4 border-l-2 border-gold-500 mb-4">
        "{{ quoteItem.quote }}"
      </blockquote>

      <!-- Attribution & Work -->
      <div class="space-y-0.5">
        <p class="font-cinzel font-bold text-sm text-crimson-800 dark:text-gold-400">
          {{ quoteItem.author }}
        </p>
        <p class="font-newsreader text-xs text-ink-500 dark:text-ink-400">
          <span class="italic">{{ quoteItem.work }}</span> • {{ quoteItem.citation }}
        </p>
      </div>

      <!-- Student's Marginalia Note -->
      <div v-if="quoteItem.marginalia" class="mt-4 p-3.5 rounded-lg bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-800 text-xs">
        <div class="flex items-center gap-1.5 text-gold-700 dark:text-gold-400 font-mono text-[10px] uppercase tracking-wider mb-1 font-bold">
          <Feather class="w-3 h-3" />
          <span>Reader's Marginalia</span>
        </div>
        <p class="font-newsreader italic text-ink-700 dark:text-ink-300 leading-relaxed">
          {{ quoteItem.marginalia }}
        </p>
      </div>

      <!-- User's Personal Custom Note (if added) -->
      <div v-if="userNote" class="mt-3 p-3 rounded-lg bg-gold-500/10 border border-gold-500/30 text-xs">
        <div class="flex items-center justify-between text-[10px] font-mono text-gold-700 dark:text-gold-300 font-bold uppercase mb-1">
          <span>Your Personal Annotation</span>
          <button @click="clearUserNote" class="text-ink-400 hover:text-crimson-600">✕</button>
        </div>
        <p class="font-newsreader text-ink-800 dark:text-ink-200">{{ userNote }}</p>
      </div>
    </div>

    <!-- Interactive Note Adder Trigger -->
    <div class="pt-4 mt-4 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between">
      <button
        @click="showNoteInput = !showNoteInput"
        class="text-xs font-mono text-ink-500 hover:text-gold-600 flex items-center gap-1 transition-colors"
      >
        <PenLine class="w-3 h-3" />
        <span>{{ showNoteInput ? 'Cancel' : (userNote ? 'Edit Annotation' : 'Add Margin Note') }}</span>
      </button>
      <span class="text-[10px] font-mono uppercase text-ink-400 tracking-wider">
        {{ quoteItem.category }}
      </span>
    </div>

    <!-- Inline Margin Note Input Form -->
    <div v-if="showNoteInput" class="mt-3 pt-3 border-t border-parchment-200 dark:border-ink-800 space-y-2">
      <textarea
        v-model="tempNote"
        rows="2"
        placeholder="Pen your contemplative reaction to this passage..."
        class="w-full text-xs font-newsreader p-2 rounded border border-parchment-300 dark:border-ink-700 bg-parchment-50 dark:bg-ink-950 text-ink-900 dark:text-ink-100 outline-none focus:border-gold-500"
      ></textarea>
      <div class="flex justify-end gap-2">
        <button
          @click="showNoteInput = false"
          class="px-2 py-1 text-[11px] font-mono text-ink-500 hover:text-ink-800"
        >
          Cancel
        </button>
        <button
          @click="saveUserNote"
          class="px-3 py-1 bg-gold-600 hover:bg-gold-700 text-white font-mono text-[11px] rounded transition-colors"
        >
          Inscribe Note
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Feather, Copy, Check, PenLine } from 'lucide-vue-next'

const props = defineProps({
  quoteItem: {
    type: Object,
    required: true
  }
})

const copied = ref(false)
const showNoteInput = ref(false)
const tempNote = ref('')
const userNote = ref('')

function copyCitation() {
  const citation = `"${props.quoteItem.quote}" — ${props.quoteItem.author}, ${props.quoteItem.work} (${props.quoteItem.citation}).`
  navigator.clipboard.writeText(citation)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

function saveUserNote() {
  if (tempNote.value.trim()) {
    userNote.value = tempNote.value.trim()
    localStorage.setItem(`greatbooks-quote-note-${props.quoteItem.id}`, userNote.value)
    showNoteInput.value = false
  }
}

function clearUserNote() {
  userNote.value = ''
  tempNote.value = ''
  localStorage.removeItem(`greatbooks-quote-note-${props.quoteItem.id}`)
}

onMounted(() => {
  const saved = localStorage.getItem(`greatbooks-quote-note-${props.quoteItem.id}`)
  if (saved) {
    userNote.value = saved
    tempNote.value = saved
  }
})
</script>

