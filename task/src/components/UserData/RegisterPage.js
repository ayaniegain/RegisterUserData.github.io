import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import firebase from '../Database/firebase';
import OtherUser from "../DashBoard/OtherUser";


const RegisterUser = {
  fullname: "",
  email: "",
  password: "",
  phone: "",
  dob: "",
  pic: "",
};

function RegisterPage() {
  // manage state
  const [rvalue, setRvalue] = useState(RegisterUser);
  const [record, setRecord] = useState([]);
  const [success, setSuccess] = useState("fill the form")

  // Resister handeler
  const loginHandeler = (e) => {
    const { name, value } = e.target;

    setRvalue({ ...rvalue, [name]: value });
  };
  
  const formHandler = (event) => {
    event.preventDefault();
    setSuccess("success")

    const newRecord = { ...rvalue, id: new Date().getTime().toString() };

    setRecord([...record, newRecord]);

    ///firebase
  //   console.log("Saving data...")
  // const database = firebase.getFirestore(firebase.app);
  // const ref = firebase.collection(database,'data')
  // console.log(record)
  // firebase.addDoc(ref,newRecord)
 
    setRvalue({
      fullname: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      pic: "",
    });
    
  };
useEffect(() => {
 localStorage.setItem("person1",JSON.stringify(record))
  
  
}, [record])


  return (
    <div className="register">
    {/* <h2>{success}</h2> */}
      <Form className="registerForm" onSubmit={formHandler}>
        <h3>Register</h3>

        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Full name"
            name="fullname"
            value={rvalue.fullname}
            onChange={loginHandeler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={rvalue.email}
            onChange={loginHandeler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={rvalue.password}
            onChange={loginHandeler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone no</label>
          <input
            type="text"
            id="phone"
            className="form-control"
            placeholder="Phone no"
            name="phone"
            value={rvalue.phone}
            onChange={loginHandeler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Your BirthDate</label>
          <input
            className="birthdate"
            type="date"
            placeholder="YYYY-MM-DD"
            data-date-split-input="true"
            name="dob"
            value={rvalue.dob}
            onChange={loginHandeler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Your Picture</label>
          <input
            type="file"
            name="pic"
            onChange={loginHandeler}
            value={rvalue.pic}
            id="image"
            accept="image/*"
            multiple={false}
          />
        </div>


        <Button type="submit" className="btn btn-success btn-md btn-block">
        {/* <Link to="/OtherUser">  */}
          Register
        {/* </Link> */}
        </Button>
        <p className="forgot-password text-right">
          Already registered? <Link to="/loginpage">log in</Link>
        </p>
      </Form>

      {/* <div>{
        record.map((e)=>{
          const{fullname,email,phone,id}=e
          return(
            <Fragment key={id} >

            <h1>{fullname}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            </Fragment>
          )

        })
      }</div> */}
    </div>
  );
}

export default RegisterPage;
