'use client'
import { usePathname } from 'next/navigation'
import LogoSquare from '../logo-square'
import { Roboto } from 'next/font/google'
import { ThemeSwitcher } from '../ThemeSwitcher'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/' ? (
        <></>
      ) : (
        <header className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 p-8 fixed backdrop-blur-sm">
          <div className="flex items-center text-sm font-bold uppercase gap-2">
            <LogoSquare size="sm" />
            <p className={roboto.className}>gibify link</p>
          </div>
          <ThemeSwitcher />
        </header>
      )}
    </>
  )
}
