"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideBar from './SideBar'

const MobileSidebar = () => {
    const [isMountwd, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMountwd){
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className='p-0'>
                <SideBar/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar
