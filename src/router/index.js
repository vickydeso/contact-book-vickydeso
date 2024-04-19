// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactList from '../components/ContactList.vue';
import ContactDetails from '../components/ContactDetails.vue';
import NewContactForm from '../components/NewContactForm.vue';
import EditContactForm from '../components/EditContactForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/contact/:id', component: ContactDetails },
    { path: '/new', component: NewContactForm },
    { path: '/edit/:id', component: EditContactForm },
    // You can remove the default route '/' if it's not needed anymore
  ],
});

export default router;
