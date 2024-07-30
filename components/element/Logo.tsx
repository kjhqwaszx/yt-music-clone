'use client'
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";
import {useRouter} from "next/navigation";
import IconButton from "@/components/element/iconButton";
import {IoCloseOutline} from 'react-icons/io5';

export default function Logo({isInDrawer = false, onClickClose = () =>{}}) {
  const {push} = useRouter()

  const onClickLogo = () =>{
    console.log('$$$ logo clicked')
    push("/")
  }

  const onClickMenu = () =>{
    console.log('$$$ logo menu clicked')
  }

  return(
    <section className="flex flex-row items-center gap-3">
      {
        isInDrawer ?
          <IconButton icon={<IoCloseOutline size={30} />} onClickIcon={onClickClose} />
          :
          <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu}/>
      }


      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo"></Image>
      </div>
    </section>

  )

}