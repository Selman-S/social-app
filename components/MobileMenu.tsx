'use client';
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={()=>setIsOpen((prev)=>!prev)}>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'rotate-45':''} origin-left ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'opacity-0':''} origin-left ease-in-out duration-500`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? '-rotate-45':''} origin-left ease-in-out duration-500`} />
      </div>
      {isOpen && (
        <div className="absolute top-24  left-0 w-full h-[calc(100vh-96px)]  bg-white  flex flex-col items-center justify-center gap-8 font-medium text-xl z-10  ">
          <Link href="/" className="text-blue-500">Home</Link>
          <Link href="/about" className="text-blue-500">About</Link>
          <Link href="/contact" className="text-blue-500">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
