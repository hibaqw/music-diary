import { createContext, useState} from 'react';
const store = require("store2");

// Create a Context
export const SpotifyTokenContext = createContext();

// Create a Component wrapper from Context.Provider
export default function SpotifyTokenProvider(props) {

  // Here is our Shared State 
  const [spotifyToken, setSpotifyToken] = useState("");

  // Function to set SpotifyToken
  const addSpotifyToken = function(token) {
    // set token in store2
    store.set('spotifyToken', token);
    if (store('spotifyToken')){
      setSpotifyToken(token);
    } else {
      console.log('could not set token.')
    }
  };

  const getSpotifyToken = function(){
    const spotifyToken = store('spotifyToken');
    return spotifyToken? spotifyToken : "";

  }

  const spotifyTokenData = {addSpotifyToken, getSpotifyToken, spotifyToken};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <SpotifyTokenContext.Provider value={spotifyTokenData}>
      {props.children}
    </SpotifyTokenContext.Provider>
  );
};