import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Phone, User } from "lucide-react"
import { type Client } from '@/lib/data/clients'

interface ClientCardProps {
  client: Client
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Client Information
        </CardTitle>
        <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
          {client.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span>{client.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{client.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{client.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>Joined {client.joinedDate.toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  )
}