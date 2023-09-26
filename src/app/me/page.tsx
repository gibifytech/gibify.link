import { Metadata } from 'next'
import Image from 'next/image'
import GithubIcon from '@/components/icons/github'
import SparklesIcon from '@/components/icons/sparkles'
import WhtasappIcon from '@/components/icons/whatsapp'

export const metadata: Metadata = {
  title: 'Evandro Gibicoski | Web Developer',
  description: 'Next.js, React.js, Javascript, Typescript, CSS e HTML',
  assets: 'https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/339312817_1385531305557881_1955479138216635658_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZJw_HRajS6UAX-N7ZrU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBrxy7cVYjJWEPudWLm68AVuH6ZFAtv_0183gdBsyLO-Q&oe=651612AC&_nc_sid=8b3546"'
}
export default function MePage() {
  return (
    <>
      <div className='flex gap-2 items-center justify-start mt-6'>
        <Image
          className="w-[70px] h-[70px] p-1 rounded-full ring-2 ring-green-500"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/339312817_1385531305557881_1955479138216635658_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZJw_HRajS6UAX-N7ZrU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBrxy7cVYjJWEPudWLm68AVuH6ZFAtv_0183gdBsyLO-Q&oe=651612AC&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={75}
          height={75}
        />
        <span className='text-black dark:text-white md:text-lg text-base'>Evandro Gibicoski</span>
      </div>
      <div className="max-w-sm w-full mt-6 my-4">
        <ul>
          <li>
            Apaixonado por desenvolver aplicações web
            e criar um mundo de conexões através da internet.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full mt-6 md:text-base text-sm">
        <a
          href="https://wa.me/5548998463847"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-green-500 bg-white border border-green-500 p-2 w-full"
        >
          <WhtasappIcon />
          <span className="md:text-base text-sm">WhatsApp</span>
        </a>
        <a
          href="https://github.com/gibify"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-green-500 bg-white border border-green-500 p-2 w-full"
        >
          <GithubIcon />
          <span className="md:text-base text-sm">Github</span>
        </a>
        <a
          href="https://gibify.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl text-green-500 bg-white border border-green-500 p-2 w-full"
        >
          <SparklesIcon />
          <span className="md:text-base text-sm">WebSite</span>
        </a>
      </div>
    </>
  )
}
