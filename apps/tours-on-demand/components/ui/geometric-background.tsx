import Image from "next/image"

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-700/90" />
      <Image
        src="/bg.svg"
        alt="Background"
        fill
        className="object-cover opacity-80 mix-blend-overlay"
        priority
      />
    </div>
  )
} 