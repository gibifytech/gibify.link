
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-700 p-4 text-center text-black dark:text-white">
      <p> &copy; {copyrightDate} Todos os direitos reservados.</p>
      <p>
        App Desenvolvido pela <br />
        <a
          href="https://gibify.com.br"
          className="font-semibold"
        >
          Gibify -  Marketing e Technologia
        </a>
      </p>
    </footer>
  )
}