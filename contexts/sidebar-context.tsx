/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { createContext, useCallback, useContext, useEffect, useState } from "react";


type SidebarContextType ={
    isCollapsed: boolean;
    toogleSidebar: () =>  void
}

const SidebarContext = createContext<SidebarContextType | undefined>
(undefined)


export const SidebarProvider = ({
    children,
}:{ 
    children: React.ReactNode;
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleSidebar = useCallback(()=>{
        setIsCollapsed((prev) => !prev)
    }, [])

    useEffect(() =>{
        const handleKeyDown = (event:KeyboardEvent) => {
            if(
                (event.metaKey && event.key === "b") || (event.ctrlKey && event.key === "b")
            ){
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return()=>{
            window.removeEventListener('keydown', handleKeyDown)
        }
    },[toggleSidebar])

    return (
        //@ts-ignore
        <SidebarContext.Provider value={{ isCollapsed,toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () =>{
    const context = useContext(SidebarContext)
    if(context === undefined){
        throw new Error("use In SidebarProvider")
    }
    return context
}

 
