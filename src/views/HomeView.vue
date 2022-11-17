<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div
      class="bg-[url('/src/assets/images/DQuitor_Accounting_background.png')] bg-center bg-no-repeat bg-cover min-h-screen relative"
    >
      <div
        class="absolute bg-dindz-primary w-full h-full top-0 left-0 opacity-50"
      ></div>
      <div class="container text-white pt-20 relative z-10">
        <div class="w-[60%]">
          <h1 class="font-bold text-[70px] leading-[80px] font-Prompt">
            Accounting Services Customized to Fit Your Needs
          </h1>
          <p class="font-karla text-lg font-bold mt-8">
            DQuitor Accounting services extend beyond transaction posting and
            recording. We are committed to ensuring that our accounting services
            are oriented toward the needs of your organization.
          </p>
        </div>
        <div class="mt-8 flex gap-8">
          <RouterLink :to="{ name: 'services' }"
            ><button
              class="px-6 py-3 bg-white text-dindz-primary rounded-md font-semibold uppercase text-base hover:bg-dindz-primary hover:text-white duration-500"
            >
              View Services
            </button></RouterLink
          ><a
            href="https://calendly.com/dquitoraccounting/30min"
            target="_blank"
            rel="noopener noreferrer"
            ><button
              class="px-6 py-3 bg-white text-dindz-primary rounded-md font-semibold uppercase text-base hover:bg-dindz-primary hover:text-white duration-500"
            >
              Book Appointment
            </button></a
          >
        </div>
      </div>
    </div>
    <div class="container text-center py-20">
      <h2
        class="text-dindz-primary font-Prompt font-bold text-5xl leading-[60px] pb-3"
      >
        Team Up with Real Expert
      </h2>
      <p class="font-normal text-dindz-text text-lg max-w-[80%] mx-auto">
        We are an established accounting firm committed to the three fundamental
        principles of professionalism, timeliness, and excellence.
      </p>
    </div>
  </main>
</template>
