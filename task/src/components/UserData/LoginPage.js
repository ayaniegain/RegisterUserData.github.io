import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import firebase from "../Database/firebase"
// import { AppPlatform } from "firebase-admin/lib/project-management/app-metadata";

const loginUser={
        email:"",
        password:""
}




function LoginPage() {
    // manage state
const [uservalue, setUservalue] = useState(loginUser)
// handeler

const formHandler = async (event) =>{
alert('Submitted')
  event.preventDefault()

  const email = uservalue['email']
    const password = uservalue['password']
    const database = firebase.getFirestore(firebase.app);
  const ref = firebase.collection(database,'data')
  const result = await firebase.getDocs(firebase.where('email','==',email))
  console.log(result)
}

const loginHandeler=(e)=>{
    e.preventDefault()
    const{name,value}=e.target
    setUservalue({...uservalue,
        [name]:value})
    console.log(uservalue);
    
}


  return (
    <div className="login">
      <Form className="loginForm" onSubmit={formHandler}>
        <h3>Log in</h3>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={uservalue.email}
            onChange={loginHandeler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password "
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={uservalue.password}
            onChange={loginHandeler}

          />
        </div>

        <Link to="/OtherUser"> 

      <Button type="submit" className="btn btn-primary btn-md btn-block">
        Sign in 
        </Button>
      </Link>  
        <p className="forgot-password text-right">
          Not have an account ?<Link to="/"> Register here</Link>
        </p>
      </Form>
    </div>
  );
}

export default LoginPage;
