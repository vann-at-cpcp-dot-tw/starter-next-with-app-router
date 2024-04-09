import { cloneElement } from 'react'
import { isEmpty } from '~/lib/helpers'
import { ScopeStoreProvider } from "vanns-common-modules/dist/providers/react"

async function getHomePageData(){
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/wp-json/api/v1/homeDatas`, {
  //   method: 'GET',
  //   next: {
  //     revalidate: 60
  //   },
  // })

  // const json = await response.json()

  // return json?.data

  return {hello:'world'}
}

export default async function HomeLayout({
  params,
  children,
}:{
  params: {
    lang: string
  }
  children: React.ReactNode,
}) {

  const data = await getHomePageData()

  return <ScopeStoreProvider state={{data}}>
    { children }
  </ScopeStoreProvider>

}
