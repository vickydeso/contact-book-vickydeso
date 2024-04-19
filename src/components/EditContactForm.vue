<template>
    <div v-if="editedContact">
      <h2>Edit Contact</h2>
      <form @submit.prevent="submitForm">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="editedContact.firstName" required />
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="editedContact.lastName" required />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="editedContact.email" required />
        <!-- Add other contact fields here -->
        <button type="submit">Save Changes</button>
      </form>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { saveContacts, getContacts } from '../storage';
  
  export default {
    data() {
      return {
        editedContact: null,
      };
    },
    methods: {
        loadContact() {
        const contacts = getContacts();
        console.log('Contacts:', contacts);
        const contactId = this.$route.params.id;
        console.log('Contact ID:', contactId);
        if (contactId) {
            this.editedContact = contacts.find(contact => contact.id === contactId) || null;
        } else {
            console.error('Contact ID is undefined');
        }
        console.log('Edited Contact:', this.editedContact);
        },
      submitForm() {
        if (!this.editedContact) return; // Handle case where contact is not found
        const contacts = getContacts();
        const index = contacts.findIndex(contact => contact.id === this.editedContact.id);
        if (index !== -1) {
          contacts[index] = this.editedContact;
          saveContacts(contacts);
          this.$router.push(`/contact/${this.editedContact.id}`);
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
  