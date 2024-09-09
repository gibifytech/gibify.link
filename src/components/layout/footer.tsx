import { ThemeSwitcher } from '../ThemeSwitcher'
import LogoSquare from '../logo-square'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-700 px-4 text-center text-black dark:text-white">
      <div className="w-full flex items-center justify-center gap-3 border-b border-neutral-200 dark:border-neutral-700 py-4">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col justify-center items-center my-4">
        <p> &copy; {currentYear} Todos os direitos reservados.</p>
        <a
          href="https://gibify.link"
          className="flex items-center text-sm font-bold uppercase gap-2 mb-4 mt-2"
        >
          <LogoSquare size="sm" />
          <p className={roboto.className}>gibify link</p>
        </a>
      </div>
    </footer>
  )
}
