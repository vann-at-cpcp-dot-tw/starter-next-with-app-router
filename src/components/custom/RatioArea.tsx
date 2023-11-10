"use client"

import { Suspense, useState, useEffect, useMemo, useCallback } from 'react'

// routes
import { routes } from '@src/routes'

// store
import { useStore } from '@src/store'

// use
import { useWindowSize } from 'react-use'

// methods & components
import { isEmpty } from '@src/lib/helpers'

// styles
// import styles from '@src/components/custom/styles/index.module.sass'

interface TypeProps {
  className?: string
  ratio: number | string
  children: React.ReactNode
}

function RatioArea(props:TypeProps){

  return (
    <div className={`ratioArea relative w-full ${props?.className}`}>
      <div className="fill pointer-events-none relative" style={{
        width: '100%',
        paddingBottom: `${props.ratio}%`
      }}></div>
      { props.children }
    </div>
  )
}


export default RatioArea