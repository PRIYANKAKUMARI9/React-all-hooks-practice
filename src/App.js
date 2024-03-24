import './App.css';
import UseTestt from './components/UseTestt';
import Useeffectt from './components/Useeffectt';
import Usereducerr from './components/Usereducerr';
import Usereff from './components/Usereff';
import Usermemo from './components/Usermemo';
/*Returns a stateful value, and a function to update it.
During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component. */


function App() {
  
  return (
    <div className="App">
     <UseTestt/>
     <Useeffectt/>
     <Usereff/>
     <Usereducerr/>
     <Usermemo/>
    </div>
  );
}

export default App;

