import { Button } from "@/components/ui/button"
import { HowItWorks } from "@/components/ui/how-it-works"
import { auth0 } from "@/lib/auth0"
import Link from 'next/link'

export default async function Component() {
  const session = await auth0.getSession()

  return (
    <div className="flex flex-col justify-center items-center relative">
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-orange-700 mb-6 font-abcsolar">
            Crowdfund Your Dream Concert
          </h1>
          <p className="text-xl text-orange-200 mb-12 leading-relaxed">
            Connect performers with fans to make concerts happen. Put down a temporary payment to show demand - only pay
            if the show gets booked!
          </p>
          <div className="flex gap-4 justify-center">
            {session?.user ? (
              <>
                <span className="text-orange-50">Welcome, {session.user.name}</span>
                <Link href="/auth/logout">
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 px-8">
                    Log Out
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-orange-100 px-8">
                    Log In
                  </Button>
                </Link>
                <Link href="/auth/login?screen_hint=signup">
                  <Button size="lg" variant="outline" className="bg-orange-100 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50 px-8">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  )
}
