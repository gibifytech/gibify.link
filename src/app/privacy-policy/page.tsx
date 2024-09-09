export default function PrivacyPolicy() {
  const date = new Date().toLocaleDateString('pt-BR')

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-50">
      <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
      <p className="mb-4">
        <strong>Última atualização: {date}</strong>
      </p>
      <p className="mb-4">
        O Gibify Link valoriza a privacidade dos seus usuários. Esta Política de Privacidade
        descreve como coletamos, usamos e protegemos suas informações pessoais.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Informações Coletadas</h3>
      <p className="mb-4">
        Quando você usa o Gibify Link, podemos coletar as seguintes informações:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Dados de Cadastro:</strong> Nome, e-mail e outras informações fornecidas
          voluntariamente por você.
        </li>
        <li>
          <strong>Informações de Uso:</strong> Dados sobre como você utiliza o serviço, como links
          criados e compartilhados.
        </li>
        <li>
          <strong>Dados Técnicos:</strong> Informações como endereço IP, tipo de navegador e sistema
          operacional.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2. Uso das Informações</h3>
      <p className="mb-4">As informações coletadas são usadas para:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Fornecer e melhorar nossos serviços.</li>
        <li>Personalizar a experiência do usuário.</li>
        <li>Comunicar-se com você sobre atualizações, promoções e outros conteúdos relevantes.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">3. Compartilhamento de Informações</h3>
      <p className="mb-4">
        O Gibify Link não vende, troca ou aluga suas informações pessoais para terceiros. Podemos
        compartilhar informações apenas nas seguintes situações:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Com provedores de serviços que auxiliam na operação do nosso serviço.</li>
        <li>Quando exigido por lei ou em resposta a processos legais.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">4. Segurança</h3>
      <p className="mb-4">
        Adotamos medidas de segurança adequadas para proteger suas informações pessoais contra
        acesso não autorizado, alteração, divulgação ou destruição.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Cookies</h3>
      <p className="mb-4">
        O Gibify Link pode usar cookies e tecnologias semelhantes para melhorar a experiência do
        usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar
        algumas funcionalidades do serviço.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Alterações na Política de Privacidade</h3>
      <p className="mb-4">
        O [Nome da Empresa] pode atualizar esta Política de Privacidade periodicamente. Quaisquer
        alterações serão notificadas nesta página.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Contato</h3>
      <p className="mb-4">
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo
        e-mail{' '}
        <a href="mailto:gibifyofficial@gmail.com" target="_blank">
          gibifyofficial@gmail.com
        </a>
      </p>
    </div>
  )
}
