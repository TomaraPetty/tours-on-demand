import { CreditCard, Calendar, ChartNoAxesCombined } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="bg-slate-500/50 backdrop-blur-sm border-t-2 py-8 rounded-lg border-slate-700">
      <div className="flex flex-col mx-auto px-4 gap-12">
        <h3 className="text-4xl font-bold text-center text-orange-600 font-roboto">How It Works</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-600/20 border-2 border-orange-600/50 flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-orange-200">1. Reserve</h4>
            <p className="text-orange-50">Fans put down temporary payment to show interest in a concert</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-600/20 border-2 border-orange-600/50 flex items-center justify-center">
              <ChartNoAxesCombined className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-orange-200">2. Crowdfund</h4>
            <p className="text-orange-50">When enough fans commit, the concert reaches its funding goal</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-orange-600/20 border-2 border-orange-600/50 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-orange-200">3. Book</h4>
            <p className="text-orange-50">Payments process, venue is booked, and concert is confirmed</p>
          </div>
        </div>
      </div>
    </section>
  )
} 