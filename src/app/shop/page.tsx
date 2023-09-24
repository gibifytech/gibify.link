import Image from 'next/image'

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Seja muito bem vindo ao&nbsp;
          <code className="font-mono font-bold">Atentimento</code>
        </p>
        <div className="fixed bottom-0 p-4 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/gibify.shop.svg"
            alt="Logo da Gibidy Shop"
            className="dark:invert"
            width={400}
            height={100}
            priority
          />
        </div>
      </div>


      <h1 className='text-6xl md:text-3xl'>Comprar online é simples e rápido</h1>

      <div className="mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
        <a
          href="https://gibify.shop"
          className="group rounded-lg border border-transparent uppercase text-lg font-semibold p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shopify
        </a>
        <a
          href="https://gibify.shop"
          className="group rounded-lg border border-transparent uppercase text-lg font-semibold p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mercado Livre
        </a>
        {/* <a
          href="https://gibify.shop"
          className="group rounded-lg border border-transparent uppercase text-lg font-semibold p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          amazon
        </a>
        <a
          href="https://gibify.shop"
          className="group rounded-lg border border-transparent uppercase text-lg font-semibold p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp
        </a> */}
      </div>
    </main>
  )
}
