import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Music } from "lucide-react"
import { HowItWorks } from "@/components/ui/how-it-works"
import { GeometricBackground } from "@/components/ui/geometric-background"

export default function Component() {
  return (
    <div className="min-h-screen relative">
      <GeometricBackground />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Crowdfund Your Dream Concert</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect performers with fans to make concerts happen. Put down a temporary payment to show demand - only pay
            if the show gets booked!
          </p>
        </div>

        {/* User Type Selection */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-700">I am a...</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fan Card */}
            <Card className="border-2 border-slate-200 hover:border-orange-600 transition-colors cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
                  <Users className="h-8 w-8 text-slate-700" />
                </div>
                <CardTitle className="text-2xl text-slate-700">Fan</CardTitle>
                <CardDescription className="text-slate-600">
                  Want to see your favorite artist perform live
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Browse upcoming tour proposals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Put down temporary payment to show interest</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Only charged if concert gets funded</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Get tickets when show is confirmed</p>
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">Start as Fan</Button>
              </CardContent>
            </Card>

            {/* Performer Card */}
            <Card className="border-2 border-slate-200 hover:border-orange-600 transition-colors cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
                  <Music className="h-8 w-8 text-slate-700" />
                </div>
                <CardTitle className="text-2xl text-slate-700">Entertainer</CardTitle>
                <CardDescription className="text-slate-600">Artist, band, or entertainment act</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Create tour proposals for cities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Set minimum ticket sales required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Track demand in real-time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-slate-600">Book venues when threshold is met</p>
                  </div>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">Start as Entertainer</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  )
}
