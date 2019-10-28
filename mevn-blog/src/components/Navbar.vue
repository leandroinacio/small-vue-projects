<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/signup">Signup</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login">Login</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
