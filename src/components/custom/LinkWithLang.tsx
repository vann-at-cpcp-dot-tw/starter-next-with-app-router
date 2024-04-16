"use client"

import { i18n } from '~~/i18n.config'
import { useParams } from "next/navigation"
import LinkWithLang from 'vanns-common-modules/dist/components/next/LinkWithLang'

interface TypeProps {
  href?: string
  lang?: string | string[]
  children?: React.ReactNode
  [key:string]: any
}

export default function LinkWithLangWrapper({href, lang, children, ...props}:TypeProps, ref:React.ReactNode){
  const params = useParams()
  const { lang:currentLang } = params
  const targetLang = lang || currentLang

  if( !href ){
    return <span {...props}>{children}</span>
  }

  const isDefaultLang = targetLang === i18n.defaultLocale.shortCode
  const path = isDefaultLang ?href :`/${lang}${href}`

  return <LinkWithLang {...props} href={path} lang={lang} defaultLang={i18n.defaultLocale.shortCode}>{children}</LinkWithLang>
}
