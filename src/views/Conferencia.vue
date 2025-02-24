<template>
  <br>
  <br>
  <br>
  <div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      conferencias: []
    };
  },
  mounted() {
    axios.get('http://localhost:9090/futbol/conferencias') // Aquí debes reemplazar con la URL de tu API
      .then(res => {
        this.conferencias = res.data;
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error al obtener conferencias:', error);
      });
  }
};
</script>

<style scoped>
</style>
