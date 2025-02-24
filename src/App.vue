<template>
  <nav>
    <div class="nav-container">
      <RouterLink to="/" class="nav-link">Inicio</RouterLink>
      <RouterLink to="/equipos" class="nav-link">Equipos</RouterLink>
      <RouterLink to="/jugadores" class="nav-link">Jugadores</RouterLink>
      <RouterLink to="/conferencias" class="nav-link">Conferencias</RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
/* Barra de navegación */
nav {
  background-color: #2d3748; /* Color de fondo oscuro */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  position: sticky; /* Fija la barra en la parte superior */
  top: 0;
  z-index: 100;
}

/* Contenedor principal */
.nav-container {
  max-width: 1200px; /* Limitar el ancho */
  margin: 0 auto; /* Centrado automático */
  display: flex;
  justify-content: space-between; /* Espacio entre los enlaces */
  align-items: center; /* Alineación vertical */
}

/* Estilo para los enlaces de navegación */
.nav-link {
  color: #f7fafc; /* Blanco suave */
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase; /* Todo en mayúsculas */
  letter-spacing: 1px; /* Espaciado entre letras */
  padding: 12px 20px;
  border-radius: 5px;
  transition: all 0.3s ease; /* Animación suave al pasar el mouse */
}

.nav-link:hover {
  background-color: #4a5568; /* Fondo gris suave cuando pasa el mouse */
  color: #e2e8f0; /* Color más claro */
  transform: translateY(-2px); /* Levantar el enlace */
}

.nav-link:active {
  background-color: #2d3748; /* Fondo oscuro cuando se hace clic */
  transform: translateY(1px); /* Desplazamiento hacia abajo al hacer clic */
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column; /* Apilar los enlaces en pantallas pequeñas */
    align-items: flex-start; /* Alinear los enlaces hacia la izquierda */
  }

  .nav-link {
    margin-bottom: 10px; /* Separación entre los enlaces */
    font-size: 18px; /* Aumentar tamaño de la fuente */
    padding: 15px 25px; /* Espaciado más amplio */
  }
}
</style>
