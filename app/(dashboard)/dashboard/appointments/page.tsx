"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from '@/components/appointments/calendar-view'
import { AppointmentList } from '@/components/appointments/appointment-list'
import { getAppointments } from '@/lib/data/appointments'
import { type Appointment } from '@/lib/data/appointments'
import { NewAppointmentDialog } from '@/components/appointments/new-appointment-dialog'

export default function AppointmentsPage() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar')
  const [appointments, setAppointments] = useState<Appointment[]>(getAppointments())

  const handleAppointmentAdded = (newAppointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment])
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">
            Manage and schedule appointments
          </p>
        </div>
        <NewAppointmentDialog onAppointmentAdded={handleAppointmentAdded} />
      </div>

      <Tabs value={view} onValueChange={(v) => setView(v as 'calendar' | 'list')}>
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="mt-4">
          <CalendarView appointments={appointments} />
        </TabsContent>
        <TabsContent value="list" className="mt-4">
          <AppointmentList appointments={appointments} />
        </TabsContent>
      </Tabs>
    </div>
  )
}