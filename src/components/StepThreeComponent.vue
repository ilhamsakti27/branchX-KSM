<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl">Data Pekerjaan</h4>

    <BaseInput v-model="formData.peminjamPekerjaanNamaPerusahaan" label="Nama Perusahaan" type="text" placeholder="Bank Mandiri KCP Jakarta Puri Kencana"/>
    <BaseInput v-model="formData.peminjamPekerjaanNIP" label="No Induk Pegawai" type="text" max="16" placeholder="1234567890"/>
    <BaseInput v-model="formData.peminjamPekerjaMulaiBekerja" label="Mulai Bekerja" type="date" max="16" placeholder="10/01/2005"/>
    <BaseInput v-model="formData.peminjamPekerjaanAlamat" label="Alamat Kantor" type="text" placeholder="Blok L. 6, Jl. Kencana Utama No.7"/>
    <div class="flex flex-row gap-x-4">
      <BaseInput v-model="formData.peminjamPekerjaanRT" label="RT" type="text" placeholder="4" class="w-full"/>
      <BaseInput v-model="formData.peminjamPekerjaanRW" label="RW" type="text" placeholder="1" class="w-full"/>
    </div>
    <BaseInput v-model="formData.peminjamPekerjaanKelurahan" label="Kelurahan" type="text" placeholder="Kembangan Selatan"/>
    <BaseInput v-model="formData.peminjamPekerjaanKecamatan" label="Kecamatan" type="text" placeholder="Kembangan"/>
    <BaseInput v-model="formData.peminjamPekerjaanKota" label="Kota/ Kabupaten" type="text" placeholder="Jakarta Barat"/>
    <BaseInput v-model="formData.peminjamPekerjaanProvinsi" label="Provinsi" type="text" placeholder="Daerah Khusus Ibukota Jakarta"/>
    <BaseInput v-model="formData.peminjamPekerjaanNamaAtasan" label="Nama Atasan" type="text" placeholder="Arif STY"/>
    <BaseInput v-model="formData.peminjamPekerjaanTelpAtasan" label="No Telp Atasan" type="text" placeholder="02112345678"/>
    <BaseInput v-model="formData.peminjamPekerjaanEmailPerusahaan" label="Alamat Email Perusahaan" type="email" placeholder="arif.corp@gmail.com"/>
    <BaseSelect 
      v-model="formData.peminjamPekerjaanTipe" 
      label="Tipe Pekerjaan"
      :options="[
        { value: 'Pegawai Instansi Pemerintah/ Lembaga Negara/ BLU', label: 'Pegawai Instansi Pemerintah/ Lembaga Negara/ BLU' },
        { value: 'Anggota TNI', label: 'Anggota TNI' },
        { value: 'Anggota POLRI', label: 'Anggota POLRI' },
        { value: 'Pegawai BUMN', label: 'Pegawai BUMN' },
        { value: 'Pegawai BUMD', label: 'Pegawai BUMD' },
        { value: 'Pegawai Swasta', label: 'Pegawai Swasta' },
        { value: 'Wiraswasta', label: 'Wiraswasta' },
        { value: 'Profesional', label: 'Profesional' }
      ]"
    />
    <BaseSelect 
      v-model="formData.peminjamPekerjaanStatusKepegawaian" 
      label="Status Kepegawaian (Selain Wiraswasta/ Profesional)"
      :options="[
        { value: 'PNS', label: 'PNS' },
        { value: 'Non PNS/ Tetap', label: 'Non PNS/ Tetap' },
        { value: 'CPNS', label: 'CPNS' },
        { value: 'PPPK', label: 'PPPK' },
        { value: 'Kontrak', label: 'Kontrak' },
        { value: 'OutSource/ Honorer', label: 'OutSource/ Honorer' },
        { value: 'Pensiunan', label: 'Pensiunan' },
      ]"
    />
    <BaseSelect 
      v-model="formData.peminjamPekerjaanJabatan" 
      label="Jabatan"
      :options="[
        { value: 'Komisaris/ Pemilik', label: 'Komisaris/ Pemilik' },
        { value: 'Direksi Kepala Pemerintahan/ Eselon 1/ Perwira Tinggi', label: 'Direksi Kepala Pemerintahan/ Eselon 1/ Perwira Tinggi' },
        { value: 'General Manager/ Kepala Biro/ Eselon 2/ Perwira menengah', label: 'General Manager/ Kepala Biro/ Eselon 2/ Perwira menengah' },
        { value: 'Manager/ Kepala Bagian/ Eselon 3/ Perwira Pertama', label: 'Manager/ Kepala Bagian/ Eselon 3/ Perwira Pertama' },
        { value: 'Assistant Manager/ Kepala Seksi/ Eselon 4/ Bintara', label: 'Assistant Manager/ Kepala Seksi/ Eselon 4/ Bintara' },
        { value: 'Clerk/ Operator/ Staf Pelaksana/ Pegawai Dasar/ Tamtama', label: 'Clerk/ Operator/ Staf Pelaksana/ Pegawai Dasar/ Tamtama' },
        { value: 'Lainnya', label: 'Lainnya' },
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