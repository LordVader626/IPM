<template>
    <nav id="nav">
        <h3>E.S.Ideal</h3>
        <div class="nav-items">
        <router-link to="/profile">Perfil</router-link>
        <router-link to="/services">Serviços</router-link>
        </div>
    </nav>
</template>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--color-orange);
}

a {
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    font-weight: 600;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    transition: all 0.3s ease-in;
}

a.router-link-active { /* Não sei o que é isto */
    background-color: var(--color-orange-dark);
    color: var(--color-orange-light);
}
</style>