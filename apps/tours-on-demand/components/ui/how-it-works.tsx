import { CreditCard, Users, Calendar } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="bg-white border-t-2 border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-slate-700">How It Works</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-slate-700" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-slate-700">1. Reserve</h4>
            <p className="text-slate-600">Fans put down temporary payment to show interest in a concert</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
              <Users className="h-8 w-8 text-slate-700" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-slate-700">2. Crowdfund</h4>
            <p className="text-slate-600">When enough fans commit, the concert reaches its funding goal</p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-slate-700" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-slate-700">3. Book</h4>
            <p className="text-slate-600">Payments process, venue is booked, and concert is confirmed</p>
          </div>
        </div>
      </div>
    </section>
  )
} 