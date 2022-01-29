import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {CREATE} from "../redux/actions"

const Create = () => {
    const state = useSelector(state => state.reducer).data
    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")
    const [nameValid, setnameValid] = useState("")
    const [usernameValid, setusernameValid] = useState("")
    const [emailValid, setemailValid] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if(!regex.test(email)) setemailValid("Invalid Email Address")
        if(!name) setnameValid("Names Cant be empty")
        if(!username) setusernameValid("Username Cant be empty")
        let id = 0
        state.forEach(element => {
            if(id <= element.id ) id = element.id + 1
        });
        let obj = {
            id : id,
            name:name,
            username:username,
            email:email,
            city:city
        }
        if(regex.test(email) && name && username){
            document.getElementById("to_home").click()
            dispatch(CREATE(obj))
        }
    }
  return <div className='create'>
      <p className='page_header'>Create User</p>
      <div className='home_body'>
          <div className='home_body_top'>
              <p className='home_top_text'>User Details</p>
          </div>
          <div className='form'>
              <div className='form_rows'>
                  <p>Names</p>
                  <input 
                    type="text"
                    autoComplete="off"
                    onFocus={()=>setnameValid("")} value={name} onChange={(e)=>setname(e.target.value)} />
              </div>
              <p className='error_text'>{nameValid}</p>
              <div className='form_rows'>
                  <p>Username</p>
                  <input type="text" onFocus={()=>setusernameValid("")} value={username} onChange={(e)=>setusername(e.target.value)} />
              </div>
              <p className='error_text'>{usernameValid}</p>
              <div className='form_rows'>
                  <p>Email</p>
                  <input type="text" onFocus={()=>setemailValid("")} value={email} onChange={(e)=>setemail(e.target.value)} />
              </div>
              <p className='error_text'>{emailValid}</p>
              <div className='form_rows'>
                  <p>City</p>
                  <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} />
              </div>
              <div className='form_bottom_btn'>
                  <Link to="/"><button id="to_home" className='form_btn_cancel'>Cancel</button></Link>
                  <button className='form_btn_submit' onClick={handleSubmit}>Submit</button>
              </div>
          </div>
      </div>
  </div>;
};

export default Create;
