import { Button } from "@/components/ui/button"
import { HowItWorks } from "@/components/ui/how-it-works"

export default function Component() {
  return (
    <div className="flex flex-col justify-center items-center relative my-12 gap-12">
      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-slate-700 mb-6 font-poppins">
            Crowdfund Your Dream Concert
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Connect performers with fans to make concerts happen. Put down a temporary payment to show demand - only pay
            if the show gets booked!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
              Start as Fan
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8">
              Start as Performer
            </Button>
          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  )
}
