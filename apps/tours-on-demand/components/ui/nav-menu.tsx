'use client';

import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export function NavMenu() {
  return (
    <header className="border-b-2 border-slate-700 bg-slate-800/90 p-6">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="Tours on Demand Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-orange-600 font-urbanist">Tours on Demand</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href="/profile">
            <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50">
              Profile
            </Button>
          </Link>
          <Link href="/tour-cities">
            <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50">
              Tour Cities
            </Button>
          </Link>
          <Link href="/all-campaigns">
            <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50">
              All Campaigns
            </Button>
          </Link>
          <Link href="/api/auth/login">
            <Button variant="ghost" className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-orange-50">
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
} 