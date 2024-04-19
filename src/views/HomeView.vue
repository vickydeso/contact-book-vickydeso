<template>
  <div>
    <h1>Contact Book</h1>
    <!-- Add New Contact button with scroll functionality -->
    <button @click="scrollToNewContactForm">Add New Contact</button>
    <hr />
    <div>
      <!-- Render Contact List -->
      <ContactList />
    </div>
    <div id="contact-details">
      <!-- Render Contact Details -->
      <ContactDetails />
    </div>
    <div id="new-contact-form">
      <!-- Render New Contact Form -->
      <NewContactForm />
    </div>
    <div id="edit-contact-form">
      <!-- Render Edit Contact Form -->
      <EditContactForm />
    </div>
  </div>
</template>

<script>
// Import components
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import NewContactForm from '../components/NewContactForm.vue';
import EditContactForm from '../components/EditContactForm.vue';

export default {
  components: {
    // Register components
    ContactList,
    ContactDetails,
    NewContactForm,
    EditContactForm,
  },
  methods: {
    scrollToNewContactForm() {
      // Scroll to the "New Contact Form" section
      const newContactFormElement = document.getElementById('new-contact-form');
      if (newContactFormElement) {
        newContactFormElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
