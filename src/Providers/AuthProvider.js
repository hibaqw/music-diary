import { createContext, useState} from 'react';
const store = require("store2");

// Create a Context
export const AuthContext = createContext();

// Create a Component wrapper from Context.Provider
export default function AuthProvider(props) {

  // Here is our Shared State 
  const [userInfo, setUserInfo] = useState({})

  // Function to change the mood state
  const updateUserInfo = function(uid,name,email) {
    const userInfoObj= {uid,name,email}
    store.set('userInfo', userInfoObj);
    setUserInfo(userInfoObj);
  };

  const getUserInfo = function(){
    const userInfoObj = store('userInfo')
    return userInfoObj? userInfoObj : "";

  }

  const userInfoData = {updateUserInfo, getUserInfo};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <AuthContext.Provider value={userInfoData}>
      {props.children}
    </AuthContext.Provider>
  );
};