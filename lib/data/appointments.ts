// Mock data and types for appointments
export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export interface Appointment {
  id: string
  clientName: string
  date: Date
  status: AppointmentStatus
  duration: number // in minutes
  notes?: string
}

// Mock data
export const appointments: Appointment[] = [
  {
    id: '1',
    clientName: 'John Doe',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    status: 'confirmed',
    duration: 60,
    notes: 'Regular checkup'
  },
  {
    id: '2',
    clientName: 'Jane Smith',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    status: 'pending',
    duration: 30,
  },
  // Add more mock appointments as needed
]

export function getAppointments(): Appointment[] {
  return appointments
}

export function getAppointmentsByStatus(status: AppointmentStatus): Appointment[] {
  return appointments.filter(appointment => appointment.status === status)
}