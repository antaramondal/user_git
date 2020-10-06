import React,{useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';

export const UserContext = React.createContext();

const initialState = {
  user: {},
  allusers:[],
  users:[],
  showList:false,
  searchValue:"",
  repoData:[],
  userInfo:[],
  showRepos:true,
  repo:{},
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case "setUser":{
      return { ...state, user: action.value };
    }
    case "setAllUsers":{
      return { ...state, allusers: action.value };
    }
    case "setUsers":{
      return { ...state, users: action.value };
    }
    case "setShowList":{
      return { ...state, showList: action.value };
    }
    case "setSearchValue":{
      return { ...state, searchValue: action.value };
    }
    case "setRepoData":{
      return { ...state, repoData: action.value };
    }
    case "setUserInfo":{
      return { ...state, userInfo: action.value };
    }
    case "setShowRepos":{
      return { ...state, showRepos: action.value };
    }
    case "setRepo":{
      return { ...state, repo: action.value };
    }
     
    
    default:
      return state;
  }
};

function App() {
  const [userData,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{ usestate: userData, usedispatch: dispatch }}>
      <Header/>
      {Object.keys(userData.user).length !== 0 &&<MainBody/>}
      
    </UserContext.Provider>
    
  );
}

export default App;
