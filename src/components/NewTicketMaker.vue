<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  ticketsSetsData: Array,
  ticketSetId: Number
})

const newTicketData = ref({
  id: 0,
  content: '',
  tags: [],
  ticketSetToBeAdded: props.ticketSetId
})

onMounted(() => {
  props.ticketsSetsData.forEach((item) => {
    newTicketData.value.id += item.tickets.length
  })
})

const addTags = (e) => {
  if (e.target.value !== '') {
    newTicketData.value.tags.push(e.target.value)
    e.target.value = ''
  }
}
</script>

<template>
  <form @submit.prevent class="ticket-details form-to-new-ticket">
    <textarea
      name="content"
      v-model="newTicketData.content"
      autofocus
      placeholder="Enter issue ..."
    ></textarea>
    <div class="ticket-tags">
      <span v-for="(tag, index) in newTicketData.tags" :key="index">{{ tag }}</span>
    </div>
    <input type="text" name="tags" placeholder="tags." @keyup.enter="addTags" />

    <p class="ticket-id">ticket-{{ newTicketData.id }}</p>
  </form>
  <!-- {{ newTicketData }} -->
</template>

<style>
.ticket-details.form-to-new-ticket{
    margin-top: 0px;
    cursor: pointer;
}

.ticket-details input,
.ticket-details textarea {
  height: fit-content;
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  border: 0px;
  border-bottom: 0.5px solid #00000030;
}
.ticket-details input:focus,
.ticket-details textarea:focus {
  border: 0px;
  outline: 0px;
  border-bottom: 0.5px solid #000000;
}
.ticket-details textarea {
  overflow-x: hidden;
  margin-top: 0px;
  resize: vertical;
  min-height: 75px;
  height: fit-content;
  max-height: 200px;
}
</style>
