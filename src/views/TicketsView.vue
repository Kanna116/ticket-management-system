<script setup>
import { ref } from 'vue'

const ticketsSetsData = ref([
  {
    id: 1,
    name: 'Not started'
  },
  {
    id: 2,
    name: 'In Progress'
  },
  {
    id: 3,
    name: 'Done'
  }
])
</script>
<template>
  <h1>Tickets</h1>
  <div class="main-ticket-holder">
    <div v-for="ticketSet in ticketsSetsData" :key="ticketSet.id" class="specific-ticket-container">
      <h3 class="ticket-container-title">{{ ticketSet.name }}</h3>
      <div class="ticket-details" v-for="ticketSet in ticketsSetsData" :key="ticketSet.id">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta, tempore
          facilis accusamus ex rerum ullam temporibus et
        </p>
        <div class="ticket-tags">
          <span>Enhancement</span>
          <span>Bug</span>
        </div>

        <p class="ticket-id">ticket-1</p>
      </div>
    </div>
  </div>
</template>

<style>
.main-ticket-holder {
  width: fit-content;
  min-width: 50vw;
  height: fit-content;
  /* background-color: red; */
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
  /* border-bottom: 1px solid #00000050; */
  /* background-color: #00000030; */
}
.ticket-details {
  width: 100%;
  height: fit-content;
  padding: 10px;
  border: 1px solid #00000030;
  border-radius: 5px;
  background: white;
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px;
}
.ticket-details:first-of-type{
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
.ticket-id{
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
