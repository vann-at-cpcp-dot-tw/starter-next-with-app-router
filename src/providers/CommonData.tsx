"use client"

import { createCommonDataContext } from "vanns-common-modules/dist/providers/react/CommonData"

export interface CommonDataContextType {
  [key: string]: any
}

export const { Context: CommonDataContext, Provider: CommonDataProvider } = createCommonDataContext<CommonDataContextType>()
