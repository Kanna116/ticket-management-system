<script setup>
import { useTicketStore } from '@/stores/ticketStore'
import { defineAsyncComponent, ref } from 'vue'
const TicketDisplayModal = defineAsyncComponent(
  () => import('../components/TicketDisplayModal.vue')
)
const NewTicketMaker = defineAsyncComponent(() => import('../components/NewTicketMaker.vue'))

// const ticketsSetsData = ref([
//   {
//     id: 1,
//     name: 'Not started',
//     status: 'not-started',
//     tickets: [
//       {
//         id: 'ticket-1',
//         title: 'Initial Setup',
//         description: 'Set up the initial project structure and repository.',
//         status: 'not-started',
//         priority: 'high',
//         type: 'Task',
//         assignee: 68,
//         reporter: 49,
//         project_id: 67,
//         created_at: 1718287572,
//         updated_at: 1718287572,
//         due_date: 1718287572,
//         tags: ['Setup', 'Project']
//       },
//       {
//         id: 'ticket-2',
//         title: 'Create Wireframes',
//         description: 'Design wireframes for the main pages.',
//         status: 'not-started',
//         priority: 'high',
//         type: 'Design',
//         assignee: 70,
//         reporter: 51,
//         project_id: 67,
//         created_at: 1718288572,
//         updated_at: 1718288572,
//         due_date: 1718297572,
//         tags: ['Design', 'UI']
//       },
//       {
//         id: 'ticket-3',
//         title: 'Research Competitors',
//         description: 'Conduct a competitive analysis of similar products.',
//         status: 'not-started',
//         priority: 'low',
//         type: 'Research',
//         assignee: 72,
//         reporter: 53,
//         project_id: 67,
//         created_at: 1718289572,
//         updated_at: 1718289572,
//         due_date: 1718307572,
//         tags: ['Research', 'Market']
//       },
//       {
//         id: 'ticket-4',
//         title: 'Set Up CI/CD',
//         description: 'Implement Continuous Integration and Continuous Deployment.',
//         status: 'not-started',
//         priority: 'extreme',
//         type: 'DevOps',
//         assignee: 74,
//         reporter: 55,
//         project_id: 67,
//         created_at: 1718290572,
//         updated_at: 1718290572,
//         due_date: 1718317572,
//         tags: ['DevOps', 'Automation']
//       }
//     ],
//     ticketMakingForm: false,
//     containerHovered: false
//   },
//   {
//     id: 2,
//     name: 'In Progress',
//     status: 'in-progress',
//     tickets: [
//       {
//         id: 'ticket-5',
//         title: 'Develop Login Module',
//         description: 'Create login and authentication module.',
//         status: 'in-progress',
//         priority: 'high',
//         type: 'Feature',
//         assignee: 68,
//         reporter: 49,
//         project_id: 67,
//         created_at: 1718291572,
//         updated_at: 1718291572,
//         due_date: 1718327572,
//         tags: ['Feature', 'Authentication']
//       },
//       {
//         id: 'ticket-6',
//         title: 'Create Dashboard UI',
//         description: 'Develop the user interface for the dashboard.',
//         status: 'in-progress',
//         priority: 'high',
//         type: 'UI',
//         assignee: 70,
//         reporter: 51,
//         project_id: 67,
//         created_at: 1718292572,
//         updated_at: 1718292572,
//         due_date: 1718337572,
//         tags: ['UI', 'Dashboard']
//       },
//       {
//         id: 'ticket-7',
//         title: 'Implement User Roles',
//         description: 'Set up user roles and permissions.',
//         status: 'in-progress',
//         priority: 'extreme',
//         type: 'Security',
//         assignee: 72,
//         reporter: 53,
//         project_id: 67,
//         created_at: 1718293572,
//         updated_at: 1718293572,
//         due_date: 1718347572,
//         tags: ['Security', 'Roles']
//       },
//       {
//         id: 'ticket-8',
//         title: 'API Integration',
//         description: 'Integrate with external APIs for data fetching.',
//         status: 'in-progress',
//         priority: 'high',
//         type: 'Backend',
//         assignee: 74,
//         reporter: 55,
//         project_id: 67,
//         created_at: 1718294572,
//         updated_at: 1718294572,
//         due_date: 1718357572,
//         tags: ['API', 'Backend']
//       }
//     ],
//     ticketMakingForm: false,
//     containerHovered: false
//   },
//   {
//     id: 3,
//     name: 'Done',
//     status: 'done',
//     tickets: [
//       {
//         id: 'ticket-9',
//         title: 'Setup Development Environment',
//         description: 'Install and configure development tools.',
//         status: 'done',
//         priority: 'high',
//         type: 'Setup',
//         assignee: 68,
//         reporter: 49,
//         project_id: 67,
//         created_at: 1718295572,
//         updated_at: 1718295572,
//         due_date: 1718367572,
//         tags: ['Setup', 'Environment']
//       },
//       {
//         id: 'ticket-10',
//         title: 'Design Logo',
//         description: 'Create a logo for the project.',
//         status: 'done',
//         priority: 'low',
//         type: 'Design',
//         assignee: 70,
//         reporter: 51,
//         project_id: 67,
//         created_at: 1718296572,
//         updated_at: 1718296572,
//         due_date: 1718377572,
//         tags: ['Design', 'Logo']
//       },
//       {
//         id: 'ticket-11',
//         title: 'User Research',
//         description: 'Conduct user interviews to gather requirements.',
//         status: 'done',
//         priority: 'high',
//         type: 'Research',
//         assignee: 72,
//         reporter: 53,
//         project_id: 67,
//         created_at: 1718297572,
//         updated_at: 1718297572,
//         due_date: 1718387572,
//         tags: ['Research', 'User']
//       },
//       {
//         id: 'ticket-12',
//         title: 'Setup Staging Environment',
//         description: 'Prepare a staging environment for testing.',
//         status: 'done',
//         priority: 'extreme',
//         type: 'DevOps',
//         assignee: 74,
//         reporter: 55,
//         project_id: 67,
//         created_at: 1718298572,
//         updated_at: 1718298572,
//         due_date: 1718397572,
//         tags: ['DevOps', 'Staging']
//       }
//     ],
//     ticketMakingForm: false,
//     containerHovered: false
//   }
// ])

