import React from 'react'
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
    return (
        repos.map(value => <RepoItem key={value.id} repo={value} />)
    )
}

export default Repos
