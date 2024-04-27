<template>
    <div class="recommendation-form">
      <h1 id="title">Nova Recomendação</h1>
      <!-- Recommendation form fields -->
      <div class="inputWindow">
        <input type="text" v-model="this.automovel" placeholder="Automóvel" required>
        <select v-model="newRecommendation.tipo" required>
          <option value="" disabled selected>Tipo de Serviço</option>
          <option value="gasolina">Gasolina</option>
          <option value="gasoleo">Gasóleo</option>
          <option value="eletrico">Elétrico</option>
          <option value="hibrido">Híbrido</option>
        </select>
        <input type="text" v-model="newRecommendation.nome" placeholder="Serviço" required>
        <input type="text" v-model="newRecommendation.prazo" placeholder="Prazo Recomendado" required>
        <input type="text" v-model="newRecommendation.descricao" id="descricao" placeholder="Descrição" required>
        <div>
          <!-- Submit and Cancel buttons -->
          <button @click="submitForm">Adicionar</button>
          <button @click="cancelForm">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        serviceId: '',
        automovel: '',
        newRecommendation: {
          tipo: "",
          nome: "",
          prazo: "",
          descricao: ""
        }
      };
    },
    methods: {
      fetchService(serviceId) {
            this.serviceId = serviceId;
            axios.get(`http://localhost:3002/services/${serviceId}`)
            .then(response => {
                console.log('Service Data:', response.data);
                // Check if the response contains data
                if (response.data) {
                  const service = response.data;
                  this.automovel = service.vehicleId;
                } else {
                  console.error('No data found for service ID:', serviceId);
                }
            })
            .catch(error => {
                console.error('Error fetching service data:', error);
            });
        },
      submitForm() {
        if (!service.recomendacoes){
          service.recomendacoes = []
        }
        service.recomendacoes.append(this.newRecommendation);

        this.newRecommendation = {
             tipo: "",
             nome: "",
             prazo: "",
             descricao: ""
         };
        // Navigate back to the main recommendation page
        this.$router.push(`/services/${this.serviceId}`); // /services/idServico
        
      },
      cancelForm() {
        if (window.confirm("Tem a certeza que deseja cancelar?")) {
          // Navigate back to the main recommendation page
          this.$router.push("/recommendations");
        }
      }
    },
    created() {
        const urlParts = window.location.href.split('/');
        const serviceId = urlParts[urlParts.length - 1];
        this.fetchService(serviceId);
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
  padding: 15px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 10%;
  width: 80%;
  text-align: center;
}

#descricao {
  height: 20%;
}

select {
  margin-bottom: 10px;
  padding: 15px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  width: 80%;
  height: 10%;
  text-align: center;
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
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--color-orange);
}

.inputWindow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-orange-light);
  height: 750px;
  width: 1000px;
  border-radius: 30px;
}

</style>
