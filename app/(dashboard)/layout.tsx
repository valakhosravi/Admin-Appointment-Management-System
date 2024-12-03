import { DashboardNav } from "@/components/dashboard/nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto p-8">
        {children}
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  )
}