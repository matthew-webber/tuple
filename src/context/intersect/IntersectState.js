import React, {useEffect, useReducer, useRef, useState} from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import {SET_CURRENT, CLEAR_CURRENT} from '../types'
import intersectContext from './IntersectContext'
import intersectReducer from './intersectReducer'

const IntersectState = (props) => {
  const initialState = {
    isIntersecting: false,
    currentRef: useRef(null),
    currentSlave: null,
    currentIntersecting: false,
    currentOptions: {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    },
  }

  const [state, dispatch] = useReducer(intersectReducer, initialState)

  const changeIntersecting = (entries) => {
    console.log('change intersecting')
    const [entry] = entries
    setCurrent({data: entry.isIntersecting, target: 'currentIntersecting'})
  }

  useEffect(() => {
    console.log('use effect')
    const observer = new IntersectionObserver(
      changeIntersecting,
      state.currentOptions
    )
    if (state.currentRef.current) observer.observe(state.currentRef.current)
    return () => {
      if (state.currentRef.current) observer.unobserve(state.currentRef.current)
    }
  }, [state.currentRef, state.currentOptions])

  const setCurrent = ({data, target}) => {
    dispatch({type: SET_CURRENT, payload: {data, target}})
  }
  const clearCurrent = ({data, target}) => {
    dispatch({type: CLEAR_CURRENT, payload: {data, target}})
  }

  return (
    <intersectContext.Provider
      value={{
        currentIntersecting: state.currentIntersecting,
        currentRef: state.currentRef,
        currentOptions: state.currentOptions,
        currentSlave: state.currentSlave,
        changeIntersecting,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </intersectContext.Provider>
  )
}

export default IntersectState
