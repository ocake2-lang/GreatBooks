<template>
  <div class="flex items-center justify-center gap-4 py-8 select-none" aria-hidden="true">
    <div class="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent flex-1 max-w-xs"></div>
    <div class="text-gold-600 dark:text-gold-400 font-cinzel text-xs flex items-center gap-2 tracking-widest opacity-80">
      <span>✦</span>
      <span v-if="label" class="uppercase text-[11px] font-bold px-1 font-mono tracking-wider">{{ label }}</span>
      <span v-else>❦</span>
      <span>✦</span>
    </div>
    <div class="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent flex-1 max-w-xs"></div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

