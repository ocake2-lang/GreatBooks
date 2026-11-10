<template>
  <div class="space-y-8">
    <!-- Pairing Selector Tabs -->
    <div class="flex flex-wrap items-center justify-center gap-2 pb-4">
      <button
        v-for="pair in pairings"
        :key="pair.id"
        @click="activePairId = pair.id"
        :class="[
          'px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-200 border',
          activePairId === pair.id
            ? 'bg-crimson-700 text-white border-crimson-800 shadow-md scale-105'
            : 'bg-parchment-100 dark:bg-ink-850 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-700 hover:border-gold-500/60'
        ]"
      >
        {{ pair.thinkerA.name }} vs. {{ pair.thinkerB.name }}
      </button>
    </div>

    <!-- Active Pairing Content -->
    <div v-if="activePair" class="space-y-8">
      <!-- Header Banner -->
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400">
          Dialectical Collision & Hermeneutic Debate
        </span>
        <h3 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-ink-50">
          {{ activePair.title }}
        </h3>
      </div>

      <!-- Side-by-Side Dual Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <!-- Center "VS" Emblem -->
        <div class="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-600 text-white font-cinzel font-bold items-center justify-center shadow-xl border-4 border-parchment-50 dark:border-ink-950 z-20 text-sm">
          VS
        </div>

        <!-- Thinker A Column -->
        <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-6">
          <div class="border-b border-parchment-200 dark:border-ink-800 pb-4">
            <span class="text-xs font-mono text-gold-600 dark:text-gold-400 uppercase tracking-widest">Thesis</span>
            <h4 class="font-cinzel text-2xl font-bold text-ink-900 dark:text-ink-100 mt-1">
              {{ activePair.thinkerA.name }}
            </h4>
            <p class="font-newsreader italic text-xs text-ink-500 mt-0.5">
              {{ activePair.thinkerA.work }}
            </p>
          </div>

          <div class="space-y-4 text-xs sm:text-sm">
            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Conception of Human Nature
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerA.conceptionOfMan }}
              </p>
            </div>

            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Order of State & Society
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerA.conceptionOfState }}
              </p>
            </div>

            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Foundations of Morality
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerA.stanceOnMorality }}
              </p>
            </div>
          </div>

          <blockquote class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-800 border-l-2 border-gold-500 font-cormorant italic text-sm sm:text-base text-ink-800 dark:text-ink-200">
            "{{ activePair.thinkerA.keyQuote }}"
          </blockquote>

          <!-- Vote Button for Thinker A -->
          <button
            @click="castVote(activePair.id, 'A')"
            :class="[
              'w-full py-2.5 px-4 rounded-lg font-cinzel text-xs font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2',
              userVotes[activePair.id] === 'A'
                ? 'bg-gold-600 text-white border-gold-600 shadow-sm'
                : 'bg-parchment-100 dark:bg-ink-800 hover:bg-gold-500/10 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-700'
            ]"
          >
            <span>Affirm {{ activePair.thinkerA.name }}'s Stance</span>
            <span class="text-xs font-mono font-normal">({{ votes[activePair.id + '_A'] || 14 }})</span>
          </button>
        </div>

        <!-- Thinker B Column -->
        <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-6">
          <div class="border-b border-parchment-200 dark:border-ink-800 pb-4">
            <span class="text-xs font-mono text-crimson-600 dark:text-crimson-400 uppercase tracking-widest">Antithesis</span>
            <h4 class="font-cinzel text-2xl font-bold text-ink-900 dark:text-ink-100 mt-1">
              {{ activePair.thinkerB.name }}
            </h4>
            <p class="font-newsreader italic text-xs text-ink-500 mt-0.5">
              {{ activePair.thinkerB.work }}
            </p>
          </div>

          <div class="space-y-4 text-xs sm:text-sm">
            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Conception of Human Nature
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerB.conceptionOfMan }}
              </p>
            </div>

            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Order of State & Society
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerB.conceptionOfState }}
              </p>
            </div>

            <div>
              <span class="font-cinzel font-bold text-[11px] uppercase tracking-wider text-ink-400 block mb-1">
                Foundations of Morality
              </span>
              <p class="font-newsreader text-ink-700 dark:text-ink-300 leading-relaxed">
                {{ activePair.thinkerB.stanceOnMorality }}
              </p>
            </div>
          </div>

          <blockquote class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-800 border-l-2 border-crimson-600 font-cormorant italic text-sm sm:text-base text-ink-800 dark:text-ink-200">
            "{{ activePair.thinkerB.keyQuote }}"
          </blockquote>

          <!-- Vote Button for Thinker B -->
          <button
            @click="castVote(activePair.id, 'B')"
            :class="[
              'w-full py-2.5 px-4 rounded-lg font-cinzel text-xs font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2',
              userVotes[activePair.id] === 'B'
                ? 'bg-crimson-700 text-white border-crimson-700 shadow-sm'
                : 'bg-parchment-100 dark:bg-ink-800 hover:bg-crimson-500/10 text-ink-700 dark:text-ink-300 border-parchment-300 dark:border-ink-700'
            ]"
          >
            <span>Affirm {{ activePair.thinkerB.name }}'s Stance</span>
            <span class="text-xs font-mono font-normal">({{ votes[activePair.id + '_B'] || 12 }})</span>
          </button>
        </div>
      </div>

      <!-- Synthesis Banner (The Scholar's Synthesis) -->
      <div class="p-6 sm:p-8 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-gold-500/40 space-y-4">
        <div class="flex items-center gap-2 text-gold-700 dark:text-gold-400 font-cinzel text-xs font-bold uppercase tracking-widest">
          <span>✦</span>
          <span>My Dialectic Synthesis & Hermeneutic Resolution</span>
        </div>
        <p class="font-newsreader text-base text-ink-800 dark:text-ink-200 leading-relaxed">
          {{ activePair.synthesisThesis }}
        </p>

        <div class="pt-4 border-t border-parchment-300 dark:border-ink-700 flex items-start gap-3">
          <span class="font-mono text-xs uppercase px-2 py-0.5 rounded bg-gold-500/10 text-gold-700 dark:text-gold-300 font-bold shrink-0">
            Seminar Note
          </span>
          <p class="font-newsreader italic text-xs text-ink-600 dark:text-ink-400">
            {{ activePair.seminarDebateHighlight }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { dialecticPairings } from '../data/dialogues.js'

const pairings = dialecticPairings
const activePairId = ref(pairings[0].id)

const activePair = computed(() => pairings.find(p => p.id === activePairId.value) || pairings[0])

const userVotes = ref(JSON.parse(localStorage.getItem('greatbooks-dialectic-votes') || '{}'))
const votes = ref(JSON.parse(localStorage.getItem('greatbooks-dialectic-tallies') || '{}'))

function castVote(pairId, side) {
  userVotes.value[pairId] = side
  localStorage.setItem('greatbooks-dialectic-votes', JSON.stringify(userVotes.value))

  const key = `${pairId}_${side}`
  votes.value[key] = (votes.value[key] || 12) + 1
  localStorage.setItem('greatbooks-dialectic-tallies', JSON.stringify(votes.value))
}
</script>

