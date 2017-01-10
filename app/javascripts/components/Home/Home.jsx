import React from 'react'

const Home = ({ onFetch, onUserNameChange, userName, isFetching, error }) => (
  <div>
    <form action='#'>
      <input
        placeholder='Enter Github username'
        type='text'
        onChange={onUserNameChange}
        value={userName}
      />
      <button type='submit' onClick={onFetch}>{isFetching === true ? 'Loading' : 'Submit'}</button>
    </form>
    <p>{error}</p>
  </div>
)

export default Home
