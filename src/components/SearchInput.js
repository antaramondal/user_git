import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";

function SearchInput(props) {
  const usercontext = useContext(UserContext);

  let getAllUsers = () => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        usercontext.usedispatch({ type: "setAllUsers", value: res.data });
        usercontext.usedispatch({ type: "setUsers", value: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onChange = (e) => {
    usercontext.usedispatch({ type: "setSearchValue", value: e.target.value });
  };

  let listItemClick = (selectedUser) => {
    usercontext.usedispatch({ type: "setSearchValue", value: selectedUser.login });
    usercontext.usedispatch({ type: "setShowList", value: false });
    usercontext.usedispatch({ type: "setUser", value: selectedUser });
  };

  let checkList = () => {
    let options = usercontext.usestate.allusers;
    let displayValue = options.filter(findMatchString);
    return displayValue;
  };

  let findMatchString = (value) => {
    let searchvalue = usercontext.usestate.searchValue.toUpperCase();
    let displayValue = value.login.toUpperCase();
    return displayValue.startsWith(searchvalue);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (usercontext.usestate.searchValue === "") return usercontext.usedispatch({ type: "setUsers", value: usercontext.usestate.allusers });
    let users = checkList();
    usercontext.usedispatch({ type: "setUsers", value: users });
  }, [usercontext.usestate.searchValue]);

  return (
    <div className="search-div">
      <input
        onFocus={() => usercontext.usedispatch({ type: "setShowList", value: true })}
        //onBlur={() => setTimeout(() => usercontext.usedispatch({ type: "setShowList", value: false }), 500)}
        onChange={(e) => onChange(e)}
        value={usercontext.usestate.searchValue}
        className="search-input"
        type="text"
        placeholder="Search user name"
        size="30"
      />
      {usercontext.usestate.showList && (
        <ul className="search-ul">
          {usercontext.usestate.users.length > 0 ? (
            usercontext.usestate.users.map((item) => (
              <li
                className="user-name"
                key={item.id}
                value={item.login}
                onClick={() => listItemClick(item)}
              >
                {item.login}
              </li>
            ))
          ) : (
            <li className="no-user">No data found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
