import React          from 'react'
import * as styles    from './styles.scss'

const Home = ({ onFetch, onUserNameChange, userName, isFetching, error }) => (
  <div className={`${styles.cont} center`}>
    <h1 className='head'>{'Enter a github user name'}</h1>
    <form action='#' className={styles.form}>
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
