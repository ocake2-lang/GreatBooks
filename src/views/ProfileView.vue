<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 paper-grain">
    <!-- View Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 dark:text-gold-300 text-xs font-mono uppercase tracking-widest font-bold">
        <span>Portfolio Author & Scholar</span>
      </div>
      <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
        Student Profile
      </h1>
      <p class="font-cormorant italic text-lg sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
        Personal information, academic background in Computer Science, personal interests, and learning experiences in the Great Books.
      </p>
      <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
    </div>

    <!-- TWO-COLUMN EDITORIAL PROFILE SECTION -->
    <section class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book-lg space-y-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- COLUMN 1: Personal Information & Photograph Placeholder (lg:col-span-4) -->
        <div class="lg:col-span-4 flex flex-col items-center text-center space-y-6 lg:border-r lg:border-parchment-200 lg:dark:border-ink-800 lg:pr-8">
          <!-- Recent Student Photograph -->
          <div class="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/60 bg-ink-950">
            <img
              :src="profilePhoto"
              alt="Aldrin Danila - Student Profile Photograph"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
              <span class="font-cinzel text-xs font-bold text-parchment-100 text-center">
                Aldrin Danila
              </span>
              <span class="text-[10px] font-mono text-gold-300 text-center">
                BSCS Fourth Year • UNC
              </span>
            </div>
          </div>

          <!-- Academic & Personal Credentials Summary -->
          <div class="w-full space-y-4 text-left font-mono text-xs">
            <div class="p-4 rounded-xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-800 space-y-3">
              <div>
                <span class="text-ink-400 text-[10px] uppercase tracking-wider block">Complete Name</span>
                <span class="font-cinzel text-base font-bold text-ink-950 dark:text-parchment-100">
                  Aldrin Danila
                </span>
              </div>

              <div>
                <span class="text-ink-400 text-[10px] uppercase tracking-wider block">Degree & Course</span>
                <span class="font-bold text-crimson-800 dark:text-gold-400 text-xs sm:text-sm">
                  Bachelor of Science in Computer Science (BSCS)
                </span>
              </div>

              <div>
                <span class="text-ink-400 text-[10px] uppercase tracking-wider block">Year Level</span>
                <span class="font-bold text-ink-900 dark:text-ink-100">
                  Fourth Year (Senior)
                </span>
              </div>

              <div>
                <span class="text-ink-400 text-[10px] uppercase tracking-wider block">Section</span>
                <span class="font-bold text-crimson-800 dark:text-gold-400 text-xs sm:text-sm">
               Great Books-GEC-GB-NRs
                </span>
              </div>

              <div>
                <span class="text-ink-400 text-[10px] uppercase tracking-wider block">Institution / School</span>
                <span class="font-bold text-ink-900 dark:text-ink-100">
                  University of Nueva Caceres
                </span>
              </div>
            </div>

            <div class="p-3 rounded-lg bg-gold-500/10 border border-gold-500/30 text-center">
              <span class="text-[11px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 font-bold block">
                Great Books Portfolio
              </span>
              <span class="text-xs font-newsreader italic text-ink-600 dark:text-ink-300">
                Bridging Computing Logic & Timeless Humanities
              </span>
            </div>
          </div>
        </div>

        <!-- COLUMN 2: Personal Introduction (Editable Content Area) (lg:col-span-8) -->
        <div class="lg:col-span-8 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
                Biographical Overview
              </span>
              <h2 class="font-cinzel text-2xl font-bold text-ink-950 dark:text-parchment-100">
                Personal Introduction
              </h2>
            </div>

            <!-- Edit / Save Toggle Buttons -->
            <div class="flex items-center gap-2">
              

       
            </div>
          </div>

          <!-- EDITABLE MODE -->
          <div v-if="isEditingIntro" class="space-y-3">
            <label class="block text-xs font-mono text-ink-400">
              Edit your personal introduction below (persisted in your browser):
            </label>
            <textarea
              v-model="tempIntro"
              rows="12"
              class="w-full p-4 rounded-xl border border-gold-500/60 bg-parchment-50 dark:bg-ink-950 text-ink-900 dark:text-ink-100 font-newsreader text-base leading-relaxed outline-none shadow-inner"
            ></textarea>
            <div class="flex justify-between items-center text-xs font-mono text-ink-400">
              <span>Supports multiple paragraphs</span>
              <button @click="resetIntroToDefault" class="text-crimson-600 hover:underline">
                Reset to Default Placeholder
              </button>
            </div>
          </div>

          <!-- DISPLAY MODE -->
          <div v-else class="space-y-4 font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
            <div
              v-for="(paragraph, pIdx) in personalIntroduction.split('\n\n')"
              :key="pIdx"
              :class="pIdx === 0 ? 'drop-cap' : ''"
              class="leading-relaxed"
            >
              {{ paragraph }}
            </div>
          </div>

          <!-- Editorial Signature -->
          <div class="pt-6 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500">
            <span>University of Nueva Caceres</span>
            <span class="font-cinzel font-bold text-ink-900 dark:text-ink-200">Aldrin Danila (AD)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PERSONAL INTERESTS SECTION (6 CARDS) -->
    <section class="space-y-8">
      <div class="text-center space-y-2 max-w-2xl mx-auto">
        <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
          Passions & Pursuits
        </span>
        <h2 class="font-cinzel text-2xl sm:text-3xl font-bold text-ink-950 dark:text-ink-50">
          Personal Interests
        </h2>
        <p class="font-newsreader italic text-sm text-ink-600 dark:text-ink-400">
          The activities, disciplines, and creative mediums that fuel my curiosity both inside and outside academia.
        </p>
        <div class="w-12 h-0.5 bg-gold-500 mx-auto"></div>
      </div>

      <!-- 6 Visually Appealing Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 1. Programming and Technology -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-crimson-800/10 dark:bg-gold-500/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center border border-crimson-800/20 dark:border-gold-500/20 group-hover:scale-105 transition-transform">
            <Code class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-crimson-700 dark:group-hover:text-gold-400 transition-colors">
            Programming and Technology
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Building software architectures, solving algorithmic puzzles, exploring web frameworks, and understanding how computing shapes modern civilization.
          </p>
        </div>

        <!-- 2. Basketball -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
            <Trophy class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
            Basketball
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Channeling athletic energy, teamwork, strategy, court vision, and competitive drive on the hardwood with fellow students and friends.
          </p>
        </div>

        <!-- 3. Anime -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-crimson-800/10 dark:bg-gold-500/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center border border-crimson-800/20 dark:border-gold-500/20 group-hover:scale-105 transition-transform">
            <Tv class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-crimson-700 dark:group-hover:text-gold-400 transition-colors">
            Anime
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Appreciating compelling visual storytelling, philosophical themes, character growth arcs, creative world-building, and Japanese animation artistry.
          </p>
        </div>

        <!-- 4. Online Games -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
            <Gamepad2 class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
            Online Games
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Engaging in multiplayer cooperative strategy, tactical decision-making under pressure, and connecting socially through digital competitive gaming.
          </p>
        </div>

        <!-- 5. Learning New Things -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-crimson-800/10 dark:bg-gold-500/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center border border-crimson-800/20 dark:border-gold-500/20 group-hover:scale-105 transition-transform">
            <Lightbulb class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-crimson-700 dark:group-hover:text-gold-400 transition-colors">
            Learning New Things
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Cultivating an insatiable curiosity about technology trends, philosophical inquiries, scientific breakthroughs, and life lessons.
          </p>
        </div>

        <!-- 6. Reading and Exploring Stories -->
        <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book transition-all duration-300 space-y-3 group">
          <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
            Reading and Exploring Stories
          </h3>
          <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
            Journeying through canonical literature, exploring timeless perspectives, uncovering moral wisdom, and connecting with the human experience.
          </p>
        </div>
      </div>
    </section>

    <!-- EXPECTATIONS AND LEARNING EXPERIENCES IN GREAT BOOKS -->
    <section class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-parchment-200 dark:border-ink-800 pb-4">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            Reflective Coursework
          </span>
          <h2 class="font-cinzel text-2xl font-bold text-ink-950 dark:text-parchment-100">
            My Expectations and Learning Experiences in Great Books
          </h2>
        </div>

        <!-- Edit Statement Button -->
     
  
      </div>

      <!-- EDIT MODE -->
      <div v-if="isEditingExperiences" class="space-y-4">
        <label class="block text-xs font-mono text-ink-400">
          Inscribe your actual statement regarding your course expectations and learning experiences:
        </label>
        <textarea
          v-model="tempExperiences"
          rows="10"
          class="w-full p-4 rounded-xl border border-gold-500/60 bg-parchment-50 dark:bg-ink-950 text-ink-900 dark:text-ink-100 font-newsreader text-base leading-relaxed outline-none shadow-inner"
        ></textarea>
        <div class="flex justify-between items-center text-xs font-mono text-ink-400">
          <span>Supports formatted paragraphs</span>
          <button @click="resetExperiencesToDefault" class="text-crimson-600 hover:underline">
            Reset to Default Placeholder
          </button>
        </div>
      </div>

      <!-- DISPLAY MODE -->
      <div v-else class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Sub-panel: Expectations -->
          <div class="p-6 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 space-y-3">
            <div class="flex items-center gap-2 text-gold-700 dark:text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider">
           
              <span>Initial Course Expectations</span>
            </div>
            <p class="font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              {{ expectationsPart }}
            </p>
          </div>

          <!-- Sub-panel: Learning Experiences -->
          <div class="p-6 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 space-y-3">
            <div class="flex items-center gap-2 text-crimson-700 dark:text-gold-400 font-cinzel text-xs font-bold uppercase tracking-wider">
      
              <span>Actual Learning Experiences & Transformation</span>
            </div>
            <p class="font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              {{ experiencesPart }}
            </p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 text-xs sm:text-sm font-newsreader italic text-ink-800 dark:text-ink-200">
          "Entering the Great Books course as a Computer Science major taught me that algorithms process information, but literature cultivates wisdom. Both disciplines seek patterns of truth—one in code, the other in the human soul."
        </div>
      </div>
    </section>

    <!-- Navigation to Next Section (Literary Analyses) -->
    <div class="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-parchment-300 dark:border-ink-800">
      <router-link
        to="/"
        class="text-xs font-cinzel font-bold uppercase tracking-wider text-ink-500 hover:text-gold-600 flex items-center gap-1.5"
      >
        <span>← Return to Home</span>
      </router-link>

      <router-link
        to="/analyses"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-700 text-parchment-50 font-cinzel text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
      >
        <span>Proceed to Literary Analyses</span>
        <span>→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import profilePhoto from '../images/mypic.png'
