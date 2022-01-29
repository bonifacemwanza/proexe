import React from 'react';
import {AiOutlineSortAscending} from "react-icons/ai"
import { DELETE, EDIT, SORT } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    let data = useSelector(state => state.reducer).data
    let sort = useSelector(state => state.reducer).sort
    const dispatch = useDispatch()
    const TableElements = ({element}) => {
       return ( 
       <>
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.city}</td>
                <td><Link to="/Edit"><button onClick={()=>dispatch(EDIT(element))} className='table_btn_edit'>edit</button></Link> </td>
                <td> <button onClick={()=>dispatch(DELETE({open:true, data:element}))} className='table_btn_delete'>delete</button> </td>
            </tr>
        </>
       )
    }

    return <div className='home'>
        <p className='page_header'>Dashboard</p>
        <div className='home_body'>
            <div className='home_body_top'>
                <p className='home_top_text'>User list</p>
                <div className='top_btns'>
                    <Link to="/Create"><button className='add_btn'>Add new</button></Link>
                    <button onClick={()=>dispatch(SORT())} className='sort_btn' style={sort ? {backgroundColor:"#6c757d"}:{}}><AiOutlineSortAscending/></button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Names</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(ele => {
                      return  <TableElements element={ele} key={ele.id} />
                    })}
                </tbody>
            </table>
        </div>
    </div>;
};

export default Home;
