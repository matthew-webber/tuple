import React from 'react'
import gravatar from '../media/missing-gravatar-purple.png'

const Gravatar = ({src}) => {
  return (
    <div>
      <img
        src={src || gravatar}
        className='absolute top-0 left-0 w-10 h-10 rounded-full'
      />
    </div>
  )
}

const gravatarStyle = {
  height: '40px',
  width: '40px',
}

export default Gravatar
