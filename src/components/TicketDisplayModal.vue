<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  ticketData: Object
})
// console.log(props.ticketData)
</script>

<template>
  <div class="modal-screen">
    <div class="ticket-details-title">
      <p class="ticket-id">ticket-{{ ticketData.id }}</p>
      <button @click="$emit('close-modal')">x</button>
    </div>
    <div class="ticket-container">
      <div class="ticket-left">
        <h2 class="ticket-main-title">
          {{ ticketData.title }}
        </h2>
        <div class="ticket-desc-container">
          <h4>Description</h4>
          <p>
            {{ ticketData.description }}
          </p>
        </div>
      </div>
      <div class="ticket-right">
        <select
          name="status-options"
          id="status-options"
          :value="ticketData.status"
          class="status-options-container"
        >
          <option value="not-started">Not-Started</option>
          <option value="in-progress">In-Progress</option>
          <option value="done">Done</option>
        </select>

        <div class="ticket-details-extra">
          <h3>Details</h3>
          <div class="two-column-grid">
            <h4>Assignee</h4>
            <p>{{ ticketData.assignee }}</p>
            <h4>Tags</h4>
            <div class="ticket-tags">
              <span v-for="(tag, index) in ticketData.tags" :key="index">{{ tag }}</span>
            </div>
            <h4>Priority</h4>
            <select
              name="priority-options"
              class="priority-options"
              id="priority-options"
              :value="ticketData.priority"
            >
              <option value="low">low</option>
              <option value="high">High</option>
              <option value="extreme">Extreme</option>
            </select>
            <h4>Reporter</h4>
            <p>{{ ticketData.reporter }}</p>
            <h4>Created At</h4>
            <p>{{ new Date(ticketData.created_at) }}</p>
            <h4>Updated At</h4>
            <p>{{ new Date(ticketData.updated_at) }}</p>
            <h4>Due Date</h4>
            <p>{{ new Date(ticketData.due_date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-screen {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 10px; */
}
.ticket-details-title {
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 40px;
  background-color: white;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  /* border-bottom: 1px solid red; */
}
.ticket-details-title p {
  margin-top: 0;
}
.ticket-details-title button {
  border: 0px;
  outline: 0px;
  padding: 5px 12px;
  background-color: #fff;
  border-radius: 3px;
  border: 0.5px solid #00000050;
  font-size: 20px;
  transition: all 100ms ease;
}
.ticket-details-title button:hover {
  background-color: #000000;
  color: white;
}
.ticket-container {
  width: 80vw;
  height: 75vh;

  background-color: #fff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
.ticket-left {
  width: 60%;
  /* background-color: red; */
  border-right: 1px solid #00000050;
  padding: 0px 15px;
}
.ticket-left .ticket-main-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}
.ticket-desc-container {
  width: 100%;
  height: fit-content;
  margin-top: 50px;
}
.ticket-desc-container h4 {
  font-size: 16px;
  font-weight: 600;
}
.ticket-desc-container p {
  width: 75%;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
}
.ticket-right {
  width: 40%;
}
.status-options-container {
  padding: 10px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  border: 0px;
  background-color: #00000020;
  margin-top: 5px;
}
.status-options-container:focus {
  border: 0px;
}
.status-options-container option {
  font-size: 12px;
  font-weight: 500;
}

.ticket-details-extra {
  width: 100%;
  height: 80%;
  margin-top: 20px;
  border: 0.5px solid #00000020;
  border-radius: 5px;
  overflow: auto;
  font-size: 16px;
  padding: 0px 0px 30px;
}
.ticket-details-extra h3 {
  position: sticky;
  top: 0px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  background-color: #dfdfdf;
  text-transform: capitalize;
}
.ticket-details-extra .two-column-grid {
  width: 100%;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 30% 65%;
  align-items: center;
  gap: 10px;
}
.priority-options {
  padding: 5px 10px;
  border-radius: 3px;
  width: fit-content;
  border: 0.5px solid #00000020;
}
.priority-options:focus {
  border: 0.5px solid #00000070;
}
</style>
