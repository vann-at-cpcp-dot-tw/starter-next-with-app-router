import '~/styles/index.sass'
import { ReactNode } from 'react'
import { CommonDataProvider } from "~/providers/CommonData"
import { ReactQueryClientProvider } from "vanns-common-modules/dist/providers/react"
import ApolloProvider from "~/providers/Apollo"

export default function Providers({
  children,
  commonData,
}:{
  children:ReactNode,
  commonData: {
    [key: string]: any
  }
}) {

  return <ApolloProvider>
    <ReactQueryClientProvider>
      <CommonDataProvider state={commonData}>
        { children }
      </CommonDataProvider>
    </ReactQueryClientProvider>
  </ApolloProvider>
}