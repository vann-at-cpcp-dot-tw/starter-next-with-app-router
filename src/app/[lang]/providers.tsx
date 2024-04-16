import '~/styles/index.sass'
import { ReactNode } from 'react'
import { CommonDataProvider } from "~/providers/CommonData"
import { ReactQueryClientProvider } from "vanns-common-modules/dist/providers/react"

export default function Providers({
  children,
  commonData,
}:{
  children:ReactNode,
  commonData: {
    [key: string]: any
  }
}) {

  return <ReactQueryClientProvider>
    <CommonDataProvider commonData={commonData}>
      { children }
    </CommonDataProvider>
  </ReactQueryClientProvider>
}