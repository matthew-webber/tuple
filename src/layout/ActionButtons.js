import React, {useState} from 'react'
import Loading from '../Loading'
import {PhoneIcon, MonitorIcon, MoreIconVt as MoreIconHz} from '../media/Icons'

const ActionButtons = () => {
  const [loading, setLoading] = useState(false)

  const pearClick = () => {
    setLoading(true)
    const revertLoading = () => {
      setLoading(false)
    }
    setTimeout(revertLoading, 2000)
  }

  return (
    <>
      <div className='px-2'>
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
            <PhoneIcon />
          </div>
        </button>
      </div>
      <div className='px-2'>
        <button
          type='button'
          className='flex items-center justify-center h-6 w-6'
        >
          <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
            <MonitorIcon />
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
              <div className='text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out'>
                <MoreIconHz />
              </div>
            </button>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  )
}

export default ActionButtons
