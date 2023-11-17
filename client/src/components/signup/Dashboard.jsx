import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();
  
  useEffect(()=>{
    const checkAuth=async()=>{
      try{
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('ext_name='))
            .split('=')[1];
        const res=await axios.get('http://localhost:3001/protected-route',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        console.log(res)
        if(!res.status===200){
          throw new Error(res.error)
        }
        console.log("cache token verified")
      }
      catch(err){
        console.log(err)
        console.log(": error has occured")
        navigate('/login')
      }
    }
    checkAuth();
  },[])
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Your dashboard content goes here */}
    </div>
  );
};

export default Dashboard;