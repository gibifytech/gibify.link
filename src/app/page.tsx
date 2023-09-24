import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 max-w-5xl mx-auto">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/gibify.link.svg"
          alt="Logo da Gibidy Link"
          className="dark:invert"
          width={300}
          height={60}
          priority
        />
      </div>


      <h1 className='text-3xl md:text-6xl'>Simplificando a maneira de você compartilhar seu conteúdo na internet.</h1>
      <p>
        O <i>Gibify Link</i> é a ferramenta ideal para influenciadores, criadores de conteúdo, empresas e qualquer pessoa que deseja otimizar sua presença online.
        É hora de simplificar a maneira como você compartilha seu conteúdo na web.
        Junte-se ao <i>Gibify Link</i> e crie seu link personalizado hoje mesmo!
      </p>

      <div className="mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
        <a
          href=""
          className="group rounded-lg border border-transparent uppercase text-lg font-semibold p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp
        </a>
      </div>
    </main>
  )
}
