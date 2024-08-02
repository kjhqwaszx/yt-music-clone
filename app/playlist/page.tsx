import {getPlaylistById} from '@/lib/dummyData';
import {permanentRedirect} from 'next/navigation';
import {getRandomElementFromArray} from '@/lib/utils';
import HeaderBgChanger from '@/app/playlist/_component/HeaderBgChanger';
import PagePadding from '@/components/PagePadding';
import PlayListHead from '@/app/playlist/_component/PlayListHead';
import SongCardRowExpand from '@/app/playlist/_component/SongCardRowExpand';

type PlayListPageProps = {
  searchParams:{
    list: string
  }
}
export default async function page(props: PlayListPageProps) {
  const playlist = await getPlaylistById(Number(props?.searchParams?.list))

  if(!playlist) permanentRedirect('/')

  const imageSrc = getRandomElementFromArray(playlist?.songList)?.imageSrc
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />

      <div className='mt-12'>
        <PlayListHead playlist={playlist} />
      </div>

      <div className='mt-12'>
        <section className='flex flex-col gap-3'>
          {
            playlist?.songList?.map((song, index) => {
              return <SongCardRowExpand song={song} key={index} />
            })
          }
        </section>
      </div>
    </PagePadding>
  )

}
