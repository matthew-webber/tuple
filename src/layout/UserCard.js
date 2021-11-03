import React, {useContext, useEffect, useRef, useState} from 'react'
import IntersectContext from '../context/intersect/IntersectContext'
import Loading from '../Loading'
import {AddFriendIcon} from '../media/Icons'
import ActionButton from './ActionButton'
import ActionButtons from './ActionButtons'
import Gravatar from './Gravatar'

const UserCard = ({userData, friend, setRef, ...props}) => {
  const {img, name, email, presence} = userData
  const intersectContext = useContext(IntersectContext)
  const {currentRef} = intersectContext

  const getStatusColor = (p) => {
    return p.includes('busy')
      ? 'bg-red-400'
      : p.includes('offline')
      ? 'bg-gray-400'
      : p.includes('online')
      ? 'bg-green-400'
      : ''
  }

  const getAvailability = (a) => {
    return a.includes('online') && !a.includes('busy') ? true : false
  }

  const statusColor = getStatusColor(presence)
  const available = getAvailability(presence)
  const statusOpacity = !available && friend ? 'opacity-75' : ''

  return (
    <div
      ref={currentRef}
      className='border-b flex items-center leading-normal border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out'
    >
      {/* remove button */}
      {props.children}
      <div className={`relative p-3 flex-shrink-0 ${statusOpacity}`}>
        <div className='relative w-10 h-10'>
          <Gravatar src={img} />
        </div>
        {statusColor ? (
          <div
            className={`absolute w-3 h-3 rounded-full border-2 border-white ${statusColor}`}
            style={{bottom: '10px', right: '10px'}}
          ></div>
        ) : (
          <></>
        )}
      </div>
      <div className={`flex-grow pr-0 min-w-0 ${statusOpacity}`}>
        <h2 className='pb-px flex items-center text-sm font-bold text-gray-700'>
          <div className='flex-shrink truncate'>{name}</div>
        </h2>
        <p className='truncate text-xs text-gray-600'>{email}</p>
      </div>
      {friend ? (
        <ActionButtons available={available} />
      ) : (
        <ActionButton content={<AddFriendIcon />} />
      )}
    </div>
  )
}

export default UserCard
