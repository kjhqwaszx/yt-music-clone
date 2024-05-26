'use client'
import {Playlist} from "@/model/playlist";
import Image from "next/image";
import {getRandomElementFromArray} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {MdMoreVert} from "react-icons/md";
import {FiPlay} from "react-icons/fi";
import IconButton from "@/components/element/iconButton";

type Prop ={
  playlist: Playlist
}
export default function PlayListCard({playlist}:Prop){
  const {id, owner, playlistName, songList} = playlist
  const {push} = useRouter()
  const songListLen = songList?.length
  const imageSrc = getRandomElementFromArray(songList).imageSrc

  const onClickedCard = () =>{
    push(`/playlist?list=${id}`)
  }
  const onClickPlay = () =>{
    // ToDo play
  }
  return (
      <article className="h-[240px] cursor-pointer group">
        <section onClick={onClickedCard} className="relative h-[136px]">
          {/* 플레이 리스트 이미지 */}
          <Image src={imageSrc} fill={true} alt="thumbnail" className="object-cover"/>

          <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-full">
            {/* 더보기 아이콘 */}
            <div  className="absolute top-2 right-4">
              <IconButton icon={<MdMoreVert size={20}/>}/>
            </div >
            {/* 재생 아이콘 */}
            <div onClick={onClickPlay} className=" absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-[2px]">
              <FiPlay size={22}/>
            </div>
          </div>
        </section>

        <section className="mt-2">
          <div> {playlistName} </div>
          <div className="text-neutral-500"> {`${owner} - 트랙 ${songListLen}개`} </div>
        </section>
      </article>
    )
}