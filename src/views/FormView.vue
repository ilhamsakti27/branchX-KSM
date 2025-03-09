<template>
  <div class="max-w-screen-xl px-4 mx-auto md:px-6 lg:px-8">
    <div class="p-4">
      <ProgresTab :step="step" :totalStep="totalStep" class="mt-3 mb-5"/>

      <SubHeadingForm />

      <div class="border-2 border-[#E2E4E5] rounded-lg px-4 py-2 md:px-15 md:py-8 mt-5 md:mt-10">
        <form @submit.prevent="nextStep">
          <div v-if="step === 1">
            <StepOneComponent :formData="formData" />
            <!-- <pre>{{ formData }}</pre> -->
          </div>
          <div v-if="step === 2">
            <StepTwoComponent :formData="formData" />
          </div>
          <div v-if="step === 3">
            <StepThreeComponent :formData="formData"/>
          </div>
          <div v-if="step === 4">
            <StepFourComponent :formData="formData"/>
          </div>
          <div v-if="step === 5">
            <StepFiveComponent :formData="formData"/>
          </div>

          <StepNavigation 
            :curretStep="step"
            :totalStep="totalStep"
            @prev="prevStep"
            @next="nextStep"
            @submit="submitForm"
          />
        </form>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import SubHeadingForm from '../components/SubHeadingForm.vue';
import StepOneComponent from '../components/StepOneComponent.vue';
import StepTwoComponent from '../components/StepTwoComponent.vue';
import StepThreeComponent from '../components/StepThreeComponent.vue';
import StepFourComponent from '../components/StepFourComponent.vue';
import StepFiveComponent from '../components/StepFiveComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import StepNavigation from '../components/StepNavigation.vue';
import ProgresTab from '../components/ProgresTab.vue';

export default {
  components:{
    SubHeadingForm,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    FooterComponent,
    StepNavigation,
    ProgresTab,
  },
  setup() {
    const router = useRouter();
    const step = ref(1);
    const totalStep = 5;
    const formData = ref({
      jenisPengajuan: 'baru',
      tujuanPinjaman: '',
      tanggalGajian: '',
      rekeningTabunganMandiri: '',
      limitDimohon: '',
      jangkaWaktu: '',
      dicoverAsuransi: 'true',
      penghasilanPerBulan: '',
      peminjamNama: '',
      peminjamNIK: '',
      peminjamNPWP: '',
      peminjamTanggalLahir: '',
      peminjamTempatLahir: '',
      peminjamJenisKelamin: '',
      peminjamNamaIbuKandung: '',
      peminjamPendidikanTerakhir: '',
      peminjamStatusPerkawinan: '',
      peminjamNpeminjamJumlahTanggunganIK: '',
      peminjamAlamat: '',
      peminjamRT: '',
      peminjamRW: '',
      peminjamKelurahan: '',
      peminjamKecamatan: '',
      peminjamKota: '',
      peminjamProvinsi: '',
      peminjamStatusRumah: '',
      peminjamTelpRumah: '',
      peminjamTelpHp: '',
      peminjamEmail: '',
      peminjamPekerjaanNamaPerusahaan: '',
      peminjamPekerjaanNIP: '',
      peminjamPekerjaMulaiBekerja: '',
      peminjamPekerjaanAlamat: '',
      peminjamPekerjaanRT: '',
      peminjamPekerjaanRW: '',
      peminjamPekerjaanKelurahan: '',
      peminjamPekerjaanKecamatan: '',
      peminjamPekerjaanKota: '',
      peminjamPekerjaanProvinsi: '',
      peminjamPekerjaanNamaAtasan: '',
      peminjamPekerjaanTelpAtasan: '',
      peminjamPekerjaanEmailPerusahaan: '',
      peminjamPekerjaanTipe: '',
      peminjamPekerjaanStatusKepegawaian: '',
      peminjamPekerjaanJabatan: '',
      peminjamECNama: '',
      peminjamECAlamat: '',
      peminjamECRT: '',
      peminjamECRW: '',
      peminjamECKelurahan: '',
      peminjamECKecamatan: '',
      peminjamECKota: '',
      peminjamECProvinsi: '',
      peminjamECHubunganKeluarga: '',
      peminjamECJenisTelepon: '',
      peminjamECNoTelp: '',
      pelunasanTipeInstitusi: '',
      pelunasanNamaInstitusi: '',
      pelunasanRekPinjaman: '',
      pelunasanNamaPinjaman: '',
      pelunasanPlafonAwal: '',
      pelunasanAngsuranPerBln: '',
      pelunasanBankTujuanTransfer: '',
      pelunasanRekTujuanTransfer: '',
      pelunasanNominal: '',
      pelunasanKepemilikanCicilan: '',
      pelunasanSumberPelunasan: '',
    });

    const nextStep = () => {
      if (step.value < totalStep) step.value++;
    };

    const prevStep = () => {
      if (step.value > 1) step.value--;
    };

    const submitForm = () => {
      console.log('Submitted Data:', formData.value);
      // alert(JSON.stringify(formData.value, null, 2));

      setTimeout(() => {
        console.log("Pengajuan berhasil:", formData.value);
        router.push("/branchX-KSM/success"); // Navigasi ke halaman sukses
      }, 1000);
    };

    return { step, totalStep, formData, nextStep, prevStep, submitForm };
  }
};
</script>
