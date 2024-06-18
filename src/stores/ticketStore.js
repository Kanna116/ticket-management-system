import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useTicketStore = defineStore('tickets', () => {
  const tickets = ref([])
  const ticketsSetsData = ref([
    {
      id: 1,
      name: 'Not Started',
      status: 'not-started',
      ticketMakingForm: false,
      containerHovered: false,
      tickets: []
    },
    {
      id: 2,
      name: 'In Progress',
      status: 'in-progress',
      ticketMakingForm: false,
      containerHovered: false,
      tickets: []
    },
    {
      id: 3,
      name: 'Resolved',
      status: 'done',
      ticketMakingForm: false,
      containerHovered: false,
      tickets: []
    }
  ])

  const fetchAllTickets = async () => {
    await fetch('https://666af5457013419182d1a490.mockapi.io/api/tickets')
      .then((res) => res.json())
      .then((res) => {
        tickets.value = res
        structorizeTickets()
      })
  }

  const structorizeTickets = () => {
    tickets.value.forEach((ticket) => {
      ticketsSetsData.value.forEach((set) => {
        if (set.status === ticket.status) {
          set.tickets.push(ticket)
        }
      })
    })
  }

  onMounted(() => {
    fetchAllTickets()
  })

  return {
    tickets,
    ticketsSetsData
  }
})
