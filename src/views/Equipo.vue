<template>
  <div class="container">
    <h1 class="titulo">Bienvenido a la NFL</h1>
    <div class="links">
      <RouterLink to="/equipos" class="button">Ver Equipos</RouterLink>
      <RouterLink to="/jugadores" class="button">Ver Jugadores</RouterLink>
      <RouterLink to="/conferencias" class="button">Ver Conferencias</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Contenedor principal */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Toda la pantalla */
  background: linear-gradient(135deg, #2c3e50, #34495e); /* Degradado oscuro */
  color: white;
  text-align: center;
}

/* Estilo del título */
.titulo {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ecf0f1; /* Blanco suave */
  font-family: 'Arial', sans-serif;
}

/* Contenedor de los enlaces */
.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilo para los botones de los enlaces */
.button {
  background-color: #1abc9c; /* Fondo verde brillante */
  color: white;
  font-size: 20px;
  padding: 15px 25px;
  border-radius: 30px; /* Bordes redondeados */
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease; /* Efecto de transición suave */
  width: 200px; /* Tamaño fijo de los botones */
  margin: 0 auto; /* Centrar los enlaces */
}

.button:hover {
  background-color: #16a085; /* Fondo más oscuro cuando se pasa el ratón */
  transform: translateY(-5px); /* Levantar el botón */
}

.button:active {
  background-color: #1e7e68; /* Fondo aún más oscuro al hacer clic */
  transform: translateY(2px); /* Desplazamiento hacia abajo al hacer clic */
}
</style>
