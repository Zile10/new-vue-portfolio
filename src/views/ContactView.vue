<template>
  <div class="contact-page">
    <h1 class="contact-page__title">Contact Me</h1>
    <div class="contact-form-container">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name" :class="{'form-label-active': name}">Your Name</label>
          <input type="text" id="name" v-model="name" class="form-input" />
        </div>
        <div class="form-group">
          <label for="email" :class="{'form-label-active': email}">Email Address</label>
          <input type="email" id="email" v-model="email" class="form-input" />
        </div>
        <div class="form-group">
          <label for="message" :class="{'form-label-active': message}">Your Message</label>
          <textarea id="message" v-model="message" class="form-textarea"></textarea>
        </div>
        <button type="submit" class="form-submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
    }
  }
};
</script>

<style lang="scss">
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
}

.contact-page__title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  animation: fadeInDown 1s ease-in-out;
}

.contact-form-container {
  width: 80%;
  max-width: 600px;
}

.contact-form {
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: #555;
  font-weight: bold;
  transition: color 0.3s;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.8rem;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}

.form-label-active {
  color: #ff6a00;
}

.form-input:focus,
.form-input:not(:placeholder-shown),
.form-textarea:focus,
.form-textarea:not(:placeholder-shown) {
  outline: none;
  border-color: #333;
  background-color: #fff;
  color: #333;
}

.form-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
}

.form-submit:hover {
  background-color: #0056b3;
}

.form-submit:active {
  transform: translateY(1px);
}
</style>
