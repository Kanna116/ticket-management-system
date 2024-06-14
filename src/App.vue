<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <!--  -->
      <h1 class="logo">WorkZone</h1>
      <ul class="nav-route-links">
        <RouterLink to="/" class="nav-link">
          <li>Home</li>
        </RouterLink>
        <RouterLink to="/tickets" class="nav-link">
          <li>Tickets</li>
        </RouterLink>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 250px;
  height: 100svh;
  background-color: white;
  position: fixed;
  left: 0px;
  top: 0px;
}
nav {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.logo {
  font-size: 24px;
  font-weight: 600;
}
.nav-route-links {
  margin-top: 50px;
}
.nav-link {
  text-decoration: none;
}
.nav-route-links li {
  width: 100%;
  padding: 10px 20px;
  background-color: #ccd5ae;
  color: black;
  margin-top: 10px;
  transition: all 200ms ease;
}
.nav-route-links li:active {
  width: 90%;
}
</style>
