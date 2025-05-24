import { Button } from "./button";
import Image from "next/image";

export function NavMenu() {
  return (
    <header className="border-b-2 border-slate-700 bg-slate-800/90 p-6">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="Tours on Demand Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-orange-600 font-urbanist">Tours on Demand</h1>
        </div>
        <nav className="flex gap-4">
          <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Login
          </Button>
          <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  )
} 