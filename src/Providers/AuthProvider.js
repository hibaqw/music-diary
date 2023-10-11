import { createContext, useState, useEffect} from 'react';

// Create a Context
export const AuthContext = createContext();

// Create a Component wrapper from Context.Provider
export default function AuthProvider(props) {

  // Here is our Shared State 
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to change the mood state
  const setLoginStatus = function() {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', JSON.stringify("true"));

  };

  const getLoginStatus = function(){
    const loginStatus = JSON.parse(localStorage.getItem('loggedIn'));
    return loginStatus? loginStatus : "";

  }

  const loginData = {setLoginStatus, getLoginStatus, loggedIn};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <AuthContext.Provider value={loginData}>
      {props.children}
    </AuthContext.Provider>
  );
};