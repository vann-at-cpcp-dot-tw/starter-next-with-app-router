import { cloneElement } from 'react'
import { isEmpty } from '@src/helpers'

async function getHomePageData(){
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/wp-json/api/v1/homeDatas`, {
  //   method: 'GET',
  //   next: {
  //     revalidate: 60
  //   },
  // })

  // const json = await response.json()

  // return json?.data

  return {}
}

export default async function HomeLayout({
  children,
  params,
}:{
  children: React.ReactNode,
  params: {
    data: {
      [key:string]: any
    }
  };
}) {

  const data = await getHomePageData()
  params.data = data

  return <>
    { children }
  </>

}
