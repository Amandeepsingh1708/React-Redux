import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>User Components</h1>
      <p>{props.value.name}</p>
      <p>{props.value.age}</p>
    </div>
  )
}

export default User
