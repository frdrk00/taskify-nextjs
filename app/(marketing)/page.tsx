import Link from 'next/link'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import { Medal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
})

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn('flex items-center justify-center flex-col', headingFont.className)}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">Taskify helps team move</h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}>
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your
        team works is unique — accomplish it all with Taskify.
      </div>
      <Button
        className="mt-6"
        size="lg"
        asChild>
        <div className="flex items-center gap-4">
          <Link href="/sign-up">Get Taskify for free</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-neutral-200 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </Button>
    </div>
  )
}

export default MarketingPage
