<template>
  <div>
    <Form ref="form" @submit="onSubmit" class="flex flex-col gap-3">
      <div>
        <label class="text-dindz-text font-Karla font-medium text-lg"
          >Complete Name <span class="text-red-600">*</span></label
        >
        <Field
          class="border border-dindz-primary focus:outline-none rounded-md w-full p-2"
          type="text"
          name="completeName"
          placeholder="Your Name"
          :rules="isRequired"
        />
        <ErrorMessage class="text-dindz-primary" name="completeName" />
      </div>
      <div>
        <label class="text-dindz-text font-Karla font-medium text-lg"
          >Email <span class="text-red-600">*</span></label
        >
        <Field
          class="border border-dindz-primary focus:outline-none rounded-md w-full p-2"
          type="email"
          name="email"
          placeholder="Your Valid Email"
          :rules="validateEmail"
        />
        <ErrorMessage class="text-dindz-primary" name="email" />
      </div>
      <div>
        <label class="text-dindz-text font-Karla font-medium text-lg"
          >Message <span class="text-red-600">*</span></label
        >
        <Field
          as="textarea"
          class="border border-dindz-primary focus:outline-none rounded-md w-full p-2"
          type="text"
          name="message"
          placeholder="Type your message here..."
          col="30"
          rows="3"
          :rules="isRequired"
        />
        <ErrorMessage class="text-dindz-primary" name="message" />
      </div>

      <button
        class="bg-dindz-primary py-3 px-6 rounded-md border border-dindz-primary self-start text-white font-semibold hover:bg-white hover:border hover:border-dindz-primary hover:text-dindz-primary"
        type="submit"
      >
        Send
      </button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import emailjs from "@emailjs/browser";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      serviceID: import.meta.env.VITE_SERVICE_ID,
      templateID: import.meta.env.VITE_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    };
  },
  methods: {
    onSubmit(values) {
      emailjs
        .sendForm(
          this.serviceID,
          this.templateID,
          this.$refs.form,
          this.publicKey
        )
        .then(
          (result) => {
            console.log("SUCCESS", result.text);
          },
          (error) => {
            console.log("FAILED", error.text);
          }
        );
      // console.log(JSON.stringify(values, null, 2));
      // console.log(values.completeName);
      // console.log(values.email);
      // console.log(values.message);
      console.log(this.serviceID);
      console.log(this.templateID);
      console.log(this.publicKey);
      this.$refs.form.resetForm();
    },
    isRequired(value) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "This field should not be empty.";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must contain a valid email.";
      }
      return true;
    },
  },
};
</script>
