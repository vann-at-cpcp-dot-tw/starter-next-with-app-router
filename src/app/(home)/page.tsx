"use client"
import { useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useStore } from '@src/store'
import { useWindowSize } from 'react-use'
import { CommonDataContext } from '@src/app/providers'

export default function Home({
  params
}:{
  params: {
    data: {
      [key:string]: any
    }
  }
}){

  const store = useStore()
  const viewport = useWindowSize()
  const commonData = useContext(CommonDataContext)

  useEffect(()=>{
    console.log(params.data)
  }, [params.data])

  return <main className="flex h-full flex-col justify-center">
    <div className="container text-center">::: Home page content :::</div>
  </main>
}
