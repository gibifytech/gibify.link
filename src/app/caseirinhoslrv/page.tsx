import InstagramIcon from "@/components/icons/instagram";
import WhtasappIcon from "@/components/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Caseirinhos | Confeitaria',
  description: 'O gostinho de casa onde quer que você esteja.',
}
export default function CaseirinhosLRVPage() {
  return (
    <>
      <div className='flex md:flex-row flex-col gap-4 items-center justify-center mt-8  w-full'>
        <Image
          className="w-20 h-20 p-1 rounded-full ring-2 ring-[#2F2E2C] dark:ring-[#FCF7F1]"
          src="https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/382970735_1237013846972287_1826560910688034523_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Dcq5drWCLV4AX9wMCqA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDm84ia-eeo29GmU9byOO2UkvLFur2uePi7i245mtL50Q&oe=651834C9&_nc_sid=8b3546"
          alt="Bordered avatar"
          width={80}
          height={80}
        />
        <span className='text-black dark:text-white text-xl'>Caseirinhos</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>
            O gostinho de casa onde quer que você esteja.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 max-w-sm w-full text-xs uppercase px-4 md:p-0">
        <a
          href="https://wa.me/5565996133985"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-[#2F2E2C] bg-[#FCF7F1] border border-[#2F2E2C] p-2 w-full"
        >
          <WhtasappIcon />
          <span className="md:text-base text-sm">WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/caseirinhoslrv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-3xl font-medium text-[#2F2E2C] bg-[#FCF7F1] border border-[#2F2E2C] p-2 w-full"
        >
          <InstagramIcon />
          <span className="md:text-base text-sm">Instagram</span>
        </a>
      </div>
    </>
  )
} 
