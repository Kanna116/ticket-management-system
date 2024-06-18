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

  //  the api auto generates the new id for the ticket
  // const newTicketId = computed(() => tickets.value.length + 1)

  const fetchAllTickets = async () => {
    await fetch('https://666af5457013419182d1a490.mockapi.io/api/tickets')
      .then((res) => res.json())
      .then((res) => {
        tickets.value = res
        structorizeTickets()
      })
  }

  const addNewTicket = async (ticketData) => {
    const date = new Date()
    // console.log(ticketData)
    await fetch('https://666af5457013419182d1a490.mockapi.io/api/tickets', {
      method: 'POST',
      body: JSON.stringify({
        title: ticketData.title,
        description: '',
        status: ticketData.status,
        priority: 'low',
        type: '',
        assignee: null,
        reporter: null,
        project_id: 47,
        created_at: date,
        updated_at: date,
        due_date: date,
        tags: ticketData.tags,
        userId: null
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => res.json())
      .then(() => {
        toggleForm('close', null)
        fetchAllTickets()

        alert('new ticket has been created')
      })
  }

  const structorizeTickets = () => {
    //as I am using push method to sort the tickets first I will clear it and push with the fresh tickets
    //this is to resolve the problem when creating a new ticket
    ticketsSetsData.value.forEach((item) => (item.tickets = []))

    tickets.value.forEach((ticket) => {
      ticketsSetsData.value.forEach((set) => {
        if (set.status === ticket.status) {
          set.tickets.push(ticket)
        }
      })
    })
  }

  const toggleForm = (task, id) => {
    ticketsSetsData.value.forEach((item) => {
      if (task === 'open') {
        item.ticketMakingForm = item.id === id ? true : false
      } else {
        item.ticketMakingForm = false
      }
      item.containerHovered = false
    })
  }

  onMounted(() => {
    fetchAllTickets()
  })

  return {
    tickets,
    ticketsSetsData,
    addNewTicket,
    toggleForm
  }
})
