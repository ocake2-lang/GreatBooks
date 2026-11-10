<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-200',
        isPlaying
          ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400 border-gold-500/40 shadow-sm'
          : 'bg-parchment-100 dark:bg-ink-800 text-ink-600 dark:text-ink-300 border-parchment-300 dark:border-ink-700 hover:border-gold-500/40'
      ]"
      title="Ambient Reading Soundscapes"
      aria-label="Toggle ambient reading audio"
    >
      <Headphones class="w-3.5 h-3.5" :class="{ 'animate-pulse text-gold-600': isPlaying }" />
      <span class="hidden sm:inline">{{ isPlaying ? currentTrack.name : 'Reading Ambience' }}</span>
      <span v-if="isPlaying" class="flex items-center gap-0.5">
        <span class="w-1 h-2 bg-gold-500 animate-pulse"></span>
        <span class="w-1 h-3.5 bg-gold-500 animate-pulse delay-75"></span>
        <span class="w-1 h-1.5 bg-gold-500 animate-pulse delay-150"></span>
      </span>
    </button>

    <!-- Dropdown / Popover -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-72 p-4 rounded-xl shadow-2xl bg-parchment-50 dark:bg-ink-900 border border-parchment-300 dark:border-ink-700 z-50 text-ink-900 dark:text-ink-100"
      >
        <div class="flex items-center justify-between pb-3 border-b border-parchment-200 dark:border-ink-800 mb-3">
          <div class="flex items-center gap-2">
            <Volume2 class="w-4 h-4 text-gold-600 dark:text-gold-400" />
            <h4 class="font-cinzel text-xs font-bold tracking-wider uppercase">Reading Soundscape</h4>
          </div>
          <button
            @click="isOpen = false"
            class="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200 text-sm"
          >
            ✕
          </button>
        </div>

        <p class="text-xs text-ink-500 dark:text-ink-400 mb-3 font-newsreader italic">
          Synthesized in real-time for deep contemplative focus. No external downloads.
        </p>

        <!-- Track Selection -->
        <div class="space-y-1.5 mb-4">
          <button
            v-for="track in tracks"
            :key="track.id"
            @click="selectTrack(track)"
            :class="[
              'w-full text-left px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors',
              currentTrack.id === track.id && isPlaying
                ? 'bg-gold-500/15 text-gold-700 dark:text-gold-300 font-semibold'
                : 'hover:bg-parchment-200 dark:hover:bg-ink-800 text-ink-600 dark:text-ink-300'
            ]"
          >
            <div class="flex items-center gap-2">
              <span class="text-base">{{ track.icon }}</span>
              <span>{{ track.name }}</span>
            </div>
            <span v-if="currentTrack.id === track.id && isPlaying" class="text-gold-600 text-[10px] uppercase tracking-wider">
              Active
            </span>
          </button>
        </div>

        <!-- Volume Slider -->
        <div class="space-y-1.5 mb-4">
          <div class="flex items-center justify-between text-[11px] font-mono text-ink-500">
            <span>Soundscape Volume</span>
            <span>{{ Math.round(volume * 100) }}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            v-model.number="volume"
            @input="updateVolume"
            class="w-full accent-gold-500 h-1.5 bg-parchment-300 dark:bg-ink-700 rounded-lg cursor-pointer"
          />
        </div>

        <!-- Play / Pause Action Button -->
        <button
          @click="togglePlay"
          :class="[
            'w-full py-2 px-4 rounded-lg font-cinzel text-xs font-bold tracking-widest uppercase transition-all shadow-sm flex items-center justify-center gap-2',
            isPlaying
              ? 'bg-crimson-600 hover:bg-crimson-700 text-white'
              : 'bg-gold-600 hover:bg-gold-700 text-white'
          ]"
        >
          <component :is="isPlaying ? Pause : Play" class="w-3.5 h-3.5" />
          <span>{{ isPlaying ? 'Silence Soundscape' : 'Immerse In Audio' }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { Headphones, Volume2, Play, Pause } from 'lucide-vue-next'

const isOpen = ref(false)
const isPlaying = ref(false)
const volume = ref(0.35)

const tracks = [
  { id: 'rain', name: 'Rain on Library Glass', icon: '🌧️', type: 'pink' },
  { id: 'hearth', name: 'Study Hearth & Crackle', icon: '🪵', type: 'brown' },
  { id: 'cloister', name: 'Monastic Cloister Breeze', icon: '🏛️', type: 'white' }
]

const currentTrack = ref(tracks[0])

let audioCtx = null
let masterGain = null
let noiseSource = null
let filterNode = null
let crackleTimer = null

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    audioCtx = new AudioContextClass()
    masterGain = audioCtx.createGain()
    masterGain.gain.setValueAtTime(volume.value, audioCtx.currentTime)
    masterGain.connect(audioCtx.destination)
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
}

