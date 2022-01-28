import './App.css';
import Create from './pages/Create';
import Delete from './pages/Delete';
import Edit from './pages/Edit';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import { useEffect } from 'react';
import { FETCH_DATA } from './redux/actions';
import axios from 'axios';
import { useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        .then(function (response) { dispatch(FETCH_DATA(response.data)) })
        .catch(function (error) { console.log(error) })
    },[dispatch])
    return (
      <div className="App">
      <Delete/>
      <Router>
          <Routes>
              <Route path="/Edit" element={<Edit/>} />
              <Route path="/Create" element={<Create/> } />
              <Route path="/" element={<Home/>} />
          </Routes>
      </Router>
      </div>
    );
}

export default App;
