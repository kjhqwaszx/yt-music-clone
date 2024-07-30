'use client'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from './ui/drawer';
import Logo from '@/components/element/Logo';
import Navigator from '@/components/element/Navigator';
import {useState} from 'react';

export default function HeaderDrawer({children}){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-[240px] h-full'>
        <div className='py-3'>
          <div className='px-3'>
            <Logo isInDrawer onClickClose={()=>setIsOpen(false)} />
          </div>
          <Navigator/>
        </div>
      </DrawerContent>
    </Drawer>

  )
}