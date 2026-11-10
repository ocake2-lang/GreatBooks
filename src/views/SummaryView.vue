<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-20 paper-grain text-ink-900 dark:text-parchment-100 pb-24">
    <!-- View Header -->
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 dark:text-gold-300 text-xs font-mono uppercase tracking-widest font-bold">
        <Sparkles class="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
        <span>Summary of Learning • Great Books Course</span>
      </div>

      <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
        What Literature Has Taught Me
      </h1>

      <p class="font-cormorant italic text-lg sm:text-xl text-ink-600 dark:text-ink-300 leading-relaxed">
        A comprehensive synthesis of the important knowledge, critical concepts, hermeneutic lenses, and transformative skills acquired throughout my Great Books journey.
      </p>

      <div class="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
    </div>

    <!-- ========================================================================= -->
    <!-- TOPIC A: UNDERSTANDING LITERARY MASTERPIECES                               -->
    <!-- ========================================================================= -->
    <section class="space-y-8">
      <div class="border-b border-parchment-300 dark:border-ink-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            Topic A
          </span>
          <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Understanding Literary Masterpieces
          </h2>
        </div>
        <span class="text-xs font-mono text-ink-400">The Living Mirror of Civilization</span>
      </div>

      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-6">
        <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
          Throughout the Great Books curriculum, I discovered that literary masterpieces are not inert historical relics, but living records of humanity’s most profound inquiries. Works created across distinct historical eras and diverse civilizations serve as cultural compasses, illuminating how human beings across time have grappled with existence, meaning, society, and destiny.
        </p>

        <!-- 6 Reflection Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <!-- 1. Human Experiences -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-crimson-800 dark:text-gold-400">
              <Heart class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Human Experiences
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Literature captures the universal spectrum of human life—from the agony of bereavement and mortal vulnerability to the joy of reunion, love, spiritual triumph, and the courage to endure hardship.
            </p>
          </div>

          <!-- 2. Cultural Traditions -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-gold-600 dark:text-gold-400">
              <Globe class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Cultural Traditions
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Masterpieces preserve the customs, sacred rituals, oral lore, and ancestral heritages of diverse societies, showing how storytelling forms the bedrock of cultural identity and collective memory.
            </p>
          </div>

          <!-- 3. Beliefs and Values -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
              <Shield class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Beliefs and Values
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              From the cosmic theophany of Job to Indian notions of <em>dharma</em> and Greek heroic <em>arete</em>, literature articulates what different civilizations revered as righteous, noble, and sacred.
            </p>
          </div>

          <!-- 4. Social Conditions -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-blue-700 dark:text-blue-400">
              <Users class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Social Conditions
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Stories hold a mirror up to their times, uncovering socioeconomic inequities, the oppression of the poor in Victor Hugo's Paris, feudal hierarchies in medieval Europe, and Heian aristocratic court structures.
            </p>
          </div>

          <!-- 5. Human Conflicts -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-crimson-800 dark:text-crimson-400">
              <Scale class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Human Conflicts
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Literature dramatizes the clashes that define history: external wars between empires, generational disputes, civil strife, and the painful internal war between duty and personal longing.
            </p>
          </div>

          <!-- 6. Different Perspectives on Life -->
          <div class="p-5 rounded-2xl bg-parchment-50 dark:bg-ink-950 border border-parchment-200 dark:border-ink-800 space-y-2 hover:border-gold-500 transition-colors">
            <div class="flex items-center gap-2.5 text-gold-600 dark:text-gold-400">
              <Compass class="w-5 h-5 shrink-0" />
              <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
                Different Perspectives on Life
              </h3>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Reading widely frees us from our narrow contemporary mindset, showing how different peoples envisioned fate, free will, suffering, divine providence, and human destiny.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- TOPIC B: UNDERSTANDING LITERARY LENSES                                     -->
    <!-- ========================================================================= -->
    <section class="space-y-8">
      <div class="border-b border-parchment-300 dark:border-ink-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            Topic B
          </span>
          <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Understanding Literary Lenses
          </h2>
        </div>
        <span class="text-xs font-mono text-ink-400">Hermeneutic Methods of Inquiry</span>
      </div>

      <div class="space-y-4">
        <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
          Examining literature through different critical lenses is essential because no single approach can unlock the full depth of a masterpiece. A literary lens acts as an intellectual filter, revealing layers of meaning, subtext, artistic craft, and philosophical resonance that would otherwise remain hidden.
        </p>

        <!-- 3 Attractive Lens Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <!-- 1. Formalist / New Criticism -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border-2 border-emerald-800/30 dark:border-emerald-500/30 shadow-book flex flex-col justify-between space-y-6 hover:border-emerald-600 transition-all group">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-parchment-200 dark:border-ink-800 pb-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-800/10 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Layers class="w-5 h-5" />
                </div>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-800/10 text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider">
                  Intrinsic Analysis
                </span>
              </div>

              <div>
                <h3 class="font-cinzel font-bold text-xl text-ink-950 dark:text-parchment-100">
                  Formalist / New Criticism
                </h3>
                <span class="text-xs font-mono text-emerald-700 dark:text-emerald-400 mt-0.5 block">
                  Focus on the Text Itself
                </span>
              </div>

              <div class="space-y-3 font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                <p>
                  <strong>Focuses on the literary work itself:</strong> Treats the text as an autonomous, self-contained artistic object, independent of external authorial intent or historical background.
                </p>
                <p>
                  <strong>Examines themes, symbols, structure, imagery, and language:</strong> Scrutinizes poetic devices, recurring motifs, narrative pacing, ironies, wordplay, and formal unity to discover how the piece creates meaning.
                </p>
              </div>
            </div>

            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800 text-xs font-mono text-ink-500">
              <span>Applied To: Close-reading poetry, structure & symbolism</span>
            </div>
          </div>

          <!-- 2. Biographical Approach -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border-2 border-gold-500/40 shadow-book flex flex-col justify-between space-y-6 hover:border-gold-500 transition-all group">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-parchment-200 dark:border-ink-800 pb-3">
                <div class="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 dark:text-gold-300 flex items-center justify-center font-bold">
                  <UserCheck class="w-5 h-5" />
                </div>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-gold-500/15 text-gold-700 dark:text-gold-300 font-bold uppercase tracking-wider">
                  Authorial Life
                </span>
              </div>

              <div>
                <h3 class="font-cinzel font-bold text-xl text-ink-950 dark:text-parchment-100">
                  Biographical Approach
                </h3>
                <span class="text-xs font-mono text-gold-600 dark:text-gold-400 mt-0.5 block">
                  The Creator & Lived Experience
                </span>
              </div>

              <div class="space-y-3 font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                <p>
                  <strong>Examines the author's life and experiences:</strong> Investigates the writer's personal struggles, family background, philosophical beliefs, and psychological development.
                </p>
                <p>
                  <strong>How life influences the work:</strong> Explores how personal triumphs, illnesses, political exile, or emotional traumas shape character motivations, moral conflicts, and the central themes of the story.
                </p>
              </div>
            </div>

            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800 text-xs font-mono text-ink-500">
              <span>Applied To: Homer's Odyssey, Hugo's Les Misérables</span>
            </div>
          </div>

          <!-- 3. Historical / Contextual Approach -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-ink-900 border-2 border-crimson-800/30 dark:border-gold-500/30 shadow-book flex flex-col justify-between space-y-6 hover:border-crimson-700 dark:hover:border-gold-400 transition-all group">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-parchment-200 dark:border-ink-800 pb-3">
                <div class="w-10 h-10 rounded-xl bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center font-bold">
                  <History class="w-5 h-5" />
                </div>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-crimson-800/10 text-crimson-800 dark:text-gold-400 font-bold uppercase tracking-wider">
                  Cultural Milieu
                </span>
              </div>

              <div>
                <h3 class="font-cinzel font-bold text-xl text-ink-950 dark:text-parchment-100">
                  Historical / Contextual Approach
                </h3>
                <span class="text-xs font-mono text-crimson-700 dark:text-gold-400 mt-0.5 block">
                  Epoch, Society & Culture
                </span>
              </div>

              <div class="space-y-3 font-newsreader text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                <p>
                  <strong>Examines the historical period and cultural background:</strong> Analyzes the political conflicts, religious institutions, intellectual climate, and cultural worldview of the era in which the work was created.
                </p>
                <p>
                  <strong>Examines social conditions:</strong> Looks at contemporary class structures, economic realities, and historical events to understand how the work responds to its contemporary world.
                </p>
              </div>
            </div>

            <div class="pt-3 border-t border-parchment-200 dark:border-ink-800 text-xs font-mono text-ink-500">
              <span>Applied To: Medieval Roland, Heian Genji, Ancient Indian Epics</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- TOPIC C: APPRECIATION OF LITERATURE                                       -->
    <!-- ========================================================================= -->
    <section class="space-y-8">
      <div class="border-b border-parchment-300 dark:border-ink-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            Topic C
          </span>
          <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Appreciation of Literature
          </h2>
        </div>
        <span class="text-xs font-mono text-ink-400">Deepening Empathy & Human Understanding</span>
      </div>

      <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-parchment-100 via-white to-parchment-100 dark:from-ink-900 dark:via-ink-850 dark:to-ink-950 border border-gold-500/40 shadow-book-lg space-y-6">
        <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
          Literature is far more than an academic exercise or decorative storytelling; it is an empathy machine that expands our consciousness. Studying the Great Books has taught me that engaging with masterpieces directly refines our appreciation for:
        </p>

        <!-- 5 Key Appreciation Dimensions -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <!-- 1. Different Cultures and Traditions -->
          <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2.5">
            <div class="w-9 h-9 rounded-lg bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-sm">
              01
            </div>
            <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
              Different Cultures and Traditions
            </h3>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Crossing chronological and geographic boundaries—from ancient Hebrew wisdom and Sanskrit epics to Japanese Heian court life and French romanticism—fostering genuine cross-cultural reverence.
            </p>
          </div>

          <!-- 2. Human Values and Beliefs -->
          <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2.5">
            <div class="w-9 h-9 rounded-lg bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-sm">
              02
            </div>
            <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
              Human Values and Beliefs
            </h3>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Witnessing what different generations have fought, lived, and died for: honor, spiritual salvation, loyalty, truth, compassion, and the pursuit of righteousness.
            </p>
          </div>

          <!-- 3. Conflicts and Struggles -->
          <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2.5">
            <div class="w-9 h-9 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-cinzel font-bold text-sm">
              03
            </div>
            <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
              Conflicts and Struggles
            </h3>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Validating that human pain, vulnerability, ethical dilemmas, and existential questions are universal experiences shared across all peoples and time periods.
            </p>
          </div>

          <!-- 4. Relationships and Emotions -->
          <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2.5">
            <div class="w-9 h-9 rounded-lg bg-blue-800/10 text-blue-700 dark:text-blue-400 flex items-center justify-center font-cinzel font-bold text-sm">
              04
            </div>
            <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
              Relationships and Emotions
            </h3>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Illuminating the delicate dynamics of family ties, marital devotion like Penelope's, brotherhood in the Panchatantra, and the profound depth of human love, grief, and forgiveness.
            </p>
          </div>

          <!-- 5. Society and Human Nature -->
          <div class="p-5 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-200 dark:border-ink-800 space-y-2.5 md:col-span-2 lg:col-span-2">
            <div class="w-9 h-9 rounded-lg bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center font-cinzel font-bold text-sm">
              05
            </div>
            <h3 class="font-cinzel font-bold text-base text-ink-950 dark:text-parchment-100">
              Society and Human Nature
            </h3>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Unmasking human flaws such as hubris, greed, cruelty, and complacency, while celebrating our capacity for self-sacrifice, justice, and the relentless quest to build a more humane society.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- TOPIC D: DEVELOPMENT OF SKILLS                                            -->
    <!-- ========================================================================= -->
    <section class="space-y-8">
      <div class="border-b border-parchment-300 dark:border-ink-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold-400 font-bold block">
            Topic D
          </span>
          <h2 class="font-cinzel text-2xl sm:text-3xl font-extrabold text-ink-950 dark:text-parchment-100 uppercase tracking-tight">
            Development of Skills
          </h2>
        </div>
        <span class="text-xs font-mono text-ink-400">Academic & Lifelong Competencies</span>
      </div>

      <div class="space-y-4">
        <p class="font-newsreader text-base sm:text-lg text-ink-800 dark:text-ink-200 leading-relaxed">
          Beyond acquiring factual knowledge, the Great Books curriculum functioned as an intellectual laboratory. Navigating intricate canonical texts nurtured six core cognitive and reflective competencies:
        </p>

        <!-- 6 Skills Visual Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <!-- 1. Critical Thinking -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center border border-crimson-800/20 group-hover:scale-105 transition-transform">
              <Brain class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Critical Thinking
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Cognitive Rigor</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Evaluating complex arguments, identifying logical fallacies, questioning unexamined assumptions, and refusing superficial conclusions in favor of reasoned evidence.
            </p>
          </div>

          <!-- 2. Literary Interpretation -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
              <BookOpen class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Literary Interpretation
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Hermeneutic Insight</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Unpacking subtext, deciphering allegories, recognizing narrative symbolism, and interpreting the underlying philosophical meaning within classical and modern texts.
            </p>
          </div>

          <!-- 3. Analytical Skills -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-blue-800/10 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-800/20 group-hover:scale-105 transition-transform">
              <Search class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Analytical Skills
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Structural Deconstruction</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Dissecting intricate narratives into themes, character motivations, and stylistic patterns, synthesizing diverse observations into clear, coherent scholarly analyses.
            </p>
          </div>

          <!-- 4. Understanding Different Perspectives -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-800/20 group-hover:scale-105 transition-transform">
              <Compass class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Understanding Different Perspectives
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Empathetic Horizon</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Learning to step outside of personal biases, inhabit opposing moral viewpoints, and appreciate why different eras, cultures, and characters act according to their beliefs.
            </p>
          </div>

          <!-- 5. Personal Reflection -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
              <Feather class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Personal Reflection
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Introspective Growth</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Connecting external literary insights to internal personal growth, using timeless stories as a mirror to examine character, career ambitions, and moral values.
            </p>
          </div>

          <!-- 6. Appreciation of Cultural Diversity -->
          <div class="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-sm hover:border-gold-500 transition-all space-y-3 group">
            <div class="w-12 h-12 rounded-xl bg-crimson-800/10 text-crimson-800 dark:text-gold-400 flex items-center justify-center border border-crimson-800/20 group-hover:scale-105 transition-transform">
              <Globe class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-cinzel font-bold text-lg text-ink-950 dark:text-parchment-100 group-hover:text-gold-600 transition-colors">
                Appreciation of Cultural Diversity
              </h3>
              <span class="text-[11px] font-mono text-ink-400 uppercase tracking-wider block">Global Reverence</span>
            </div>
            <p class="font-newsreader text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              Recognizing that while cultural forms, languages, and rituals differ across continents, human beings everywhere share the same profound capacity for dignity, love, and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-Disciplinary Synthesis: Technologist Bridge -->
    <section class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-ink-900 border border-parchment-300 dark:border-ink-800 shadow-book space-y-4">
      <div class="flex items-center gap-2 border-b border-parchment-200 dark:border-ink-800 pb-3">
        <GraduationCap class="w-5 h-5 text-gold-600" />
        <h3 class="font-cinzel text-lg font-bold text-ink-950 dark:text-parchment-100 uppercase tracking-wider">
          Connecting Humanities with Computer Science • University of Nueva Caceres
        </h3>
      </div>
      <p class="font-newsreader text-base text-ink-800 dark:text-ink-200 leading-relaxed">
        As a senior Computer Science student, the Great Books curriculum provided an invaluable ethical and humanistic foundation. Programming trains the mind to construct efficient algorithms and solve technical problems; literature teaches us why we build, how to empathize with the people who use our technology, and how to safeguard human dignity in an increasingly digital world.
      </p>
    </section>

    <!-- Bottom Navigation Bar to Next Section -->
    <div class="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-parchment-300 dark:border-ink-800">
      <router-link
        to="/masterpiece"
        class="text-xs font-cinzel font-bold uppercase tracking-wider text-ink-500 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
      >
        <span>← My Favorite Masterpiece</span>
      </router-link>

      <router-link
        to="/reflection"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson-800 hover:bg-crimson-700 text-parchment-50 font-cinzel text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
      >
        <span>Personal Reflection</span>
        <span>→</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {
  Sparkles,
  Heart,
  Globe,
  Shield,
  Users,
  Scale,
  Compass,
  Layers,
  UserCheck,
  History,
  Brain,
  BookOpen,
  Search,
  Feather,
  GraduationCap
} from 'lucide-vue-next'
</script>
