'use client'

import {Playlist} from '@/model/playlist';
import Image from 'next/image';
import {getRandomElementFromArray} from '@/lib/utils';
import {useRouter} from 'next/navigation';
import {MdMoreVert} from 'react-icons/md';
import {FiPlay} from 'react-icons/fi';
import IconButton from '@/components/element/IconButton';

export default function LibraryListCard({playlist}: {playlist: Playlist}) {
  const { id, owner= "", playlistName= "", songList = []} = playlist ?? {}
  const imgSrc = getRandomElementFromArray(songList).imageSrc
  const {push} = useRouter()

  const onClickCard = () =>{
    if(id){
      push(`/playlist?list=${id}`)
    }
  }
  const onClickPlay = () =>{

  }
  return (
    <article className='h-[240px] cursor-pointer'>
      <section className='relative h-[136px] group' onClick={onClickCard}>
        <Image src={imgSrc} alt='songThumbnail' fill={true}   className='object-cover rounded-md' />
        <div className='hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]'>
          <div className='absolute top-2 right-4'>
            <IconButton icon={<MdMoreVert size={20}/>}></IconButton>
          </div>
          <div className='absolute bottom-2 right-4 flex justify-center items-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[30px] h-[30px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-[2px]'>
            <FiPlay size={22} color='red' onClick={onClickPlay}/>
          </div>
        </div>
      </section>
      <section>
        <div>
          {playlistName}
        </div>
        <div className='text-neutral-500'>
          {`${owner} - 트랙 ${songList?.length}개`}
        </div>
      </section>
    </article>
  )
}