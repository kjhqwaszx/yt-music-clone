import Category from '@/app/(site)/components/Category';
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/app/(site)/components/PlayListCarousel';
import {dummyPlaylistArray, getPlaylistById} from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';

export default async function Page  () {
  const dummyPlaylistArray1 = [...dummyPlaylistArray]
  const dummyPlaylistArray2 = [await getPlaylistById(1)]
  const dummyPlaylistArray3 = [await getPlaylistById(2)]
  const dummyPlaylistArray4 = [await getPlaylistById(3)]
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        {/* 카테고리 */}
        <div className='mt-9'>
          <Category/>
        </div>

        {/* 플레이 리스트 */}
        <div className='mt-12'>
          <PlayListCarousel playlistArray={[...dummyPlaylistArray1]} thumbnail={<div className='w-[56px] h-[56px]' > <UserIcon size={'lg'} /> </div>} title='다시듣기' subTitle='도도' />
        </div>

        {/* 새로운 앨범 */}
        <div className='mt-12'>
          <PlayListCarousel playlistArray={[...dummyPlaylistArray2]} title='케이시 - Full Bloom' subTitle='새로운 앨범' />
        </div>

        {/* 커뮤니티 제공 */}
        <div className='mt-12'>
          <PlayListCarousel playlistArray={[...dummyPlaylistArray3]} title='커뮤니티 제공'/>
        </div>

        {/* 플레이 리스트 */}
        <div className='mt-12'>
          <PlayListCarousel playlistArray={[...dummyPlaylistArray4]} title='커버 및 리믹스' />
        </div>
      </div>
    </PagePadding>


  );
}
