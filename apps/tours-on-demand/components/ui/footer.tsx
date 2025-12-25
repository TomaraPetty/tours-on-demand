import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-800/90 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-8 w-8 flex items-center justify-center">
            <Image src="/icon.png" alt="Tours on Demand Logo" width={32} height={32} />
          </div>
          <span className="text-lg font-semibold text-orange-600 font-abcsolar">Tours on Demand</span>
        </div>
        <p className="text-orange-600">Making live music accessible through crowdfunding</p>
      </div>
    </footer>
  )
} 