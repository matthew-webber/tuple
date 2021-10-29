import React from 'react'

const ActionButton = ({content, onClick}) => {
  return (
    <div>
      <div className='px-2'>
        <button
          onClick={onClick}
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
            {content}
          </div>
        </button>
      </div>
    </div>
  )
}

export default ActionButton
