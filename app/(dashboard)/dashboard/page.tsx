"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, Users } from "lucide-react"

const stats = [
  {
    title: "Total Appointments",
    value: "156",
    icon: Calendar,
    description: "This month",
    trend: "+12.5%",
  },
  {
    title: "Upcoming",
    value: "23",
    icon: Clock,
    description: "Next 7 days",
    trend: "+4.3%",
  },
  {
    title: "Completed",
    value: "89",
    icon: CheckCircle,
    description: "This month",
    trend: "+8.2%",
  },
  {
    title: "Active Clients",
    value: "64",
    icon: Users,
    description: "Total clients",
    trend: "+2.1%",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your appointment management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="text-green-500 mr-1">{stat.trend}</span>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">Client {i + 1}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(
                        Date.now() + i * 24 * 60 * 60 * 1000
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`text-sm ${
                      i % 2 === 0 ? "text-green-500" : "text-blue-500"
                    }`}
                  >
                    {i % 2 === 0 ? "Completed" : "Upcoming"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">New Client {i + 1}</p>
                    <p className="text-sm text-muted-foreground">
                      Joined{" "}
                      {new Date(
                        Date.now() - i * 24 * 60 * 60 * 1000
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}