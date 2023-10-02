import InstagramIcon from '@/components/icons/instagram'
import SparklesIcon from '@/components/icons/sparkles'
import WhtasappIcon from '@/components/icons/whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Franciele Stelle | Empreendedora',
  description: 'Franciele Stelle - Empreendedora'
}
export default function Page() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#FF3131]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/381358577_3638371453152448_2478589154518273798_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=lHNPOH5DoL8AX80H7Gk&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfC5Tdj_a_luM4imbJIV95migiaX3alo9sqOgkSHaIFtBA&oe=651F2850&_nc_sid=b41fef"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">Franciele Stelle</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>Empreendedora</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-sx uppercase px-4 md:p-0">
        <a
          href="https://wa.me/5565996306382"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#FF3131] border border-[#FF3131] p-2 w-full"
        >
          <WhtasappIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/fraan_unhasedepilacao/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#FF3131] border border-[#FF3131] p-2 w-full"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a
          href="https://gibify.app/francielistelle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#FF3131] border border-[#FF3131] p-2 w-full"
        >
          <SparklesIcon />
          <span>Sobre Mim</span>
        </a>
      </div>
    </>
  )
}
