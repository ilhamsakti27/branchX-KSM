<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl">Pelunasan Pinjaman Nasabah</h4>

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

<script>
import BaseInput from "./BaseInputComponent.vue";
import BaseSelect from "./BaseSelectComponent.vue";
import BaseRadio from "./BaseRadioComponent.vue";

export default {
  components: { BaseInput, BaseSelect, BaseRadio },
  props: {
    formData: Object
  }
};
</script>
