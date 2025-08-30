"use client"
 
import { TextScroll } from "@/components/ui/text-scroll"
 
export function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display special-font text-center text-4xl font-semibold tracking-tighter bgc2 text-zinc-900 dark:text-white md:text-5xl md:leading-[5rem]"
      text="Trygve Pixel  •"
      default_velocity={5}
    />
  )
}
