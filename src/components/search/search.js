import React from "react";

const Search = ({setGitUser, gitUser, keyEvent}) => {
  return (
    <div>
      <input type="text"  value={gitUser} onKeyDown={(e)=>{if(e.keyCode===13){keyEvent()}}} onChange={(e)=>{setGitUser(e.target.value)}}></input>
    </div>
  );
};

export default Search;
