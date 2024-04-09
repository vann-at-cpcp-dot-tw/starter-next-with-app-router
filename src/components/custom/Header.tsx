"use client"

import { Suspense, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

// routes
import { menu, TypeRouteNode } from '~/routes'
import { useRouter } from 'next/navigation'

// store
import { useStore } from '~/store'

// use
import { useWindowSize } from "vanns-common-modules/dist/use/react"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useDomNodeSize } from "vanns-common-modules/dist/use/react"
import { twMerge } from 'tailwind-merge'

// methods & components
import { isEmpty } from '~/lib/helpers'

// styles
import styles from '~/components/custom/styles/index.module.sass'

interface TypeProps {
  className?: string
}

interface TypeState {}

function Header(props:TypeProps, ref:React.ReactNode){
  const store = useStore()
  const { size:headerSize, setNode:setHeaderNode } = useDomNodeSize()
  const router = useRouter()
  const viewport = useWindowSize()
  const [state, setState] = useReducer((state:TypeState, updateState:{})=>({...state, ...updateState}), {
    // init state
  })

  useEffect(()=>{
    // document.body.style.paddingTop = `${headerSize.height}px`
    (document.getElementById('app') as HTMLDivElement).style.paddingTop = `${headerSize.height}px`
  }, [headerSize.height])


  return <Suspense fallback={null}>
    <div className={twMerge('fixed left-0 top-0 z-[100] w-full', props?.className)}
    ref={setHeaderNode}>
      <div className="container py-7">
        <div className="row items-center">
          <div className="col-auto mr-auto">
            <Link href="/">
              <Image src="/next.svg" width={90} height={90} alt="" />
            </Link>
          </div>
          {
            menu.map((node:TypeRouteNode, index:number)=>{
              return <Link href={node.pathname} key={index}>
                <div className="col-auto hidden lg:block">
                  <div className="btn-scaleUp font-bold">{node?.meta?.menu_label}</div>
                </div>
              </Link>
            })
          }
        </div>
      </div>
    </div>
  </Suspense>
}

export default Header