<template>
  <div>
    <h4 class="poppins-semibold text-lg md:text-xl text-center">Dokumen</h4>

    <!-- Kamera Swafoto -->
    <p class="poppins-regular">Swafoto</p>
    <div class="flex md:flex-row flex-col items-center space-x-9 space-y-5 items-start mt-1">
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <video ref="video" autoplay class="h-64 rounded-md"></video>
        <canvas ref="canvas" class="hidden"></canvas>
        <button @click="capturePhoto" class="bg-blue-500 text-white px-4 py-2 rounded md:mt-3">
          Ambil Foto
        </button>
      </div>
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <img v-if="formData.dokumenSwafoto" :src="formData.dokumenSwafoto" class="h-64 rounded-md"/>
      </div>
    </div>

    <!-- Input Dokumen Lainnya -->
    <BaseInput v-model="formData.dokumenNPWP" label="NPWP" type="file" placeholder="NPWP"/>
    <BaseInput v-model="formData.dokumenKTP" label="KTP Pemohon" type="file" placeholder="KTP"/>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import BaseInput from "./BaseInputComponent.vue";
import BaseSelect from "./BaseSelectComponent.vue";
import BaseRadio from "./BaseRadioComponent.vue";

export default {
  components: { BaseInput, BaseSelect, BaseRadio },
  props: {
    formData: Object
  },
  setup(props) {
    const video = ref(null);
    const canvas = ref(null);
    let stream = null;

    // Mengaktifkan kamera saat komponen dimount
    onMounted(async () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        video.value.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    });

    // Mematikan kamera saat komponen di-unmount
    onUnmounted(() => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    });

    // Fungsi untuk mengambil foto
    const capturePhoto = () => {
      const context = canvas.value.getContext("2d");
      canvas.value.width = video.value.videoWidth;
      canvas.value.height = video.value.videoHeight;
      context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
      
      // Simpan gambar dalam format Base64 ke dalam formData
      props.formData.dokumenSwafoto = canvas.value.toDataURL("image/png");
    };

    return { video, canvas, capturePhoto };
  }
};
</script>
