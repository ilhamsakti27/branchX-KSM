<script setup>
import Hero from '../components/Hero.vue';
// import Navbar from '../components/Navbar.vue';
import Divider from '../components/Divider.vue';
import Excellence from '../components/Excellence.vue';
import KSMSimulation from '../components/KSMSimulation.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <!-- <Navbar /> -->
  <Hero id="home"/>
  <Divider />
  <Excellence />
  <Divider />
  <KSMSimulation id="ksmSimulation"/>
  <Divider />
  <Footer id="contact"/>
</template>
