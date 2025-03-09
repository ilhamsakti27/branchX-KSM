<template>
  <div class="drop-shadow-2xl sticky top-0">
    <div class="antialiased bg-gray-100 dark:bg-gray-900">
      <div class="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
        <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="flex flex-row items-center justify-between p-4">
            <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
              <img src="/images/mandiri-logo.png" alt="logo mandiri" class="w-24 md:w-32">
            </a>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="toggleMenu">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-if="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path v-if="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{ 'hidden': !open, 'flex': open }" class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <router-link class="nav-link" to="/branchX-KSM">Home</router-link>
            <router-link class="nav-link" to="/branchX-KSM/#ksmSimulation">KSM Simulation</router-link>
            <router-link class="nav-link" to="/branchX-KSM/#contact">Contact</router-link>
            <router-link class="nav-link daftar" to="/branchX-KSM/form">Daftar</router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
/* .nav-link {
  @apply px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-gray-800 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 block md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline;
} */

.nav-link {
  padding: 0.5rem 1rem; /* px-4 py-2 */
  margin-top: 0.5rem; /* mt-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  background-color: transparent; /* bg-transparent */
  border-radius: 0.5rem; /* rounded-lg */
  color: #2d3748; /* text-gray-800 */
  display: block; /* block */
  outline: none; /* focus:outline-none */
}
.daftar {
  background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1));
  color: white;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .nav-link {
    color: #e2e8f0; /* dark:text-gray-200 */
  }

  .nav-link:hover {
    background-color: #4a5568; /* dark:hover:bg-gray-600 */
    color: white; /* dark:hover:text-white */
  }

  .nav-link:focus {
    background-color: #4a5568; /* dark:focus:bg-gray-600 */
    color: white; /* dark:focus:text-white */
  }
}

/* Hover & Focus */
.nav-link:hover {
  color: #1a202c; /* hover:text-gray-900 */
  background-color: #edf2f7; /* hover:bg-gray-200 */
}

.nav-link:focus {
  color: #1a202c; /* focus:text-gray-900 */
  background-color: #edf2f7; /* focus:bg-gray-200 */
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* focus:shadow-outline */
}

/* Responsive */
@media (min-width: 768px) {
  .nav-link {
    margin-top: 0; /* md:mt-0 */
    margin-left: 1rem; /* md:ml-4 */
  }
}

</style>
