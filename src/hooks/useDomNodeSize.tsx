import { useState, useCallback, useEffect, RefObject } from "react"
import { useWindowSize } from "react-use"

export default function useRefSize(){

  const [size, setSize] = useState<{
    width: number,
    height: number,
    node: HTMLDivElement | null
  }>({
    width: 0,
    height: 0,
    node: null,
  })

  const viewport = useWindowSize()

  const setNode = useCallback((refNode:HTMLDivElement) => {
    if (refNode){
      setSize({
        width: refNode.getBoundingClientRect().width,
        height: refNode.getBoundingClientRect().height,
        node: refNode
      })
    }
  }, [viewport.width])

  return { size, setNode }
}