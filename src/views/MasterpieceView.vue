<template>
  <div class="min-h-screen paper-grain pb-24 text-ink-900 dark:text-parchment-100">
    <!-- Top Greek Meander Subtle Trim -->
    <div class="w-full bg-[#07111E] border-b border-gold-500/30 py-2 px-4 text-center">
      <div class="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-gold-400">
        <span class="hidden sm:inline">✦ Homeric Epic Poetry ✦</span>
        <span class="mx-auto sm:mx-0 font-cinzel font-bold text-parchment-100">
          My Favorite Masterpiece — The Odyssey by Homer
        </span>
        <span class="hidden sm:inline">✦ Ancient Greek Canon ✦</span>
      </div>
    </div>

    <main class="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 space-y-20">
      <!-- ========================================================================= -->
      <!-- HERO SECTION: CLASSICAL GREEK BOOK-COVER-INSPIRED MONUMENT                -->
      <!-- ========================================================================= -->
      <section class="relative rounded-3xl overflow-hidden border-2 border-gold-500/60 shadow-2xl bg-gradient-to-br from-[#07111E] via-[#0D1B2A] to-[#0A1626] text-white p-8 sm:p-14">
        <!-- Background Ambient Accents -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <!-- Left Column: Classical Book Cover Illustration (lg:col-span-5) -->
          <div class="lg:col-span-5 relative group">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/50 bg-[#060D17] aspect-[3/4]">
              <img
                src="/images/the-odyssey-9781451674187_hr.jpg"
                alt="The Odyssey by Homer Cover Artwork"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#07111E] via-transparent to-transparent p-6 flex flex-col justify-end">
                <span class="text-[10px] font-mono tracking-widest uppercase text-gold-300">
                  Ancient Greek Literature • c. 750 BCE
                </span>
                <span class="font-cinzel text-xl font-bold text-parchment-100">
                  Ὀδύσσεια (Odýsseia)
                </span>
              </div>
            </div>

            <!-- Crown Laurel Badge -->
            <div class="mt-4 p-3.5 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-between text-xs font-mono">
              <span class="text-gold-300 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Crown class="w-4 h-4 text-gold-400 fill-gold-400" />
                <span>My Chosen Masterpiece</span>
              </span>
              <span class="text-gold-400 font-cinzel font-bold">10 / 10 Masterwork</span>
            </div>
          </div>

          <!-- Right Column: Featured Literary Information (lg:col-span-7) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-mono uppercase tracking-widest font-bold">
                <Sparkles class="w-3.5 h-3.5 text-gold-400" />
                <span>Summit of My Literary Journey</span>
              </div>

              <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-parchment-50 leading-tight">
                The Odyssey
              </h1>

              <p class="font-cormorant italic text-2xl sm:text-3xl text-gold-300">
                by Homer
              </p>
            </div>

            <!-- Key Metadata Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono">
              <div>
                <span class="text-gold-400/80 uppercase tracking-wider text-[10px] block">Genre</span>
                <span class="font-cinzel font-bold text-parchment-100 text-sm">Epic Poetry</span>
              </div>
              <div>
                <span class="text-gold-400/80 uppercase tracking-wider text-[10px] block">Origin</span>
                <span class="font-cinzel font-bold text-parchment-100 text-sm">Ancient Greek</span>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <span class="text-gold-400/80 uppercase tracking-wider text-[10px] block">Main Character</span>
                <span class="font-cinzel font-bold text-parchment-100 text-sm">Odysseus</span>
              </div>
            </div>

            <!-- Central Themes Tags -->
            <div class="space-y-2">
              <span class="text-xs font-mono uppercase tracking-widest text-gold-300/80 font-bold block">
                Central Themes:
              </span>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="theme in centralThemes"
                  :key="theme"
                  class="px-3 py-1 rounded-full text-xs font-mono bg-gold-500/10 text-gold-300 border border-gold-500/30 font-semibold"
                >
                  ✦ {{ theme }}
                </span>
              </div>
            </div>

            <p class="font-newsreader text-base sm:text-lg text-parchment-200 leading-relaxed pt-2">
              Of all the foundational works studied in Great Books, Homer’s <em>The Odyssey</em> resonated with me most deeply. It is not merely a myth of monsters and open waters, but an enduring chronicle of mortal resilience, family loyalty, and the relentless journey to find one’s way home.
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- SECTION A: BRIEF OVERVIEW OF THE ODYSSEY                                  -->
      <!-- ========================================================================= -->
      <section class="space-y-8">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-800/10 text-crimson-800 dark:text-gold-400 border border-crimson-800/20 text-xs font-mono uppercase tracking-widest font-bold">
            <span>Section A</span>
          </div>
          <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Brief Overview of The Odyssey
          </h2>
          <p class="font-newsreader italic text-base sm:text-lg text-ink-600 dark:text-ink-300">
            A concise narrative journey through Odysseus's ten-year voyage across the ancient Greek seas.
          </p>
          <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
        </div>

        <!-- 4-Stage Narrative Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 1. The Long Voyage Home After Troy -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-4 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
              <div class="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-base">
                I
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 block">The Departure</span>
                <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                  Departure from the Trojan War
                </h3>
              </div>
            </div>
            <p class="font-newsreader text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              Following ten agonizing years of warfare at Troy, Odysseus—the cunning king of Ithaca—embarks on his voyage across the Mediterranean Sea with his fleet. Instead of a swift return, he is blown off course into unknown waters, initiating another ten-year test of human endurance.
            </p>
          </div>

          <!-- 2. Mythical Creatures & Poseidon's Interference -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-4 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
              <div class="w-10 h-10 rounded-xl bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-base">
                II
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 block">Trials of the Sea</span>
                <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                  Mythical Monsters & Poseidon's Wrath
                </h3>
              </div>
            </div>
            <p class="font-newsreader text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              Throughout the voyage, Odysseus confronts monstrous perils: blinding the cyclops Polyphemus, resisting the deadly song of the Sirens, navigating between the twin horrors of Scylla and Charybdis, and surviving the enchantress Circe. Blinding Polyphemus earns him the relentless fury of Poseidon, god of the sea, who sends devastating storms to shatter Odysseus's fleet.
            </p>
          </div>

          <!-- 3. Determination to Reunite with Family -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-4 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
              <div class="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-base">
                III
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 block">The Unshakable Will</span>
                <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                  Refusing Immortality for Family
                </h3>
              </div>
            </div>
            <p class="font-newsreader text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              Even when trapped for seven years on the island of Ogygia by the beautiful nymph Calypso—who promises him eternal youth and godhood if he stays—Odysseus weeps upon the shore. His determination to reunite with his mortal wife Penelope, his son Telemachus, and his aging father surpasses the allure of empty divine perfection.
            </p>
          </div>

          <!-- 4. The Eventual Return to Ithaca -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-4 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-3 border-b border-parchment-200 dark:border-ink-800 pb-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-cinzel font-bold text-base">
                IV
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-ink-400 block">Homecoming (Nostos)</span>
                <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                  Triumph & Homecoming in Ithaca
                </h3>
              </div>
            </div>
            <p class="font-newsreader text-base text-ink-700 dark:text-ink-300 leading-relaxed">
              With the divine guidance of Athena, Odysseus finally arrives on Ithaca disguised as a beggar. Together with Telemachus and loyal servants, he strings his formidable great bow, reclaims his palace from the arrogant suitors who invaded his home, and restores peace, honor, and love to his family.
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- CRITICAL ANALYSIS & PERSONAL IMPACT BLOCKS                                -->
      <!-- 1. Specific Literary Lens of the Story                                    -->
      <!-- 2. How Did the Story Impact Me Personally?                                -->
      <!-- ========================================================================= -->
      <section class="space-y-8">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30 text-xs font-mono uppercase tracking-widest font-bold">
            <Crown class="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 fill-gold-500" />
            <span>Masterpiece Core Insights</span>
          </div>
          <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Literary Lens & Personal Impact
          </h2>
          <p class="font-newsreader italic text-base sm:text-lg text-ink-600 dark:text-ink-300">
            A focused look into the critical perspective and personal resonance of Homer’s epic.
          </p>
          <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- BLOCK 1: Specific Literary Lens of the Story -->
          <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-ink-900 border-2 border-gold-500/50 shadow-book hover:shadow-book-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-36 h-36 bg-gold-500/5 rounded-bl-full pointer-events-none"></div>

            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-parchment-200 dark:border-ink-800 pb-4">
                <div class="flex items-center gap-3">

                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
                      Critical Approach
                    </span>
                    <h3 class="font-cinzel text-xl sm:text-2xl font-bold text-ink-950 dark:text-parchment-100">
                      1. Specific Literary Lens of the Story
                    </h3>
                  </div>
                </div>
              </div>

              <!-- Dedicated Badge for the Selected Lens -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/10 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-800/20 dark:border-emerald-500/30 text-xs font-mono font-bold uppercase tracking-wider">
                <span>✦ Biographical Lens</span>
              </div>

              <!-- Exact Wording as Provided -->
              <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-parchment-200 leading-relaxed pt-2">
                The specific literary lens I chose for The Odyssey by Homer is the Biographical Lens. This lens focuses on the author's life and experiences and how they may relate to the story. Through this lens, we can understand the values of ancient Greek society, such as bravery, loyalty, and the importance of family. The story shows how Odysseus faces many challenges while trying to return home to his wife and son.
              </p>
            </div>

            <!-- Footer Meta Plaque -->
            <div class="pt-4 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-400">
              <span>Homeric Context & Greek Values</span>
              <span class="font-cinzel font-bold text-ink-900 dark:text-parchment-100">The Odyssey</span>
            </div>
          </div>

          <!-- BLOCK 2: How Did the Story Impact Me Personally? -->
          <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-parchment-100 via-white to-parchment-100 dark:from-ink-900 dark:via-ink-850 dark:to-ink-950 border-2 border-crimson-800/40 dark:border-gold-500/50 shadow-book hover:shadow-book-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-36 h-36 bg-crimson-800/5 dark:bg-gold-500/5 rounded-bl-full pointer-events-none"></div>

            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-parchment-200 dark:border-ink-800 pb-4">
                <div class="flex items-center gap-3">
                 
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-widest text-crimson-700 dark:text-gold-400 font-bold block">
                      Student Reflection
                    </span>
                    <h3 class="font-cinzel text-xl sm:text-2xl font-bold text-ink-950 dark:text-parchment-100">
                      2. How Did the Story Impact Me Personally?
                    </h3>
                  </div>
                </div>
              </div>

              <!-- Dedicated Badge for Personal Impact -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-800/10 text-crimson-800 dark:text-gold-400 border border-crimson-800/20 text-xs font-mono font-bold uppercase tracking-wider">
                <span>✦ Personal Impact & Growth</span>
              </div>

              <!-- Exact Wording as Provided -->
              <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-parchment-200 leading-relaxed pt-2">
                The story of The Odyssey taught me that life is full of challenges, but I should never give up on my goals. Like Odysseus, I may experience difficulties and failures, especially in my studies and personal life. However, I learned that patience, courage, and determination can help me overcome these challenges. His journey also reminded me of the importance of family and having a purpose in life. As a student, I want to keep moving forward even when things become difficult because I believe that hard work and perseverance will help me achieve my dreams and make my family proud.
              </p>
            </div>

            <!-- Footer Meta Plaque -->
            <div class="pt-4 border-t border-parchment-200 dark:border-ink-800 flex items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-400">
              <span>Personal Journey • Aldrin Danila</span>
              <span class="font-cinzel font-bold text-crimson-800 dark:text-gold-400">BSCS Fourth Year</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- SECTION B: WHY I CHOSE THE ODYSSEY (PERSONAL PERSPECTIVE)                -->
      <!-- ========================================================================= -->
      <section class="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-parchment-100 via-white to-parchment-100 dark:from-ink-900 dark:via-ink-850 dark:to-ink-950 border-2 border-gold-500/50 shadow-book-lg space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-300 dark:border-ink-800 pb-4">
          <div class="flex items-center gap-3">
            <Heart class="w-6 h-6 text-crimson-800 dark:text-gold-400" />
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
                Section B • Editorial Reflection
              </span>
              <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100">
                Why I Chose The Odyssey
              </h2>
            </div>
          </div>
          <span class="text-xs font-mono text-ink-400">Personal Perspective • Aldrin Danila</span>
        </div>

        <!-- The Core User Statement in Elegant Editorial Presentation -->
        <div class="p-6 sm:p-10 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-gold-500/40 relative shadow-inner">
          <span class="absolute top-3 left-4 font-cinzel text-6xl text-gold-500/25 pointer-events-none select-none">“</span>
          <blockquote class="font-cormorant italic text-xl sm:text-2xl text-ink-900 dark:text-parchment-100 leading-relaxed text-center sm:text-left px-4 sm:px-6 relative z-10">
            "I chose The Odyssey because it shows that life is a journey filled with challenges, unexpected situations, and difficult decisions. I appreciate how Odysseus continues to move forward despite the obstacles he encounters. His journey reminds me that patience, courage, determination, and wisdom are important in overcoming difficulties. I also like how the story teaches that no matter how difficult the journey becomes, we should never forget the people and things that truly matter to us."
          </blockquote>
          <span class="absolute bottom-3 right-4 font-cinzel text-6xl text-gold-500/25 pointer-events-none select-none">”</span>
        </div>

        <!-- Reflection Pillars Based on the Perspective -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div class="p-5 rounded-xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2">
            <span class="text-gold-600 dark:text-gold-400 font-cinzel font-bold text-sm block">1. Moving Forward Always</span>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              No matter how severe the storm or how unexpected the obstacle, Odysseus never surrenders to despair. He analyzes the situation and continues forward.
            </p>
          </div>
          <div class="p-5 rounded-xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2">
            <span class="text-gold-600 dark:text-gold-400 font-cinzel font-bold text-sm block">2. Patience & Wisdom</span>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Brute force alone cannot solve complex problems. True success demands patience, thoughtful decisions, and strategic intelligence.
            </p>
          </div>
          <div class="p-5 rounded-xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2">
            <span class="text-gold-600 dark:text-gold-400 font-cinzel font-bold text-sm block">3. Remembering What Matters</span>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              The finish line is not merely personal survival, but returning to the family and cherished values that give purpose to the journey.
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- SECTION C: SIGNIFICANT THEMES AND CHARACTERS                              -->
      <!-- ========================================================================= -->
      <section class="space-y-12">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-800/10 text-crimson-800 dark:text-gold-400 border border-crimson-800/20 text-xs font-mono uppercase tracking-widest font-bold">
            <span>Section C</span>
          </div>
          <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Significant Themes and Characters
          </h2>
          <p class="font-newsreader italic text-base sm:text-lg text-ink-600 dark:text-ink-300">
            Examining the moral virtues and pivotal figures that drive Homer’s timeless narrative.
          </p>
          <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
        </div>

        <!-- 1. The Five Core Themes Cards -->
        <div class="space-y-4">
          <h3 class="font-cinzel text-xl font-bold text-ink-950 dark:text-parchment-100 uppercase tracking-wider flex items-center gap-2">
            <Shield class="w-5 h-5 text-gold-600" />
            <span>The Five Significant Themes</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Theme 1: Perseverance -->
            <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm transition-all space-y-3">
              <div class="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                Perseverance
              </h4>
              <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                Odysseus continues his journey despite numerous challenges, demonstrating the importance of determination and persistence across twenty years of separation and trial.
              </p>
            </div>

            <!-- Theme 2: Loyalty -->
            <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm transition-all space-y-3">
              <div class="w-10 h-10 rounded-xl bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                Loyalty
              </h4>
              <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                Penelope remains faithful while waiting for Odysseus to return home, cleverly weaving and unweaving her shroud to hold off the persistent, unruly suitors.
              </p>
            </div>

            <!-- Theme 3: Courage -->
            <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm transition-all space-y-3">
              <div class="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-bold">
                3
              </div>
              <h4 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                Courage
              </h4>
              <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                Odysseus faces dangerous creatures, difficult situations, and unexpected challenges—venturing into the underworld of the dead and confronting monsters without abandoning his mission.
              </p>
            </div>

            <!-- Theme 4: Wisdom -->
            <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm transition-all space-y-3">
              <div class="w-10 h-10 rounded-xl bg-blue-800/10 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                4
              </div>
              <h4 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                Wisdom
              </h4>
              <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                Odysseus uses his intelligence, wit, and strategic thinking to overcome obstacles that cannot be defeated by brute physical strength alone.
              </p>
            </div>

            <!-- Theme 5: Home and Family -->
            <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 hover:border-gold-500 shadow-sm transition-all space-y-3 md:col-span-2 lg:col-span-2">
              <div class="w-10 h-10 rounded-xl bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                5
              </div>
              <h4 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100">
                Home and Family
              </h4>
              <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The story emphasizes the deep importance of family, belonging, and returning to the people we love. Ithaca is not just a destination on a map; it is the spiritual anchor of Odysseus's existence.
              </p>
            </div>
          </div>
        </div>

        <!-- 2. The Seven Important Characters Cards -->
        <div class="space-y-6 pt-6">
          <div class="border-t border-parchment-200 dark:border-ink-800 pt-6 flex items-center justify-between">
            <h3 class="font-cinzel text-xl font-bold text-ink-950 dark:text-parchment-100 uppercase tracking-wider flex items-center gap-2">
              <Users class="w-5 h-5 text-crimson-800 dark:text-gold-400" />
              <span>Important Characters of the Epic</span>
            </h3>
            <span class="text-xs font-mono text-ink-400">7 Canonical Figures</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <!-- 1. Odysseus -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border-2 border-gold-500/40 shadow-sm space-y-2 hover:shadow-book transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Odysseus</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/20 text-gold-600 dark:text-gold-400 font-bold uppercase">Hero</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The hero who struggles through ten years of perilous sea trials and tribulations to return home to Ithaca.
              </p>
            </div>

            <!-- 2. Penelope -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Penelope</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-crimson-800/10 text-crimson-700 dark:text-gold-400 font-bold uppercase">Loyal Wife</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The loyal wife of Odysseus who steadfastly resists the predatory suitors through patience and clever wit.
              </p>
            </div>

            <!-- 3. Telemachus -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Telemachus</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-800/10 text-blue-700 dark:text-blue-300 font-bold uppercase">The Son</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The son of Odysseus who matures into a brave warrior and journeys to seek news of his long-lost father.
              </p>
            </div>

            <!-- 4. Athena -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Athena</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/20 text-gold-700 dark:text-gold-300 font-bold uppercase">Goddess</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The goddess of wisdom who supports, disguises, and faithfully guides Odysseus through his darkest crises.
              </p>
            </div>

            <!-- 5. Poseidon -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Poseidon</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/20 text-blue-800 dark:text-blue-300 font-bold uppercase">God of Sea</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The god of the sea who creates violent obstacles and merciless storms during Odysseus's journey.
              </p>
            </div>

            <!-- 6. Circe -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Circe</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-900/10 text-purple-700 dark:text-purple-300 font-bold uppercase">Enchantress</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The enchantress who encounters Odysseus, transforms his men into swine, but later provides crucial counsel.
              </p>
            </div>

            <!-- 7. Calypso -->
            <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm space-y-2 hover:border-gold-500 transition-all sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div class="flex items-center justify-between">
                <span class="font-cinzel font-black text-lg text-ink-950 dark:text-parchment-100">Calypso</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 font-bold uppercase">Nymph</span>
              </div>
              <p class="font-newsreader text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                The nymph who keeps Odysseus on her secluded island of Ogygia, offering him immortality if he stays with her.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- SECTION D: PERSONAL CONNECTIONS AND REALIZATIONS                         -->
      <!-- ========================================================================= -->
      <section class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book-lg space-y-8">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/30 text-xs font-mono uppercase tracking-widest font-bold">
            <span>Section D</span>
          </div>
          <h2 class="font-cinzel text-3xl sm:text-4xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Personal Connections and Realizations
          </h2>
          <p class="font-newsreader italic text-base sm:text-lg text-ink-600 dark:text-ink-300">
            Lessons from Odysseus's epic translated into my journey as a fourth-year college student.
          </p>
          <div class="w-16 h-0.5 bg-gold-500 mx-auto"></div>
        </div>

        <!-- 5 Practical Realizations Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <!-- Realization 1: Challenges in Life -->
          <div class="p-6 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3">
            <div class="flex items-center gap-2 text-crimson-800 dark:text-gold-400">
              <Compass class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Challenges Are Inevitable
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Everyone experiences challenges and unexpected problems in life. Just like Odysseus faced sudden storms and detours, our plans as students and individuals rarely follow a straight line. What matters is learning to adapt when the unexpected arrives.
            </p>
          </div>

          <!-- Realization 2: Patience and Determination -->
          <div class="p-6 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3">
            <div class="flex items-center gap-2 text-gold-600 dark:text-gold-400">
              <Anchor class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Patience Drives Success
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Success requires patience and determination. Reaching any worthwhile goal—whether earning a degree, building software projects, or growing as a person—takes persistent effort over years, not overnight luck.
            </p>
          </div>

          <!-- Realization 3: Intelligence & Decision-Making -->
          <div class="p-6 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3">
            <div class="flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <Sparkles class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Strategic Decisions Matter
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Intelligence and careful decision-making are important when facing difficulties. Odysseus repeatedly survived by thinking before acting. As a Computer Science senior, I find that solving complex problems always starts with calm analysis and strategic reasoning.
            </p>
          </div>

          <!-- Realization 4: Family Gives Purpose -->
          <div class="p-6 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3">
            <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Heart class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Family & Loved Ones Anchor Us
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Family and loved ones give meaning and purpose to our journey. Without Penelope, Telemachus, and Ithaca, Odysseus was just a wandering warrior. In my own life, my family and the people I care about are the foundation for everything I strive to accomplish.
            </p>
          </div>

          <!-- Realization 5: Staying Hopeful -->
          <div class="p-6 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-300 dark:border-ink-800 space-y-3 md:col-span-2 lg:col-span-2">
            <div class="flex items-center gap-2 text-gold-600 dark:text-gold-400">
              <Sun class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Remaining Hopeful Across Time
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              We should remain hopeful even when reaching our goals takes time. Odysseus spent ten years at war and another ten years traveling home, yet he never lost sight of his destination. In moments of academic fatigue or uncertainty about the future, his perseverance reminds me to trust the journey and keep moving forward.
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- SECTION: IMPORTANT CONTENT DISTINCTION BANNER                             -->
      <!-- ========================================================================= -->
      <section class="p-6 sm:p-8 rounded-2xl bg-[#07111E] border border-gold-500/40 text-parchment-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div class="space-y-1.5 max-w-2xl">
          <span class="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold block">
            Portfolio Content Architecture
          </span>
          <h3 class="font-cinzel font-bold text-lg text-parchment-100">
            The Odyssey in Two Distinct Sections
          </h3>
          <p class="font-newsreader text-sm text-parchment-300 leading-relaxed">
            This page represents my <strong>personal appreciation, reasons for choosing the work, and life lessons learned</strong>. For my formal classroom academic close-reading using the literary lens applied in class, visit the Literary Analyses library.
          </p>
        </div>

        <router-link
          to="/analyses/the-odyssey"
          class="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-ink-950 font-cinzel text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          <span>View Formal Academic Analysis</span>
          <span>→</span>
        </router-link>
      </section>

      <!-- Bottom Navigation Bar to Next Section -->
      <nav class="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-parchment-300 dark:border-ink-800">
        <router-link
          to="/analyses"
          class="text-xs font-cinzel font-bold uppercase tracking-wider text-ink-500 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
        >
          <span>← Literary Analyses</span>
        </router-link>

        <router-link
          to="/summary"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-700 text-parchment-50 font-cinzel text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
        >
          <span>Summary of Learning</span>
          <span>→</span>
        </router-link>
      </nav>
    </main>
  </div>
</template>

<script setup>
import {
  Crown,
  Sparkles,
  Heart,
  Shield,
  Users,
  Compass,
  Anchor,
  Sun,
  BookOpen
} from 'lucide-vue-next'

const centralThemes = [
  'Perseverance',
  'Courage',
  'Loyalty',
  'Wisdom',
  'Home and Family',
  'Determination'
]
</script>
