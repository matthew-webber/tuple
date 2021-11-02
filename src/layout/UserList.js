import React, {useState} from 'react'
import RemoveButton from './RemoveButton'
import UserCard from './UserCard'

const UserList = ({users, usersType, editing, x}) => {
  return (
    <>
      {users.map((user, i) => {
        console.log(i)
        console.log(users.length)
        const last = i === users.length - 1 && true

        return (
          <UserCard
            last={last ? x : ''}
            userData={user}
            friend={usersType === 'friends' && true}
          >
            <RemoveButton visible={editing} />
          </UserCard>
        )
      })}
    </>
  )
}

export default UserList
