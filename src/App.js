import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/search/search";
import Button from "./components/button/Button";
import UserCard from "./components/userCard/UserCard";
import Sort from "./components/sort/Sort";
function App() {
  const [gitUser, setGitUser] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [users, setUsers] = useState([
   /* {
      avatar_url: "https://avatars.githubusercontent.com/u/97057811?v=4",
      name: "fridiValach",
      created_at: "2022-01-03T19:18:33Z",
      public_repos: 11,
    },*/
  ]);
  const [isSearched, setIsSearched] = useState(false);
  async function fetchData() {
    const githubURL = "https://api.github.com/users/" + searchUser;
    const { data } = await axios.get(githubURL);
    console.log(data);
    const { avatar_url,id, name,login, created_at, public_repos } = data;
    console.log(gitUser);
    console.log(searchUser);
    setUsers([...users, { avatar_url,id, name, login,created_at, public_repos }]);
    console.log("users:", users);
  }
  useEffect(() => {
    try {
      fetchData();
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
        clickEvent={() => {
          setSearchUser(gitUser);
          setIsSearched(true);
          console.log(gitUser);
          console.log(searchUser);
          
        }}
      />
      <Button
        text="clear"
        clickEvent={() => {
          setGitUser("");
          setIsSearched(false);
        }}
      />
      <Button
        text="reset"
        clickEvent={() => {
          setUsers([]);
          setGitUser("");
          setSearchUser("");
        }}
      />
      <Sort setUsers={setUsers} users={users}/>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
    
{users.map((user,i) => 
          
      <UserCard user={user} key={user.id} setUsers={setUsers} users={users}/>)}
              
      </div>
    </div>
  );
}

export default App;
