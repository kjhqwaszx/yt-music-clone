'use client'

import {TopSong} from '@/model/song';
import Image from 'next/image';
import {FaCircle} from 'react-icons/fa';
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from 'react-icons/fi';
import IconButton from '@/components/element/IconButton';
import usePlayerState from '@/hooks/usePlayerState';

type Props={
  song:TopSong
}

export default function SongCard({ song }: Props) {
  const { addSongList } = usePlayerState()

  const onClickPlay = () =>{
    addSongList([song])
  }
  return (
    <article className='flex flex-row gap-4 h-[48px] w-full items-center group relative'>
      {/* 썸네일 */}
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song?.imageSrc} alt='img' fill className='object-cover'/>
        <section onClick={onClickPlay} className='hidden group-hover:flex w-[48px] h-[48px] items-center justify-center absolute top-0 bg-black cursor-pointer'>
          <FiPlayCircle/>
        </section>
      </div>

      {/* 순위변동 */}
      <div className='flex flex-row items-center gap-4'>
        <div>
          {
            song?.rank === song?.prevRank ? <FaCircle size={8}/> :
              song?.rank > song?.prevRank ? <AiOutlineCaretUp size={10} color='#3CA63F'/> :
                <AiOutlineCaretDown size={10} color='#FF0000'/>
          }
        </div>
      </div>

      <div>
        {song?.rank + 1}
      </div>

      <div>
        {song?.name}
      </div>

      <section className=' hidden group-hover:flex absolute top-0 right-0 flex-row h-[48px] w-1/2 justify-end items-center bg-[rgba(0,0,0,0.7)]'>
        <IconButton icon={<FiThumbsDown size={20}/>}/>
        <IconButton icon={<FiThumbsUp size={20}/>}/>
        <IconButton icon={<FiMoreVertical size={20}/>}/>
      </section>
    </article>
  )
}


