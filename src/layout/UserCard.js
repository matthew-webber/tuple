import React, {useState} from 'react'
import Loading from '../Loading'
import ActionButtons from './ActionButtons'
import Gravatar from './Gravatar'

const UserCard = ({userInfo, presence, editing}) => {
  const {imgThumb, userName, userEmail} = userInfo

  const getStatusColor = (p) => {
    return p === 'online'
      ? 'bg-green-400'
      : p === 'offline'
      ? 'bg-gray-400'
      : p === 'busy'
      ? 'bg-red-400'
      : null
  }

  const getAvailability = (a) => {
    return a === 'online' ? true : false
  }

  const statusColor = getStatusColor(presence)
  const available = getAvailability(presence)
  const editButtonSize = editing ? 'w-8' : 'w-0'

  console.log(statusColor, 'statuscolor')

  return (
    <div className='border-b flex items-center leading-normal border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out'>
      <div
        className={`flex-shrink-0 flex items-center justify-end transition-all duration-150 ease-in-out overflow-hidden ${editButtonSize}`}
      >
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-red-700 hover:text-red-600 transition duration-150 ease-in-out'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='feather feather-minus-circle'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='8' y1='12' x2='16' y2='12' stroke='#fff'></line>
            </svg>
          </div>
        </button>
      </div>
      <div className='relative p-3 flex-shrink-0 '>
        <div className='relative w-10 h-10'>{imgThumb}</div>
        {statusColor ? (
          <div
            className={`absolute w-3 h-3 rounded-full border-2 border-white ${statusColor}`}
            style={{bottom: '10px', right: '10px'}}
          ></div>
        ) : (
          <div></div>
        )}
      </div>
      <div className='flex-grow pr-0 min-w-0'>
        <h2 className='pb-px flex items-center text-sm font-bold text-gray-700'>
          <div className='flex-shrink truncate'>{userName}</div>
        </h2>
        <p className='truncate text-xs text-gray-600'>{userEmail}</p>
      </div>
      {available && <ActionButtons />}
    </div>
  )
}

export default UserCard
