<template>
    <div class="layout">
        <div class="content">
            <h1 id="title">Lista de serviços</h1>
            <div class="table-wrapper">
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
        </div>
    </div>
</template>

<style scoped>

.layout {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - var(--navbar-height));
    width: 100%;
    padding: 20px 0;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.table-wrapper {
    width: 80%;
    max-height: 600px;
    overflow-y: auto; /* Makes the table scrollable */
    overflow-x: hidden;
    border: 1px solid black;
}

.customTable {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* Helps maintain column width consistency */
}

.customTable, .customTable th, .customTable td {
    border: 1px solid black;
}

.customTable th, .customTable td {
    padding: 16px;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 24px;
}

.customTable thead th {
    background-color: var(--color-orange);
    color: white;
    position: sticky;
    top: 0;
    z-index: 10;
}

.customTable tbody tr:nth-child(odd) { 
    background-color: var(--color-table-row-odd);
}

.customTable tbody tr:nth-child(even) {
    background-color: var(--color-table-row-even);
}

.customTable tbody tr:hover {
    background-color: #ddd;
}

#title {
    margin-bottom: 40px; /* Ensures there's space between title and table */
    font-size: 50px;
}

</style>