import React from 'react'

const Home = ({ onFetch, onUserNameChange, userName }) => (
  <div>
    <form action='#'>
      <input placeholder='Enter Github username' type='text' onChange={onUserNameChange} value={userName} />
      <button type='submit' onClick={onFetch}>{'Submit'}</button>
    </form>
  </div>
)

export default Home
