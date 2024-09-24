import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

const Header = () => {

  const [userdata, setUserdata] = useState({});
  const [userdata1, setUserdata1] = useState({});

  const UserData = async () => {
    let token = localStorage.getItem("token");

<<<<<<< HEAD
    await axios.get('https://user-management-api-zszn.onrender.com/validuser', {  
=======
    await axios.get('https://user-management-api-dhx7.onrender.com/validuser', {  
>>>>>>> cd145c007d6598f30f787c175889c56d92770c22
      headers: {
        "Content-Type": "application/json",
        "authorization": token
      }
    })
      .then(response => {
        console.log(response.data);
        setUserdata1(response.data.ValidUserOne);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getUserData = async () => {
<<<<<<< HEAD
    await axios.get('https://user-management-api-zszn.onrender.com/login/success', { withCredentials: true })
=======
    await axios.get('https://user-management-api-dhx7.onrender.com/login/success', { withCredentials: true })
>>>>>>> cd145c007d6598f30f787c175889c56d92770c22
      .then(response => {
        console.log(response);
        setUserdata(response.data.user);
      })
      .catch(error => {
        console.log(error);
      }); 
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
      await UserData();
    };

    fetchData();
  }, []);

  const logout = () => {
<<<<<<< HEAD
    localStorage.removeItem("token");
    window.open("https://user-management-api-zszn.onrender.com/logout", "_self")
=======
    window.open("https://user-management-api-dhx7.onrender.com/logout", "_self")
>>>>>>> cd145c007d6598f30f787c175889c56d92770c22
  }

  return (
    <>
      {Object.keys(userdata).length > 0 ? (
        <header className="header">
          <div className="div-name">Mr. {userdata.displayName}</div>
          <div className="div">
            <div className="profile-section">
              <div className="dashboard-name">
                <NavLink to="/Home" className="links">Home</NavLink>
              </div>
              <div className="dashboard-name">
                <NavLink to="/dashboard" className="links">Dashboard</NavLink>
              </div>
              <button className="logout-btn" onClick={logout}>Logout</button>
              <img
                alt="Profile"
                className="profile-pic"
                src={userdata.img}
              />
            </div>
          </div>
        </header>
      ) : (
        Object.keys(userdata1).length > 0 && (
          <header className="header">
            <div className="div-name">Mr. {userdata1.displayName}</div>
            <div className="div">
              <div className="profile-section">
                <div className="dashboard-name">
                  <NavLink to="/Home" className="links">Home</NavLink>
                </div>
                <div className="dashboard-name">
                  <NavLink to="/dashboard" className="links">Dashboard</NavLink>
                </div>
                <button className="logout-btn" onClick={logout}>Logout</button>
                <div className='profile-pic bg-danger d-flex justify-content-center align-items-center'>
                  {userdata1?.displayName ? userdata1.displayName[0].toUpperCase() : "U"}
                </div>
              </div>
            </div>
          </header>
        )
      )}
    </>
  );
};

export default Header;
