"use client"

import { useState } from "react"
import { ClientList } from "@/components/clients/client-list"
import { ClientCard } from "@/components/clients/client-card"
import { NewClientDialog } from "@/components/clients/new-client-dialog"
import { getClients } from "@/lib/data/clients"
import { type Client } from "@/lib/data/clients"

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(getClients())

  const handleClientAdded = (newClient: Client) => {
    setClients((prevClients) => [...prevClients, newClient])
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
          <p className="text-muted-foreground">
            Manage your client database
          </p>
        </div>
        <NewClientDialog onClientAdded={handleClientAdded} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.slice(0, 3).map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">All Clients</h3>
        <ClientList clients={clients} />
      </div>
    </div>
  )
}