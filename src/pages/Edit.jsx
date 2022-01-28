import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {EDIT_CONFIRM} from "../redux/actions"

const Edit = () => {
    const state = useSelector(state => state.reducer).edit
    const [name, setname] = useState(state.name)
    const [username, setusername] = useState(state.username)
    const [email, setemail] = useState(state.email)
    const [city, setcity] = useState(state.city)
    const [nameValid, setnameValid] = useState("")
    const [usernameValid, setusernameValid] = useState("")
    const [emailValid, setemailValid] = useState("")

    const dispatch = useDispatch()


    const handleSubmit = () => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if(!regex.test(email)) setemailValid("Invalid Email Address")
        if(!name) setnameValid("Names Cant be empty")
        if(!username) setusernameValid("Username Cant be empty")
        let obj = {
            id : state.id,
            name:name,
            username:username,
            email:email,
            city:city
        }
        if(regex.test(email) && name && username){
            document.getElementById("to_home").click()
            dispatch(EDIT_CONFIRM(obj))
        }
    }
  return <div className='create'>
      <p className='page_header'>Edit User</p>
      <div className='home_body'>
          <div className='home_body_top'>
              <p className='home_top_text'>User Details</p>
          </div>
          <div className='form'>
              <div className='form_rows'>
                  <p>Names</p>
                  <input type="text" onFocus={()=>setnameValid("")} value={name} onChange={(e)=>setname(e.target.value)} />
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

export default Edit;
