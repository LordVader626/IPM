<template>
    <div class="recommendation-form">
      <h1 id="title">Nova Recomendação</h1>
      <!-- Recommendation form fields -->
      <input type="text" v-model="newRecommendation.automovel" placeholder="Automóvel" required>
      <input type="text" v-model="newRecommendation.tipo" placeholder="Tipo de Serviço" required>
      <input type="text" v-model="newRecommendation.nome" placeholder="Serviço" required>
      <input type="text" v-model="newRecommendation.estado" placeholder="Estado" required>
      <input type="text" v-model="newRecommendation.prazo" placeholder="Prazo" required>
      <input type="text" v-model="newRecommendation.duracao" placeholder="Duração" required>
      <div>
        <!-- Submit and Cancel buttons -->
        <button @click="submitForm">Adicionar</button>
        <button @click="cancelForm">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newRecommendation: {
          automovel: "",
          tipo: "",
          nome: "",
          estado: "",
          prazo: "",
          duracao: ""
        }
      };
    },
    methods: {
      submitForm() {
        // Emit an event with the new recommendation data
        this.$emit("add-recommendation", this.newRecommendation);
        this.newRecommendation = {
            automovel: "",
             tipo: "",
             nome: "",
             estado: "",
             prazo: "",
             duracao: ""
         };
        // Navigate back to the main recommendation page
        this.$router.push("/recommendations");
        
      },
      cancelForm() {
        if (window.confirm("Tem a certeza que deseja cancelar?")) {
          // Navigate back to the main recommendation page
          this.$router.push("/recommendations");
        }
      }
    }
  };
  </script>
  

<style scoped>
.recommendation-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title {
  margin-bottom: 40px;
  font-size: 50px;
}

input[type="text"] {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px 30px;
  background-color: var(--color-button-blue);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.5s ease; /* Smooth transition effect */
}

button:hover {
  background-color: var(--color-orange); /* Change to orange on hover */
}

</style>
