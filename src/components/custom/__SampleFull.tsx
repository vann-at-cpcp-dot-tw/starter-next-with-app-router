"use client"
const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || '/'

import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from "vanns-common-modules/dist/use/react"

import LinkWithLang from "~/components/custom/LinkWithLang"
import { isEmpty } from '~/lib/utils'
import { useStore } from '~/store'

interface TypeProps {
  [key:string]: any
}
interface TypeState {}

function __SampleFull(props:TypeProps, ref:React.ReactNode){
  const store = useStore()
  const router = useRouter()
  const viewport = useWindowSize()
  const [state, setState] = useReducer((state:TypeState, updateState:{})=>({...state, ...updateState}), {
    // init state
  })
  const { className } = props

  return <Suspense fallback={null}>
    <div className={twMerge('', className)}></div>
  </Suspense>
}

export default __SampleFull