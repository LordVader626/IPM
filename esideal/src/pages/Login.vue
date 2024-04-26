<template>
    <div class="layout">
        <div class="card">
            <!-- Logo Mecanico -->
            <img src="../assets/images/mechanic.png" alt="Mechanic Logo" class="mecPic"/>
            <!-- Input Nome -->
            <input v-model="email" type="text" placeholder="Nome" class="input-field" @keyup.enter="login">
            <!-- Input Password -->
            <input v-model="telefone" type="password" placeholder="Password" class="input-field" @keyup.enter="login">
            <!-- Butão Login -->
            <button @click="login" class="login-button">Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            telefone: ''
        };
    },
    methods: {
        async login() {
            try {
                // Make an HTTP GET request to fetch clients
                const response = await axios.get('http://localhost:3002/clients');

                // Check if authentication is successful
                const client = response.data.find(client => client.email === this.email && client.telefone === this.telefone);

                if (client) {
                    // Redirect to services page if authentication succeeds
                    this.$router.push('/services');
                } else {
                    alert("Email ou senha incorretos!");
                }
            } catch (error) {
                // Handle authentication errors
                console.error('Error logging in:', error);
                alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
            }
        }
    }
};
</script>




<style scoped>

.layout {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - var(--navbar-height));
    padding: 20px 0;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 750px;
    background-color: var(--color-orange-light);
    border-radius: 30px;
}

.mecPic {
    width: 170px;
    height: 170px;
    margin-bottom: 50px;
}

.input-field {
    width: 80%;
    padding: 20px;
    margin: 20px 0;
    background-color: white;
    border-radius: 20px;
    border: none;
    font-size: 32px;
    text-align: center;
}

.login-button {
    width: 80%;
    padding: 20px;
    background-color: var(--color-button-blue);
    color: white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 40px;
    border: none;
    margin-top: 50px;
}
</style>

