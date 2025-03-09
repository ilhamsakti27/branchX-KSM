<template>
  <footer class="bg-white dark:bg-gray-900 max-w-screen-xl px-4 mx-auto ">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid gap-8 px-4 lg:py-8 md:grid-cols-3 px-4 py-6 lg:px-8">
        <div class="">
          <h5 class="mb-2 text-sm poppins-medium text-black text-xl dark:text-white">KCP Jakarta Puri Kencana</h5>
          <ul class="text-[#9F9F9F] dark:text-gray-400 poppins-regular text-base">
            <li class="mb-1">
              <a href="https://maps.app.goo.gl/M33Xy64PaYULsWpQ6" target="_blank">
                Jl. Kencana Utama No.7, RT.7/RW.7, Kembangan Sel., Kec. Kembangan
              </a>
            </li>
            <li class="mb-1">
              Kota Jakarta Barat Jakarta 11610 Indonesia
            </li>
            <li class="mb-1">
              Phone: 14000, (021) 52997777
            </li>
            <!-- <li class="mb-1">
              Phone: 14000, +62-21-52997777
            </li>
            <li class="mb-1">
              Fax: +62-21-52997735
            </li>
            <li class="mb-1">
              SWIFT Code: BMRIIDJA
            </li> -->
          </ul>
        </div>

        <div class="">
          <h5 class="mb-2 text-sm poppins-medium text-black text-xl dark:text-white">Contact Us</h5>
          <ul class="text-[#9F9F9F] dark:text-gray-400 poppins-regular text-base">
            <li class="mb-1">
              <i class="fa fa-envelope">&nbsp;</i>
              <p class="inline-block ms-1">
                <a href="mailto:mandiricare@bankmandiri.co.id">
                  &nbsp;email
                </a>
              </p>
            </li>
            <li class="mb-1">
              <i class="fa fa-whatsapp">&nbsp;</i>
              <p class="inline-block ms-1">
                <a href="https://api.whatsapp.com/message/U2O4MD7G7CRMP1?autoload=1&amp;app_absent=0" target="_blank">
                  &nbsp;whatsapp
                </a>
              </p>
            </li>
            <li class="mb-1">
              <i class="fa fa-address-book">&nbsp;</i>
              <p class="inline-block ms-1">
                <a href="https://www.bankmandiri.co.id/en/kontak">&nbsp;hubungi kami</a>
              </p>
            </li>
            <li class="mb-1">
              <i class="fa fa-phone">&nbsp;</i>
              <p class="inline-block ms-1">
                <a href="tel:14000">&nbsp;mandiri call 14000</a>
              </p>
            </li>
          </ul>
        </div>

        <div class="">
          <ul class="text-[#9F9F9F] dark:text-gray-400 poppins-regular text-base">
            <li class="mb-1">
              <p>PT Bank Mandiri (Persero) Tbk. is licensed and supervised by the Indonesia Financial Service Authority (OJK) & Bank Indonesia (BI), And an insured member of Deposit Insurance Corporation (LPS)</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
    <FooterComponent />

  </footer>
</template>

<script setup>
import FooterComponent from './FooterComponent.vue';
</script>