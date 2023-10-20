import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './routes/Login';
import MoodSelection from './routes/MoodSelection';
import MoodSelected from './routes/MoodSelected';
import MoodProvider from './Providers/MoodProvider';
import AuthProvider from './Providers/AuthProvider';
import SpotifyTokenProvider from './Providers/SpotifyTokenProvider';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Login />
      
    ),
  },
  {
    path: "mood-selection",
    element: (
   
      <MoodSelection />),


  },
  {
    path: "mood-selected",
    element: (<MoodSelected />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SpotifyTokenProvider>
      <AuthProvider>
        <MoodProvider>
          <RouterProvider router={router} />
        </MoodProvider>
      </AuthProvider>
    </SpotifyTokenProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
