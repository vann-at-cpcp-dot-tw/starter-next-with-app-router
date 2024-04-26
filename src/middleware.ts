"use server"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '~~/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales.map((node)=>node.shortCode)
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale.shortCode)
  return locale
}

export async function middleware(request:NextRequest){


  let response = NextResponse.next()
  const headers = request.headers
  const pathname = request.nextUrl.pathname
  const { searchParams } = request.nextUrl

  // Redirect if there is no locale
  const pathnameIsMissingLocale = i18n.locales.every((locale, index) => {
    return !pathname.startsWith(`/${locale.shortCode}/`) && pathname !== `/${locale.shortCode}`
  })

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    if( locale === i18n.defaultLocale.shortCode ){
      const url = new URL(`/${locale}${pathname.startsWith('/') ?'' : '/'}${pathname}`, request.url)
      // url.search = searchParams.toString()
      response = NextResponse.rewrite(url)
    }else{
      const url = new URL(`/${locale}${pathname.startsWith('/') ?'' : '/'}${pathname}`, request.url)
      // url.search = searchParams.toString()
      response = NextResponse.redirect(url)
    }
  }

  response.headers.set('x-url', request.url)

  return response
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  // matcher: ['/((?!api|_next/static|_next/image|_next|assets|favicon.ico).*)']
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico).*)"]
}