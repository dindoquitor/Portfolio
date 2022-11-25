<template>
  <form class="flex flex-col gap-5" ref="form" @submit.prevent="sendEmail">
    <div class="flex flex-col gap-2">
      <label>Name</label>
      <input
        @blur="v$.name.$touch"
        v-model="name"
        class="border border-dindz-primary focus:outline-none p-3 rounded-md"
        type="text"
        name="name"
      />
      <span class="text-dindz-primary font-thin text-sm" v-if="v$.name.$error"
        >Name Required</span
      >
    </div>

    <div class="flex flex-col gap-2">
      <label>Email</label>
      <input
        v-model="email"
        class="border border-dindz-primary focus:outline-none p-3 rounded-md"
        type="email"
        name="email"
        @blur="v$.email.$touch"
      />
      <span class="text-dindz-primary font-thin text-sm" v-if="v$.email.$error"
        >Email is required</span
      >
    </div>

    <div class="flex flex-col gap-2">
      <label>Message</label>
      <textarea
        @blur="v$.message.$touch"
        v-model="message"
        class="border border-dindz-primary focus:outline-none p-3 rounded-md"
        name="message"
      ></textarea>
      <span
        class="text-dindz-primary font-thin text-sm"
        v-if="v$.message.$error"
        >Message is required</span
      >
    </div>
    <button
      class="self-start bg-dindz-primary text-white font-medium font-Karla py-2 px-4 mt-3 rounded-md hover:border hover:border-dindz-primary hover:bg-white hover:text-dindz-primary cursor-pointer"
      type="submit"
    >
      Send
    </button>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      serviceID: import.meta.env.VITE_SERVICE_ID,
      templateID: import.meta.env.VITE_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
      name: "",
      email: "",
      message: "",
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      message: { required },
    };
  },
  methods: {
    async sendEmail() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        console.log("success sending");
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
        console.log("Email: " + this.email);
        console.log("name: " + this.name);
        console.log("Message: " + this.message);
      } else {
        console.log("Did not passed validation");
      }
    },
  },
};
</script>
