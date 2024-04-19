<template>
    <div class="content">
        <h1>Serviços</h1>
        <table class="customTable">
            <thead>
                <tr>
                    <th>Automóvel</th>
                    <th>Tipo de Serviço</th>
                    <th>Serviço</th>
                    <th>Estado</th>
                    <th>Prazo</th>
                    <th>Duração</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
                <tr>
                    <td>Model XYZ</td>
                    <td>Universal</td>
                    <td>Troca de óleo</td>
                    <td>Agendado</td>
                    <td>24/04/2024</td>
                    <td>3 horas</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.customTable {
    width: 80%;
    border-collapse: collapse;
}

.customTable, .customTable th, .customTable td {
    border: 1px solid black; 
}

.customTable th, .customTable td {
    padding: 8px; 
    text-align: center;
}

.customTable thead th {
    background-color: var(--color-orange); 
    color: white;
}

.customTable tbody tr:nth-child(odd) { 
    background-color: #f9f9f9; 
}

.customTable tbody tr:nth-child(even) {
    background-color: #e9e9e9;
}

.customTable tbody tr:hover {
    background-color: #ddd;
}
</style>