const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

import Image from "next/image"
import LinkWithLang from "~/components/custom/LinkWithLang"
import { i18n } from "~~/i18n.config"
import { isEmpty } from '~/lib/helpers'

interface TypeProps {
  params: {
    lang: string
  }
}
interface TypeState {}

function PageNotFound({params}:TypeProps){
  const { lang } = params

  return <main className="flex grow flex-col justify-center py-24">
    <div className="container">
      <div className="serif text-center text-[28px] text-major-900 lg:text-[32px]">404</div>
      <div className="serif py-6 text-center text-[24px] italic text-major-900 lg:py-8 lg:text-[32px]">Sorry, we can&apos;t find this page</div>
      <div className="flex justify-center">
        <LinkWithLang className="btn-text" href="/" lang={lang}>Back to Home</LinkWithLang>
      </div>
    </div>
  </main>
}

export default PageNotFound