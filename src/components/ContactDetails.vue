<template>
    <div>
      <h2>Contact Details</h2>
      <div v-if="contact">
        <p>First Name: {{ contact.firstName }}</p>
        <p>Last Name: {{ contact.lastName }}</p>
        <p>Email: {{ contact.email }}</p>
        <!-- Add other contact details here -->
        <button @click="editContact">Edit Contact</button>
        <button @click="deleteContact">Delete Contact</button>
      </div>
      <div v-else>
        <p>Contact not found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getContacts, saveContacts } from '../storage';
  
  export default {
    data() {
      return {
        contact: null,
      };
    },
    methods: {
      loadContact() {
        const contacts = getContacts();
        this.contact = contacts.find(contact => contact.id === this.$route.params.id);
      },
      editContact() {
        this.$router.push(`/edit/${this.contact.id}`);
      },
      deleteContact() {
        const contacts = getContacts();
        const index = contacts.findIndex(contact => contact.id === this.$route.params.id);
        if (index !== -1) {
          contacts.splice(index, 1);
          saveContacts(contacts);
          this.$router.push('/');
        }
      },
    },
    mounted() {
      this.loadContact();
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  