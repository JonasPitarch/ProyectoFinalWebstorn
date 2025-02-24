<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const equipos = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:9090/futbol/equipos');
    equipos.value = response.data;
  } catch (error) {
    console.error('Error al obtener equipos:', error);
  }
});
</script>

<template>
  <br>
  <br>
  <br>
  <h1>Lista de Equipos</h1>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Trofeos</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="equipo in equipos" :key="equipo.id">
      <td>{{ equipo.id }}</td>
      <td>{{ equipo.nom }}</td>
      <td>{{ equipo.trofeos }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
