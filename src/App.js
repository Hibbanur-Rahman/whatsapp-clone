import './App.css';
// import Button from "@mui/material/Button";
import Messages from './component/messages'
import Contacts from './component/contacts'
function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello World</Button> */}
      <div className='Contacts-section'><Contacts></Contacts></div>
      <div className='Messages-section'><Messages></Messages></div>
    </div>
  );
}

export default App;
