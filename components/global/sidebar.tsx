 "use client"
 import React from 'react'
import { useSidebar } from '../../contexts/sidebar-context'


function Sidebar() {
  const {isCollapsed, toogleSidebar} = useSidebar()
  
  return (
    <aside className=''>


    </aside>
  )
}

export default Sidebar
