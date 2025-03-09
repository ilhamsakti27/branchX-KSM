<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl">Data Nasabah</h4>

    <BaseInput v-model="formData.peminjamNama" label="Nama Sesuai KTP" type="text" placeholder="Arif Setyawan"/>
    <BaseInput v-model="formData.peminjamNIK" label="No. KTP" type="text" max="16" placeholder="1234567890"/>
    <BaseInput v-model="formData.peminjamNPWP" label="No. NPWP" type="text" max="16" placeholder="1234567890"/>
    <BaseInput v-model="formData.peminjamTanggalLahir" label="Tanggal Lahir" type="date" placeholder="12/05/1992"/>
    <BaseInput v-model="formData.peminjamTempatLahir" label="Tempat Lahir" type="text" placeholder="Bayuwangi, Indonesia"/>
    <BaseRadio 
      v-model="formData.peminjamJenisKelamin" 
      label="Jenis Kelamin"
      :options="[
        { label: 'Pria', value: 'pria' },
        { label: 'Wanita', value: 'wanita' },
      ]"
    />
    <BaseInput v-model="formData.peminjamNamaIbuKandung" label="Nama Gadis Ibu Kandung" type="text" placeholder="Ibu Arif"/>
    <BaseRadio 
      v-model="formData.peminjamPendidikanTerakhir" 
      label="Pendidikan Terakhir"
      :options="[
        { label: 'SD', value: 'SD' },
        { label: 'SMP', value: 'SMP' },
        { label: 'SMA', value: 'SMA' },
        { label: 'Diploma', value: 'Diploma' },
        { label: 'S1', value: 'S1' },
        { label: 'S2', value: 'S2' },
        { label: 'S3', value: 'S3' },
      ]"
    />
    <BaseRadio 
      v-model="formData.peminjamStatusPerkawinan" 
      label="Status Perkawinan"
      :options="[
        { label: 'Belum Kawin', value: 'belum kawin' },
        { label: 'Kawin', value: 'kawin' },
        { label: 'Cerai Hidup', value: 'cerai hidup' },
        { label: 'Cerai Mati', value: 'cerai mati' },
      ]"
    />
    <BaseInput v-model="formData.peminjamJumlahTanggungan" label="Jumlah Tanggungan" type="number" placeholder="4"/>
    <BaseInput v-model="formData.peminjamAlamat" label="Alamat" type="text" placeholder="Blok L. 6, Jl. Kencana Utama No.7"/>
    <div class="flex flex-row gap-x-4">
      <BaseInput v-model="formData.peminjamRT" label="RT" type="text" placeholder="4" class="w-full" />
      <BaseInput v-model="formData.peminjamRW" label="RW" type="text" placeholder="1" class="w-full" />
    </div>
    <BaseInput v-model="formData.peminjamKelurahan" label="Kelurahan" type="text" placeholder="Kembangan Selatan"/>
    <BaseInput v-model="formData.peminjamKecamatan" label="Kecamatan" type="text" placeholder="Kembangan"/>
    <BaseInput v-model="formData.peminjamKota" label="Kota/ Kabupaten" type="text" placeholder="Jakarta Barat"/>
    <BaseInput v-model="formData.peminjamProvinsi" label="Provinsi" type="text" placeholder="Daerah Khusus Ibukota Jakarta"/>
    <BaseRadio 
      v-model="formData.peminjamStatusRumah" 
      label="Status Rumah"
      :options="[
        { label: 'Milik Sendiri', value: 'milik sendiri' },
        { label: 'Orangtua', value: 'orangtua' },
        { label: 'Dinas', value: 'dinas' },
        { label: 'Sewa/ Kontrak', value: 'sewa/ kontrak' },
      ]"
    />
    <BaseInput v-model="formData.peminjamTelpRumah" label="Telepon Rumah" type="text" placeholder="02112345678"/>
    <BaseInput v-model="formData.peminjamTelpHp" label="Telepon Hp" type="text" placeholder="02112345678"/>
    <BaseInput v-model="formData.peminjamEmail" label="Alamat Email" type="email" placeholder="arif.sty@gmail.com"/>

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