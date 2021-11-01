import React from 'react'

const Caption = ({text, asterisk}) => {
  return (
    <>
      <h2 className='pb-2 text-sm text-gray-700'>
        {text}
        {asterisk && (
          <>
            {' '}
            <sup className='text-red-900 text-base'>*</sup>
          </>
        )}
      </h2>
    </>
  )
}

export default Caption
