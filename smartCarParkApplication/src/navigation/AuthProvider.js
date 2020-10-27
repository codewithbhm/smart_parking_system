import React, { useState } from 'react';
import Auth from '@react-native-firebase/auth';
import axios from 'axios'

const UserContext = React.createContext()

const AuthProvider = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [licensePlate, setLicensePlate] = useState("")
  const [userCreated, setUserCreated] = useState(false)

  const signIn = (email, password) => {
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  // Pass parameters to server for register
  const register = (fullName, licensePlate, email, password) => {
    axios.post('http://localhost:3000/api/user/register', {
      fullName,
      licensePlate,
      email,
      password
    }).then(res => {
      console.log(res.data);
      if (res.data === "userCreated") {
        return "okey"
      }
    }).catch(function (error) {
      console.log(error);
      return "not okey"
    })
  }

  return (
    <UserContext.Provider
      value={{
        email: email,
        password: password,
        fullName: fullName,
        licensePlate: licensePlate,
        setEmail: setEmail,
        setPassword: setPassword,
        setFullName: setFullName,
        setLicensePlate: setLicensePlate,
        setPassword: setPassword,
        signIn: signIn,
        register: register,
        userCreated: userCreated,
        setUserCreated: setUserCreated
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
};

export { AuthProvider, UserContext }