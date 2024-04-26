"use client"

import { createScopeStoreProvider } from "vanns-common-modules/dist/providers/react"

interface ICommonData {
  [key:string]: any
}

export const { ScopeStoreProvider:CommonDataProvider, useScopeStore:useCommonData } = createScopeStoreProvider<ICommonData>()