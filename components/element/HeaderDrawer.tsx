'use client'
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {ReactNode, useState} from "react";
import Logo from "@/components/element/Logo";
import Navigator from "@/components/element/Navigator";

type Prop={
  children: ReactNode
  open: boolean
  openChange: (isOpen:boolean) => void
}
export default function HeaderDrawer({children}: Prop){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        {children}
      </DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer={true} onClickClose={()=>setIsOpen(false)}/>
          </div>
          <Navigator/>
        </div>
      </DrawerContent>
    </Drawer>
  )
}