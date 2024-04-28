<template>
    <div class="page">
        <h1 id="nomeServiço">Limpeza interior</h1>
        <div class="informationCards">
            <div class="clientInformation">
                <h3>Informação do Veículo</h3>
                <p><b>Matricula: </b>{{ service.vehicleId }}</p>
                <p><b>Motor: </b>{{ motorType(service.vehicleTypeId) }}</p>
                <p><b>Cilindrada: </b>{{ service.cilindrada }} cc</p>
                <p><b>Kilometros: </b>{{ service.kms }} km</p>
            </div>
            
            <div class="rightSide">
                <div class="serviceInformation">
                    <h3>Informações do serviço</h3>
                    <p><b>Estado: </b>{{ getEstadoLabel(service.estado) }}</p>
                    <p><b>Agendamento: </b>{{ formatAgendamento(service.agendamento) }}</p>
                    <p v-if="service.agendamento === 'programado'" ><b>Data de agendamento: </b>{{ formatDataAgendamento(service.data) }}</p>
                    <p><b>Duração: </b>{{ service.duração }} minutos</p>
                    <p><b>Descrição: </b>{{ service.descr }}</p>
                </div>
                
                <div class="button-container">
                    <!-- Buttons -->
                    <button v-if="serviceState === 'pending'" @click="togglestartPopup" class="button">Iniciar</button>
                    <button v-if="serviceState === 'pending'" id="button-orange" type="button" class="button">Remover</button>
                    <button v-if="serviceState === 'started'" @click="toggleSuspendPopup" class="button">Suspender</button>
                    <button v-if="serviceState === 'started'" @click="confirmFinishService" id="button-orange" class="button">Terminar</button>
                </div>                 
            </div>
        </div>

        <StartPopup :modalActive="startPopupActive" @close="togglestartPopup" @start="confirmStartService" @cancel="confirmStartServiceCancel">
            <h1>Tem a certeza de que deseja iniciar o serviço?</h1>
        </StartPopup>

        <SuspendPopup :modalActive="suspendPopupActive" @close="toggleSuspendPopup" @start="confirmSuspendService" @cancel="confirmSuspendServiceCancel">
            <h1>Tem a certeza de que deseja suspender o serviço?</h1>
        </SuspendPopup>


    </div>
</template>

<script>
  import axios from 'axios';
  import StartPopup from '../components/2BPopup.vue';
  import SuspendPopup from '../components/2BPopup.vue';
  import {ref} from 'vue';
  
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

    setup() {
        const startPopupActive = ref(false);

        const togglestartPopup = () => {
            startPopupActive.value = !startPopupActive.value;
        };


        const suspendPopupActive = ref(false);

        const toggleSuspendPopup = () => {
            suspendPopupActive.value = !suspendPopupActive.value;
        };


        return { startPopupActive, togglestartPopup, suspendPopupActive, toggleSuspendPopup };
    },

    components: {
        StartPopup, SuspendPopup,
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
                console.log(service);
                if (service.estado !== 'realizado') {
                    // Assign data to component properties
                    this.service = {
                    id: service.id,
                    vehicleId: service.vehicleId,
                    servicedefinitionId: service.servicedefinitionId,
                    estado: service.estado,
                    agendamento: service.agendamento,
                    data: service.data,
                    descr: service.descrição
                    };
                    // Fetch service duration and description
                    this.fetchServiceDuration(service.servicedefinitionId);
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
        formatAgendamento(agendamento) {
            if (agendamento === 'filaDeEspera') {
            return 'Fila de Espera';
            } else if (agendamento === 'programado') {
            return 'Programado';
            } else {
            return agendamento; // Return the original value if it's not 'filaDeEspera' or 'programado'
            }
        },
        motorType(motor) {
            if (motor === 'gasolina') {
            return 'Gasolina';
            } else if (motor === 'gasoleo') {
            return 'Gasóleo';
            } else if (motor === 'eletrico') {
            return 'Elétrico';
            } else if (motor === 'hibrido') {
            return 'Híbrido';
            } else {
            return motor; // Return the original value if it's not 'filaDeEspera' or 'programado'
            }
        },
        formatDataAgendamento(data){
            console.log("Formatting data:", data);
            console.log(data);
            if (!data) return '';
            return `${data.dia}/${data.mes}/${data.ano} ${data.hora}:${data.minutos}`
        },
        confirmStartService() {
            this.togglestartPopup();              
            this.serviceState = 'started'; // Update service state to 'started'
            alert("Serviço iniciado com sucesso!");
        },
        confirmStartServiceCancel() {
            this.togglestartPopup(); 
            alert("Operação cancelada.");
        },
        confirmSuspendService() {
            this.toggleSuspendPopup();
                const updateData = {
                    estado: 'parado', // Apenas o campo 'estado' é atualizado
                    id: this.serviceId // Mantenha o ID para identificar o serviço
                    // Você não precisa incluir outros campos no objeto de atualização
                };

                axios.patch(`http://localhost:3002/services/${this.serviceId}`, updateData)
                .then(response => {
                    console.log('Service suspended successfully:', response.data);
                    // Atualize apenas o estado do serviço local para refletir a mudança
                    this.service.estado = 'parado';
                    this.serviceState = 'parado';
                })
                .catch(error => {
                    console.error('Error suspending service:', error);
                    alert("Erro ao suspender o serviço.");
                });              
                alert("Serviço suspenso com sucesso!");
        },
        confirmSuspendServiceCancel() {
            this.toggleSuspendPopup(); 
            alert("Operação cancelada.");
        },
        confirmFinishService() {
            const confirmed = window.confirm("Tem a certeza que deseja terminar este serviço?");
            if (confirmed) {
                const updateData = {
                    estado: 'realizado', // Apenas o campo 'estado' é atualizado
                    id: this.serviceId // Mantenha o ID para identificar o serviço
                    // Você não precisa incluir outros campos no objeto de atualização
                };

                axios.patch(`http://localhost:3002/services/${this.serviceId}`, updateData)
                .then(response => {
                    console.log('Service finished successfully:', response.data);
                    // Atualize apenas o estado do serviço local para refletir a mudança
                    this.service.estado = 'realizado';
                    this.serviceState = 'realizado';
                    alert("Serviço terminado com sucesso!");
                })
                .catch(error => {
                    console.error('Error finishing service:', error);
                    alert("Erro ao terminar o serviço.");
                });
                // Logic to finish service
                this.askForRecommendation();
            } else {
                alert("Operação cancelada.");
            }
        },
        askForRecommendation() {
            const confirmed = window.confirm("Deseja recomendar algum novo serviço?");
            if (confirmed) {
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
          return estado;
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