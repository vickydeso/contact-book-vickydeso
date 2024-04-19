<template>
    <div>
      <h1>Contact List</h1>
      <input type="text" v-model="searchQuery" placeholder="Search..." />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id" @click="showContactDetails(contact.id)">
          {{ contact.firstName }} {{ contact.lastName }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getContacts } from '../storage';
  
  export default {
    data() {
      return {
        contacts: [],
        searchQuery: '',
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter(contact =>
          contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      showContactDetails(id) {
        this.$router.push(`/contact/${id}`);
      },
      loadContacts() {
        this.contacts = getContacts();
      },
    },
    mounted() {
      this.loadContacts();
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  