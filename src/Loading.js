import React from 'react'
import rolling from './rolling.gif'

const Loading = () => {
  return (
    <div>
      <img src={rolling} style={rollingStyle} />
    </div>
  )
}

const rollingStyle = {
  width: '24px',
  height: '24px',
}

export default Loading
