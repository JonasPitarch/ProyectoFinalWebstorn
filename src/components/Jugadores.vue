<template>
  <br>
  <br>
  <br>
  <h1>Lista de Jugadores</h1>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Posición</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="jugador in jugadores" :key="jugador.id">
      <td>{{ jugador.id }}</td>
      <td>{{ jugador.nombre }}</td>
      <td>{{ jugador.posicion }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const jugadores = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:9090/futbol/jugadores');
    jugadores.value = response.data;
  } catch (error) {
    console.error('Error al obtener jugadores:', error);
  }
});
</script>

<style scoped>

</style>
