import React, {useState} from 'react'
import RemoveButton from './RemoveButton'
import UserCard from './UserCard'

const UserList = ({users, usersType, editing}) => {
  return (
    <>
      {users.map((user) => (
        <UserCard userData={user} friend={usersType === 'friends' && true}>
          <RemoveButton visible={editing} />
        </UserCard>
      ))}
    </>
  )
}

export default UserList
