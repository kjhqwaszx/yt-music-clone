'use client'

import {useEffect} from 'react';
import useUIState from '@/app/hooks/useUIState';

export default function HeaderBgChanger({imageSrc}){

  const {setHeaderImageSrc} = useUIState()

  useEffect(() => {
    if(imageSrc) setHeaderImageSrc(imageSrc)
  }, [imageSrc]);

  return <></>
}