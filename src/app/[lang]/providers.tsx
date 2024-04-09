"use client"
import '~/styles/index.sass'
import { useState, ReactNode, createContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export interface CommonDataContextType {
  [key: string]: any
}
export const CommonDataContext = createContext<CommonDataContextType>({})

export default function Providers({
  children,
  commonData,
}:{
  children:ReactNode,
  commonData: {
    [key: string]: any
  }
}) {
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>
    <CommonDataContext.Provider value={commonData}>
      {children}
    </CommonDataContext.Provider>
  </QueryClientProvider>

}