<template>
  <div class="grid grid-cols-6 gap-4">
    <button 
      v-if="curretStep > 1"
      @click="$emit('prev')"
      type="button"
      class="col-start-1 col-end-4 poppins-medium border-2 border-[#BBBFC1] px-4 py-1.5 md:px-8 md:py-3 rounded-md mt-9"
    >
      Kembali
    </button>
    <button 
      v-if="curretStep < totalStep"
      @click="$emit('next')"
      type="button"
      class="col-start-4 col-end-7 poppins-medium border-2 border-[#BBBFC1] px-4 py-1.5 md:px-8 md:py-3 rounded-md mt-9"
    >
      Selanjutnya
    </button>
    <button 
      v-if="curretStep === totalStep"
      @click="$emit('submit')"
      type="submit"
      class="col-start-4 col-end-7 poppins-medium border-2 border-[#BBBFC1] px-4 py-1.5 md:px-8 md:py-3 rounded-md mt-9"
    >
      Ajukan
    </button>
  </div>
</template>

<script>
export default {
  props: {
    curretStep: Number,
    totalStep: Number
  }
}
</script>