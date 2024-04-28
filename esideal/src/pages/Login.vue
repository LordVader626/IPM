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

        <LoginError :modalActive="modalActive" @close="toggleModal">
            <img src="../assets/images/error.png" alt="Error" class="errorImg"/>

            <div v-if="loginBool" class="modal-content">
                <h1>Erro ao fazer login!</h1>
                <p>Nome ou Senha incorretos</p>
            </div>

            <div v-else class="modal-content">
                <h1>Erro ao fazer login!</h1>
                <p>Por favor tente novamente</p>
            </div>
        </LoginError>

    </div>
</template>

<script>
import axios from 'axios';
import LoginError from '../components/LoginError.vue';
import {ref} from 'vue';

export default {
    data() {
        return {
            loginBool: null,
            email: '',
            telefone: ''
        };
    },
    setup() {
        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;
        };

        return { modalActive, toggleModal };
    },

    components: {
        LoginError,
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
                    //alert("Email ou senha incorretos!");
                    this.loginBool = true
                    this.toggleModal();
                }
            } catch (error) {
                // Handle authentication errors
                console.error('Error logging in:', error);
                //alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
                this.loginBool = false
                this.toggleModal();
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

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.errorImg {
    display: flex;
    width: 50px; /* Adjust the size as needed */
    height: auto;
    margin-bottom: 20px; /* Add some space below the image */
}

</style>

