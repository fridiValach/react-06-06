import React from "react";

const Search = ({setGitUser, gitUser}) => {
  return (
    <div>
      <input type="text"  value={gitUser} onChange={(e)=>{setGitUser(e.target.value)}}></input>
    </div>
  );
};

export default Search;
