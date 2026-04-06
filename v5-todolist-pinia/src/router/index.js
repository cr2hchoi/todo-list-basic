import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import TodoList from '@/pages/TodoList.vue';
import TodoAdd from '@/pages/TodoAdd.vue';
import TodoEdit from '@/pages/TodoEdit.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/todos' },
    // { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/todos', component: TodoList },
    { path: '/todos/add', component: TodoAdd },
    { path: '/todos/edit/:id', component: TodoEdit },
    { path: '/:path(.*)*', component: NotFound },
  ],
});

export default router;