import {
  User,
  Edit3,
  Check,
  Code,
  Trophy,
  Tv,
  Gamepad2,
  Lightbulb,
  BookOpen
} from 'lucide-vue-next'

// DEFAULT PERSONAL INTRODUCTION PLACEHOLDER
const defaultIntro = `I am Aldrin Danila, a fourth-year Bachelor of Science in Computer Science (BSCS) student at the University of Nueva Caceres. As a senior student preparing to transition into the professional world of computing and software development, I view technology not merely as code and systems, but as an instrument to solve meaningful problems and enrich human lives.

By nature, I am an analytical and curious thinker who values dedication, discipline, and quiet introspection. My academic journey in computer science has trained me to break down complex challenges with logic, precision, and structural rigor. Yet, alongside technical systems, I find balance and inspiration in my personal passions: playing basketball on the court, following thought-provoking anime narratives, strategizing in competitive online games, and constantly exploring new fields of knowledge.

My perspective on reading and literature is shaped by this duality between computer science and the humanities. While algorithms teach us how to optimize efficiency, literature teaches us why we exist, how to empathize with diverse perspectives, and what it means to be human. Reading timeless literary works allows me to step beyond the screen, examine culture, society, and moral dilemmas, and discover enduring wisdom that informs my character both as a future technologist and as a lifelong student of life.`

