export default function Index() {
  return (
    <div className="min-h-screen bg-[#1C2434]">
      {/* Logo */}
      <div className="p-6">
        <img 
          src="/logo.png" 
          alt="Tours On Demand Logo" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Split Design */}
      <div className="flex h-[calc(100vh-8rem)]">
        {/* Artist Side */}
        <div className="flex-1 flex items-center justify-center bg-[#F35925] cursor-pointer hover:opacity-90 transition-opacity">
          <h2 className="text-6xl font-bold text-white">I am an artist</h2>
        </div>

        {/* Fan Side */}
        <div className="flex-1 flex items-center justify-center bg-[#1C2434] cursor-pointer hover:bg-[#2A3444] transition-colors">
          <h2 className="text-6xl font-bold text-white">I am a fan</h2>
        </div>
      </div>
    </div>
  );
}
