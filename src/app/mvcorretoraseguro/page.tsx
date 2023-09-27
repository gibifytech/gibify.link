import GlobeIcon from "@/components/icons/globe";
import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'MV Corretora de Seguros e Assessoria',
  description: 'Corretora de Seguro e Assessoria.',
}
export default function MVCorretoraSeguroPage() {
  return (
    <>
      <div className='flex gap-2 items-center justify-center mt-6 w-full h-[100px] md:p-0 px-4'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-[#D7B440]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/366422309_1072876883707191_8465210700022159250_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lQbqnUmDbg0AX8_uqBf&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD72-u_xtFqpxVQIEj88x_51Q1ofXEVAgjlzBXKDc9qrw&oe=65197E9B&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>MV Corretora de Seguros e Assessoria</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4 md:p-0 px-4">
        <ul>
          <li>
            Queremos que você se sinta seguro ao contar conosco para protejer seu patrimônio e seu futuro.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 text-xs uppercase md:p-0 px-4">
        <a
          href="https://wa.me/5565999527698"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-[#D7B440] bg-black border border-[#D7B440] p-2 w-full"
        >
          <WhtasappIcon />
          <span >WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/mvcorretoraseguro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-[#D7B440] bg-black border border-[#D7B440] p-2 w-full"
        >
          <InstagramIcon />
          <span >Instagram</span>
        </a>
        <a
          href="https://gibify.app/mvcorretoraseguro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-[#D7B440] bg-black border border-[#D7B440] p-2 w-full"
        >
          <GlobeIcon />
          <span >WebSite</span>
        </a>
      </div>
    </>
  )
} 
