import React,{useContext} from 'react';
import { UserContext } from '../App';
import Profile from './Profile';
import Repo from './Repo';

function MainBody() {
    const usercontext = useContext(UserContext);
    return (
        
        <div className="mainBody-div">
            <Profile/>
            <Repo/>
        </div>
    )
}

export default MainBody
