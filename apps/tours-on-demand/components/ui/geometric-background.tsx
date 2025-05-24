import Image from "next/image"

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src="/design.svg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
} 