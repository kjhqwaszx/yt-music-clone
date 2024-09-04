import {getChannelById} from '@/lib/dummyData';
import {permanentRedirect} from 'next/navigation';
import PagePadding from '@/components/PagePadding';
import HeaderBgChanger from '@/app/playlist/_component/HeaderBgChanger';
import {getRandomElementFromArray} from '@/lib/utils';
import DarkButton from '@/components/element/DarkButton';
import WhiteButton from '@/components/element/WhiteButton';
import {FiMusic, FiShuffle} from 'react-icons/fi';
import {Song} from '@/model/song';
import SongCardRowExpand from '@/app/playlist/_component/SongCardRowExpand';
import PlayListCarousel from '@/app/(site)/components/PlayListCarousel';

type ChannelPageProps ={
  params: {
    id: string;
  }
}
export default async function page(props: ChannelPageProps) {
  const channel = await getChannelById(Number(props.params.id));

  if(!channel) permanentRedirect('/')
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      <div className='mt-[150px]'></div>
      <section>
        <div className='font-bold'>{channel.name}</div>

        <article className='lg:hidden mt-4'>
          {/* 모바일 버전 */}
          <div>
            <DarkButton label='구독중 4.15만' className='w-[230px] flex justify-center'/>
          </div>
          <div className='flex flex-row gap-4 mt-4'>
            <WhiteButton label='셔플' icon={<FiShuffle size={16}/>}/>
            <WhiteButton label='뮤직스테이션' icon={<FiMusic size={16}/>}/>
          </div>
        </article>

        {/* pc 버전 */}
        <div className='hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'>
          <WhiteButton label='셔플' icon={<FiShuffle size={16}/>}/>
          <WhiteButton label='뮤직스테이션' icon={<FiMusic size={16}/>}/>
          <DarkButton label='구독중 4.15만' className='w-[230px] flex justify-center'/>

        </div>
      </section>
      <section className='mt-[80px]'>
        <div className='text-[28px]  font-bold'> 노래 </div>
        <div className='mt-[20px]'>
          <ul className='flex flex-col gap-2'>
            {
              channel?.songList?.map((song: Song, key) => {
                return <SongCardRowExpand song={song} key={key}/>
              })
            }
          </ul>
        </div>
      </section>

      <section className='mt-[80px] mb-[80px]'>
        <div className='text-[28px]  font-bold'>앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray}/>
      </section>
    </PagePadding>
  )

}
