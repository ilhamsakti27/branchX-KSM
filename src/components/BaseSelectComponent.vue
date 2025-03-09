<template>
  <div class="mt-3">
    <label :for="id" class="poppins-regular">{{ label }}</label>
    <select 
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
    >
      <option value="" disabled selected>Pilih</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    id: String,
    options: Array
  }
};
</script>
