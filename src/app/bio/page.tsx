import Image from 'next/image'
import { Roboto, Inter } from 'next/font/google'
import Icons from '@/components/icons'

const roboto = Roboto({ weight: ['500'], style: 'normal', subsets: ['latin'], display: 'swap' })
const inter = Inter({ weight: ['500'], style: 'normal', subsets: ['latin'], display: 'swap' })

const links = [
  {
    icon: 'mkt',
    label: 'social media',
    value: 'https://wa.me/message/YVLQXFZAHELVF1'
  },
  {
    icon: 'link',
    label: 'link na bio',
    value: 'https://gibify.link'
  },
  {
    icon: 'querystats',
    label: 'Google Ads',
    value: 'https://wa.me/message/YVLQXFZAHELVF1'
  },
  {
    icon: 'adsclick',
    label: 'Meta Ads',
    value: 'https://wa.me/message/YVLQXFZAHELVF1'
  },
  {
    icon: 'sell',
    label: 'E-commerce',
    value: 'https://wa.me/message/YVLQXFZAHELVF1'
  },
  {
    icon: 'website',
    label: 'Nosso Website',
    value: 'https://gibify.com.br'
  }
]
export default async function Page() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
        <Image
          src="/images/gibify-mktech.png"
          alt=""
          width={80}
          height={80}
          objectFit="cover"
          priority
          className="w-20 h-20 p-1 rounded-full ring-2 ring-black dark:ring-white"
        />
        <span className={`${roboto.className} text-black font-semibold text-lg`}>
          Gibify - Marketing & Tecnologia
        </span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul className={`${inter.className} flex fle-col items-center justify-center`}>
          <li>Transformando idéias em sucesso online.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4  max-w-sm w-full text-xs uppercase px-4 md:p-0">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.value}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end justify-center gap-2 rounded-3xl text-white font-semibold border border-transparent p-2 w-full bg-gradient-to-r from-[#8C52FF] to-[#0F9D58]"
          >
            <Icons icon={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </>
  )
}
