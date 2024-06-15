<script setup>
import { ref } from 'vue'
import TicketMakerModal from '../components/TicketMakerModal.vue'

const ticketsSetsData = ref([
  {
    id: 1,
    name: 'Not started',
    tickets: [
      {
        id: 'ticket-1',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta, tempore facilis accusamus ex rerum ullam temporibus et',
        tags: ['Enhancement', 'Bug']
      }
    ]
  },
  {
    id: 2,
    name: 'In Progress',
    tickets: [
      {
        id: 'ticket-2',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta, tempore facilis accusamus ex rerum ullam temporibus et',
        tags: ['Enhancement', 'Bug']
      }
    ]
  },
  {
    id: 3,
    name: 'Done',
    tickets: []
  }
])

// with this method I can get the event to store the transfer data, and ticket and current set name of ticket
const onDragStart = (event, ticket, ticketSet) => {
  event.dataTransfer.setData('ticket', JSON.stringify({ ticket, ticketSet }))
}

//this will add the droped item to the dropped set
const onDrop = (event, targetSet) => {
  const { ticket, ticketSet } = JSON.parse(event.dataTransfer.getData('ticket'))

  //removing the item after droping from the current set
  const source = ticketsSetsData.value.find((column) => column.name === ticketSet)
  const ticketIndex = source.tickets.findIndex((item) => item.id === ticket.id)
  source.tickets.splice(ticketIndex, 1)

  //adding the item after droping from the different  set
  const target = ticketsSetsData.value.find((column) => column.name === targetSet)
  target.tickets.push(ticket)
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
    >
      <h3 class="ticket-container-title">{{ ticketSet.name }}</h3>
      <div
        v-for="ticket in ticketSet.tickets"
        :key="ticket.id"
        class="ticket-details"
        draggable="true"
        @dragstart="onDragStart($event, ticket, ticketSet.name)"
      >
        <p>{{ ticket.content }}</p>
        <div class="ticket-tags">
          <span v-for="tag in ticket.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="ticket-id">{{ ticket.id }}</p>
      </div>
    </div>
    <TicketMakerModal />
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
  height: 100%;
  min-height: 80vh;
  background-color: #f7f8f9;
  padding: 55px 10px 0px;
  position: relative;
  border-radius: 5px;
}
.ticket-container-title {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  padding: 15px 20px;
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
.ticket-details:first-of-type {
  margin-top: 0px;
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
  padding: 2px 5px;
  background-color: #f7f8f9;
  border: 0.5px solid #00000030;
  border-radius: 3px;
}
.ticket-id {
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
