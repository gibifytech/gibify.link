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
  const page = json.users?.find((user) => params.page && user.username === params.page)
  if (!page) return notFound()

  return {
    title: page.metadata?.title,
    description: page.metadata.description,
    openGraph: {
      type: 'website',
      url: 'https://gibify.link',
      siteName: 'Gibify Link',
      title: page.metadata?.title,
      description: page.metadata.description,
      images: [`${page.image}`]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      site: 'https://gibify.link',
      title: page.metadata?.title,
      description: page.metadata.description,
      images: `${page.image}`
    }
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = json.users?.find((user) => params.page && user.username === params.page)
  if (!page) notFound()

  return (
    <>
      <Avatar color={page.color} image={page.image} name={page.name} />
      <Bio text={page.bio} />
      <Links links={page.links} color={page.color} />
    </>
  )
}
