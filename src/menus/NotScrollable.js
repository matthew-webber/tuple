import React, {useContext, useEffect, useState} from 'react'
import Caption from '../menus/Caption'
import Gravatar from '../layout/Gravatar'
import HeaderSearch from '../layout/HeaderSearch'
import {EditIcon, CancelIcon, ChevronDown, UserPlus} from '../media/Icons'
import StickyHeader from '../layout/StickyHeader'
import UserList from '../layout/UserList'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import UserCard from '../layout/UserCard'
import RemoveButton from '../layout/RemoveButton'
import IntersectContext from '../context/intersect/IntersectContext'

const HiddenScrollbarBlur = (props) => {
  const intersectContext = useContext(IntersectContext)
  const [editing, setEditing] = useState(false)

  const {currentRef, currentIntersecting, currentOptions, setCurrent} =
    intersectContext

  const editClick = () => {
    setEditing(!editing)
  }

  useEffect(() => {
    setCurrent({
      data: {
        root: document.querySelector('user-window'),
        rootMargin: '0px',
        threshold: 0.8,
      },
      target: 'currentOptions',
    })
  }, [])

  const setRef = (ref) => {
    setCurrent({data: ref, target: 'currentRef'})
  }

  console.log(
    '\ncurrentIntersecting ' +
      JSON.stringify(currentIntersecting) +
      '\ncurrentOptions ' +
      JSON.stringify(currentOptions)
  )
  return (
    <>
      <div className='p-16'>
        <Caption
          text='Hidden scrollbar w/ "more content blur"'
          asterisk={true}
        />
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
              <UserCard
                setRef={true}
                userData={props.data.users.friends[0]}
                friend={true}
              >
                <RemoveButton visible={editing} />
              </UserCard>
              {/* <div ref={intersectTarget} className='intersection-anchor'></div> */}
              <div
                className={`users-overlay sticky bottom-0 ${
                  currentIntersecting ? 'hidden' : 'visible'
                }`}
              ></div>
            </div>
          </main>
        </div>
        <h2 className='pt-2 text-sm text-gray-700'>
          <sup className='text-red-900 text-base'>*</sup> Not scrollable...
          <i>yet!</i>
        </h2>
      </div>
    </>
  )
}

export default HiddenScrollbarBlur
