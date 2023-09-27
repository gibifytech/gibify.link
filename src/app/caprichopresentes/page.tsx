import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Capricho | Presentes & Utilidades',
  description: 'As melhores opções em presentes e utilidades.',
}
export default function CaprichoPresentesPage() {
  return (
    <>
      <div className='flex gap-2 items-center justify-center mt-6 w-full h-[100px] md:p-0 px-4'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-[#00789A]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/377312980_269332032614887_877906114347032228_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8pjz1T6L44oAX9M9g2o&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBHmDBV7NdmdIgt4r6dEK9SB3XkBvo52HWM9KxdHwDkMw&oe=651A2531&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>Capricho Presentes</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4 md:p-0 px-4">
        <ul>
          <li>Capricho Presentes & Utilidades</li>
          <li>
            As melhores opções em presentes e utilidades.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 text-xs uppercase md:p-0 px-4">
        <a
          href="https://wa.me/5565981715855"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-white bg-[#00789A] border border-[#00789A] p-2 w-full"
        >
          <WhtasappIcon />
          <span >WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/caprichopresentesnm/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-white bg-[#00789A] border border-[#00789A] p-2 w-full"
        >
          <InstagramIcon />
          <span >Instagram</span>
        </a>
      </div>
    </>
  )
} 
