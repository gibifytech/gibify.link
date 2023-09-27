import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Cia dos Celulares e Presentes',
  description: 'O shopping da sua Família.',
}
export default function CiaCelularesPresentesPage() {
  return (
    <>
      <div className='flex gap-2 items-center justify-center mt-6 w-full h-[100px] md:p-0 px-4'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-black"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/377572741_145015205343548_4144750756960278547_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=v-MjcrylPDsAX-AGDCY&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBaAVk_vQpRpXP-XaBLiLnt1aOspe9oXU4XxQcNpfnmuA&oe=6518B47F&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>Cia dos Celulares e Presentes</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4 md:p-0 px-4">
        <ul>
          <li>
            O shopping da sua Família.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 text-xs uppercase md:p-0 px-4">
        <a
          href="https://wa.me/5565999897427"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-white bg-black border border-black p-2 w-full"
        >
          <WhtasappIcon />
          <span >WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/ciadoscelularepresentes/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-white bg-black border border-black p-2 w-full"
        >
          <InstagramIcon />
          <span >Instagram</span>
        </a>
      </div>
    </>
  )
} 
