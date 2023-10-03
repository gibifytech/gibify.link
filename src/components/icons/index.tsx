import GithubIcon from './github'
import GlobeIcon from './globe'
import InstagramIcon from './instagram'
import LinkIcon from './link'
import LinkedInIcon from './linkedin'
import WhtasappIcon from './whatsapp'

interface IconsProps {
  icon: string
}
export default function Icons({ icon }: IconsProps) {
  switch (icon) {
    case 'instagram':
      return <InstagramIcon />
    case 'whatsapp':
      return <WhtasappIcon />
    case 'website':
      return <GlobeIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    default:
      return <LinkIcon />
  }
}
