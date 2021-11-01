import React from 'react'

const StickyHeader = ({text, buttons}) => {
  
  return (
    <>
      <div
        className='sticky top-0 flex items-center bg-gray-50 z-10 p-3 border-b leading-3'
        style={{fontSize: '11px'}}
      >
        <div className='flex-grow uppercase text-gray-500 tracking-wider font-bold'>
          My Friends
        </div>
        <div>
          <button
            className='text-xs text-gray-500 font-normal'
            onClick={editClick}
          >
            {!editing ? <EditIcon /> : <CancelIcon />}
          </button>
        </div>
      </div>
    </>
  )
}

export default StickyHeader
