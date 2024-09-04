'use client'
import DarkButton from '@/components/element/DarkButton';
import WhiteButton from '@/components/element/WhiteButton';
import {FiMusic, FiShuffle} from 'react-icons/fi';
import usePlayerState from '@/hooks/usePlayerState';


export default function ChannelHead({channel}) {
  const { addSongList } = usePlayerState()

  const shuffleArray = (array) =>{
    const shuffledArray = array.slice()
    for( let i = shuffledArray.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }
  const onClickShuffle = () =>{
    addSongList(shuffleArray(channel.songList))
  }

  return (
    <section>
      <div className='font-bold'>{channel.name}</div>

      <article className='lg:hidden mt-4'>
        {/* 모바일 버전 */}
        <div>
          <DarkButton label='구독중 4.15만' className='w-[230px] flex justify-center'/>
        </div>
        <div className='flex flex-row gap-4 mt-4'>
          <WhiteButton label='셔플' icon={<FiShuffle onClick={onClickShuffle} size={16}/>}/>
          <WhiteButton label='뮤직스테이션' icon={<FiMusic size={16}/>}/>
        </div>
      </article>

      {/* pc 버전 */}
      <div className='hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'>
        <WhiteButton label='셔플' icon={<FiShuffle onClick={onClickShuffle} size={16}/>}/>
        <WhiteButton label='뮤직스테이션' icon={<FiMusic size={16}/>}/>
        <DarkButton label='구독중 4.15만' className='w-[230px] flex justify-center'/>

      </div>
    </section>
  )
}