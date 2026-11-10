export const diagnosticQuestions = [
  {
    id: "question-1",
    question: "What existential dilemma weighs heaviest upon your thoughts right now?",
    options: [
      { label: "The architecture of a just society and the moral integrity of leaders", value: "justice" },
      { label: "How to maintain tranquility and fortitude amidst chaos and uncertainty", value: "resilience" },
      { label: "The unanswerable problem of suffering, evil, and the limits of reason", value: "suffering" },
      { label: "How to live authentically when life lacks any predetermined cosmic script", value: "absurdity" },
      { label: "The passage of time, the fragility of memory, and the power of art", value: "art" }
    ]
  },
  {
    id: "question-2",
    question: "When confronted with profound moral or intellectual opposition, your natural posture is:",
    options: [
      { label: "Methodical Socratic cross-examination to uncover underlying contradictions", value: "socratic" },
      { label: "Quiet retreat into the sovereign fortress of self-examination and duty", value: "stoic" },
      { label: "Fierce passionate revolt against hypocrisy, even if it tears your heart", value: "rebel" },
      { label: "Lucid, ironic defiance with a calm smile toward the mountain heights", value: "sisyphean" },
      { label: "Patient contemplative observation, capturing the luminous nuances of perception", value: "contemplative" }
    ]
  },
  {
    id: "question-3",
    question: "Which literary landscape resonates most deeply with your soul?",
    options: [
      { label: "An ancient sunlit Athenian agora where citizens debate the Good Life", value: "athens" },
      { label: "A Roman military commander's tent on the northern frontier at midnight", value: "danube" },
      { label: "A smoke-filled 19th-century tavern where two brothers debate God's world", value: "russia" },
      { label: "A sun-drenched Mediterranean quarry where a solitary man rolls a stone", value: "mediterranean" },
      { label: "A wind-swept seaside cottage where an artist touches brush to canvas", value: "hebrides" }
    ]
  }
];

export const bookRecommendations = {
  justice: {
    bookId: "plato-republic",
    title: "The Republic",
    author: "Plato",
    matchReason: "Your concern with ethical integrity and political order demands Plato's foundational masterpiece. You will find solace in Socrates' unyielding insistence that true power belongs only to those whose souls are harmonized by wisdom.",
    readingTip: "Begin with Book II's Ring of Gyges challenge before tackling the grand metaphysical vision of Book VII's Cave."
  },
  resilience: {
    bookId: "marcus-aurelius-meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    matchReason: "You seek an unshakeable inner anchor against the storm. The journal of the philosopher-emperor will teach you to build your own 'inner citadel' and distinguish what is within your control from what is external noise.",
    readingTip: "Do not read it cover to cover like a novel; read one book each morning before beginning your workday."
  },
  suffering: {
    bookId: "dostoevsky-brothers-karamazov",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    matchReason: "You refuse facile, superficial answers to life's deepest wounds. Dostoevsky's dialogue between the atheist Ivan and the saintly Alyosha will meet you at the very precipice of human suffering and show you the transfiguring power of active compassion.",
    readingTip: "Read 'Rebellion' and 'The Grand Inquisitor' back-to-back with 'The Russian Monk'."
  },
  absurdity: {
    bookId: "camus-myth-of-sisyphus",
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    matchReason: "You demand intellectual honesty without religious or political illusions. Camus' crisp, luminous prose will teach you how to live with heroic dignity, joyful passion, and solidarity in an indifferent cosmos.",
    readingTip: "Pay special attention to the section on 'The Absurd Man' and the final mythic portrait of Sisyphus."
  },
  art: {
    bookId: "woolf-to-the-lighthouse",
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    matchReason: "Your sensitivity to the subtle rhythms of consciousness and temporal loss makes Virginia Woolf your kindred spirit. Through Lily Briscoe's brush and Mrs. Ramsay's dinners, she reveals how artistic vision redeems mortal fleetingness.",
    readingTip: "Allow the stream of consciousness to wash over you without trying to force a conventional plot structure."
  }
};

