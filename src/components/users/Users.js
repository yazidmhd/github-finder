import React, { useContext, useState } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
 
const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;
    const [state,setState] = useState(false);

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map((value) => (
                    <UserItem key={value.id} user={value} />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
