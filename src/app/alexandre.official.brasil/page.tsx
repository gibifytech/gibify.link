import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Gibify Link | Alexandre Brasil',
  description: 'Simplificando a maneira de compartilhar seus links na internet.',
}
export default function AlexandreOfficialBrasilPage() {
  return (
    <main className="flex max-w-5xl w-full min-h-screen flex-col items-center justify-start p-5 mx-auto">
      <div className='flex gap-2 items-center mb-4'>
        <Image
          className="w-10 h-10 p-1 rounded-full ring-2 ring-green-500"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/361890449_183801664680630_8733781334214549013_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uZGBv9jmoQAAX-Hs4-D&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAcKCgVUYWbP7wOCMsz2l8SEQZKvheaRw2W1sqr8V9TOQ&oe=650F6FB1&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={10}
          height={10}
        />
        <span className='text-black dark:text-white'>Alexandre Brasil</span>
      </div>
      <div className="max-w-sm w-full mt-6">
        <ul>
          <li>Web Developer</li>
          <li>Apaixonado por  Programar</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 md:text-base text-sm">
        <a
          href="https://github.com/alexandre-cooper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
        >
          <GithubIcon />
          <span className="">Github</span>
        </a>
        <a
          href="https://wa.me/5565992792383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
        >
          <WhtasappIcon />
          <span className="md:text-base text-sm">WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/alexandre.official.brasil/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
        >
          <InstagramIcon />
          <span className="md:text-base text-sm">Instagram</span>
        </a>
      </div>
    </main>
  )
} 
