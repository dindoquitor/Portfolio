<template>
  <form class="flex flex-col" ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input
      class="border border-dindz-primary focus:outline-none p-3 rounded-md"
      type="text"
      name="user_name"
    />
    <label>Email</label>
    <input
      class="border border-dindz-primary focus:outline-none p-3 rounded-md"
      type="email"
      name="user_email"
    />
    <label>Message</label>
    <textarea
      class="border border-dindz-primary focus:outline-none p-3 rounded-md"
      name="message"
    ></textarea>
    <input
      class="self-start bg-dindz-primary text-white font-medium font-Karla py-2 px-4 mt-3 rounded-md hover:border hover:border-dindz-primary hover:bg-white hover:text-dindz-primary cursor-pointer"
      type="submit"
      value="Send"
    />
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      serviceID: import.meta.env.VITE_SERVICE_ID,
      templateID: import.meta.env.VITE_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          this.serviceID,
          this.templateID,
          this.$refs.form,
          this.publicKey
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
