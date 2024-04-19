<template>
    <div id="new-contact-form">
      <h2>New Contact</h2>
      <form @submit.prevent="submitForm">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" required />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <button type="submit">Save Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  import { saveContacts, getContacts } from '../storage';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',

      };
    },
    methods: {
      submitForm() {
        const contacts = getContacts();
        const newContact = {
          id: Date.now(),
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        };
        contacts.push(newContact);
        saveContacts(contacts);
        this.$router.push(`/contact/${newContact.id}`);
      },
    },
  };
  </script>
  
  <style>

  </style>
  