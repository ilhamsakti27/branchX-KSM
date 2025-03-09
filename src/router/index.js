import { createRouter, createWebHistory  } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormView from '../views/FormView.vue';
import SuccessView from '../views/SuccessfulUnsecuredLoanApplication.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/branchX-KSM',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/branchX-KSM/form',
    name: 'Form',
    component: FormView
  },
  {
    path: '/branchX-KSM/success',
    name: 'Succes',
    component: SuccessView
  }
];

const router = createRouter({
  history: createWebHistory (),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  }
});

export default router;
