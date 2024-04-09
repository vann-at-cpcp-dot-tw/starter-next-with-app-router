"use client"

import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useStore } from '~/store'
import { useWindowSize } from "vanns-common-modules/dist/use/react"
import { CommonDataContext } from 'vanns-common-modules/dist/providers/react'
import { ScopeStoreContext } from "vanns-common-modules/dist/providers/react"

export default function Home(){

  const store = useStore()
  const viewport = useWindowSize()
  const commonData = useContext(CommonDataContext)
  const homeData = useContext(ScopeStoreContext)
  useEffect(()=>{
    console.log(homeData)
  }, [homeData])
  return <main className="flex h-full flex-col justify-center">
    <div className="container text-center">::: Home page content :::</div>
  </main>
}
