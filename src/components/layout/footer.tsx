
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="w-full border-t p-4 text-center text-black dark:text-white">
      <p> &copy; {copyrightDate} Todos os direitos reservados por <a href="https://gibify.link" className="text-black/70 font-semibold">Gibify Link</a></p>
      <p>
        App Desenvolvido pela <br />
        <a
          href="https://gibify.com.br"
          className="text-black/70 font-semibold"
        >
          Gibify -  Marketing e Technologia
        </a>
      </p>
    </footer>
  )
}