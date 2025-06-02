import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Import your HomeView component

const routes = [
  {
    path: '/', // This is the default route
    name: 'Home',
    component: HomeView, // This component will be rendered when the path is '/'
  },
  // You can add more routes here for other views:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/AboutView.vue') // Example of lazy loading
  // }
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode (e.g., example.com/about)
  routes, // Your defined routes
});

export default router;
