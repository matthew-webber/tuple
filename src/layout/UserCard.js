import React, {useState} from 'react'
import Loading from '../Loading'
import Gravatar from './Gravatar'

const UserCard = ({userInfo, presence}) => {
  const {imgThumb, userName, userEmail} = userInfo

  const [loading, setLoading] = useState(false)

  const pearClick = () => {
    setLoading(true)
    const revertLoading = () => {
      setLoading(false)
    }
    setTimeout(revertLoading, 2000)
  }

  const getStatusColor = (p) => {
    return p === 'online'
      ? 'bg-green-400'
      : p === 'offline'
      ? 'bg-gray-400'
      : p === 'call'
      ? 'bg-red-400'
      : null
  }

  const statusColor = getStatusColor(presence)

  return (
    <div className='border-b flex items-center leading-normal border-gray-200 hover:bg-gray-50 transition duration-150 ease-in-out'>
      <div className='flex-shrink-0 flex items-center justify-end transition-all duration-150 ease-in-out overflow-hidden w-0'>
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
        <div className='relative w-10 h-10'>
          <img
            src='./missing-gravatar-purple.png'
            className='absolute top-0 left-0 w-10 h-10 rounded-full'
          />
          {imgThumb}
        </div>
        <div
          className={`absolute w-3 h-3 rounded-full border-2 border-white ${statusColor}`}
          style={{bottom: '10', right: '10'}}
        ></div>
      </div>
      <div className='flex-grow pr-0 min-w-0'>
        <h2 className='pb-px flex items-center text-sm font-bold text-gray-700'>
          <div className='flex-shrink truncate'>{userName}</div>
        </h2>
        <p className='truncate text-xs text-gray-600'>{userEmail}</p>
      </div>
      <div className='px-2'>
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='feather feather-phone-call'
            >
              <path d='M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
            </svg>
          </div>
        </button>
      </div>
      <div className='px-2'>
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='feather feather-monitor'
            >
              <rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect>
              <line x1='8' y1='21' x2='16' y2='21'></line>
              <line x1='12' y1='17' x2='12' y2='21'></line>
            </svg>
          </div>
        </button>
      </div>
      <div className='px-2'>
        <div className='pear'>
          {!loading ? (
            <button
              onClick={() => pearClick()}
              type='button'
              className='flex items-center justify-center h-6 w-6'
            >
              <svg
                id='emoji'
                viewBox='0 0 72 72'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='line'>
                  <path
                    fill='none'
                    stroke='#9CA3B0'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeMiterlimit='10'
                    strokeWidth='4'
                    d='M21.7378,21.5926c0,0-5.271-5.1624-10.4878,0.0543'
                  />
                  <path
                    fill='none'
                    stroke='#9CA3B0'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeMiterlimit='10'
                    strokeWidth='4'
                    d='M24.8805,18.9186c2.9293-1.0048,6.3086-0.3418,8.6475,1.9971c3.0495,3.0495,7.5868,4.6409,12.0426,6.2396 c1.658,0.5922,3.3012,1.1843,4.8482,1.843c2.1169,0.9178,4.0709,1.9689,5.6401,3.3604c0.185,0.1702,0.3627,0.333,0.5403,0.5107 c6.3433,6.3433,6.3359,16.6243,0,22.9601c-6.3433,6.3433-16.6169,6.3433-22.9601,0c-0.1776-0.1776-0.3405-0.3553-0.5107-0.5403 c-1.5396-1.6728-2.6573-3.6046-3.3604-5.6401c-0.6588-1.5469-1.2509-3.1901-1.8431-4.8481 c-1.5987-4.4558-3.1901-8.9931-6.2396-12.0426c-2.1564-2.1564-2.8915-5.1939-2.2052-7.9509'
                  />
                </g>
              </svg>
            </button>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserCard
