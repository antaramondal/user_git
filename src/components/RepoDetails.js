import React,{ useContext} from 'react';
import { UserContext } from "../App";

function RepoDetails() {
    const usercontext = useContext(UserContext);
    return (
        <div>
            <p>ID : {usercontext.usestate.repo.id}</p>
            <p>Name : {usercontext.usestate.repo.name}</p>
            <p>Full Name : {usercontext.usestate.repo.full_name}</p>
            <p>Description : {usercontext.usestate.repo.description}</p>
            <p>Fork : {usercontext.usestate.repo.fork}</p>
            <p>Created at : {usercontext.usestate.repo.created_at}</p>
            <p>Updated at : {usercontext.usestate.repo.updated_at}</p>
            <p>Pushed at : {usercontext.usestate.repo.pushed_at}</p>
            <p>Size : {usercontext.usestate.repo.size}</p>
            <p>Language : {usercontext.usestate.repo.language}</p>
            <p>Forks Count : {usercontext.usestate.repo.forks_count}</p>
            <p>Open Issues : {usercontext.usestate.repo.open_issues}</p>
            <p>Watchers : {usercontext.usestate.repo.watchers}</p>
            <p>Default Branch : {usercontext.usestate.repo.default_branch}</p>
            
        </div>
    )
}

export default RepoDetails
