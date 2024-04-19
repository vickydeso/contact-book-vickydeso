<template>
    <div class="contact-list">
      <h1>Contact List</h1>
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input" />
      <ul class="contact-items">
        <li v-for="contact in sortedContacts" :key="contact.id" @click="showContactDetails(contact.id)" class="contact-item">
          <div class="contact-info">
            <span class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</span>
            <span class="contact-email">{{ contact.email }}</span>
          </div>
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
      sortedContacts() {
        return this.contacts.slice().sort((a, b) => {
          const lastNameA = a.lastName.toLowerCase();
          const lastNameB = b.lastName.toLowerCase();
          if (lastNameA < lastNameB) return -1;
          if (lastNameA > lastNameB) return 1;
          return 0;
        });
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
    created() {
      this.loadContacts();
    },
  };
  </script>
  
  <style scoped>
  .contact-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .contact-items {
    list-style-type: none;
    padding: 0;
  }
  
  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .contact-item:hover {
    background-color: #e9e9e9;
  }
  
  .contact-name {
    font-weight: bold;
  }
  
  .contact-email {
    color: #666;
  }
  
  .delete-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .delete-button:hover {
    color: #ff5a5a;
  }
  </style>
  