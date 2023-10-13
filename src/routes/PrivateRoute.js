import {Navigate} from "react-router-dom";


const PrivateRoute = ({children, route}) => {
  const loginStatus = JSON.parse(localStorage.getItem('loggedIn'));
  if (route === 'login'){
    return loginStatus? <Navigate to="/mood-selection" /> : children;
  }
  return loginStatus? children: <Navigate to="/" />;

};

export default PrivateRoute;