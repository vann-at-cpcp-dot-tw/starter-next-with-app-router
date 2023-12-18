"use client"

import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

// routes
import { routes } from '@src/routes'
import { useRouter } from 'next/navigation'

// store
import { useStore } from '@src/store'

// use
import { useWindowSize } from 'react-use'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { twMerge } from 'tailwind-merge'

// methods & components
import { isEmpty } from '@src/lib/helpers'

// styles
import styles from '@src/components/custom/styles/index.module.sass'

interface TypeProps {
  className?: string
}

interface TypeState {}

function __Sample(props:TypeProps, ref:React.ReactNode){
  const store = useStore()
  const router = useRouter()
  const viewport = useWindowSize()
  const [state, setState] = useReducer((state:TypeState, updateState:{})=>({...state, ...updateState}), {
    // init state
  })

  return <Suspense fallback={null}>
    <div className={twMerge('', props?.className)}>

    </div>
  </Suspense>
}

export default __Sample