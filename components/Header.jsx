'use client'

import Image from 'next/image';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/PagePadding';
import {FaChromecast} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import HeaderDrawer from '@/components/HeaderDrawer';
import Logo from '@/components/element/Logo';
import {useEffect, useRef, useState} from 'react';
import {cn} from '@/lib/utils';
import useUIState from '@/hooks/useUIState';

export default function Header({children}){
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef()
  const { headerImageSrc } = useUIState()

  useEffect(() => {
    const currentHeaderRef = headRef?.current
    const handleScroll = () =>{
      const scrollValue = currentHeaderRef?.scrollTop;
      setIsScrolled(scrollValue !== 0)
    }
    currentHeaderRef?.addEventListener("scroll", handleScroll)

    return ()=>{
      currentHeaderRef?.removeEventListener("scroll", handleScroll)
    }

  }, []);
  return(
    <header ref={headRef} className='relative overflow-y-auto w-full h-full'>
      <section className='absolute top-0 w-full'>
        <div className='relative h-[400px] w-full'>
          <Image fill src={headerImageSrc || 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='header img'/>
        </div>
        <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
        <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black w-full '></div>
      </section>

      <section className={cn('sticky top-0 left-0 z-10', isScrolled && 'bg-black')}>
        <PagePadding>
          <div className='h-[64px] flex flex-row justify-between items-center'>
            {/* 검색창 */}
            <article className='h-[42px] min-w-[480px] lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] hidden border border-neutral-500'>
              <FiSearch size={24}/>
              <input className='h-full w-full bg-transparent' type='text' placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'/>
            </article>

            {/* Drawer */}
            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo/>
              </article>
            </HeaderDrawer>

            <article className='flex flex-row gap-6 items-center '>
              <FaChromecast size={26}/>
              <UserIcon/>
            </article>
          </div>
        </PagePadding>
      </section>

      <section className='relative'>
        {children}
      </section>
    </header>
  )
}