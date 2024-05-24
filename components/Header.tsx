'use client'
import {ReactNode, useEffect, useRef, useState} from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon"
import PagePadding from "@/components/PagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";

import HeaderDrawer from "@/components/element/HeaderDrawer";
import Logo from "@/components/element/Logo";
import {cn} from "@/lib/utils";

type Props={
  children: ReactNode
}
export default function Header({children}: Props){
  const [isScrolled, setIsScrolled] = useState(false)
  const headRef = useRef(null)

  useEffect(()=>{
    const currentHeadRef = headRef.current;

    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    currentHeadRef?.addEventListener("scroll", handleScroll);
    return () => {
      currentHeadRef?.removeEventListener("scroll", handleScroll);
    };
  },[])

  return(
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/* bg Section*/}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image fill className="object-cover" src="https://images.unsplash.com/photo-1707833558984-3293e794031c" alt="mediaItem"/>
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section >

      <section className={
        cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")
      }>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">

            {/* 검색창 */}
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
              <div>
                <FiSearch size={24}/>
              </div>
              <input className="h-full w-full bg-transparent" placeholder="노래, 앨범, 아티스트, 팟캐스트 검색" type="text"></input>
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo/>
              </article>
            </HeaderDrawer>
            {/*유저 아이콘*/}
            <article className="flex flex-row gap-6 items-center">
              <UserIcon/>
              <FaChromecast size={26}/>
            </article>

          </div>
        </PagePadding>
      </section>
      <section className="relative">
        {children}
      </section>
    </header>
  )
}