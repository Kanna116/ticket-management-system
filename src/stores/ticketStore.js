import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('tickets', () => {
  //   const count = ref(0)
  const userId = 74
  const tickets = ref([
    {
      id: 1,
      name: 'Not started',
      status: 'not-started',
      tickets: [
        {
          id: 'ticket-1',
          title: 'Initial Setup',
          description: 'Set up the initial project structure and repository.',
          status: 'not-started',
          priority: 'high',
          type: 'Task',
          assignee: 68,
          reporter: 49,
          project_id: 67,
          created_at: 1718287572,
          updated_at: 1718287572,
          due_date: 1718287572,
          tags: ['Setup', 'Project']
        },
        {
          id: 'ticket-2',
          title: 'Create Wireframes',
          description: 'Design wireframes for the main pages.',
          status: 'not-started',
          priority: 'high',
          type: 'Design',
          assignee: 70,
          reporter: 51,
          project_id: 67,
          created_at: 1718288572,
          updated_at: 1718288572,
          due_date: 1718297572,
          tags: ['Design', 'UI']
        },
        {
          id: 'ticket-3',
          title: 'Research Competitors',
          description: 'Conduct a competitive analysis of similar products.',
          status: 'not-started',
          priority: 'low',
          type: 'Research',
          assignee: 72,
          reporter: 53,
          project_id: 67,
          created_at: 1718289572,
          updated_at: 1718289572,
          due_date: 1718307572,
          tags: ['Research', 'Market']
        },
        {
          id: 'ticket-4',
          title: 'Set Up CI/CD',
          description: 'Implement Continuous Integration and Continuous Deployment.',
          status: 'not-started',
          priority: 'extreme',
          type: 'DevOps',
          assignee: 74,
          reporter: 55,
          project_id: 67,
          created_at: 1718290572,
          updated_at: 1718290572,
          due_date: 1718317572,
          tags: ['DevOps', 'Automation']
        }
      ],
      ticketMakingForm: false,
      containerHovered: false
    },
    {
      id: 2,
      name: 'In Progress',
      status: 'in-progress',
      tickets: [
        {
          id: 'ticket-5',
          title: 'Develop Login Module',
          description: 'Create login and authentication module.',
          status: 'in-progress',
          priority: 'high',
          type: 'Feature',
          assignee: 68,
          reporter: 49,
          project_id: 67,
          created_at: 1718291572,
          updated_at: 1718291572,
          due_date: 1718327572,
          tags: ['Feature', 'Authentication']
        },
        {
          id: 'ticket-6',
          title: 'Create Dashboard UI',
          description: 'Develop the user interface for the dashboard.',
          status: 'in-progress',
          priority: 'high',
          type: 'UI',
          assignee: 70,
          reporter: 51,
          project_id: 67,
          created_at: 1718292572,
          updated_at: 1718292572,
          due_date: 1718337572,
          tags: ['UI', 'Dashboard']
        },
        {
          id: 'ticket-7',
          title: 'Implement User Roles',
          description: 'Set up user roles and permissions.',
          status: 'in-progress',
          priority: 'extreme',
          type: 'Security',
          assignee: 72,
          reporter: 53,
          project_id: 67,
          created_at: 1718293572,
          updated_at: 1718293572,
          due_date: 1718347572,
          tags: ['Security', 'Roles']
        },
        {
          id: 'ticket-8',
          title: 'API Integration',
          description: 'Integrate with external APIs for data fetching.',
          status: 'in-progress',
          priority: 'high',
          type: 'Backend',
          assignee: 74,
          reporter: 55,
          project_id: 67,
          created_at: 1718294572,
          updated_at: 1718294572,
          due_date: 1718357572,
          tags: ['API', 'Backend']
        }
      ],
      ticketMakingForm: false,
      containerHovered: false
    },
    {
      id: 3,
      name: 'Done',
      status: 'done',
      tickets: [
        {
          id: 'ticket-9',
          title: 'Setup Development Environment',
          description: 'Install and configure development tools.',
          status: 'done',
          priority: 'high',
          type: 'Setup',
          assignee: 68,
          reporter: 49,
          project_id: 67,
          created_at: 1718295572,
          updated_at: 1718295572,
          due_date: 1718367572,
          tags: ['Setup', 'Environment']
        },
        {
          id: 'ticket-10',
          title: 'Design Logo',
          description: 'Create a logo for the project.',
          status: 'done',
          priority: 'low',
          type: 'Design',
          assignee: 70,
          reporter: 51,
          project_id: 67,
          created_at: 1718296572,
          updated_at: 1718296572,
          due_date: 1718377572,
          tags: ['Design', 'Logo']
        },
        {
          id: 'ticket-11',
          title: 'User Research',
          description: 'Conduct user interviews to gather requirements.',
          status: 'done',
          priority: 'high',
          type: 'Research',
          assignee: 72,
          reporter: 53,
          project_id: 67,
          created_at: 1718297572,
          updated_at: 1718297572,
          due_date: 1718387572,
          tags: ['Research', 'User']
        },
        {
          id: 'ticket-12',
          title: 'Setup Staging Environment',
          description: 'Prepare a staging environment for testing.',
          status: 'done',
          priority: 'extreme',
          type: 'DevOps',
          assignee: 74,
          reporter: 55,
          project_id: 67,
          created_at: 1718298572,
          updated_at: 1718298572,
          due_date: 1718397572,
          tags: ['DevOps', 'Staging']
        }
      ],
      ticketMakingForm: false,
      containerHovered: false
    }
  ])
  const newTicketId = computed(() => tickets.value.length + 1)
  //   const doubleCount = computed(() => count.value * 2)
  const userTickets = computed(
    () => (tickets.value = tickets.value.filter((item) => item.assignee == userId))
  )

  //   function increment() {
  //     count.value++
  //   }

  const createTicket = (data) => {
    console.log('running')
    console.log(data)
    tickets.value.push(data)
    console.log(tickets.value)
  }

  return { tickets, newTicketId, userTickets, createTicket }
})
