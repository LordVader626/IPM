<template>
    <div class="page">
        <h1 id="nomeServiço">Limpeza interior</h1>
        <div class="informationCards">
            <div class="clientInformation">
                <h3>Página de Serviço</h3>
                <p><b>Matricula: </b>{{ service.vehicleId }}</p>
                <p><b>Motor: </b>{{ service.vehicleTypeId }}</p>
                <p><b>Cilindrada: </b>{{ service.cilindrada }}</p>
                <p><b>Kilometros: </b>{{ service.kms }}</p>
            </div>
            
            <div class="rightSide">
                <div class="serviceInformation">
                    <h3>Informações do serviço</h3>
                    <p><b>Prazo: </b>{{ service.agendamento }}</p>
                    <p><b>Duração: </b>{{ service.duração }} minutos</p>
                    <p><b>Estado: </b>{{ service.estado }}</p>
                    <p><b>Descrição: </b>{{ service.descr }}</p>
                </div>
                
                <div class="button-container">
                    <!-- Buttons -->
                    <button v-if="serviceState === 'pending'" @click="confirmStartService" class="button">Iniciar</button>
                    <button v-if="serviceState === 'pending'" id="button-orange" type="button" class="button">Remover</button>
                    <button v-if="serviceState === 'started'" @click="confirmSuspendService" class="button">Suspender</button>
                    <button v-if="serviceState === 'started'" @click="confirmFinishService" id="button-orange" class="button">Terminar</button>
                </div>                 
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        serviceId: 's',
        service: {}, // Define a single service object to store the data for the selected service
        serviceDefinitions: {}, // Define an empty object to store service definitions
        vehicleId: {},
        serviceState: 'pending', // Initialize service state
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
                // Filter out services with estado "realizado"
                const service = response.data;
                if (service.estado !== 'realizado') {
                    // Assign data to component properties
                    this.service = {
                    id: service.id,
                    vehicleId: service.vehicleId,
                    servicedefinitionId: service.servicedefinitionId,
                    estado: service.estado,
                    agendamento: service.agendamento,
                    
                    };
                    // Fetch service duration and description
                    this.fetchServiceDuration(service.servicedefinitionId);
                    this.fetchServiceDescription(service.servicedefinitionId);
                    this.fetchVehicleMotor(service.vehicleId);
                    this.fetchVehicleCilindrada(service.vehicleId);
                    this.fetchVehicleKms(service.vehicleId);
                } else {
                    console.error('Service has been completed:', service);
                }
                } else {
                console.error('No data found for service ID:', serviceId);
                }
            })
            .catch(error => {
                console.error('Error fetching service data:', error);
            });
        },

        fetchServiceDuration(servicedefinitionId) {
            axios.get(`http://localhost:3002/service-definitions/${servicedefinitionId}`)
            .then(response => {
                console.log('Service Duration Response:', response);
                if (response.data) {
                // Assign duração to the corresponding service
                this.service.duração = response.data.duração;
                } else {
                console.error(`No service duration found for servicedefinitionId: ${servicedefinitionId}`);
                }
            })
            .catch(error => {
                console.error('Error fetching service duration:', error);
            });
        },

        fetchServiceDescription(servicedefinitionId) {
            axios.get(`http://localhost:3002/service-definitions/${servicedefinitionId}`)
            .then(response => {
                console.log('Service Description Response:', response);
                if (response.data) {
                // Assign description to the corresponding service
                this.service.descr = response.data.descr;
                } else {
                console.error(`No service description found for servicedefinitionId: ${servicedefinitionId}`);
                }
            })
            .catch(error => {
                console.error('Error fetching service description:', error);
            });
        
        },
        fetchVehicleMotor(vehicleId) {
            axios.get(`http://localhost:3002/vehicles/${vehicleId}`)
            .then(response => {
                console.log('Service Vehicle Type Response:', response);
                if (response.data) {
                    // Assuming the response contains a property named vehicleTypeId
                    this.service.vehicleTypeId = response.data.vehicleTypeId;
                } else {
                    console.error(`No vehicle data found for vehicleId: ${vehicleId}`);
                }
            })
            .catch(error => {
                console.error('Error fetching vehicle data:', error);
            });
        },
        fetchVehicleCilindrada(vehicleId) {
            axios.get(`http://localhost:3002/vehicles/${vehicleId}`)
            .then(response => {
                console.log('Service Vehicle Type Response:', response);
                if (response.data) {
                    // Assuming the response contains a property named vehicleTypeId
                    this.service.cilindrada = response.data.cilindrada;
                } else {
                    console.error(`No vehicle data found for vehicleId: ${vehicleId}`);
                }
            })
            .catch(error => {
                console.error('Error fetching vehicle data:', error);
            });
        },
        fetchVehicleKms(vehicleId) {
            axios.get(`http://localhost:3002/vehicles/${vehicleId}`)
            .then(response => {
                console.log('Service Vehicle Type Response:', response);
                if (response.data) {
                    // Assuming the response contains a property named vehicleTypeId
                    this.service.kms = response.data.kms;
                } else {
                    console.error(`No vehicle data found for vehicleId: ${vehicleId}`);
                }
            })
            .catch(error => {
                console.error('Error fetching vehicle data:', error);
            });
        },
        confirmStartService() {
            const confirmed = window.confirm("Tem a certeza que deseja iniciar este serviço?");
            if (confirmed) {                
                this.serviceState = 'started'; // Update service state to 'started'
                alert("Serviço iniciado com sucesso!");
            } else {                
                alert("Operação cancelada.");
            }
        },
        confirmSuspendService() {
            const confirmed = window.confirm("Tem a certeza que deseja suspender este serviço?");
            if (confirmed) {                
                alert("Serviço suspenso!");
            } else {                
                alert("Operação cancelada.");
            }
        },
        confirmFinishService() {
            const confirmed = window.confirm("Tem a certeza que deseja terminar este serviço?");
            if (confirmed) {
                // Logic to finish service
                this.askForRecommendation();
            } else {
                alert("Operação cancelada.");
            }
        },
        askForRecommendation() {
            const confirmed = window.confirm("Deseja recomendar algum novo serviço?");
            if (confirmed) {
                // Logic to recommend new services
                // Show a form or input box for the user to enter their recommendations
                this.$router.push(`/services/recommendation/${this.serviceId}`);
            } else {
                alert("Obrigado pela preferência!");
            }
        },
        getEstadoLabel(estado) {
        if (estado === 'naFila') {
          return 'Na Fila';
        } else if (estado === 'programado') {
          return 'Programado';
        } else if (estado === 'parado') {
          return 'Parado';
        } else {
          // Handle other estado values here if needed
          return estado;
        }
      },
    },

    created() {
      // Extract service ID from the URL
      const urlParts = window.location.href.split('/');
      const serviceId = urlParts[urlParts.length - 1];
      // Fetch data for the specified service ID
      this.fetchService(serviceId);
    }
  };
</script>

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
.button-container {
    margin-top: 20px;
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
    margin-right: 25px;
}

#button-orange {
    background-color:  var(--color-orange); /* Orange background color */
    color: white; /* White text color */
    /* Add any other styles specific to the button with the ID "button-remover" here */
}

</style>