<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl text-center">Emergency Contact</h4>

    <BaseInput v-model="formData.peminjamECNama" label="Nama" type="text" placeholder="John Doe"/>
    <BaseInput v-model="formData.peminjamECAlamat" label="Alamat Rumah" type="text" placeholder="Jalan Balikpapan"/>
    <div class="flex flex-row gap-x-4">
      <BaseInput v-model="formData.peminjamECRT" label="RT" type="text" placeholder="4" class="w-full"/>
      <BaseInput v-model="formData.peminjamECRW" label="RW" type="text" placeholder="1" class="w-full"/>
    </div>
    <BaseInput v-model="formData.peminjamECKelurahan" label="Kelurahan" type="text" placeholder="Kembangan Selatan"/>
    <BaseInput v-model="formData.peminjamECKecamatan" label="Kecamatan" type="text" placeholder="Kembangan"/>
    <BaseInput v-model="formData.peminjamECKota" label="Kota/ Kabupaten" type="text" placeholder="Jakarta Barat"/>
    <BaseInput v-model="formData.peminjamECProvinsi" label="Provinsi" type="text" placeholder="Daerah Khusus Ibukota Jakarta"/>
    <BaseSelect 
      v-model="formData.peminjamECHubunganKeluarga" 
      label="Hubungan Keluarga"
      :options="[
        { value: 'Orangtua', label: 'Orangtua' },
        { value: 'Anak', label: 'Anak' },
        { value: 'Saudara Kandung', label: 'Saudara Kandung' },
        { value: 'Sepupu', label: 'Sepupu' },
        { value: 'Mertua', label: 'Mertua' },
        { value: 'Paman/ Tante', label: 'Paman/ Tante' },
        { value: 'Saudara Ipar', label: 'Saudara Ipar' }
      ]"
    />
    <div class="flex flex-row gap-x-4 items-end">
      <BaseSelect 
        v-model="formData.peminjamECJenisTelepon" 
        label="Telepon"
        :options="[
          { value: 'HP', label: 'HP' },
          { value: 'Rumah', label: 'Rumah' },
          { value: 'Kantor', label: 'Kantor' },
        ]"
        class="basis-1/6"
      />
      <BaseInput 
        v-model="formData.peminjamECNoTelp" label="" type="text" placeholder="01234567890"
        class="basis-5/6"  
      />
    </div>

  </div>
</template>

<script setup>
import { onMounted, defineProps } from "vue";
import BaseInput from "./BaseInputComponent.vue";
import BaseSelect from "./BaseSelectComponent.vue";

// Scroll ke atas saat komponen dimuat
onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Mendefinisikan properti (props)
defineProps({
  formData: Object,
});
</script>