import {Playlist} from '@/model/playlist';
import IconButton from '@/components/element/IconButton';
import {FiFolderPlus, FiMoreVertical, FiPlay} from 'react-icons/fi';
import {getRandomElementFromArray} from '@/lib/utils';
import Image from 'next/image';
import WhiteButton from '@/components/element/WhiteButton';
import DarkButton from '@/components/element/DarkButton';

export default function PlayListHead({playlist}: {playlist: Playlist}) {
  const {playlistName, owner, songList} = playlist
  const randomSong = getRandomElementFromArray(songList)
  return(
    <section >
      <div className='flex gap-[50px] flex-row'>
        <div className='relative h-[160px] w-[160px] lg:w-[240px] lg:h-[240px]'>
          <Image src={randomSong?.imageSrc} fill alt='songImg'/>
        </div>

        <article className='flex flex-col justify-center'>
          <div className='font-bold text-[28px]'>{playlistName}</div>
          <div className='text-neutral-400 mt-4 text-[14px]'>
            <div>{`앨범 • ${owner} • 2024`}</div>
            <div>{`${songList?.length} 곡 • 17분`}</div>
          </div>

          <ul className='hidden lg:flex flex-row gap-4 mt-4'>
            <WhiteButton icon={<FiPlay size={24}/>} label="재생" className={'w-[110px] text-[14px]'}/>
            <DarkButton icon={<FiFolderPlus size={24}/>} label={"보관함에 저장"} className={'min-w-[170px]'}/>
            <IconButton icon={<FiMoreVertical size={24}/>}/>
          </ul>
        </article>
      </div>
      <ul className='lg:hidden flex flex-row gap-4 mt-4'>
        <WhiteButton icon={<FiPlay size={24}/>} label="재생" className={'w-[110px] text-[14px]'}/>
        <DarkButton icon={<FiFolderPlus size={24}/>} label={"보관함에 저장"} className={'w-[155px]'}/>
        <IconButton icon={<FiMoreVertical size={24}/>}/>
      </ul>


    </section>
  )
}