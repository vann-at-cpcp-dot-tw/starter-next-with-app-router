
const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || '/'

import { Suspense } from 'react'

import Image from "next/image"
import { twMerge } from 'tailwind-merge'

import LinkWithLang from "~/components/custom/LinkWithLang"
import { isEmpty } from '~/lib/utils'

// import { useRouter } from 'next/navigation'
// import { useStore } from '~/store'
// import useWindowSize from "vanns-common-modules/dist/use/react/useWindowSize"

interface IProps {
  [key:string]: any
}
interface IState {}

function Example(props:IProps, ref:React.ReactNode){
  // const store = useStore()
  // const router = useRouter()
  // const viewport = useWindowSize()
  const { className } = props
  return <Suspense fallback={null}>
    <div className={twMerge('', className)}></div>
  </Suspense>
}

export default Example