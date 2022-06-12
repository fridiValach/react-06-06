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
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  async function fetchData() {
    const githubURL = "https://api.github.com/users/" + searchUser;
    const { data } = await axios.get(githubURL);
    const { avatar_url, id, name, login, created_at, public_repos } = data;
    const nameForDisplay = name ? name : login;
    console.log(gitUser);
    console.log(searchUser);
    setUsers([
      ...users,
      { avatar_url, id, nameForDisplay, created_at, public_repos },
    ]);
    console.log("users:", users);
  }

  function searchFunc() {
    setSearchUser(gitUser);
    console.log(gitUser);
    console.log(searchUser);
    sortFunc();
    setGitUser("");
  }

  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  function sortFunc() {
    let sortParam = "";
    switch (selectValue) {
      case "name":
        sortParam = "nameForDisplay";
        break;
      case "date":
        sortParam = "created_at";
        break;
      case "repositpries":
        sortParam = "public_repos";
        break;
    }
    sortParam === "public_repos"
      ? setUsers(sortByKey(users, sortParam).reverse())
      : setUsers(sortByKey(users, sortParam));
    //sortUsers(sortParam)
    console.log(sortParam);
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
      
      <Search setGitUser={setGitUser} gitUser={gitUser} keyEvent={searchFunc} />

      <Button text="search" clickEvent={searchFunc} />

      <Button
        text="reset"
        clickEvent={() => {
          setUsers([]);
          setGitUser("");
          setSearchUser("");
        }}
      />

      <Sort
        setUsers={setUsers}
        users={users}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        sortFunc={sortFunc}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user, i) => (
          <UserCard
            user={user}
            key={user.id}
            setUsers={setUsers}
            users={users}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
