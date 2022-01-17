import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

// import{striped,bordered,hover,Table } from "reareact-bootstrap"

function OtherUser() {
  let getvalue = localStorage.getItem("person1");
  let loclValue = JSON.parse(getvalue);
//   console.log(loclValue);

  const [personData, setPersonData] = useState(loclValue);
/////////remove data function
const deleteItem=(id)=>{

    const newval=personData.filter((datas)=>datas.id!==id)
    setPersonData(newval)   
}

  return (

      
    <div >
    <a href="/"> back to register</a>
      {
        <table className="table" style={{ border:" 1px solid #eee"}}>
          <thead>
            <tr >
              <th>Name </th>
              <th>Email</th>
              <th>phone</th>
              <th>Dob</th>
              <th>Delete</th>
             
        
            </tr>
          </thead>

          <tbody style={{ border:" 1px solid black"}}>
            {personData.map((data) => {
              console.log(data);
              const { fullname, email, phone, dob, id, pic, password } = data;
              return (
                <tr key={id} >
                  <td>{fullname}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{dob}</td>
                  <td><button onClick={()=>{deleteItem(id)}}>delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>

  );
}
export default OtherUser;
