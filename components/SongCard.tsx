import {TopSong} from "@/model/song";
import Image from "next/image";
import {FaCircle} from "react-icons/fa";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import IconButton from "@/components/element/iconButton";

type Prop ={
  song: TopSong
}
export default function SongCard({song}: Prop){

  const getRankIcon = () =>{
    if(song.rank === song.prevRank){
      return <FaCircle size={10}/>
    }else{
      if(song.rank > song.prevRank){
        return <AiOutlineCaretUp size={10} color='#3CA63F'/>
      }else{
        return <AiOutlineCaretDown size={10} color='#FF0000'/>
      }
    }
  }
    return (
      <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
        <div className=" w-[48px] h-[48px] relative">
          <Image src={song.imageSrc} alt="img" fill className="object -cover"/>
          <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer">
            <FiPlayCircle size={20}/>
          </section>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div>{getRankIcon()}</div>
          <div>
            {song.rank + 1}
          </div>
        </div>
        <div>
          <div>{song.name}</div>
        </div>
        <section className="hidden group-hover:flex absolute right-0 flex-row items-center justify-end h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]">
          <IconButton icon={<FiThumbsDown size={20}/>}/>
          <IconButton icon={<FiThumbsUp size={20}/>}/>
          <IconButton icon={<FiMoreVertical size={20}/>}/>
        </section>
      </article>
    )
}