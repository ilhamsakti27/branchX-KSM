<template>
  <div>
    <Navbar class="z-50" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    Navbar,
  }
};
</script>

