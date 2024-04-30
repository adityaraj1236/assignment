import React from 'react'
import Template from './Template'
import LoginImg from "../assets/study_cover.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <div>

        {/* we will us Template here  and it will generate data   */}
        <Template
        title="Welcome to Student LMS"
        desc1="Build Future for today , tommorow and beyond"
        desc2="Education to future-proof your ward's career."
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}






        />
    </div>
  )
}

export default Login