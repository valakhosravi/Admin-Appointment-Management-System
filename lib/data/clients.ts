export interface Client {
  id: string
  name: string
  email: string
  phone: string
  joinedDate: Date
  totalAppointments: number
  lastAppointment?: Date
  status: 'active' | 'inactive'
}

// Mock data
export const clients: Client[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    joinedDate: new Date('2024-01-15'),
    totalAppointments: 5,
    lastAppointment: new Date('2024-03-10'),
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 987-6543',
    joinedDate: new Date('2024-02-01'),
    totalAppointments: 3,
    lastAppointment: new Date('2024-03-15'),
    status: 'active',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+1 (555) 456-7890',
    joinedDate: new Date('2024-01-20'),
    totalAppointments: 2,
    lastAppointment: new Date('2024-02-28'),
    status: 'inactive',
  },
]

export function getClients(): Client[] {
  return clients
}

export function getClientById(id: string): Client | undefined {
  return clients.find(client => client.id === id)
}