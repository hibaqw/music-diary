import { createContext, useState} from 'react';
const store = require("store2");

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
    store.set('mood', newMood);
  };

  const retrieveMood = function(){
    const storedMood = store('mood')
    return storedMood? storedMood : "";

  }


  const moodData = {selectMood, retrieveMood};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <MoodContext.Provider value={moodData}>
      {props.children}
    </MoodContext.Provider>
  );
};