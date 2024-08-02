import {create} from "zustand"

interface UIState {
  homeCategory: string,
  headerImageSrc: string,
  setHomeCategory: (value: string) => void
  setHeaderImageSrc: (src: string) => void
  libraryCategory: string
  setLibraryCategory: (value: string) => void

}
const useUIState = create<UIState>((set)=>({
  homeCategory: "",
  headerImageSrc: "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value) => set({homeCategory: value}),
  setHeaderImageSrc: (src) => set({headerImageSrc: src}),

  libraryCategory: '',
  setLibraryCategory: (value) => set({ libraryCategory: value }),

}))

export default useUIState;