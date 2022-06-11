import React from 'react'
import Button from '../button/Button'
import "./UserCard.css"

const UserCard = ({user, users, setUsers}) => {
  return (
    <div className='userCard'>
        <div className='details'>
        <img src={user.avatar_url} alt="avatar"/>
        <h3>{user.name?user.name:user.login}</h3>
        <h4>Created AT: {user.created_at.split("T")[0]}</h4>
        </div>
        <div className='repsNumber'>
            <h2>{user.public_repos}</h2>
            <h4>Repositories</h4>
        </div>
        <Button text="delete" clickEvent={()=>{setUsers(users.filter((current)=>current!==user))}}/>
        
    </div>
  )
}

export default UserCard
/*import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/search/search";
import Button from "./components/button/Button";
import UserCard from "./components/userCard/UserCard";
function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchUser, setSearchUser] = useState("");
  async function fetchData() {
    const githubURL = "https://api.github.com/users/" + searchUser;
    const response = await axios.get(githubURL);
    console.log(response);
    console.log(gitUser);
    console.log(searchUser);
    return response
  }
  useEffect(() => {
    try {
      //  fetchData()
    } catch {
      console.log(gitUser);
      console.log(searchUser);
    }
  }, [searchUser]);
  return (
    <div className="App">
      <Search setGitUser={setGitUser} gitUser={gitUser} />
      <Button
        text="search"
        clickEvent={async() => {
          const response = await fetchData()
          //setSearchUser(gitUser);
          console.log(gitUser);
          console.log(searchUser);
          (<UserCard />);
        }}
      />
      <Button
        text="clear"
        clickEvent={() => {
          setGitUser("");
        }}
      />
      <Button
        text="reset"
        clickEvent={() => {
          console.log("reset");
        }}
      />
    </div>
  );
}

export default App;
*/