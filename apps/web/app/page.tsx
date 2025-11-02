"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Home() {

  const [roomId, setRoomId] = useState("");
  const router = useRouter();


  return (
    <div className="flex justify-center items-center h-screen">
      <input type="text" 
      placeholder="type roomId"
      className="pl-4 pr-10 h-10 border border-amber-600" 
      value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
      
      <button 
      onClick={() =>router.push(`/room/${roomId}`)}
      className="p-2 bg-amber-800 text-white font-medium cursor-pointer hover:bg-amber-600"
        >Join Room</button>
      </div>
  );
}
