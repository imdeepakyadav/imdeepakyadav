import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-12 w-12 text-primary" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>

          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist or may have been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
