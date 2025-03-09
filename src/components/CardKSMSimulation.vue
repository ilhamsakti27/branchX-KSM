<template>
  <div class="block p-4 md:py-9 md:px-14 bg-white border border-gray-400 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div>
      <h5 class="mb-0.5 poppins-light text-lg tracking-tight text-gray-900 dark:text-white">Perkiraan Tanggal Angsuran</h5>
      <p class="poppins-medium text-2xl text-black dark:text-gray-400">Tgl pembayaran gaji</p>
    </div>

    <div class="mt-4">
      <h5 class="mb-0.5 poppins-light text-lg tracking-tight text-gray-900 dark:text-white">Perkiraan Tanggal Angsuran</h5>
      <p class="poppins-medium text-3xl text-black dark:text-gray-400">
        <span>Rp</span> {{ formattedLoanAmount }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    monthlyInstallmentData: String,
  },
  computed: {
    formattedLoanAmount() {
      if (!this.monthlyInstallmentData) return "0";
      // bulatkan
      let number = Math.round(this.monthlyInstallmentData);
      // konversi ke format Rupiah
      return number.toLocaleString("id-ID");
    }
  }
};
</script>
