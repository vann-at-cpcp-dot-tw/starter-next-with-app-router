
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''


import { Suspense } from 'react'
import Image from "next/image"
import LinkWithLang from "~/components/custom/LinkWithLang"
import { twMerge } from 'tailwind-merge'
import { isEmpty } from '~/lib/utils'

// import { useRouter } from 'next/navigation'
// import { useStore } from '~/store'
// import useWindowSize from "vanns-common-modules/dist/use/react/useWindowSize"

interface TypeProps {
  [key:string]: any
}
interface TypeState {}

function Sample(props:TypeProps, ref:React.ReactNode){
  // const store = useStore()
  // const router = useRouter()
  // const viewport = useWindowSize()
  const { className } = props
  return <Suspense fallback={null}>
    <div className={twMerge('', className)}></div>
  </Suspense>
}

export default Sample