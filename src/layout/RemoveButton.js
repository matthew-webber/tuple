import React from 'react'
import {MinusCircle} from '../media/Icons'

const RemoveButton = ({visible}) => {
  const buttonSize = visible ? 'w-8' : 'w-0'

  return (
    <>
      <div
        className={`flex-shrink-0 flex items-center justify-end transition-all duration-150 ease-in-out overflow-hidden ${buttonSize}`}
      >
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-red-700 hover:text-red-600 transition duration-150 ease-in-out'>
            <MinusCircle />
          </div>
        </button>
      </div>
    </>
  )
}

export default RemoveButton
