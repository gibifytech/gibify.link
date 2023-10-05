import Image from 'next/image'
import data from '../../json/data.json'
import { notFound } from 'next/navigation'
import Icons from '@/components/icons'
import { Metadata } from 'next'

const { SITE_NAME } = process.env
export const runtime = 'edge'
export const revalidate = 43200 // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string }
}): Promise<Metadata> {
  const page = data.data?.find((user) => params.page && user.username === params.page)

  if (!page) return notFound()

  return {
    title: `${page.metadata?.title} | ${SITE_NAME}`,
    description: page.metadata?.description
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = data.data?.find((user) => params.page && user.username === params.page)
  if (!page) notFound()

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
        <Image
          style={{
            borderWidth: 2,
            borderColor: page.color || '#0f9d58'
          }}
          className="w-20 h-20 p-1 rounded-full"
          src={page.image}
          alt="Bordered avatar"
          width={80}
          height={80}
          priority
        />
        <span className="text-black dark:text-white text-xl">{page?.name}</span>
      </div>
      <div className="max-w-sm w-full my-8 px-4 md:p-0">
        <ul>
          <li>{page?.bio}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4  max-w-sm w-full text-xs uppercase px-4 md:p-0">
        {page.links.map((link, index) => (
          <a
            key={index}
            href={link.value}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: `${page.color || '#0f9d58'}`
            }}
            className="flex items-end justify-center gap-2 rounded-3xl text-white border border-transparent p-2 w-full"
          >
            <Icons icon={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </>
  )
}
