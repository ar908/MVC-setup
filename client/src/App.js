
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Header from './components/Layout/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProtectedRoutes>
        <HomePage/>
        </ProtectedRoutes>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>


    </>
  );
}

export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children
  }else{
    return <Navigate to ="/login" />
  }
}
export default App;
