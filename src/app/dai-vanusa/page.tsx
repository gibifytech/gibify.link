import Image from 'next/image'
import { Metadata } from 'next'
import InstagramIcon from '@/components/icons/instagram'
import WhtasappIcon from '@/components/icons/whatsapp'

export const metadata: Metadata = {
  title: 'Dai Vanusa | Advogada e Ciclista',
  description: 'Advogada e Ciclista nas horas vagas.'
}
export default function Page() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-pink-700"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/312159260_492070076269939_5285625998172978107_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qRq03DBjKv4AX8ibRv1&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCCXt0BK24VrLwZ01YCxp8yx9kw2QmQCKowTO7DZBh5lQ&oe=651FD4A5&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">Dai Vanusa</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>
            Advogada e Ciclista nas horas vagas. <br />
            Entre em contato
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-sx uppercase px-4 md:p-0">
        <a
          href="https://wa.me/554898317855"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-pink-700 border border-pink-700 p-2 w-full"
        >
          <WhtasappIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/dai.vanusa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-pink-700 border border-pink-700 p-2 w-full"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </div>
    </>
  )
}
