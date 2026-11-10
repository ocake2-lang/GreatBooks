<template>
  <div class="min-h-screen flex flex-col bg-[#FAF8F3] dark:bg-[#0C1017] text-[#141A24] dark:text-[#E9EBF0] font-sans selection:bg-gold-500/30 selection:text-current transition-colors duration-200">
    <!-- Masthead Navigation -->
    <Navbar />

    <!-- Main View Outlet with Transitions -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Editorial Colophon & Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Font scale responsive classes */
html.prose-compact {
  font-size: 14px;
}
html.prose-default {
  font-size: 16px;
}
html.prose-expanded {
  font-size: 18px;
}
html.prose-generous {
  font-size: 20px;
}
</style>

