import Carousel from '@/components/carousel'
import WhtasappIcon from '@/components/icons/whatsapp'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | Gibify Link',
    description: 'Simplificando a maneira de compartilhar seus links na internet.',
    openGraph: {
      type: 'website',
      title: 'Home | Gibify Link',
      description: 'Simplificando a maneira de compartilhar seus links na internet.',
      url: 'https://gibify.link',
      siteName: 'Gibify Link'
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      title: 'Home | Gibify Link',
      description: 'Simplificando a maneira de compartilhar seus links na internet.',
      site: 'https://gibify.link'
    }
  }
}

export default function HomePage() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          width: '100%',
          height: '100%',
          marginTop: 100
        }}
      >
        <div className="max-w-5xl mx-auto p-6 md:p-8">
          <h1 className="text-3xl md:text-6xl font-medium mt-8">
            Simplificando a maneira de compartilhar seus links na internet.
          </h1>
          <h3 className="md:text-xl text-lg text-black/70 dark:text-white/70 mt-10">
            A <i>Gibify Link</i> é a ferramenta ideal para Empresas, Influenciadores, criadores de
            conteúdo, e qualquer pessoa que deseja otimizar sua presença online. É hora de
            simplificar a maneira de compartilhar seu conteúdo na internet.
            <br />
            Junte-se a <i className="font-medium text-green-500">gibify.link</i> e crie seu link
            personalizado hoje mesmo!
          </h3>

          <div className="mt-10 border-l-2 border-black/70 dark:border-white/30 pl-4">
            <p className="text-black/70 dark:text-white">
              Fale com um dos nossos consultores e crie seu link personalizado.
            </p>
            <a
              href="https://wa.me/5565993562754?text=Tenho%20interesse%20pelo%20link%20na%20bio%20no%20Instagram."
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-sm mt-4 items-center text-green-500 justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
            >
              <WhtasappIcon />
              <span className="md:text-base text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  )
}
