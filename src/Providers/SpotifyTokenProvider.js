import { createContext, useState, useEffect} from 'react';

// Create a Context
export const SpotifyTokenContext = createContext();

// Create a Component wrapper from Context.Provider
export default function SpotifyTokenProvider(props) {

  // Here is our Shared State 
  const [spotifyToken, setSpotifyToken] = useState("");

  // Function to set SpotifyToken
  const addSpotifyToken = function(token) {
    localStorage.setItem('spotifyToken', JSON.stringify(token));
    setSpotifyToken(token);

  };

  const getSpotifyToken = function(){
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