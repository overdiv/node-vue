<template>
    <div class="app-wrapper">
      <Sidebar class="sidebar-container"/>
      <div class="main-container">
        <Navbar />
        <section class="app-main">
          <transition name="fade-transform" mode="out-in">
            <router-view/>
          </transition>
        </section>
      </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
	components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
