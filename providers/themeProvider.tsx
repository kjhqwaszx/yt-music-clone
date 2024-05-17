"use client"

import * as React from "react"
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import {useEffect, useState} from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mount, setMount] = useState<boolean>(false)
  const { setTheme } = useTheme()


  useEffect(()=>{
    setMount(true)
    setTheme("dark")
  },[])

  if(!mount) return null


  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
