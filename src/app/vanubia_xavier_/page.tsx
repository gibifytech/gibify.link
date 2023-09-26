import InstagramIcon from "@/components/icons/instagram";
import SparklesIcon from "@/components/icons/sparkles";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Vanubia Xavier | Cabeleireira',
  description: 'Transformando você na sua melhor versão',
}
export default function VanubiaXavierPage() {
  return (
    <>
      <div className='flex gap-2 items-center justify-center mt-6 w-full h-[100px]'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-[#8F6566]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/296612066_623545722520792_3226160538313054067_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZbmaS8A2P1QAX_ClswH&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBNcAsvBBqfIaaUcIwh0zZSLC3sVjWxQ3oYkoqtKTt5vQ&oe=65164795&_nc_sid=ee9879"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>Vanubia Xavier</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4">
        <ul>
          <li>
            Esteticista apaixonada pela área capilar!
            Transformando você na sua melhor versão!
            Lembre-se sempre : Se nada mudar! mude você.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 md:text-base text-sm">
        <a
          href="https://wa.me/5565992700066"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-[#8F6566] bg-[#EFD8D2] border border-[#8F6566] p-2 w-full"
        >
          <WhtasappIcon />
          <span className="md:text-base text-sm">WhatsApp</span>
        </a>
        <a
          href="https://vanubia.my.canva.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-[#8F6566] bg-[#EFD8D2] border border-[#8F6566] p-2 w-full"
        >
          <SparklesIcon />
          <span className="md:text-base text-sm">Sobre Mim</span>
        </a>
        <a
          href="https://www.instagram.com/vanubia_xavier_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-[#8F6566] bg-[#EFD8D2] border border-[#8F6566] p-2 w-full"
        >
          <InstagramIcon />
          <span className="md:text-base text-sm">Instagram</span>
        </a>
      </div>
    </>
  )
} 
