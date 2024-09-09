export default function TermsOfService() {
  const date = new Date().toLocaleDateString('pt-BR')

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-50">
      <h2 className="text-2xl font-bold mb-4">Termos de Serviço</h2>
      <p className="mb-4">
        <strong>Última atualização: {date}</strong>
      </p>
      <p className="mb-4">
        Bem-vindo ao Gibify Link! Ao utilizar nosso serviço, você concorda com os seguintes Termos
        de Serviço. Por favor, leia-os com atenção.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Aceitação dos Termos</h3>
      <p className="mb-4">
        Ao acessar e utilizar o Gibify Link, você concorda em cumprir e estar sujeito a estes Termos
        de Serviço. Se você não concordar com qualquer parte dos termos, não deve utilizar nosso
        serviço.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Descrição do Serviço</h3>
      <p className="mb-4">
        O Gibify Link permite que os usuários criem, gerenciem e compartilhem links na internet. Nós
        nos reservamos o direito de modificar ou descontinuar o serviço a qualquer momento, sem
        aviso prévio.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Responsabilidades do Usuário</h3>
      <p className="mb-4">
        Você é responsável por todo o conteúdo que compartilha através do Gibify Link. Isso inclui,
        mas não se limita a, garantir que os links compartilhados não violem direitos autorais,
        marcas registradas, privacidade ou outros direitos de terceiros.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Uso Adequado</h3>
      <p className="mb-4">
        Você concorda em não usar o Gibify Link para qualquer atividade ilegal ou que viole as
        diretrizes estabelecidas por estes Termos de Serviço. Qualquer uso inadequado pode resultar
        na suspensão ou encerramento de sua conta.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Propriedade Intelectual</h3>
      <p className="mb-4">
        Todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual
        relacionados ao Gibify Link e seu conteúdo são de propriedade exclusiva do [Nome da
        Empresa]. O uso do nosso serviço não lhe concede direitos de propriedade sobre o conteúdo
        acessado.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Limitação de Responsabilidade</h3>
      <p className="mb-4">
        O Gibify Link não será responsável por quaisquer danos diretos, indiretos, incidentais ou
        consequentes decorrentes do uso ou da incapacidade de uso do serviço.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Alterações nos Termos</h3>
      <p className="mb-4">
        O Gibify Link pode modificar estes Termos de Serviço a qualquer momento. Quaisquer
        alterações serão publicadas nesta página, e o uso continuado do serviço após tais alterações
        constitui sua aceitação dos novos termos.
      </p>
    </div>
  )
}
