import Image from "next/image";
import Link from "next/link";
import json from '../../JSON/user.json'

export default function Carousel() {
  const users = [...json.data, ...json.data, ...json.data]
  return (
    <div className="w-full  items-center pb-6 pt-1 mt-10 px-10">
      <h2 className="max-w-5xl mx-auto my-10 text-xl font-semibold">Contas que estão usando a <i className="text-green-500">gibify.link</i></h2>
      <ul className="flex animate-carousel gap-4">
        {users.length ? (
          users.map((user) => (
            <Link
              key={user.id}
              href={`https://gibify.link/${user.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <li className="flex border border-neutral-200 dark:border-neutral-800 hover:border-green-500 rounded-md h-[100px] w-[350px]">
                <Image
                  className="rounded-tl-md rounded-bl-md"
                  src={user.image_url}
                  alt="Bordered avatar"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col items-start justify-between p-2">
                  <div>
                    <h3 className="text-xs font-semibold">{user.name} | {user.title}</h3>
                    <p className="text-xs">{user.description}</p>
                  </div>
                  <span className="text-black/70 dark:text-white/70 text-xs">{`gibify.link/${user.path}`}</span>
                </div>
              </li>
            </Link>
          ))
        ) : null}

      </ul>
    </div>
  )
}