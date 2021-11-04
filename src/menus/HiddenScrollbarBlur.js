import React, {useContext, useEffect, useState} from 'react'
import Caption from '../menus/Caption'
import Gravatar from '../layout/Gravatar'
import HeaderSearch from '../layout/HeaderSearch'
import {EditIcon, CancelIcon, ChevronDown, UserPlus} from '../media/Icons'
import StickyHeader from '../layout/StickyHeader'
import UserList from '../layout/UserList'
import IntersectContext from '../context/intersect/IntersectContext'

const HiddenScrollbarBlur = (props) => {
  const intersectContext = useContext(IntersectContext)
  const [editing, setEditing] = useState(false)

  const {currentIntersecting, setCurrent} = intersectContext

  const editClick = () => {
    setEditing(!editing)
  }

  useEffect(() => {
    setCurrent({
      data: {
        root: document.querySelector('user-window'),
        threshold: 0.8,
      },
      target: 'currentOptions',
    })
  }, [])

  return (
    <>
      <div className='p-16'>
        <Caption text='Hidden scrollbar w/ "more content blur"' />
        <div
          className='antialiased overflow-hidden'
          style={{
            width: '360' + 'px',
            height: '460' + 'px',
            backgroundColor: '#fff',
          }}
        >
          <main className='flex flex-col h-full'>
            <header className='flex-shrink-0 bg-header'>
              <div className='flex items-center p-3'>
                <HeaderSearch />
                <button className='ml-2 flex items-center justify-center h-8 w-8 text-purple-200 hover:text-purple-100 transition duration-150 ease-in-out'>
                  <UserPlus />
                </button>
                <button type='button' className='ml-2 flex items-center'>
                  <div className='relative mr-1 w-10 h-10 flex-shrink-0'>
                    <Gravatar src='https://secure.gravatar.com/avatar/fad484263fe40659289b87e5e532b5fa' />
                  </div>
                  <div className='text-purple-200'>
                    <ChevronDown />
                  </div>
                </button>
              </div>
            </header>
            <div
              id='user-window'
              className='scroll-hide-chrome relative flex-grow overflow-y-auto users-main'
            >
              <StickyHeader text='My Friends'>
                <button
                  className='text-xs text-gray-500 font-normal'
                  onClick={editClick}
                >
                  {!editing ? <EditIcon /> : <CancelIcon />}
                </button>
              </StickyHeader>
              <UserList
                users={props.data.users.friends}
                usersType='friends'
                editing={editing}
              />
              <StickyHeader text='Team Directory' />
              <UserList users={props.data.users.team} usersType='team' />
              <div
                className={`sticky bottom-0 bg-gradient-to-t from-white users-overlay ${
                  currentIntersecting ? 'hidden' : 'motion-safe:animate-fadeIn'
                }`}
              ></div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default HiddenScrollbarBlur
