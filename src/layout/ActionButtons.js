import React, {useState} from 'react'
import Loading from '../Loading'
import {PhoneIcon, MonitorIcon, MoreIconVt as MoreIconHz} from '../media/Icons'
import ActionButton from './ActionButton'

const ActionButtons = ({available, friend}) => {
  const [loading, setLoading] = useState(false)

  const moreClick = () => {
    setLoading(true)
    const revertLoading = () => {
      setLoading(false)
    }
    setTimeout(revertLoading, 2000)
  }

  return (
    <>
      {available && (
        <>
          <ActionButton content={<PhoneIcon />} />
          <ActionButton content={<MonitorIcon />} />
        </>
      )}

      {!loading ? (
        <ActionButton content={<MoreIconHz />} onClick={moreClick} />
      ) : (
        <div className='px-2'>
          <Loading />
        </div>
      )}
    </>
  )
}

export default ActionButtons
