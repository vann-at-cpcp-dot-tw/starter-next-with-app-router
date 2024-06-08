import '~/styles/index.sass'
import { ReactNode } from 'react'
import { CommonDataProvider, ICommonData } from "~/providers/CommonData"
import { ReactQueryClientProvider } from "vanns-common-modules/dist/providers/react"
import ApolloProvider from "~/providers/Apollo"

export default function Providers({
  children,
  commonData,
}:{
  children: ReactNode,
  commonData: ICommonData
}) {

  return <ApolloProvider>
    <ReactQueryClientProvider>
      <CommonDataProvider state={commonData}>
        { children }
      </CommonDataProvider>
    </ReactQueryClientProvider>
  </ApolloProvider>
}