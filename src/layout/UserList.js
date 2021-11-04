import React from 'react'
import RemoveButton from './RemoveButton'
import UserCard from './UserCard'

const UserList = ({users, usersType, editing}) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <UserCard
            lastCard={i === users.length - 1}
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
