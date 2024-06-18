<script setup>
import { useTicketStore } from '@/stores/ticketStore'
import { defineAsyncComponent, ref } from 'vue'
const TicketDisplayModal = defineAsyncComponent(
  () => import('../components/TicketDisplayModal.vue')
)
const NewTicketMaker = defineAsyncComponent(() => import('../components/NewTicketMaker.vue'))

const { ticketsSetsData, toggleForm, updateTicketStatus } = useTicketStore()

const isModalOpen = ref({
  openOrNot: false,
  data: null
})

// with this method I can get the event to store the transfer data, and ticket and current set name of ticket
const onDragStart = (event, ticket) => {
  event.dataTransfer.setData('ticket', JSON.stringify(ticket))
}

//this will add the droped item to the dropped set
const onDrop = (event, newStatus) => {
  const ticket = JSON.parse(event.dataTransfer.getData('ticket'))
  updateTicketStatus(ticket.id, newStatus)
}

const displayTicketMakerBtn = (ticketSetId) => {
  const ticketSet = ticketsSetsData.find((item) => item.id == ticketSetId)
  if (!ticketSet.ticketMakingForm) {
    ticketSet.containerHovered = true
  }
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
      @drop="onDrop($event, ticketSet.status)"
      @mouseenter="displayTicketMakerBtn(ticketSet.id)"
      @mouseleave="ticketSet.containerHovered = false"
    >
      <h3 class="ticket-container-title">{{ ticketSet.name }}</h3>
      <div
        v-for="ticket in ticketSet.tickets"
        :key="ticket.id"
        class="ticket-details"
        draggable="true"
        @dragstart="onDragStart($event, ticket)"
        @click="openModel(ticket)"
      >
        <p>{{ ticket.title }}</p>
        <div class="ticket-tags">
          <span v-for="tag in ticket.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="ticket-id">ticket-{{ ticket.id }}</p>
      </div>
      <NewTicketMaker
        v-if="ticketSet.ticketMakingForm"
        :ticketsSetsData="ticketsSetsData"
        :ticketSetId="ticketSet.id"
      />
      <div
        class="new-ticket-creator"
        v-if="ticketSet.containerHovered"
        @click="toggleForm('open', ticketSet.id)"
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
  margin-top: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
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
