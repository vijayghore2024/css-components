import React from 'react'
import profilepic from '../assets/profilepic.png'
const Home = () => {
  return (
    <div className='d-flex justify-content-aroud align-items-center vh-100'>
      <div className="col-6 ms-5">
        <h1 className='fs-1'>Hi There,</h1>
        <h1 className='fs-1'>I'm Vijay Ghore</h1>
        <h2 className='fs-4'>I am <span className='text-warning'>Full Stack Developer</span></h2>
        <button className="btn btn-dark">
          About Me
        </button>
       
      </div>
      <div className="col-6 ms-5">
        <img src={profilepic} alt="profile pic" height={200} width={200}/>
      </div>
      
    </div>
  )
}

export default Home