function createNoiseBuffer(type) {
  const bufferSize = audioCtx.sampleRate * 3
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
  const output = buffer.getChannelData(0)

  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  let lastOut = 0.0

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1

    if (type === 'pink') {
      // 1/f Pink Noise for rain
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.96900 * b2 + white * 0.1538520
      b3 = 0.86650 * b3 + white * 0.3104856
      b4 = 0.55000 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.0168980
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    } else if (type === 'brown') {
      // 1/f^2 Brown Noise for fire rumble
      output[i] = (lastOut + 0.02 * white) / 1.02
      lastOut = output[i]
      output[i] *= 3.5
    } else {
      // Soft gentle filtered white noise
      output[i] = white * 0.08
    }
  }
  return buffer
}

function startSound(type) {
  initAudio()
  stopSound()

  const buffer = createNoiseBuffer(type)
  noiseSource = audioCtx.createBufferSource()
  noiseSource.buffer = buffer
  noiseSource.loop = true

  filterNode = audioCtx.createBiquadFilter()

  if (type === 'pink') {
    filterNode.type = 'lowpass'
    filterNode.frequency.setValueAtTime(1000, audioCtx.currentTime)
  } else if (type === 'brown') {
    filterNode.type = 'lowpass'
    filterNode.frequency.setValueAtTime(450, audioCtx.currentTime)
    scheduleHearthCrackles()
  } else {
    filterNode.type = 'bandpass'
    filterNode.frequency.setValueAtTime(350, audioCtx.currentTime)
    filterNode.Q.setValueAtTime(1.2, audioCtx.currentTime)
  }

  noiseSource.connect(filterNode)
  filterNode.connect(masterGain)
  noiseSource.start()
  isPlaying.value = true
}

function scheduleHearthCrackles() {
  if (!audioCtx || !isPlaying.value || currentTrack.value.id !== 'hearth') return

  const delay = Math.random() * 400 + 100
  crackleTimer = setTimeout(() => {
    if (isPlaying.value && currentTrack.value.id === 'hearth' && audioCtx) {
      triggerSingleCrackle()
      scheduleHearthCrackles()
    }
  }, delay)
}

function triggerSingleCrackle() {
  try {
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(Math.random() * 800 + 200, audioCtx.currentTime)

    gain.gain.setValueAtTime(volume.value * 0.25, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04)

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start()
    osc.stop(audioCtx.currentTime + 0.05)
  } catch {
    // Ignore audio timing glitch
  }
}

function stopSound() {
  if (crackleTimer) {
    clearTimeout(crackleTimer)
    crackleTimer = null
  }
  if (noiseSource) {
    try {
      noiseSource.stop()
      noiseSource.disconnect()
    } catch {
      // Ignored
    }
    noiseSource = null
  }
  isPlaying.value = false
}

function togglePlay() {
  if (isPlaying.value) {
    stopSound()
  } else {
    startSound(currentTrack.value.type)
  }
}

function selectTrack(track) {
  currentTrack.value = track
  if (isPlaying.value) {
    startSound(track.type)
  }
}

function updateVolume() {
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(volume.value, audioCtx.currentTime)
  }
}

onBeforeUnmount(() => {
  stopSound()
  if (audioCtx) {
    audioCtx.close().catch(() => {})
  }
})
</script>

