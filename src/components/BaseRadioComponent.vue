<template>
  <div class="mt-3">
    <label class="poppins-regular">{{ label }}</label>
    <div class="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
      <label v-for="option in options" :key="option.value" class="flex items-center space-x-2">
        <input 
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="$emit('update:modelValue', option.value)"
          class="poppins-regular mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-1 rounded-full border-gray-400 focus:ring-blue-300 focus:ring-1 focus:bg-blue-300 focus:border-white focus:border-2 checked:border-2 checked:ring-blue-300 checked:ring-1 checked:border-white checked:bg-blue-300"
        />
        <span class="text-gray-900 poppins-regular dark:text-gray-300">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    options: Array
  }
};
</script>
