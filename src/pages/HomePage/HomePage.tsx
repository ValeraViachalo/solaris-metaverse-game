'use client'
import { ScrollProvider } from '@/helpers/scrollProvider'
import Hero from './Hero/Hero'
import Future from './Future/Future'
import Download from './Download/Download'
import AboutProject from './AboutProject/AboutProject'
import Story from './Story/Story'

export default function Home() {

  return (
    <main id="js-scroll">
      <Hero />
      <Future />
      <Download />
      <AboutProject />
      <Story />
    </main>
  )
}
