import React, {useRef} from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import {SET_CURRENT} from '../types'
import intersectContext from './IntersectContext'
import intersectReducer from './intersectReducer'

const IntersectState = (props) => {
  const initialState = {
    isIntersecting: false,
    currentRef: null,
    currentSlave: null,
    currentIntersecting: false,
  }

  const [state, dispatch] = useReducer(intersectReducer, initialState)

  const getIntersectRef = (data) => {
    const {options} = data
    const [intersectRef, isIntersecting] = useIntersectionObserver({
      root: options.root,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0,
    })
    return [intersectRef, isIntersecting]
  }

  const setIntersectRef = (options) => {
    const [intersectRef, isIntersecting] = getIntersectRef(options)
    setCurrent({data: intersectRef, target: 'currentRef'})
    setCurrent({data: isIntersecting, target: 'currentIntersecting'})
  }

  const setCurrent = ({data, target}) => {
    dispatch({type: SET_CURRENT, payload: {data, target}})
  }
  const clearCurrent = ({data, target}) => {
    dispatch({type: CLEAR_CURRENT, payload: {data, target}})
  }

  return (
    <intersectContext.Provider
      value={{
        isIntersecting: state.isIntersecting,
        currentRef: state.currentRef,
        currentSlave: state.currentSlave,
        setIntersectRef,
      }}
    >
      {props.children}
    </intersectContext.Provider>
  )
}

export default IntersectState
