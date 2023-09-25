
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="w-full border-t p-4 text-center">
      <p> &copy; {copyrightDate} Todos os direitos reservados.</p>
      <a
        href="https://gibify.com.br"
        className="text-black/70  cursor-pointer"
      >
        App da <strong>Gibify -  Marketing e Technologia</strong>
      </a>
    </footer>
  )
}