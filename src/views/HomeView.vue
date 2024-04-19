<template>
  <div>
    <h1>Contact Book</h1>
    <router-link to="/new">Add New Contact</router-link>
    <hr />
    <div>
      <!-- Render Contact List -->
      <ContactList />
    </div>
    <div>
      <!-- Render Contact Details -->
      <ContactDetails />
    </div>
    <div>
      <!-- Render New Contact Form -->
      <NewContactForm />
    </div>
    <div>
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
};
</script>

<style>
/* Add your styles here */
</style>
