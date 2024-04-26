<template>
  <div class="layout">
    <div class="content">
      <h1 id="title">Recomendações</h1>
      <!-- Table content -->
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
            <tr v-for="recommendation in recommendations" :key="recommendation.id">
              <td>{{ recommendation.automovel }}</td>
              <td>{{ recommendation.tipo }}</td>
              <td>{{ recommendation.nome }}</td>
              <td>{{ recommendation.estado }}</td>
              <td>{{ recommendation.prazo }}</td>
              <td>{{ recommendation.duracao }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Include RecommendationForm.vue as a child component -->
      <RecommendationForm @add-recommendation="handleAddRecommendation" />
    </div>
  </div>
</template>

<script>
import RecommendationForm from './RecommendationForm.vue';

export default {
  components: {
    RecommendationForm
  },
  data() {
    return {
      recommendations: [
        { id: 1, automovel: "Model YZ", tipo: "Universal", nome: "Troca de óleo", estado: "Agendado", prazo: "24/04/2024", duracao: "3 horas" },
        { id: 2, automovel: "Model XYZ", tipo: "Elétrico", nome: "Troca de óleo", estado: "Agendado", prazo: "24/04/2024", duracao: "3 horas" }
        // Add more recommendations as needed
      ]
    };
  },
  methods: {
    // Method to handle the emitted event from RecommendationForm
    handleAddRecommendation(recommendation) {
      // Add the new recommendation to the recommendations array
      this.recommendations.push({
        id: this.recommendations.length + 1,
        ...recommendation
      });
      // Optionally, you can also navigate to the main recommendation page
      this.$router.push("/recommendations");
    }
  }
};
</script>



<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Align items with space between them */
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
    flex-grow: 1; /* Allow content to grow vertically */
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
.button {
    padding: 20px 40px;
    background-color: var(--color-button-blue);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 32px;
    margin-bottom: 10px;
    margin-right: 25px;
    margin-top: 50px;
}

#button-orange {
    background-color:  var(--color-orange); /* Orange background color */
    color: white; /* White text color */
    /* Add any other styles specific to the button with the ID "button-remover" here */
}

</style>