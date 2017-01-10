import React    from 'react'
import { Link } from 'react-router'
import Nav from '../Nav/Nav'

const RepoLinks = (repos, userName) => (
  repos.map((repo) => (
    <li key={repo}>
      <Link to={`/${userName}/${repo}`}>{repo}</Link>
    </li>
  ))
)

const Repos = ({ repos, userName, error }) => (
  error.length === 0
    ? (
      <div>
        <Nav header={`${userName}'s Repos`} />
        <ul>
          {RepoLinks(repos, userName)}
        </ul>
      </div>
    ) : (
      <h1>{error}</h1>
    )
)

export default Repos
