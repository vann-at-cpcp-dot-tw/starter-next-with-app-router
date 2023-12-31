"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useStore } from '@src/store'
import { useWindowSize } from 'react-use'
import { Button } from '@src/components/ui/button'

export default function Contact(){

  const store = useStore()
  const viewport = useWindowSize()

  return <div className="flex h-full flex-col justify-center bg-gray-100">
    <div className="container text-center">::: Contact page content :::</div>
    <div className="container flex justify-center py-5">
      <Link href="/">
        <Button variant="outline">BACK</Button>
      </Link>
    </div>
  </div>
}
