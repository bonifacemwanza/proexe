import { combineReducers } from "redux";

var State = {
  delete:{
    open:false,
    data:{}
  },
  edit:{},
  data:[],
  original:[],
  sort: false
};

const reducer = (state = State, action) => {
  if(action.type === "DELETE"){
    if(action.payload.open){
      state.delete.open = action.payload.open
      state.delete.data = action.payload.data
    }else{
      state.delete.open = action.payload.open
    }
    return {...state}
  }
  if(action.type === "FETCH_DATA"){
    let newArr = []
    action.payload.forEach(element=>{
      let obj = {
        id:element.id,
        name:element.name,
        username:element.username,
        email:element.email,
        city:element.address.city
      }
      newArr.push(obj)
    })
    state.data = newArr
    state.original = newArr

    // if(sort)
    // if(sort)

    return {...state}
  }
  if(action.type === "EDIT"){
    state.edit = action.payload
    return {...state}
  }
  if(action.type === "EDIT_CONFIRM"){
    state.data.forEach(element => {
      if(element.id === action.payload.id){
        element.name = action.payload.name
        element.username = action.payload.username
        element.email = action.payload.email
        element.city = action.payload.city
      }
    })
    return {...state}
  }
  if(action.type === "DELETE_CONFIRM"){
    let newArr = []
    state.data.forEach(element => {
      if(element.id !== action.payload) newArr.push(element)
    })
    state.data = newArr
    state.delete.open = false
    return {...state}
  }
  if(action.type === "SORT"){
    state.sort = !state.sort
    if(state.sort) state.data = state.data.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
    else state.data = state.data.sort((a, b) => a.id > b.id ? 1 : -1);
    return {...state}
  }
  if(action.type === "CREATE"){
    state.data.push(action.payload)
    return {...state}
  }
  return state
}

const allReducers = combineReducers({
  reducer,
});

export default allReducers;
