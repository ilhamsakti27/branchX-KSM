<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl text-center">Permohonan Nasabah</h4>

    <BaseRadio 
      v-model="formData.jenisPengajuan" 
      label="Jenis Pengajuan"
      :options="[
        { label: 'Baru', value: 'baru' },
        { label: 'TopUp', value: 'topup' },
        { label: 'Pelunasan', value: 'pelunasan' }
      ]"
    />
    <BaseInput v-model="formData.tujuanPinjaman" label="Rek. Pinjaman yang di TopUp (khusus TopUp)" type="text"  placeholder="01234567890"/>
    <BaseInput v-model="formData.tujuanPinjaman" label="Tujuan Pinjaman" type="text"  placeholder="Pembelian Mobil"/>
    <BaseInput v-model="formData.tanggalGajian" label="Tanggal Gajian" type="number" placeholder="25" min="1" max="31"/>
    <BaseInput v-model="formData.rekeningTabunganMandiri" label="Rekening Tabungan Mandiri" placeholder="1234567890123" maxlength="13"/>
    <BaseInput v-model="formData.limitDimohon" label="Limit Dimohon" type="number" placeholder="100.000.000"/>
    
    <BaseSelect 
      v-model="formData.jangkaWaktu" 
      label="Jangka Waktu"
      :options="[
        { value: '12', label: '1 tahun/ 12 bulan' },
        { value: '24', label: '2 tahun/ 24 bulan' },
        { value: '36', label: '3 tahun/ 36 bulan' },
        { value: '48', label: '4 tahun/ 48 bulan' },
        { value: '60', label: '5 tahun/ 60 bulan' },
        { value: '72', label: '6 tahun/ 72 bulan' },
        { value: '84', label: '7 tahun/ 84 bulan' },
        { value: '96', label: '8 tahun/ 96 bulan' },
        { value: '108', label: '9 tahun/ 108 bulan' },
        { value: '120', label: '10 tahun/ 120 bulan' },
        { value: '132', label: '11 tahun/ 132 bulan' },
        { value: '144', label: '12 tahun/ 144 bulan' },
        { value: '156', label: '13 tahun/ 156 bulan' },
        { value: '168', label: '14 tahun/ 168 bulan' },
        { value: '180', label: '15 tahun/ 180 bulan' },
      ]"
    />

    <BaseRadio 
      v-model="formData.dicoverAsuransi" 
      label="Dicover Asuransi"
      :options="[
        { label: 'Ya', value: 'true' },
        { label: 'Tidak', value: 'false' }
      ]"
    />

    <BaseInput v-model="formData.penghasilanPerBulan" label="Penghasilan per Bulan" type="number" placeholder="20.000.000"/>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import BaseInput from "./BaseInputComponent.vue";
import BaseSelect from "./BaseSelectComponent.vue";
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
