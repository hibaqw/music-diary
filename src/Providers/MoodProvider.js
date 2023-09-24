import { createContext, useState, useEffect} from 'react';

// Create a Context
export const MoodContext = createContext();

// Create a Component wrapper from Context.Provider
export default function MoodProvider(props) {

  // Here is our Shared State 
  const [mood, setMood] = useState('');
  // const storeMood = useEffect();

  // Function to change the mood state
  const selectMood = function(newMood) {
    setMood(newMood);
    localStorage.setItem('mood', JSON.stringify(newMood));

  };

  const retrieveMood = function(){
    const storedMood = JSON.parse(localStorage.getItem('mood'));
    return storedMood? storedMood : "";

  }


  const moodData = {selectMood, retrieveMood, mood};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <MoodContext.Provider value={moodData}>
      {props.children}
    </MoodContext.Provider>
  );
};