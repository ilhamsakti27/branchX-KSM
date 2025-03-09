<template>
  <div class="mt-3">
    <label :for="id" class="poppins-regular">{{ label }}</label>
    <input 
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="w-full poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    id: String,
    type: { type: String, default: "text" },
    placeholder: String
  }
};
</script>
