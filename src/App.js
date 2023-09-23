import './App.css';
import './custom.scss';
import Login from './routes/Login';
import MoodSelection from './routes/MoodSelection';

function App() {
  return (
    <div bg="body-bg" className='App'>
      <Login/>
      {/* <MoodSelection/> */}
    </div>
  );
}

export default App;
