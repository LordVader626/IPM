<template>
    <div class="layout">
      <div class="content">
        <h1 id="title">Lista de serviços</h1>
        <div class="table-wrapper">
          <table class="customTable">
            <thead>
              <tr>
                <th>Automóvel</th>
                <th>Serviço</th>
                <th>Estado</th>
                <th>Agendamento</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in services" :key="service.id" @click="goToServicePage(service.id)">
                <td>{{ service.vehicleId }}</td>
                <td>{{ service.descr }}</td>
                <td>{{ getEstadoLabel(service.estado) }}</td>
                <td>{{ formatAgendamento(service.agendamento) }}</td>
                <td>{{ service.duração }}</td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        services: [],
        serviceDefinitions: {}, // Define an empty object to store service definitions
      };
    },
    methods: {
      goToServicePage(serviceId) {
        // Navigate to the dynamic service page based on the serviceId
        this.$router.push(`/services/${serviceId}`);
      },
      fetchServices() {
        axios.get('http://localhost:3002/services')
          .then(response => {
            console.log('Full Response:', response);
            if (response.data && Array.isArray(response.data)) {
              // Filter out services with estado "realizado" and map the remaining services
              this.services = response.data
                .filter(service => service.estado !== 'realizado')
                .map(service => ({
                  id: service.id,
                  vehicleId: service.vehicleId,
                  servicedefinitionId: service.servicedefinitionId,
                  estado: service.estado,
                  agendamento: service.agendamento,
                }));
              this.fetchServiceDurations(); // Fetch service durations after fetching services
              this.fetchServiceDescriptions(); // Fetch service descriptions after fetching services
            } else {
              console.error('Invalid response structure:', response.data);
            }
          })
          .catch(error => {
            console.error('Error fetching services:', error);
          });
      },
      fetchServiceDurations() {
        this.services.forEach(service => {
          axios.get(`http://localhost:3002/service-definitions/${service.servicedefinitionId}`)
            .then(response => {
              console.log('Service Duration Response:', response);
              if (response.data) {
                // Assign duração to the corresponding service
                service.duração = response.data.duração;
              } else {
                console.error(`No service duration found for servicedefinitionId: ${service.servicedefinitionId}`);
              }
            })
            .catch(error => {
              console.error('Error fetching service duration:', error);
            });
        });
      },
      fetchServiceDescriptions() {
        this.services.forEach(service => {
          axios.get(`http://localhost:3002/service-definitions/${service.servicedefinitionId}`)
            .then(response => {
              console.log('Service Description Response:', response);
              if (response.data) {
                // Assign description to the corresponding service
                service.descr = response.data.descr;
              } else {
                console.error(`No service description found for servicedefinitionId: ${service.servicedefinitionId}`);
              }
            })
            .catch(error => {
              console.error('Error fetching service description:', error);
            });
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
      }
    },
    created() {
      this.fetchServices();
    }
  };
</script>

    
    
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