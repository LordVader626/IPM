<template>
    <nav id="nav">
        <div class="logo">
            <!-- Foto do pistão -->
            <img src="../assets/images/piston.png" id="piston"/>
            <h3 id="nome">E.S.Ideal</h3>
        </div>
        <div class="nav-items">
            <router-link v-if="!isLoginRoute" to="/services">Serviços</router-link>
            <router-link v-if="!isLoginRoute" to="/login">Logout</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    // Computed property to check if the current route is /login
    isLoginRoute() {
      return this.$route.path === '/login';
    }
  }
}
</script>


<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--color-orange);
    height: var(--navbar-height);
}

.logo {
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
}

#nome {
    font-family: 'Lobster', cursive;
    font-size: 65px;
    line-height: 50px;
    font-weight: lighter;
    color: white;
    position: absolute;
    bottom: 0;
    margin: 0;
    z-index: 2;
    width: 100%;
}

#piston {
    height: 100%;
    position: absolute;
    z-index: 1;
}

a {
    text-decoration: none;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    transition: all 0.3s ease-in;
    align-items: center;
    min-height: 0; 
    max-height: 100%;
}

a.router-link-active {
    background-color: var(--color-orange-dark);
    color: white;
}
</style>