import Image from "next/image";
import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Meyqscilaine Gonçalves | Tecnologia do marketing',
  description: 'Social media apaixonada em criar e planejar conteúdos que gerem resultados.',
}
export default function MeyqscilainePage() {
  return (
    <>
      <div className='flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full h-[100px]'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-[#8F6566]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/296612066_623545722520792_3226160538313054067_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZbmaS8A2P1QAX_ClswH&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBNcAsvBBqfIaaUcIwh0zZSLC3sVjWxQ3oYkoqtKTt5vQ&oe=65164795&_nc_sid=ee9879"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white text-xl'>Meyqscilaine Gonçalves</span>
      </div>

      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>
            Tecnologia do marketing <br />
            Social media apaixonada em criar e planejar conteúdos que gerem resultados.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-sx uppercase px-4 md:p-0">
        <a
          href="https://wa.me/5565993562754"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-[#8F6566] bg-[#EFD8D2] border border-[#8F6566] p-2 w-full"
        >
          <WhtasappIcon />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/meyqscilaine_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-[#8F6566] bg-[#EFD8D2] border border-[#8F6566] p-2 w-full"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </div>
    </>
  )
} 