const { ticketsSetsData } = useTicketStore()
const isModalOpen = ref({
  openOrNot: false,
  data: null
})

// with this method I can get the event to store the transfer data, and ticket and current set name of ticket
const onDragStart = (event, ticket, ticketSet) => {
  event.dataTransfer.setData('ticket', JSON.stringify({ ticket, ticketSet }))
}

//this will add the droped item to the dropped set
const onDrop = (event, targetSet) => {
  const { ticket, ticketSet } = JSON.parse(event.dataTransfer.getData('ticket'))

  //removing the item after droping from the current set
  const source = ticketsSetsData.find((column) => column.name === ticketSet)
  const ticketIndex = source.tickets.findIndex((item) => item.id === ticket.id)
  source.tickets.splice(ticketIndex, 1)

  //adding the item after droping from the different  set
  const target = ticketsSetsData.find((column) => column.name === targetSet)
  ticket.status = target.status
  target.tickets.push(ticket)
}

const addTicketToData = (data) => {
  // console.log(data)
  const ticketSet = ticketsSetsData.find((item) => item.id == data.ticketSetToBeAdded)
  ticketSet.tickets.push(data)
  ticketSet.ticketMakingForm = false
}

const displayTicketMakerBtn = (ticketSetId) => {
  const ticketSet = ticketsSetsData.find((item) => item.id == ticketSetId)
  if (!ticketSet.ticketMakingForm) {
    ticketSet.containerHovered = true
  }
}

