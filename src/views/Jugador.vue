<template>
  <br>
  <br>
  <br>
  <div>
    <h1>Lista de Jugadores</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Posición</th>
        <th>Imagen</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="jugador in jugadores" :key="jugador.id">
        <td>{{ jugador.id }}</td>
        <td>{{ jugador.nombre }}</td>
        <td>{{ jugador.posicion }}</td>
        <td>
          <img :src="jugador.imagen.back_default" alt="Imagen del jugador" />
        </td>
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
      jugadores: []
    };
  },
  mounted() {
    axios.get('http://localhost:9090/futbol/jugadores')
      .then(res => {
        this.jugadores = res.data;
        console.log(res.data);
      })
  }
};
</script>
