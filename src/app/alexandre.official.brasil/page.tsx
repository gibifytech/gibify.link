import GithubIcon from "@/components/icons/github";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Gibify Link | Alexandre Brasil',
  description: 'Simplificando a maneira de como você compartilha seus links na internet.',
}
export default function AlexandreOfficialBrasilPage() {
  return (
    <main className="flex max-w-5xl w-full min-h-screen flex-col items-center justify-start p-5 mx-auto">
      <div className='flex gap-2 items-center mb-4'>
        <Image
          className="w-10 h-10 p-1 rounded-full ring-2 ring-green-500/70"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/361890449_183801664680630_8733781334214549013_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=uZGBv9jmoQAAX-Hs4-D&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAcKCgVUYWbP7wOCMsz2l8SEQZKvheaRw2W1sqr8V9TOQ&oe=650F6FB1&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={10}
          height={10}
        />
        <span className='text-black'>Alexandre Brasil</span>
      </div>
      <div className="max-w-sm w-full mt-6">
        <p>
          Web Developer.
          Apaixonado por desenvolver aplicações.
        </p>
      </div>
      <div className="max-w-sm w-full mt-6">
        <a
          href="https://github.com/alexandre-cooper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl border border-green-500 p-2 w-full"
        >
          <GithubIcon />
          <span className="md:text-base text-sm">Github</span>
        </a>
      </div>
    </main>
  )
} 
