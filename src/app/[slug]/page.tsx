import { Avatar } from '@/components/avatar'
import { Bio } from '@/components/bio'
import { Links } from '@/components/links'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getUser } from '../../services/get-user'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const user = await getUser(params.slug)

  if (!user) return notFound()

  return {
    title: user.metadata?.title,
    description: user.metadata.description,
    openGraph: {
      type: 'website',
      url: 'https://gibify.link',
      siteName: 'Gibify Link',
      title: user.metadata?.title,
      description: user.metadata.description,
      images: [`${user.image}`]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      site: 'https://gibify.link',
      title: user.metadata?.title,
      description: user.metadata.description,
      images: `${user.image}`
    }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const user = await getUser(params.slug)
  if (!user) notFound()

  return (
    <>
      <Avatar color={user.color} image={user.image} name={user.name} />
      <Bio text={user.bio} />
      <Links links={user.links} color={user.color} />
    </>
  )
}
