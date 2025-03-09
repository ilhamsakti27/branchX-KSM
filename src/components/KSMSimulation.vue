<template>
  <div class="max-w-screen-xl px-4 mx-auto md:px-6 lg:px-8 text-center">
    <div class="p-4">
      <h2 class="text-4xl font-medium poppins-medium text-[#003A70]">Simulasi KSM</h2>
      <p class="poppins-regular text-base text-gray-500 mt-1">
        Tertarik mengajukan KSM? Isi form ini atau kunjungi Bank Mandiri KCP Jakarta Puri Kencana
      </p>

      <div class="flex flex-col-reverse md:flex-row gap-y-3 my-8 text-start justify-center md:items-center">
        
        <div class="basis-full">
          <!-- Jumlah Pinjaman -->
          <h3 class="poppins-semibold text-lg">Jumlah Pinjaman</h3>
          <div class="flex items-center border-b border-gray-500 w-full mb-5 md:w-2/3">
            <span class="inline-block basis-1/24">Rp</span>
            <input 
              id="loanAmount" 
              name="loanAmount" 
              type="text"
              v-model="formattedLoanAmount"
              placeholder="Masukkan Nominal"
              class="inline-block basis-23/24 poppins-regular mt-0.5 py-2 px-4 focus:outline-none">
          </div>

          <!-- Jangka Waktu -->
          <h3 class="poppins-semibold text-lg">Jangka Waktu</h3>
          <div class="border-b border-gray-500 w-full mb-5 md:w-2/3">
            <select v-model="loanPeriod" class="w-full inline-block poppins-regular mt-0.5 py-2 pe-4 focus:outline-none" id="loanPeriod">
              <option disabled value="">Masukkan Durasi</option>
              <option value="12">12 bulan/ 1 tahun</option>
              <option value="24">24 bulan/ 2 tahun</option>
              <option value="36">36 bulan/ 3 tahun</option>
              <option value="48">48 bulan/ 4 tahun</option>
              <option value="60">60 bulan/ 5 tahun</option>
            </select>
          </div>

          <!-- Suku Bunga -->
          <h3 class="poppins-semibold text-lg">Suku Bunga</h3>
          <div class="border-b border-gray-500 w-full mb-5 md:w-2/3">
            <input 
              id="interestRate" 
              name="interestRate" 
              type="text"
              v-model="interestRate"
              class="inline-block poppins-regular mt-0.5 py-2 pe-4 focus:outline-none text-gray-600"
              disabled>
          </div>

          <!-- Button -->
          <button 
            class="bg-[#003A70]/80 poppins-regular text-white py-[6px] px-[50px] rounded-full text-center items-center"
            @click="submitForm">
            Hitung
          </button>

        </div>

        <div class="basis-full mb-5">
          <CardKSMSimulation :monthlyInstallmentData="monthlyInstallment" />
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
import CardKSMSimulation from './CardKSMSimulation.vue';

export default {
  components: {
    CardKSMSimulation,
  },
  data() {
    return {
      loanAmount: "", // Store raw numeric input
      loanPeriod: "", // Store selected period
      interestRate: "10.5%", // Default interest rate
      monthlyInstallment: ""
    };
  },
  computed: {
    formattedLoanAmount: {
      get() {
        return this.loanAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
      set(value) {
        this.loanAmount = value.replace(/[^0-9]/g, "");
      }
    }
  },
  methods: {
    calculateInstallment() {
      let P = parseFloat(this.loanAmount); // Pinjaman
      let n = parseInt(this.loanPeriod); // Lama pinjaman dalam bulan
      let annualInterestRate = parseFloat(this.interestRate) / 100; // Konversi ke desimal
      let r = annualInterestRate / 12; // Suku bunga per bulan

      // console.log(`${P}, ${n}, ${annualInterestRate}, ${r}`)

      if (!P || !n || !r) {
        alert("Mohon isi semua data dengan benar.");
        return;
      }

      // Rumus anuitas
      let A = (P * r) / (1 - Math.pow(1 + r, -n));

      this.monthlyInstallment = A.toFixed(2); // Format dua angka desimal
      // console.log("Angsuran per bulan: Rp", this.monthlyInstallment);
      // console.log("tipe data monthlyInstallment: ", typeof monthlyInstallment);
    },
    submitForm() {
      this.calculateInstallment();
      // console.log("Loan Amount:", this.loanAmount);
      // console.log("Loan Period:", this.loanPeriod);
      // console.log("Interest Rate:", this.interestRate);   
      // console.log("Interest Rate per Month:", this.monthlyInstallment);   
    },
  }
};
</script>
