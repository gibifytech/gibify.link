import WhtasappIcon from '@/components/icons/whatsapp'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 md:p-10 max-w-5xl mx-auto">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/gibify.link.svg"
          alt="Logo da Gibidy Link"
          className="dark:invert"
          width={160}
          height={60}
          priority
        />
      </div>


      <h1 className='text-3xl md:text-6xl font-medium mt-8'>
        Simplificando a maneira de compartilhar seus links na internet.
      </h1>
      <h3 className='md:text-xl text-lg text-black/70 mt-8'>
        O <i>Gibify Link</i> é a ferramenta ideal para influenciadores, criadores de conteúdo, e qualquer pessoa que deseja otimizar sua presença online.
        É hora de simplificar a maneira de compartilhar seu conteúdo na internet.
        Junte-se a <i>Gibify Link</i> e crie seu link personalizado hoje mesmo!
      </h3>

      <div className="mt-8 border-l-2 pl-4">
        <p className='text-black/60'>Fale com um dos nossos Ddesenvolvedores e cria seu link com a hospedagem, SSL e domínio totalmente grátis.</p>
        <a
          href="https://wa.me/5565992792383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-w-sm mt-4 items-center justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
        >
          <WhtasappIcon />
          <span className="md:text-base text-sm">WhatsApp</span>
        </a>
      </div>
    </main>
  )
}
