<script setup>
import { ref, defineProps, defineEmits, onUpdated } from 'vue'

const props = defineProps({
  ticketsSetsData: Array,
  ticketSetId: Number
})
const emit = defineEmits(['new-ticket', 'close-form'])

console.log(props.ticketsSetsData)
console.log(props.ticketSetId)

const newTicketData = ref({
  id: '',
  title: '',
  tags: [],
  ticketSetToBeAdded: props.ticketSetId,
  status: props.ticketsSetsData[props.ticketSetId - 1].status,
  description: '',
  priority: 'low',
  type: '',
  assignee: null,
  reporter: null,
  project_id: 67,
  created_at: null,
  updated_at: null,
  due_date: null
})

onUpdated(() => {
  let value = 1
  props.ticketsSetsData.forEach((item) => {
    value += item.tickets.length
  })
  newTicketData.value.id = `ticket-${value}`
  const date = new Date()
  newTicketData.value.created_at = date
  newTicketData.value.updated_at = date
  newTicketData.value.due_date = date
})

const addTags = (e) => {
  const tag = e.target.value.trim()
  if (tag && !newTicketData.value.tags.includes(tag) && tag !== '') {
    newTicketData.value.tags.push(tag)
  }
  e.target.value = ''
}

const onSubmitTicket = () => {
  // console.log(newTicketData.value)
  if (newTicketData.value.title && newTicketData.value.tags) {
    emit('new-ticket', newTicketData.value)
  }
}

const removeTags = (tag) => {
  newTicketData.value.tags = newTicketData.value.tags.filter((item) => item !== tag)
}
</script>

<template>
  <form @submit.prevent="onSubmitTicket" class="ticket-details form-to-new-ticket">
    <textarea
      name="title"
      v-model="newTicketData.title"
      autofocus
      placeholder="Enter issue ..."
    ></textarea>
    <div class="ticket-tags" v-if="newTicketData.tags.length !== 0">
      <span v-for="(tag, index) in newTicketData.tags" :key="index"
        >{{ tag }}
        <button class="tag-remove-btn" @click.stop.prevent="removeTags(tag)">x</button></span
      >
    </div>
    <input type="text" name="tags" placeholder="Enter tags" @keydown.enter.stop.prevent="addTags" />

    <button class="new-ticket-btn">Create ticket</button>
    <button class="close-form-btn" @click.stop.prevent="$emit('close-form', ticketSetId)">x</button>
  </form>
</template>

<style>
.ticket-details.form-to-new-ticket {
  margin-bottom: 10px;
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
  border-radius: 2px;
}
.ticket-details input:focus,
.ticket-details textarea:focus {
  border: 0px;
  outline: 0px;
  border-bottom: 0.5px solid #000000;
}
.ticket-details textarea {
  min-height: 75px;
  max-height: 200px;
  height: fit-content;
  resize: vertical;
  margin-top: 0px;
  overflow-x: hidden;
}
.new-ticket-btn,
.close-form-btn {
  padding: 10px;
  /* border: 0px; */
  background-color: var(--papaya-whip);
  border: 1px solid #00000030;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.close-form-btn {
  background: red;
  color: white;
  margin-left: 20px;
}
.tag-remove-btn {
  border: 0px;
  color: red;
  margin-left: 10px;
}
</style>
