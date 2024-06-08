"use client"

const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || '/'


import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

import Image from "next/image"
import LinkWithLang from "~/components/custom/LinkWithLang"

// routes
import { useRouter } from 'next/navigation'

// store
import { useStore } from '~/store'

// use
import { useWindowSize } from "vanns-common-modules/dist/use/react"
import { useQuery, useMutation, useQueryClient } from 'react-query'

// methods & components
import { isEmpty } from '~/lib/utils'
import { twMerge } from 'tailwind-merge'

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