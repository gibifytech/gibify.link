"use client"
import { usePathname } from "next/navigation";
import LogoSquare from "../logo-square";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' ? (
        <></>
      ) : (
        <header className="border-b border-neutral-200 dark:border-neutral-700 p-8  w-full">
          <div className='flex items-center text-sm font-medium uppercase gap-2'>
            <LogoSquare size='sm' />
            gibify<span className="text-green-500">.link</span>
          </div>
        </header>
      )}
    </>
  )
}