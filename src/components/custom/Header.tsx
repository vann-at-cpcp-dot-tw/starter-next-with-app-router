"use client"

import { Suspense, useReducer, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from "vanns-common-modules/dist/use/react"
import { useDomNodeSize } from "vanns-common-modules/dist/use/react"

import { menu, TypeRouteNode } from '~/routes'
import { useStore } from '~/store'


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