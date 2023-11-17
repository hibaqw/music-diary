import { createContext, useState} from 'react';
const store = require("store2");

// Create a Context
export const SpotifyTokenContext = createContext();

// Create a Component wrapper from Context.Provider
export default function SpotifyTokenProvider(props) {

  // Here is our Shared States
  const [spotifyToken, setSpotifyToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  // Function to set SpotifyToken
  const addSpotifyToken = function(spotifyToken) {
    // set token in store2
    store.set('spotifyToken', spotifyToken);
    if (store('spotifyToken')){
      setSpotifyToken(spotifyToken);
    } else {
      console.log('could not set spotify token.')
    }
  };

  const addRefreshToken = function(refreshToken) {
    store.set('refreshToken', refreshToken);
    if(store('refreshToken')){
      setRefreshToken(refreshToken);
    } else {
      console.log('could not set refresh token')
    }

  }

  const getSpotifyToken = function(){
    const spotifyToken = store('spotifyToken');
    return spotifyToken? spotifyToken : "";

  }
  const getRefreshToken = function(){
    const refreshToken = store('refreshToken');
    return refreshToken? refreshToken : "";
  }

  const spotifyTokenData = {addSpotifyToken, getSpotifyToken, addRefreshToken, getRefreshToken};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <SpotifyTokenContext.Provider value={spotifyTokenData}>
      {props.children}
    </SpotifyTokenContext.Provider>
  );
};