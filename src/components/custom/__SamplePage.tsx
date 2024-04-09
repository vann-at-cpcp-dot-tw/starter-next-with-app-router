
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''


import Image from "next/image"
import LinkWithLang from "~/components/custom/LinkWithLang"
import { isEmpty } from '~/lib/helpers'

interface TypeProps {
  params: {
    lang: string
  }
}
interface TypeState {}

function Page({params}:TypeProps){
  const { lang } = params

  return <main>
  </main>
}

export default Page