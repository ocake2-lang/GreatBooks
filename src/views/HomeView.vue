<template>
  <div class="space-y-24 sm:space-y-32 paper-grain pb-24">
    <!-- 1. HERO SECTION -->
    <section class="relative pt-8 sm:pt-16 pb-12 sm:pb-20 border-b border-parchment-300 dark:border-ink-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <!-- Top Editorial Issue Ribbon -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-parchment-200 dark:border-ink-800 pb-3 text-xs font-mono uppercase tracking-widest text-ink-500">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 bg-crimson-700 dark:bg-gold-500 rounded-full animate-pulse"></span>
            <span class="text-crimson-800 dark:text-gold-400 font-bold">Great Books Digital Portfolio • Volume IV</span>
          </div>
          <div class="flex items-center gap-4">
            <span>Aldrin Danila (AD)</span>
            <span>•</span>
            <span class="text-gold-600 dark:text-gold-400">BSCS • University of Nueva Caceres</span>
          </div>
        </div>

        <!-- Main Hero Grid: Text & Visual -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left Column: Copy & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Monogram Seal & Academic Badge -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-parchment-100 dark:bg-ink-900 border border-gold-500/30 shadow-sm">
              <div class="w-6 h-6 rounded-full bg-crimson-800 text-parchment-50 font-cinzel text-xs font-black flex items-center justify-center">
                AD
              </div>
              <span class="text-xs font-mono uppercase tracking-widest text-gold-700 dark:text-gold-300 font-bold">
                A Great Books Academic Showcase
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="font-cinzel text-4xl sm:text-6xl font-black tracking-tight text-ink-950 dark:text-parchment-100 uppercase leading-[1.1]">
              My Literary <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-crimson-700 via-gold-600 to-crimson-800 dark:from-gold-300 dark:via-gold-400 dark:to-gold-500">
                Journey
              </span>
            </h1>

            <!-- Subtitle -->
            <p class="font-cormorant italic text-xl sm:text-2xl text-crimson-800 dark:text-gold-300 leading-snug">
              "Exploring timeless stories, discovering perspectives, and understanding the human experience through literature."
            </p>

            <!-- Supporting Description -->
            <p class="font-newsreader text-base sm:text-lg text-ink-700 dark:text-ink-300 leading-relaxed max-w-2xl">
              This digital portfolio represents my journey through the Great Books course, where I explored literary masterpieces, examined different perspectives, and discovered meaningful lessons about life, culture, society, and human nature.
            </p>

            <!-- Hero Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-3">
              <!-- Button 1: Explore My Journey -> Student Profile -->
              <router-link
                to="/profile"
                class="px-8 py-3.5 rounded-xl font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase bg-crimson-800 hover:bg-crimson-700 text-parchment-50 shadow-book transition-all hover:scale-105 duration-200 flex items-center gap-2"
              >
                <span>Explore My Journey</span>
                <span>→</span>
              </router-link>

              <!-- Button 2: Discover Literary Works -> Literary Analyses -->
              <router-link
                to="/analyses"
                class="px-8 py-3.5 rounded-xl font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase bg-white dark:bg-ink-900 text-ink-900 dark:text-parchment-100 border border-parchment-300 dark:border-ink-700 hover:border-gold-500 hover:text-gold-600 transition-all hover:scale-105 duration-200 shadow-sm"
              >
                Discover Literary Works
              </router-link>
            </div>
          </div>

          <!-- Right Column: Hero Visual (Classical Library, Open Book, Manuscripts, Warm Lighting) -->
          <div class="lg:col-span-5 relative group">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-ink-950 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
                alt="Classical library reading desk with open book and warm natural sunlight"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span class="text-[11px] font-mono tracking-widest uppercase text-gold-300 mb-1">
                  The Scholar's Desk • Inquisitio
                </span>
                <p class="font-cinzel font-bold text-lg text-parchment-100 leading-snug">
                  "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors."
                </p>
                <span class="text-xs font-mono text-parchment-300 mt-1">
                  — Charles William Eliot
                </span>
              </div>
            </div>

            <!-- Decorative Floating Foil Badge -->
       
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION: A JOURNEY THROUGH LITERATURE -->
    <section class="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
      <div class="text-center space-y-3 max-w-3xl mx-auto">
        <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
          The Humanistic Bridge
        </span>
        <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 tracking-tight">
          A Journey Through Literature
        </h2>
        <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
      </div>

      <!-- Editorial Narrative Content -->
      <div class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-8">
        <div class="prose dark:prose-invert max-w-none space-y-6">
          <p class="font-newsreader text-lg sm:text-xl text-ink-900 dark:text-ink-100 leading-relaxed drop-cap">
            Literature is humanity's most enduring bridge across the chasms of time, geography, and culture. When we open a text written two thousand years ago in ancient Athens, fourteenth-century Florence, or nineteenth-century St. Petersburg, we do not merely encounter distant historical artifacts; we enter into an intimate, living conversation with minds that grappled with the very same joys, terrors, doubts, and longings that animate our lives today.
          </p>

          <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
            Stories are never written merely for ephemeral entertainment or decorative distraction. The greatest literature serves as a diagnostic lens into the human condition. In the struggle of Odysseus against the indifferent sea, the agonizing self-doubt of Prince Hamlet, the Promethean consequences of Frankenstein's scientific hubris, and the existential revolt of Sisyphus on the mountain, literature provides vital moral lessons, profound cultural perspectives, and irreplaceable insights into what it means to live justly, love courageously, and face mortality with dignity.
          </p>
        </div>

        <!-- Three Thematic Pillars Callout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-parchment-200 dark:border-ink-800">
          <div class="p-5 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 space-y-2">
            <span class="text-gold-700 dark:text-gold-400 font-cinzel font-bold text-xs uppercase tracking-wider block">
              1. Connection Across Epochs
            </span>
            <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Discovering that ancient Greek grief, Renaissance passion, and modern anxiety are chapters of a single, continuous human story.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 space-y-2">
            <span class="text-crimson-700 dark:text-gold-400 font-cinzel font-bold text-xs uppercase tracking-wider block">
              2. Beyond Mere Entertainment
            </span>
            <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Stories function as ethical laboratories where we test choices, evaluate political power, and examine consequences without physical peril.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-parchment-100 dark:bg-ink-850 border border-parchment-200 dark:border-ink-700 space-y-2">
            <span class="text-gold-700 dark:text-gold-400 font-cinzel font-bold text-xs uppercase tracking-wider block">
              3. The Cultivation of Empathy
            </span>
            <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              By inhabiting perspectives radically different from our own, literature breaks down parochial prejudices and deepens human compassion.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FEATURED MASTERPIECE SECTION (THE ODYSSEY BY HOMER) -->
    <!-- Visually distinctive section featuring classical Greek aesthetic -->
    <section class="max-w-7xl mx-auto px-4 sm:px-8">
      <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500 bg-gradient-to-br from-[#0B1528] via-[#101F38] to-[#070D18] text-white p-8 sm:p-14">
        <!-- Greek Meander Subtle Background Accent -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <!-- Classical Greek-Inspired Visual -->
          <div class="lg:col-span-5 relative group">
            <div class="rounded-2xl overflow-hidden shadow-2xl border border-gold-400/40 aspect-[3/4] bg-ink-950 relative">
              <img
                src="/images/the-odyssey-9781451674187_hr.jpg"
                alt="Classical Greek-inspired epic sculpture and temple"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent p-5 flex flex-col justify-end">
                <span class="text-[10px] font-mono tracking-widest uppercase text-gold-300">
                  Ancient Greek Epic • c. 750 BCE
                </span>
                <span class="font-cinzel font-bold text-lg text-parchment-100">
                  Ὀδύσσεια (Odýsseia)
                </span>
              </div>
            </div>

            <!-- Laurels Badge -->
            <div class="mt-4 p-3 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between text-xs font-mono">
              <span class="text-gold-300 uppercase tracking-widest font-bold">Featured Epic Masterpiece</span>
              <span class="text-gold-400">👑 👑 👑 👑 👑</span>
            </div>
          </div>

          <!-- Masterpiece Editorial Details -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-mono uppercase tracking-widest font-bold">
                <span>Crowning Canonical Spotlight</span>
              </div>
              <h2 class="font-cinzel text-3xl sm:text-5xl font-black text-parchment-50 leading-tight">
                The Odyssey
              </h2>
              <p class="font-cormorant italic text-xl sm:text-2xl text-gold-300">
                by Homer
              </p>
            </div>

            <!-- Short Introduction -->
            <div class="space-y-4 font-newsreader text-base sm:text-lg text-parchment-200 leading-relaxed">
              <p>
                Homer's <em>The Odyssey</em> stands as the foundational masterpiece of Western narrative literature. Following the cunning king Odysseus on his perilous ten-year journey home from the smoldering ruins of Troy to his beloved Ithaca, this epic is far more than a legendary adventure of monsters, sirens, and storms.
              </p>
              <p>
                At its core, <em>The Odyssey</em> is an inquiry into the human condition. When the radiant nymph Calypso offers Odysseus eternal youth and godlike immortality if he remains on her paradisiacal island, he weeps on the shore, choosing instead to return to his mortal wife Penelope and his rocky homeland. In that defining choice, Homer celebrates mortal human life—with all its grief, vulnerability, and loyalty—as something infinitely more sacred than divine perfection.
              </p>
            </div>

            <!-- Epic Motifs Row -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-xs font-mono">
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span class="text-gold-300 font-bold block">Nostos</span>
                <span class="text-parchment-300 text-[11px]">Sacred Homecoming</span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span class="text-gold-300 font-bold block">Metis</span>
                <span class="text-parchment-300 text-[11px]">Cunning Intellect</span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span class="text-gold-300 font-bold block">Xenia</span>
                <span class="text-parchment-300 text-[11px]">Divine Hospitality</span>
              </div>
              <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span class="text-gold-300 font-bold block">Tlemosyne</span>
                <span class="text-parchment-300 text-[11px]">Heroic Endurance</span>
              </div>
            </div>

            <!-- Action Button -->
            <div class="pt-4">
              <router-link
                to="/masterpiece"
                class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase bg-gold-500 hover:bg-gold-400 text-ink-950 transition-all shadow-xl hover:scale-105 duration-200"
              >
                <span>Explore My Favorite Masterpiece</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SECTION: EXPLORE MY PORTFOLIO (FIVE CARDS) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
      <div class="text-center space-y-3 max-w-3xl mx-auto">
        <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold">
          Curated Navigation
        </span>
        <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 tracking-tight">
          Explore My Portfolio
        </h2>
        <p class="font-newsreader italic text-base text-ink-600 dark:text-ink-400">
          Discover the five core sections detailing my growth as a reader, critical thinker, and student of literature.
        </p>
        <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
      </div>

      <!-- Five Visually Appealing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- CARD 1: Student Profile -->
        <div class="group flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
              alt="Student profile and academic study"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-crimson-800 text-white font-bold">
                Section 01
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-crimson-800 text-white font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
                AD
              </div>
              <div>
                <h3 class="font-cinzel font-bold text-lg text-parchment-100 group-hover:text-gold-300 transition-colors">
                  Student Profile
                </h3>
              </div>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
              Curator profile of Aldrin Danila (AD), fourth-year BSCS student at University of Nueva Caceres: personal background, hobbies, and Great Books experiences.
            </p>
            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800">
              <router-link
                to="/profile"
                class="font-cinzel text-xs font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
              >
                <span>View Student Profile</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- CARD 2: Literary Analyses -->
        <div class="group flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
              alt="Literary analyses and manuscripts"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3">
               <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-crimson-800 text-white font-bold">
                Section 02
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-crimson-800/40 text-gold-300 font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
                <FileText class="w-4 h-4" />
              </div>
              <div>
                <h3 class="font-cinzel font-bold text-lg text-parchment-100 group-hover:text-gold-300 transition-colors">
                  Literary Analyses
                </h3>
              </div>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
              Five extensive close-reading treatises examining Plato's justice, Dostoevsky's theodicy, Shelley's Promethean hubris, Hamlet's doubt, and Camus' revolt.
            </p>
            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800">
              <router-link
                to="/analyses"
                class="font-cinzel text-xs font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
              >
                <span>Read Literary Analyses</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- CARD 3: My Favorite Masterpiece -->
        <div class="group flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
              alt="My Favorite Masterpiece The Odyssey"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-crimson-800 text-white font-bold">
                Section 03
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-crimson-800/40 text-gold-300 font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
                <Crown class="w-4 h-4" />
              </div>
              <div>
                <h3 class="font-cinzel font-bold text-lg text-parchment-100 group-hover:text-gold-300 transition-colors">
                  My Favorite Masterpiece
                </h3>
              </div>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
              In-depth celebration of Homer's <em>The Odyssey</em> and Dostoevsky's summit of moral literature: pivotal scenes, translation insights, and existential gravity.
            </p>
            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800">
              <router-link
                to="/masterpiece"
                class="font-cinzel text-xs font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
              >
                <span>Explore Masterpiece</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- CARD 4: Summary of Learning -->
        <div class="group flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
              alt="Summary of Learning across canon"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3">
             <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-crimson-800 text-white font-bold">
                Section 04
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-crimson-800/40 text-gold-300 font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
                <GraduationCap class="w-4 h-4" />
              </div>
              <div>
                <h3 class="font-cinzel font-bold text-lg text-parchment-100 group-hover:text-gold-300 transition-colors">
                  What Literature Has Taught Me
                </h3>
         
              </div>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
              A comprehensive synthesis across four major domains: understanding literary masterpieces, critical literary lenses, the deep appreciation of literature, and essential intellectual skills.
            </p>
            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800">
              <router-link
                to="/summary"
                class="font-cinzel text-xs font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
              >
                <span>Review Syntheses</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- CARD 5: Personal Reflection -->
        <div class="group flex flex-col rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm hover:shadow-book-lg transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
          <div class="relative h-44 overflow-hidden bg-ink-950">
            <img
              src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
              alt="Personal Reflection journal"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase bg-crimson-800 text-white font-bold">
                Section 05
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-crimson-800/40 text-gold-300 font-cinzel text-xs font-black flex items-center justify-center border border-gold-400/40 shrink-0">
                <PenLine class="w-4 h-4" />
              </div>
              <div>
                <h3 class="font-cinzel font-bold text-lg text-parchment-100 group-hover:text-gold-300 transition-colors">
               Personal Reflection
                </h3>
              
              </div>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="font-newsreader text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
              A personal, journal-inspired reflection addressing five transformative questions about growth as a reader, student, and individual.
            </p>
            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800">
              <router-link
                to="/reflection"
                class="font-cinzel text-xs font-bold uppercase tracking-wider text-crimson-700 dark:text-gold-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
              >
                <span>Read Reflection</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { FileText, Crown, GraduationCap, PenLine } from 'lucide-vue-next'
</script>
