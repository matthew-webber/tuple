import React, {useState} from 'react'
import RemoveButton from './RemoveButton'
import UserCard from './UserCard'

const UserList = React.forwardRef(({users, usersType, editing, x}, ref) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <UserCard
            ref={ref ? ref : null}
            userData={user}
            friend={usersType === 'friends' && true}
          >
            <RemoveButton visible={editing} />
          </UserCard>
        )
      })}
    </>
  )
})

export default UserList