// DEFAULT EXPECTATIONS & LEARNING EXPERIENCES PLACEHOLDER
const defaultExpectationsAndExperiences = `Before beginning the Great Books course, I expected to encounter archaic texts that might feel distant from my daily life as a Computer Science student at the University of Nueva Caceres. I anticipated dense classical prose and theoretical discussions that would primarily serve as academic exercises in memorization and formal critique.

However, as we immersed ourselves in works like Homer's Odyssey, Plato's Republic, and modern philosophical reflections, my experience transformed into an invigorating journey of discovery. I found that ancient questions regarding justice, heroic endurance, moral responsibility, and the human search for home are urgently relevant today. The seminar challenged me to articulate my thoughts with clarity, question unexamined dogmas, and appreciate how storytelling preserves human resilience across centuries.`

const personalIntroduction = ref(defaultIntro)
const isEditingIntro = ref(false)
const tempIntro = ref('')

const courseStatement = ref(defaultExpectationsAndExperiences)
const isEditingExperiences = ref(false)
const tempExperiences = ref('')

// Split statement into expectations and actual experiences for the sub-panels
const expectationsPart = computed(() => {
  const parts = courseStatement.value.split('\n\n')
  return parts[0] || defaultExpectationsAndExperiences.split('\n\n')[0]
})

const experiencesPart = computed(() => {
  const parts = courseStatement.value.split('\n\n')
  return parts.slice(1).join('\n\n') || defaultExpectationsAndExperiences.split('\n\n')[1]
})

function startEditingIntro() {
  tempIntro.value = personalIntroduction.value
  isEditingIntro.value = true
}

function cancelEditingIntro() {
  isEditingIntro.value = false
}

function saveIntro() {
  personalIntroduction.value = tempIntro.value.trim() || defaultIntro
  localStorage.setItem('greatbooks-aldrin-danila-intro', personalIntroduction.value)
  isEditingIntro.value = false
}

function resetIntroToDefault() {
  tempIntro.value = defaultIntro
}

function startEditingExperiences() {
  tempExperiences.value = courseStatement.value
  isEditingExperiences.value = true
}

function cancelEditingExperiences() {
  isEditingExperiences.value = false
}

function saveExperiences() {
  courseStatement.value = tempExperiences.value.trim() || defaultExpectationsAndExperiences
  localStorage.setItem('greatbooks-aldrin-danila-experiences', courseStatement.value)
  isEditingExperiences.value = false
}

function resetExperiencesToDefault() {
  tempExperiences.value = defaultExpectationsAndExperiences
}

onMounted(() => {
  const savedIntro = localStorage.getItem('greatbooks-aldrin-danila-intro')
  if (savedIntro) {
    personalIntroduction.value = savedIntro
  }

  const savedExp = localStorage.getItem('greatbooks-aldrin-danila-experiences')
  if (savedExp) {
    courseStatement.value = savedExp
  }
})
</script>
