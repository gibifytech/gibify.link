import { Metadata } from 'next'
import Image from 'next/image'
import WhtasappIcon from '@/components/icons/whatsapp'
import GlobeIcon from '@/components/icons/globe'
import InstagramIcon from '@/components/icons/instagram'

export const metadata: Metadata = {
  title: 'Gibify | Marketing Tecnologia',
  description: 'Transformando idéias em sucesso online.',
}
export default function MktechPage() {
  return (
    <>
      <div className='flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full'>
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#8C52FF]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/384081426_342658424832184_6414952961385406642_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=2fFejtcKydkAX8aZiqQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDacNLdmAqcJ41WvUntsL9Frn6X_Rmk2lQ6eV2p1aBh-g&oe=65190238&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className='text-black dark:text-white text-xl'>Gibify Marketing Tecnologia</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>
            Agência de Marketing e Tecnologia.
          </li>
          <li>
            Transformando idéias em sucesso online.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://wa.me/5547984031893"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#8C52FF] border border-[#8C52FF] p-2 w-full"
        >
          <WhtasappIcon />
          <span >WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/gibifymarketing_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#8C52FF] border border-[#8C52FF] p-2 w-full"
        >
          <InstagramIcon />
          <span >Instagram</span>
        </a>
        <a
          href="https://gibify.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#8C52FF] border border-[#8C52FF] p-2 w-full"
        >
          <GlobeIcon />
          <span >WebSite</span>
        </a>
      </div>
    </>
  )
}
