import { ThemeSwitcher } from '../ThemeSwitcher'
import LogoSquare from '../logo-square'
import Share from '../share'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')

  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-700 px-4 text-center text-black dark:text-white">
      <div className="w-full flex items-center justify-center gap-3 border-b border-neutral-200 dark:border-neutral-700 py-4">
        <ThemeSwitcher />
        <Share />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-center text-sm font-medium uppercase gap-2 my-4">
          <LogoSquare size="sm" />
          <a href="https://gibify.link">
            gibify<span className="text-green-500"> .link</span>
          </a>
        </div>
        <p> &copy; {copyrightDate} Todos os direitos reservados.</p>
        <p className="mb-4 mt-2">
          <a href="https://gibify.com.br" className="font-semibold">
            Gibify - Marketing e Tecnologia
          </a>
        </p>
      </div>
    </footer>
  )
}