const openTicketMakerForm = (ticketSetId) => {
  let ticketSet = null

  ticketsSetsData.forEach((item) => {
    if (item.id === ticketSetId) {
      ticketSet = item
    } else {
      item.containerHovered = false
      item.ticketMakingForm = false
    }
  })

  ticketSet.containerHovered = false
  ticketSet.ticketMakingForm = true
}

const closeNewTicketForm = (id) => {
  ticketsSetsData.find((item) => item.id === id).ticketMakingForm = false
}

const openModel = (data) => {
  isModalOpen.value.openOrNot = true
  isModalOpen.value.data = data
}
</script>

<template>
  <h1>Tickets</h1>
  <div class="main-ticket-holder">
    <div
      v-for="ticketSet in ticketsSetsData"
      :key="ticketSet.id"
      class="specific-ticket-container"
      @dragover.prevent
      @drop="onDrop($event, ticketSet.name)"
      @mouseenter="displayTicketMakerBtn(ticketSet.id)"
      @mouseleave="ticketSet.containerHovered = false"
    >
      <h3 class="ticket-container-title">{{ ticketSet.name }}</h3>
      <div
        v-for="ticket in ticketSet.tickets"
        :key="ticket.id"
        class="ticket-details"
        draggable="true"
        @dragstart="onDragStart($event, ticket, ticketSet.name)"
        @click="openModel(ticket)"
      >
        <p>{{ ticket.title }}</p>
        <div class="ticket-tags">
          <span v-for="tag in ticket.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="ticket-id">{{ ticket.id }}</p>
      </div>
      <NewTicketMaker
        v-if="ticketSet.ticketMakingForm"
        :ticketsSetsData="ticketsSetsData"
        :ticketSetId="ticketSet.id"
        @new-ticket="addTicketToData"
        @close-form="closeNewTicketForm"
      />
      <div
        class="new-ticket-creator"
        v-show="ticketSet.containerHovered"
        @click="openTicketMakerForm(ticketSet.id)"
      >
        <h3>New Ticket</h3>
        <span>+</span>
      </div>
      <div class="dummy-space"></div>
    </div>
    <TicketDisplayModal
      v-if="isModalOpen.openOrNot"
      @close-modal="isModalOpen.openOrNot = false"
      :ticketData="isModalOpen.data"
    />
  </div>
</template>

<style>
.main-ticket-holder {
  width: fit-content;
  min-width: 50vw;
  height: fit-content;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 10px;
}
.specific-ticket-container {
  width: 300px;
  /* height: 100%; */
  height: 80vh;
  background-color: #f7f8f9;
  padding: 0px 10px 20px;
  position: relative;
  border-radius: 5px;
  overflow: auto;
  position: relative;
}
.ticket-container-title {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  background-color: #f7f8f9;
  position: sticky;
  top: 0;
  text-transform: uppercase;
  padding: 15px 10px;
}
.ticket-details:first-of-type {
  margin-top: 0px;
}
.ticket-details {
  width: 100%;
  height: fit-content;
  padding: 10px;
  border: 1px solid #00000030;
  border-radius: 5px;
  background: white;
  font-size: 12px;
  cursor: grab;
  margin-top: 10px;
}
.ticket-details:active {
  cursor: grabbing;
  opacity: 0.8;
}
.ticket-tags {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
}
.ticket-tags span {
  padding: 2px 10px;
  font-size: 12px;
  background-color: #f7f8f9;
  border: 0.5px solid #00000030;
  border-radius: 3px;
}
.ticket-id {
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.new-ticket-creator {
  width: 100%;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 100ms ease;
}
.new-ticket-creator:hover {
  background-color: #00000030;
}
.new-ticket-creator h3 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.new-ticket-creator span {
  font-size: 20px;
}
.dummy-space {
  width: 100%;
  height: 30vh;
}
</style>
