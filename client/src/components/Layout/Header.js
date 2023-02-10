import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { message } from 'antd';
const Header = () => {
    const [loginUser, setLoginUser] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setLoginUser(user)
        }
    }, [])
    const logoutHandler =()=>{
        localStorage.removeItem('user')
        message.success('Logout Successfully')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">
                        Expanse Management</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">{""}
                            <p className='nav-link'> {loginUser && loginUser.name}</p> </li>

                        <li className="nav-item"><button className='btn btn-primary' 
                        onClick={logoutHandler}> Logout</button> </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
