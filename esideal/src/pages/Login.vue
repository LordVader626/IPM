<template>
    <div class="layout">
        <div class="card">
            <!-- Logo Mecanico -->
            <img src="../assets/images/mechanic.png" alt="Mechanic Logo" class="mecPic"/>
            <!-- Input Nome -->
            <input type="text" placeholder="Nome" class="input-field">
            <!-- Input Password -->
            <input type="password" placeholder="Password" class="input-field">
            <!-- Butão Login -->
            <button class="login-button">Login</button>
        </div>
    </div>
</template>

<style scoped>

.layout{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh; /* Ter em conta a Navbar */
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 500px;
    background-color: var(--color-orange-light);
    border-radius: 30px;
}

.mecPic {
    width: 85px;
    height: 85px;
    margin-bottom: 50px;
}

.input-field {
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    background-color: white;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    text-align: center;
}

.login-button {
    width: 80%;
    padding: 15px;
    background-color: var(--color-button-blue);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    border: none;
    margin-top: 30px;
}

</style>

