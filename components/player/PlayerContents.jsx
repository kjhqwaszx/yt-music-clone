'use client'

import {PlayerSlider} from '@/components/ui/PlayerSlider';
import {useAudio} from 'react-use';
import {IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline} from 'react-icons/io5';
import {AiFillCaretUp, AiOutlinePause} from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import {ClipLoader} from 'react-spinners';
import {RiPlayFill} from 'react-icons/ri';
import Image from 'next/image';
import {RxLoop} from 'react-icons/rx';
import {useCallback, useEffect} from 'react';

export default function PlayerContents() {
  const {activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext} = usePlayerState()
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,
    autoPlay: true
  })
  const isLoading = activeSong?.src && state.buffered?.length === 0

  const onClickPrevBtn = () => {
    if(state.playing && state.time > 10){
      controls.seek(0)
      return
    }

    if(prevPlayerQueue.length === 0 ) return;
    playBack()
  }
  const onClickPlayBtn = () => {
    if(activeSong){
      controls.play();
    }else{
      playNext();
    }
  }
  const onClickPauseBtn = () => {
    controls.pause();
  }
  const onClickNextBtn = useCallback(() => {
    if(nextPlayerQueue?.length === 0){
      controls.pause();
    }else{
      playNext()
    }
  }, [controls, playNext, nextPlayerQueue])

  useEffect(() => {
    // 노래가 끝났는지
    ref?.current?.addEventListener('ended',onClickNextBtn)

    return () =>{
      ref?.current?.removeEventListener('ended', onClickNextBtn)
    }
  }, [ref, onClickNextBtn]);

  const getSeekPlayTime = (value) =>{
    controls.seek(value)
  }
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-[-16px] w-full'>
        <PlayerSlider className='w-full' defaultValue={[0]} value={[state.time]} onValueChange={(value)=> getSeekPlayTime(value)} max={state.duration}/>
      </div>
      {audio}
      <section className='flex flex-row justify-between items-center w-full h-full px-2 lg:px-6'>
        <div className='flex flex-row items-center gap-1 lg:gap-8'>
          <IoPlaySkipBackSharp size={24} className='cursor-pointer' onClick={onClickPrevBtn} />
          {
            isLoading ? <ClipLoader color='#FFF'/>
              : (
                state.playing ?
                <AiOutlinePause size={40} className='cursor-pointer' onClick={onClickPauseBtn}/>
                  : <RiPlayFill size={40} className='cursor-pointer' onClick={onClickPlayBtn} />
            )
          }
          <IoPlaySkipForwardSharp size={24} className='cursor-pointer' onClick={onClickNextBtn} />
        </div>
        <article className='flex flex-row gap-4 items-center'>
          <div className='relative w-[40px] h-[40px]'>
            <Image fill src={activeSong?.imageSrc} alt='image'/>
          </div>
          <div className='flex flex-col'>
            <div>{activeSong?.name}</div>
            <div className='text-neutral-500 text-[14px]'>{activeSong?.channel} • 조회수 7.3만 • 좋아요 1.3천개  </div>
          </div>
        </article>
        <div className='flex flex-row gap-2'>
          <div className='lg:flex hidden flex-row gap-2 '>
            <IoVolumeHighOutline size={24} className='cursor-pointer'/>
            <IoShuffle size={24} className='cursor-pointer'/>
            <RxLoop size={24} className='cursor-pointer'/>

          </div>
          <di>
            <AiFillCaretUp size={24} className='cursor-pointer'/>
          </di>
        </div>
      </section>
    </div>
  )
}