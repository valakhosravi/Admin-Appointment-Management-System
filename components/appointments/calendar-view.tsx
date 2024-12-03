"use client"

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { type Appointment } from '@/lib/data/appointments'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

interface CalendarViewProps {
  appointments: Appointment[]
}

export function CalendarView({ appointments }: CalendarViewProps) {
  const events = appointments.map(appointment => ({
    title: `${appointment.clientName} - ${appointment.status}`,
    start: appointment.date,
    end: new Date(appointment.date.getTime() + appointment.duration * 60000),
    resource: appointment,
  }))

  return (
    <div className="h-[600px] bg-background border rounded-lg p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  )
}