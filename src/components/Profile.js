import React, { useContext,useEffect,useState } from "react";
import { UserContext } from "../App";
import axios from 'axios';

function Profile() {
  const usercontext = useContext(UserContext);

  useEffect(()=>{
    axios.get(usercontext.usestate.user.url).then((res)=>usercontext.usedispatch({ type: "setUserInfo", value: res.data })).catch((err)=>console.log(err))
  },[usercontext.usestate.user]);
  return (
    <div className="profile-main-div">
        
          <img className="profile-img" src={usercontext.usestate.user.avatar_url} width="150" height="150" />
          <p>Log in : {usercontext.usestate.user.login}</p>
          <p>Name : {usercontext.usestate.userInfo.name}</p>
          <p>Location : {usercontext.usestate.userInfo.location}</p>
          <p>Email ID : {usercontext.usestate.userInfo.email}</p>
          <p>Twitter : {usercontext.usestate.userInfo.twitter_username}</p>
          <p>Followers : {usercontext.usestate.userInfo.followers}</p>
          <p>Following : {usercontext.usestate.userInfo.following}</p>
          <p>No of Public Repo : {usercontext.usestate.userInfo.public_repos}</p>
          <p>Bio : {usercontext.usestate.userInfo.bio}</p>
        
    </div>
  );
}

export default Profile;
