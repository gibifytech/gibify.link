import InstagramIcon from '@/components/icons/instagram'
import SparklesIcon from '@/components/icons/sparkles'
import WhtasappIcon from '@/components/icons/whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Franciele Stelle | Empreendedora',
  description: 'Ser manicure é ajudar a colorir a vida das pessoas.'
}
export default function Page() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#FF3131]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/385708922_1029044068250803_2660859815926234724_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1A6uQkQH3gkAX8TY630&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC8HdPsBfRUwnVUOc4xHf_Bo69Wbcljp-ET4l7Q8BlFUA&oe=651F5050&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">Franciele Stelle</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>Ser manicure é ajudar a colorir a vida das pessoas.</li>
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
