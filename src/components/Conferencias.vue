<template>
  <br>
  <br>
  <br>
  <h1>Lista de Conferencias</h1>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="conferencia in conferencias" :key="conferencia.id">
      <td>{{ conferencia.id }}</td>
      <td>{{ conferencia.nom }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const conferencias = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:9090/futbol/conferencias');
    conferencias.value = response.data;
  } catch (error) {
    console.error('Error al obtener conferencias:', error);
  }
});
</script>

<style scoped>
</style>
