<template>
  <div>
    <Form
      ref="form"
      @submit="onSubmit"
      method="post"
      class="flex flex-col gap-2"
    >
      <div>
        <label for="">Complete Name</label>
        <Field
          class="border border-dindz-primary focus:outline-none rounded-md w-full p-2"
          type="text"
          name="completeName"
          placeholder="Your Name"
          :rules="isRequired"
        />
        <ErrorMessage
          class="text-dindz-primary"
          name="completeName"
        />
      </div>
      <div>
        <label for="">Email</label>
        <Field
          class="border border-dindz-primary focus:outline-none rounded-md w-full p-2"
          type="email"
          name="email"
          placeholder="Your Valid Email"
          :rules="validateEmail"
        />
        <ErrorMessage
          class="text-dindz-primary"
          name="email"
        />
      </div>
      <div>
        <label for="">Message</label>
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
        <ErrorMessage
          class="text-dindz-primary"
          name="message"
        />
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
  export default {
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    methods: {
      onSubmit(values) {
        console.log(JSON.stringify(values, null, 2));
        // Email.send({
        //   Host: "smtp-relay.sendinblue.com",
        //   Username: "robah52@eqsaucege.com",
        //   Password: "phAXGmRDB5JaMb7T6",
        //   To: "dindoquitor@gmail.com",
        //   From: Email,
        //   Subject: "This is the subject",
        //   Body: "And this is the body",
        // }).then((message) => alert(message));
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

<style lang="scss" scoped></style>
