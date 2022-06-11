import React,{useRef, useState} from "react";

const Sort = ({setUsers,users}) => {
  const [selectValue, setSelectValue]=useState("")

function sortUsers(sortParam){
  console.log(sortParam);

  const paramArr=users.filter(user=>user.sortParam)
  paramArr.sort()
  const sortedArr=[]
  paramArr.forEach(el=>{
    sortedArr.push(users.filter(user=>user[sortParam]=el)[0])
  })
  setUsers(sortedArr)
}

   /* function sort_by_key(array, key)
    {
     return array.sort(function(a, b)
     {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     });
    }*/
    function clickFunc(e){
        let sortParam=""
        switch (selectValue){
            case "name":sortParam="login";
            break;
            case "date": sortParam="created_at";
            break;
            case "repositpries": sortParam="public_repos";
            break;
        }
        //setUsers(sort_by_key(users, sortParam))
        sortUsers(sortParam)
        console.log(sortParam);
    }
    const selectState=selectValue===""?"Sort by":"sorted by"
  return (
    <div className="sort">
      <h3>{selectState}</h3>
      <select onChange={(e)=>{
        setSelectValue(e.target.value)
          if (selectValue!=="")clickFunc(e)
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
