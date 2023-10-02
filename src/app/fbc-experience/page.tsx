import { Metadata } from 'next'
import Image from 'next/image'
import WhtasappIcon from '@/components/icons/whatsapp'
import GroupIcon from '@/components/icons/group'
import GlobeIcon from '@/components/icons/globe'

export const metadata: Metadata = {
  title: 'FBC Experience | Bike e Pedal',
  description: 'Compartilhando experiências com pessoas apaixonadas por Bikes.'
}
export default function MePage() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#F34006]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/275143548_694630131706428_4532701665689587116_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=8ipt7pz2qugAX_DKuHu&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBYQkLWieRm2JLCdkruTKb8Y3azjmZp-X4ZUn1Rj39xxw&oe=651EF58A&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">FBC Experience</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>Compartilhando experiências com pessoas apaixonadas por Bikes.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://chat.whatsapp.com/CmS7JTuGr9nJ4QOrH5Mv7p"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#F34006] border border-[#F34006] p-2 w-full"
        >
          <GroupIcon />
          <span>nosso grupo</span>
        </a>
        <a
          href="https://wa.me/48998317855"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#F34006] border border-[#F34006] p-2 w-full"
        >
          <WhtasappIcon />
          <span>whatsApp</span>
        </a>
        <a
          href="https://www.floripabikeclub.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-[#F34006] border border-[#F34006] p-2 w-full"
        >
          <GlobeIcon />
          <span>website</span>
        </a>
      </div>
    </>
  )
}
