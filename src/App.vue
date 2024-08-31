<template>
  <div id="app">
    <!-- Header -->
    <header class="d-center">
      <router-link ro="/">
        <img src="@/assets/logo.svg" alt="" @click="clearLocalStorage">
      </router-link>
      <nav>
        <router-link to="/" :class="{ active: $route.name === 'FormPage' }">
          Форма
        </router-link>
        <router-link to="/preview" :class="{ active: $route.name === 'Preview' }">
          Превью
        </router-link>
      </nav>
    </header>

    <!-- Main content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="d-column d-center">
      <p>all rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    clearLocalStorage() {
      localStorage.removeItem('formData');
      localStorage.removeItem('lastUpdated');

      this.$router.push('/');
    },
  },
};
</script>

<style>
header {
  justify-content: center;
  padding: 22px 0;
  border-bottom: 1px solid var(--vt-c-white-mute);
}

footer {
  background: var(--vt-c-white-mute);
  padding: 30px 0;
}

nav {

  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

nav a {
  text-decoration: none;
  color: var(--vt-c-black-soft);

}

nav a.active {
  font-weight: bold;
  color: #42b983;
}

main {
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
}
</style>
