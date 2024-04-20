<template>
    <div class="page">
        <h1 id="nomeServiço">Limpeza interior</h1>
        <div class="informationCards">
            <div class="clientInformation">
                <h3>Informações do veículo</h3>
                <p><b>Marca: </b>Hyundai</p>
                <p><b>Modelo: </b>Getz</p>
                <p><b>Matrícula: </b>24-91-ZD</p>
                <p><b>Motor: </b>Combustão</p>
                <p><b>Cilindrada: </b>1086 cc</p>
                <p><b>Carregador: </b>Não aplicável</p>
                <p><b>Kilómetros: </b>216000 km</p>
                <p><b>Serviços anteriores:</b></p>
            </div>
            <div class="rightSide">
                <div class="serviceInformation">
                    <h3>Informações do serviço</h3>
                    <p><b>Prazo: </b>21/04/2024 16:15</p>
                    <p><b>Duração: </b>120 minutos</p>
                    <p><b>Estado: </b>Fila de Espera</p>
                    <p><b>Descrição: </b>Atenção especial ao banco do passageiro.</p>
                </div>
                <button type="button" class="button">Iniciar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#nomeServiço {
    margin: 0;
    padding: 40px;
    font-size: 50px;
}

.informationCards {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.clientInformation {
    width: 700px;
    height: 650px;
    background-color: var(--color-orange-light);
    border-radius: 20px;
}

h3 {
    font-size: 32px;
}

p {
    font-size: 22px;
}

.rightSide {
    width: 700px;
    height: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.serviceInformation {
    width: 700px;
    height: 525px;
    background-color: var(--color-orange-light);
    border-radius: 20px;
}

.button {
    padding: 20px 40px;
    background-color: var(--color-button-blue);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 32px;
    margin-bottom: 10px;
}

</style>