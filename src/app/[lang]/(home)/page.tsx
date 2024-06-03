"use client"

import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useStore } from '~/store'
import { useWindowSize } from "vanns-common-modules/dist/use/react"
import { useCommonData } from "~/providers/CommonData"
import { useScopeStore } from "./scope-store"

export default function Home(){

  const store = useStore()
  const viewport = useWindowSize()
  const commonData = useCommonData()
  const scopeStore = useScopeStore()
  useEffect(()=>{
    console.log(scopeStore)
  }, [scopeStore])
  return <main className="flex h-full flex-col justify-center">
    <div className="container text-center">::: Home page content :::</div>
  </main>
}
