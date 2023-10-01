import InstagramIcon from '@/components/icons/instagram'
import SparklesIcon from '@/components/icons/sparkles'
import WhtasappIcon from '@/components/icons/whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Taila Lima Amaral | Bloqueira',
  description: 'Colecionando sorrisos, amores e momentos!'
}
export default function TailaAmaralPage() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#EC5702]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/363500300_3140470339593033_7310138449495673527_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ni9KlSP2iegAX_fisA8&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBOEVErWe7khSmD6KLgsJP-vDUMaiBlG9diVF7_AjZUig&oe=651D6F7A&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">Taila Lima Amaral</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>Ela é de exageros. Seja na força, no sorriso, na fé ou no amor...</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://wa.me/5565999021207"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#EC5702] border border-[#EC5702] p-2 w-full"
        >
          <WhtasappIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/taillamaral/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#EC5702] border border-[#EC5702] p-2 w-full"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a
          href="https://gibify.app/taillaamaral/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#EC5702] border border-[#EC5702] p-2 w-full"
        >
          <SparklesIcon />
          <span>Sobre Mim</span>
        </a>
      </div>
    </>
  )
}
