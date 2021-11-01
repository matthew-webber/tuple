import React from 'react'

const StickyHeader = ({text, ...props}) => {
  return (
    <>
      <div
        className='sticky top-0 flex items-center bg-gray-50 z-10 p-3 border-b leading-3'
        style={{fontSize: '11px'}}
      >
        <div className='flex-grow uppercase text-gray-500 tracking-wider font-bold'>
          {text}
        </div>
        {props.children}
      </div>
    </>
  )
}

export default StickyHeader
