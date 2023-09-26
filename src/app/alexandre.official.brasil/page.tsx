import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Alexandre Brasil | Web Developer',
  description: 'Apaixonado pelas linhas de códigos',
}
export default function AlexandreOfficialBrasilPage() {
  return (
    <main className="flex max-w-5xl w-full min-h-screen flex-col items-center justify-start p-5 mx-auto">
      <div className='flex gap-2 items-center justify-start mt-6'>
        <Image
          className="w-[75px] h-[75px] p-1 rounded-full ring-2 ring-green-500"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/361890449_183801664680630_8733781334214549013_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yD516M80ktwAX-n0vKv&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCowH9tlrdPX7r5f0lwF2nL8yDcjqrI15Lklzig9-BN-A&oe=651758B1&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>Alexandre Brasil</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4">
        <ul className="flex flex-col gap-2">
          <li>
            Qualquer um pode escrever um código que o computador entenda.
            Bons programadores escrevem códigos que humanos entendam.
          </li>
          <li>💻 Web Developer</li>
          <li>💚 Apaixonado por códigos.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 text-xs uppercase">
        <a
          href="https://github.com/alexandre-cooper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <GithubIcon />
          <span >Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-brasil-dos-santos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://wa.me/5565992792383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <WhtasappIcon />
          <span >WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/alexandre.official.brasil/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <InstagramIcon />
          <span >Instagram</span>
        </a>
      </div>
    </main>
  )
} 
