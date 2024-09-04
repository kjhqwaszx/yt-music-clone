import {getChannelById} from '@/lib/dummyData';
import {permanentRedirect} from 'next/navigation';
import PagePadding from '@/components/PagePadding';
import HeaderBgChanger from '@/app/playlist/_component/HeaderBgChanger';
import {getRandomElementFromArray} from '@/lib/utils';
import {Song} from '@/model/song';
import SongCardRowExpand from '@/app/playlist/_component/SongCardRowExpand';
import PlayListCarousel from '@/app/(site)/components/PlayListCarousel';
import ChannelHead from '@/app/channel/_component/ChannelHead';

type ChannelPageProps ={
  params: {
    id: string;
  }
}
export default async function Page(props: ChannelPageProps) {
  const channel = await getChannelById(Number(props.params.id));

  if(!channel) permanentRedirect('/')

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc}/>
      <div className='mt-[150px]'></div>
      <ChannelHead channel={channel}/>
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
