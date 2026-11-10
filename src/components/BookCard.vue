<template>
  <div
    class="group relative flex flex-col rounded-xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500/50 dark:hover:border-gold-500/50 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden cursor-pointer"
    @click="$emit('select', book)"
  >
    <!-- Card Cover Image Banner -->
    <div class="relative h-56 sm:h-64 overflow-hidden bg-ink-950">
      <img
        :src="book.coverImage"
        :alt="book.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>

      <!-- Top Badges -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
        <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-ink-950/80 text-gold-400 backdrop-blur-sm border border-gold-500/30">
          {{ book.era }}
        </span>
        <button
          @click.stop="toggleBookmark"
          class="p-1.5 rounded-full bg-ink-950/70 text-parchment-200 hover:text-gold-400 backdrop-blur-sm border border-parchment-700/50 transition-colors"
          title="Pin to reading stacks"
        >
          <Bookmark :class="['w-3.5 h-3.5', isBookmarked ? 'fill-gold-400 text-gold-400' : '']" />
        </button>
      </div>

      <!-- Title & Author on Cover Bottom -->
      <div class="absolute bottom-3 left-3 right-3 text-white">
        <span class="text-[10px] font-mono tracking-widest uppercase text-gold-300/80 block">
          {{ book.genre }} • {{ book.year }}
        </span>
        <h3 class="font-cinzel font-bold text-lg sm:text-xl leading-snug text-parchment-100 group-hover:text-gold-300 transition-colors">
          {{ book.title }}
        </h3>
        <p class="font-cormorant italic text-sm text-parchment-300">
          {{ book.author }}
        </p>
      </div>
    </div>

    <!-- Body Information -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <!-- Central Question Snippet -->
      <div class="space-y-2">
        <p class="font-newsreader text-xs sm:text-sm text-ink-600 dark:text-ink-300 italic line-clamp-3 leading-relaxed border-l-2 border-gold-500/40 pl-3">
          "{{ book.keyQuestion }}"
        </p>
      </div>

      <!-- Footer Info -->
      <div class="pt-3 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs">
        <div class="flex items-center gap-1 text-gold-500 text-xs">
          <span v-for="n in book.impactRating" :key="n" title="Impact Rating">👑</span>
        </div>
        <span class="font-cinzel text-[11px] font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
          Open Folio →
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bookmark } from 'lucide-vue-next'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const bookmarkedIds = ref(JSON.parse(localStorage.getItem('greatbooks-bookmarks') || '[]'))
const isBookmarked = ref(bookmarkedIds.value.includes(props.book.id))

function toggleBookmark() {
  let list = JSON.parse(localStorage.getItem('greatbooks-bookmarks') || '[]')
  if (list.includes(props.book.id)) {
    list = list.filter(id => id !== props.book.id)
    isBookmarked.value = false
  } else {
    list.push(props.book.id)
    isBookmarked.value = true
  }
  localStorage.setItem('greatbooks-bookmarks', JSON.stringify(list))
}
</script>

