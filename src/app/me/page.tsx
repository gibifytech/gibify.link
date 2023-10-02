import { Metadata } from 'next'
import Image from 'next/image'
import GithubIcon from '@/components/icons/github'
import WhtasappIcon from '@/components/icons/whatsapp'
import LinkedInIcon from '@/components/icons/linkedin'

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Web Developer',
  description: 'Next.js, React.js, Javascript, Typescript.'
}
export default function MePage() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-green-500"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/339312817_1385531305557881_1955479138216635658_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZJw_HRajS6UAX-N7ZrU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBrxy7cVYjJWEPudWLm68AVuH6ZFAtv_0183gdBsyLO-Q&oe=651612AC&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">Evandro Gibicoski</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>
            Apaixonado por desenvolver aplicações web e criar um mundo de conexões através da
            internet.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://www.linkedin.com/in/gibifydev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <LinkedInIcon />
          <span>linkedin</span>
        </a>
        <a
          href="https://github.com/gibify"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <GithubIcon />
          <span>github</span>
        </a>
        <a
          href="https://wa.me/5548998463847"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-white bg-green-500 border border-green-500 p-2 w-full"
        >
          <WhtasappIcon />
          <span>whatsApp</span>
        </a>
      </div>
    </>
  )
}
