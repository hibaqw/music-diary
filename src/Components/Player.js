import SpotifyPlayer from "react-spotify-web-playback"

function Player ({accessToken, trackUri}) {

  if (!accessToken) return null
  return <SpotifyPlayer token = {accessToken} uris = {trackUri ? trackUri: []}
  styles={{
    activeColor: '#EEF5FF',
    bgColor: '#022442',
    color: '#768DA1',
    loaderColor: '#fff',
    sliderColor: '#EEF5FF',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
  }}/>
}

export default Player;