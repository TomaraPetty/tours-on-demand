export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Orange Circle */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-orange-600/20 blur-2xl animate-pulse" />
      
      {/* Slate Circle */}
      <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-slate-700/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Orange Square */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Slate Triangle */}
      <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[200px] border-r-[200px] border-b-[346px] border-l-transparent border-r-transparent border-b-slate-700/20 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Orange Hexagon */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-orange-600/20 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  )
} 