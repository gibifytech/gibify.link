import json from '../../JSON/data.json'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Avatar from '@/components/avatar'
import Bio from '@/components/bio'
import Links from '@/components/links'

export const runtime = 'edge'

export async function generateMetadata({
  params
}: {
  params: { page: string }
}): Promise<Metadata> {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) return notFound()

  return {
    title: page.metadata?.title,
    description: page.metadata.description,
    openGraph: {
      type: 'website',
      title: page.metadata?.title,
      description: page.metadata.description,
      url: 'https://gibify.link',
      siteName: 'Gibify Link',
      images: [`${page.image}`]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      title: 'Evandro Gibicoski',
      description: 'Web developer',
      site: 'https://gibify.dev',
      images: '/images/evandro-gibicoski-image.png'
    }
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) notFound()

  return (
    <>
      <Avatar color={page.color} image={page.image} name={page.name} />
      <Bio text={page.bio} />
      <Links links={page.links} color={page.color} />
    </>
  )
}
