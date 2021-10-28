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
  width: '20px',
  height: '20px',
}

export default Loading
