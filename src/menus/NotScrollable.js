import React, {useState} from 'react'
import {Fade} from 'react-awesome-reveal'
import Caption from '../menus/Caption'
import Gravatar from '../layout/Gravatar'
import HeaderSearch from '../layout/HeaderSearch'
import UserCard from '../layout/UserCard'
import {EditIcon, CancelIcon} from '../media/Icons'

const NotScrollable = () => {
  const [editing, setEditing] = useState(false)

  const editClick = () => {
    setEditing(!editing)
  }

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
                  <div>
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
                      className='feather feather-user-plus'
                    >
                      <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                      <circle cx='8.5' cy='7' r='4'></circle>
                      <line x1='20' y1='8' x2='20' y2='14'></line>
                      <line x1='23' y1='11' x2='17' y2='11'></line>
                    </svg>
                  </div>
                </button>
                <div
                  id='headway'
                  className='relative flex items-center justify-center h-8 w-8 text-purple-200 hover:text-purple-100 transition duration-150 ease-in-out cursor-pointer'
                >
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      stroke='currentColor'
                      strokeWidth='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-bell'
                    >
                      <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
                      <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
                    </svg>
                  </div>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                  <span id='HW_badge_cont' className='HW_badge_cont HW_visible'>
                    <span
                      id='HW_badge'
                      className='HW_badge HW_softHidden'
                      data-count-unseen=''
                    ></span>
                  </span>
                </div>
                <button type='button' className='ml-2 flex items-center'>
                  <div className='relative mr-1 w-10 h-10 flex-shrink-0'>
                    <Gravatar />
                  </div>
                  <div className='text-purple-200'>
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
                      className='feather feather-chevron-down'
                    >
                      <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </header>
            <div className='flex-shrink-0'></div>
            <div className='scroll-hide-chrome relative flex-grow overflow-y-hidden users-main'>
              <div className='flex-grow users-overlay'>
                <div
                  className='sticky top-0 flex items-center bg-gray-50 z-10 p-3 border-b leading-3'
                  style={{fontSize: '11px'}}
                >
                  <div className='flex-grow uppercase text-gray-500 tracking-wider font-bold'>
                    My Friends
                  </div>
                  <div>
                    <button
                      className='text-xs text-gray-500 font-normal'
                      onClick={editClick}
                    >
                      {!editing ? <EditIcon /> : <CancelIcon />}
                    </button>
                  </div>
                </div>
                <UserCard
                  userInfo={{
                    imgThumb: <Gravatar />,
                    userName: 'Matt Webber',
                    userEmail: 'matthew.lee.webber@gmail.com',
                    friend: true,
                  }}
                  presence='online'
                  editing={editing}
                />
                <UserCard
                  userInfo={{
                    imgThumb: <Gravatar />,
                    userName: 'Jeramy Baker',
                    userEmail: 'jeramy@gmail.com',
                    friend: true,
                  }}
                  presence='busy'
                  editing={editing}
                />
                <UserCard
                  userInfo={{
                    imgThumb: <Gravatar />,
                    userName: 'Richard Christy',
                    userEmail: 'richard@hs.com',
                    friend: true,
                  }}
                  presence='busy'
                  editing={editing}
                />
                <div
                  className='sticky top-0 flex items-center bg-gray-50 z-10 p-3 border-t border-b leading-3'
                  style={{fontSize: '11px'}}
                >
                  <div className='flex-grow uppercase text-gray-500 tracking-wider font-bold'>
                    Team Directory
                  </div>
                </div>
                <UserCard
                  userInfo={{
                    imgThumb: (
                      <Gravatar src='https://www.gravatar.com/avatar/b635972e073c025c34c6226c5a8a01f9?s=80&d=https%3A%2F%2Fs3.wasabisys.com%2Ftuple%2Fimages%2Fmissing-gravatar-purple.png' />
                    ),
                    userName: 'Ben Orenstein',
                    userEmail: 'ben@tuple.app',
                  }}
                />
                <UserCard
                  userInfo={{
                    imgThumb: (
                      <Gravatar src='https://www.gravatar.com/avatar/441211cbec372b4ffc4c5dbd9278bc25?s=80&d=https%3A%2F%2Fs3.wasabisys.com%2Ftuple%2Fimages%2Fmissing-gravatar-purple.png' />
                    ),
                    userName: 'Derrick Reimer',
                    userEmail: 'derrickreimer@gmail.com',
                  }}
                />
                <UserCard
                  userInfo={{
                    imgThumb: <Gravatar />,
                    userName: 'Jane Doe',
                    userEmail: 'janedoe@gmail.com',
                  }}
                />
                <UserCard
                  userInfo={{
                    imgThumb: <Gravatar />,
                    userName: 'John Doe',
                    userEmail: 'johndoe@gmail.com',
                  }}
                />
              </div>
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

export default NotScrollable
