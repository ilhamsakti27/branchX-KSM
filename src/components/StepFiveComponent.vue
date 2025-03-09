<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl text-center">Pelunasan Pinjaman Nasabah</h4>
    <p class="poppins-light text-[#575F6E] text-start text-red-500 mt-1.5">*Khusus pengajuan pelunasan</p>

    <BaseRadio 
      v-model="formData.pelunasanTipeInstitusi" 
      label="Tipe Institusi"
      :options="[
        { label: 'Bank', value: 'Bank' },
        { label: 'Non-Bank', value: 'Non-Bank' }
      ]"
    />
    <BaseInput v-model="formData.pelunasanNamaInstitusi" label="Nama Institusi" type="text"  placeholder="Bank Negara Indonesia"/>
    <BaseInput v-model="formData.pelunasanRekPinjaman" label="Rekening Pinjaman/ Credit Card" type="text"  placeholder="01234567"/>
    <BaseInput v-model="formData.pelunasanNamaPinjaman" label="Nama Pinjaman/ Credit Card" type="text" placeholder="John Doe" />
    <BaseInput v-model="formData.pelunasanPlafonAwal" label="Plafon Awal" type="number" placeholder="Rp900.000.000" />
    <BaseInput v-model="formData.pelunasanAngsuranPerBln" label="Angsuran per Bulan" type="number" placeholder="Rp9.000.000"/>
    <BaseInput v-model="formData.pelunasanBankTujuanTransfer" label="Bank Tujuan Transfer" type="text" placeholder="Rp9.000.000"/>
    <BaseInput v-model="formData.pelunasanRekTujuanTransfer" label="Rekening Tabungan/ Credit Card Tujuan Transfer" type="text" placeholder="01234567890"/>
    <BaseInput v-model="formData.pelunasanNominal" label="Nominal Pelunasan" type="text" placeholder="Rp9.000.000"/>
    <BaseRadio 
      v-model="formData.pelunasanKepemilikanCicilan" 
      label="Kepemilikan Cicilan"
      :options="[
        { label: 'Aplikan', value: 'Aplikan' },
      ]"
    />
    <BaseRadio 
      v-model="formData.pelunasanSumberPelunasan" 
      label="Sumber Pelunasan"
      :options="[
        { label: 'Pencairan KSM', value: 'Pencairan KSM' },
        { label: 'Sudah Dilunasi/ Bukan Milik Cadeb', value: 'Sudah Dilunasi/ Bukan Milik Cadeb' },
      ]"
    />
    
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import BaseInput from "./BaseInputComponent.vue";
import BaseRadio from "./BaseRadioComponent.vue";

// Scroll ke atas saat komponen dimuat
onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Mendefinisikan properti (props)
defineProps({
  formData: Object,
});
</script>
