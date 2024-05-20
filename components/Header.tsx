import {ReactNode} from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon"
import PagePadding from "@/components/PagePadding";

type Props={
  children: ReactNode
}
export default function Header({children}: Props){
  return(
    <header className="relative overflow-y-auto w-full h-full">
      {/* bg Section*/}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image fill className="object-cover" src="https://images.unsplash.com/photo-1707833558984-3293e794031c" alt="mediaItem"/>
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section >

      <section className="sticky">
        <PagePadding>
          Search Section
          <UserIcon/>

        </PagePadding>
      </section>
      <section className="relative">
        {children}
      </section>
    </header>
  )
}