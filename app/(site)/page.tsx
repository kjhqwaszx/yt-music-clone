import Category from '@/app/(site)/components/home/Category';
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/app/(site)/components/home/PlayListCarousel';
import {dummyPlaylistArray} from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';

export default async function Page  () {
  const dummyPlaylistArray1 = [...dummyPlaylistArray]
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

      </div>
    </PagePadding>


  );
}
