<script>
import { RouterLink } from "vue-router";
import HomeSlider from "../components/HomeSlider.vue";
import CardContent from "../components/CardContent.vue";
import { ref } from "vue";
import Forms from "../components/Forms.vue";
export default {
  components: {
    HomeSlider,
    CardContent,
    Forms,
  },
};
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
    <div class="container text-center pt-20 pb-10">
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
    <div class="container flex items-center gap-10 justify-between py-10">
      <div class="max-w-[40%]">
        <p class="font-karla font-semibold text-dindz-primary text-lg pb-5">
          About Us
        </p>
        <h2 class="font-bold text-3xl text-dindz-primary font-Prompt">
          We Focus on principles of professionalism, responsiveness &amp;
          quality
        </h2>
        <p class="font-karla text-lg text-dindz-text font-normal pt-5">
          DQuitor Accounting provides exceptional service to our clients as a
          result of our commitment to three fundamental principles.
        </p>
        <p class="font-karla text-lg text-dindz-text font-normal pt-5">
          We provide total financial services to individuals, large and small
          businesses, and other agencies. Through hard work, we have earned the
          respect of the business and financial communities. This respect
          illustrates our diverse talents, dedication, and ability to respond
          quickly. To see a listing of our services, please take a moment and
          look at our services page.
        </p>
      </div>
      <div class="max-w-[60%] flex items-end justify-center">
        <HomeSlider />
      </div>
    </div>
    <section id="services" class="container">
      <p class="text-base font-Karla text-dindz-primary">
        Dquitor Accounting Services
      </p>
      <div class="flex items-start gap-24 justify-between pt-4 pb-4">
        <div class="max-w-[35%]">
          <card-content
            title-H1="Serving over 250 Clients"
            description="As a business owner, you put in long hours every single day to see your company succeed. You are juggling a lot of responsibilities, whether it is managing your staff, directing your company’s day-to-day operations, or coming up with new ideas. You don’t have much spare time to deal with the financial aspects of your business. Is it possible that you’re not optimizing your earnings even if your cash flow is strong? Are you on track with your expected tax payments? Payroll or sales and use tax compliance with federal and state laws is essential."
          />
          <Forms />
        </div>
        <div class="max-w-[65%] flex gap-10 justify-between">
          <div class="grid grid-cols-2 gap-6">
            <card-content
              title="Small Business Accounting"
              description="As a small business owner, you have more essential things to worry about than keeping track of your financial records. I will take care of your accounting needs so that you can get back to the business of running it and creating profits."
            />
            <card-content
              title="Part-Time CFO Services"
              description="Using our CFO Service, you may benefit from the expertise of a professional financial manager who will collaborate with you to drive your company to success."
            />
            <card-content
              title="Part-Time CFO Services"
              description="Using our CFO Service, you may benefit from the expertise of a professional financial manager who will collaborate with you to drive your company to success."
            />

            <card-content
              title="QuickBooks Services"
              description="There’s a reason QuickBooks is the most popular accounting software for small businesses. QuickBooks setup and training will allow you to put this powerful software to work for you."
            />
            <card-content
              title="Cash Flow Management"
              description="A cash crisis can be extremely stressful on an emotional level. It can potentially be fatal to your company’s operations. Permitting me to prepare a cash flow prediction for you is the first step in avoiding a cash crunch."
            />
            <card-content
              title="Internal Controls"
              description="Internal control systems are evaluated to determine the efficiency and efficacy of your operational methods, after which we give recommendations to assist your business to become more successful."
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
