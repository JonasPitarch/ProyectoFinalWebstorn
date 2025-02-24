import { createRouter, createWebHistory } from 'vue-router';
import Equipo from '../views/Equipo.vue';
import Equipos from '../components/EquipoLista.vue';
import Jugadores from '../views/Jugador.vue';
import Conferencias from '@/components/Conferencias.vue'

const routes = [
  { path: '/', component: Equipo },
  { path: '/equipos', component: Equipos },
  { path: '/jugadores', component: Jugadores },
  { path: '/conferencias', component: Conferencias }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
