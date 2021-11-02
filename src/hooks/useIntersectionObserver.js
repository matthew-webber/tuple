import React, {useEffect, useRef, useState} from 'react'

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  console.log(isIntersecting, 'isIntersecting')
  const intersectTarget = useRef(null)

  const changeIntersecting = (entries) => {
    const [entry] = entries
    setIsIntersecting(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(changeIntersecting, options)
    if (intersectTarget.current) observer.observe(intersectTarget.current)
    return () => {
      if (intersectTarget.current) observer.unobserve(intersectTarget.current)
    }
  }, [intersectTarget, options])

  return [intersectTarget, isIntersecting]
}

export default useIntersectionObserver
