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

