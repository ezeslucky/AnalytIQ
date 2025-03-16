import React from 'react'
import { useSidebar } from '../ui/sidebar'
import { useMediaQuery } from '@/hooks/use-media-query'
import { signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { PanelRightClose } from 'lucide-react';
import sidebarLinks from '@/config/sidebar';

 export const   Sidebar = ()=> {
const {isCollapsed , toggleSidebar} = useSidebar()
const isMobile = useMediaQuery("( max-width: 768px)")
const session = useSession()
  return (
    <aside className={`${isCollapsed? "w-16" : "w-56" } bg-black transition-all duration-300 flex flex-col h-full pb-0`}>
<div className=' flex justify-between items-center gap-2 p-4 pr-0'>
  {!isCollapsed && (
    <Link href='/' className=' flex items-center gap-2'>
      <Image src='logo.svg' width={28} height={28} alt='logo' />

      <span className=' bg-clip-text bg-gradient-to-r from-white to-neutral-500 font-medium text-transparent text-xl'>
AnalytIQ
      </span>
    
    </Link>
  )}
{
  !isMobile && (
    <Button size="icon" onClick={toggleSidebar} className=' hidden md:flex bg-transparent hover:bg-[#1E1F23] p-1 text-gray-300'>
{isCollapsed ?(
  <PanelRightClose style={{width: "20px" , height: "20px"}} />
): (
  <PanelRightClose style={{width: "20px", height: '20px'}} />
)}
    </Button>
  )
}
</div>

<nav className=" flex-1">
 <ul className=' space-y-2 p-2'>
{sidebarLinks.map((link) => (
  
))}
 </ul>
</nav>

    </aside>
  )
}


