import { Metadata } from 'next'
import Image from 'next/image'
import WhtasappIcon from '@/components/icons/whatsapp'
import GroupIcon from '@/components/icons/group'
import GlobeIcon from '@/components/icons/globe'

export const metadata: Metadata = {
  title: 'FLoripa Bike Club | Bike e Pedal',
  description: 'Junte-se a nós para explorar o melhor dos mundos com Bikes.'
}
export default function MePage() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#043ABE]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/145391375_233721654964949_4995220656859459600_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=n16kz8nAfm0AX93lt3Y&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCidaUa9SWF9txAkWN8ZXSC_dvhmcOpdMHtn5zLVZBB8Q&oe=6520A32F&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">FLoripa Bike Club</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>Junte-se a nós para explorar o melhor dos mundos com Bikes.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://chat.whatsapp.com/Cxxb9grJGPz8nRvDJbAzFR"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#043ABE] border border-[#043ABE] p-2 w-full"
        >
          <GroupIcon />
          <span>nosso grupo</span>
        </a>
        <a
          href="https://wa.me/5548998317855"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#043ABE] border border-[#043ABE] p-2 w-full"
        >
          <WhtasappIcon />
          <span>whatsApp</span>
        </a>
        <a
          href="https://www.floripabikeclub.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#043ABE] border border-[#043ABE] p-2 w-full"
        >
          <GlobeIcon />
          <span>website</span>
        </a>
      </div>
    </>
  )
}
