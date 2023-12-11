import { getUsers } from '@/services/get-users'
import Image from 'next/image'
import Link from 'next/link'

export default async function Carousel() {
  const users = await getUsers()
  if (!users?.length) return

  return (
    <div className="w-full  items-center pt-1 mt-6 mb-4 px-10">
      <h2 className="max-w-5xl mx-auto my-10 text-xl font-semibold">
        Já são <i className="text-green-500">{users.length}</i> contas que estão usando a{' '}
        <i className="text-green-500">gibify.link</i>
      </h2>
      <ul className="flex animate-carousel gap-4">
        {users.length
          ? users.map((user) => (
              <Link
                key={user.id}
                href={`https://gibify.link/${user.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <li className="flex border border-neutral-200 dark:border-neutral-800 hover:border-green-500 rounded-md h-[120px] w-[400px]">
                  <Image
                    className="rounded-tl-md rounded-bl-md"
                    src={user.image}
                    alt="Bordered avatar"
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col items-start justify-between p-2">
                    <div>
                      <h3 className="text-xs font-semibold">{user.metadata.title}</h3>
                      <p className="text-xs">{user.metadata.description}</p>
                    </div>
                    <span className="text-black/70 dark:text-white/70 text-xs">{`gibify.link/${user.username}`}</span>
                  </div>
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  )
}
