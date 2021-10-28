import React from 'react'

const HeaderSearch = () => {
  return (
    <div className='flex-grow'>
      <div className='flex items-center py-1 px-2 shadow-lg rounded transition duration-150 ease-in-out bg-white focus-within:bg-white'>
        <div className='pr-2 text-purple-200'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='feather feather-search'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
        </div>
        <input
          type='text'
          value=''
          className='w-full bg-transparent text-sm placeholder-purple-100 text-purple-100'
          placeholder='Search...'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
        />
      </div>
    </div>
  )
}

export default HeaderSearch
