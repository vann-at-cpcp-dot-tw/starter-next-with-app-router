"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useStore } from '@src/store'
import { useWindowSize } from 'react-use'
import { Button } from '@src/components/ui/button'

export default function About(){

  const store = useStore()
  const viewport = useWindowSize()

  return <main className="flex h-full flex-col justify-center">
    <div className="container text-center">::: About page content :::</div>
    <div className="container flex justify-center py-5">
      <Link href="/">
        <Button variant="outline">BACK</Button>
      </Link>
    </div>
  </main>
}
