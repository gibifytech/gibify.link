import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-700 p-4 text-center text-black dark:text-white">
      <ThemeSwitcher />
      <div className="mt-5">
        <p> &copy; {copyrightDate} Todos os direitos reservados.</p>
        <p>
          <a
            href="https://gibify.com.br"
            className="font-semibold"
          >
            Gibify -  Marketing e Tecnologia
          </a>
        </p>
      </div>
    </footer>
  )
}