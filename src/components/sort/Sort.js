import React,{useState} from "react";

const Sort = ({setUsers,users, setSelectValue, selectValue, sortFunc}) => {

/*function sortUsers(sortParam){
  const paramArr=users.filter(user=>user.sortParam)
  paramArr.sort()
  const sortedArr=[]
  paramArr.forEach(el=>{
    sortedArr.push(users.filter(user=>user[sortParam]=el)[0])
  })
  setUsers(sortedArr)
}*/

  
    const selectState=selectValue===""?"Sort by":"sorted by"
  return (
    <div className="sort">
      <h3>{selectState}</h3>
      <select onChange={(e)=>{
        setSelectValue(e.target.value)
          if (selectValue!=="")sortFunc()
          }
        }>
      <option></option>
      <option>date</option>
      <option>name</option>
      <option>repositpries</option>
      </select>
    </div>
  );
};

export default Sort;
