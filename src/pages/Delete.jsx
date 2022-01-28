import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE, DELETE_CONFIRM } from '../redux/actions';
const Delete = () => {
    const state = useSelector(state => state.reducer).delete
    const dispatch = useDispatch()
    return <div style={state.open ? {}:{display:"none"}} className='delete_modal'>
        <div className='delete_modal_body'>
            <div className='delete_pad'>
                <div className='delete_pad_top'>
                    <p>Delete</p>
                </div>
                <p className='delete_text'>Are you sure you want to delete</p>
                <p className='delete_text'>{state.data.name} ?</p>
                <div className='delete_modal_btns'>
                    <button className='delete_modal_cancel' onClick={()=>dispatch(DELETE({open:false}))}>Cancel</button>
                    <button className='delete_modal_delete' onClick={()=>dispatch(DELETE_CONFIRM(state.data.id))}>Delete</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Delete;
