<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" :style="{ width: progressWidth }"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    step: Number,
    totalStep: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const progressWidth = computed(() => `${(props.step - 1) / (props.totalStep - 1) * 100}%`);

    return { progressWidth };
  }
};
</script>
