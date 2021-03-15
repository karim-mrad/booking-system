import './App.scss';
import './App.css';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'Room Cleaning',
  },
  
  {
    id: 2,
    value: 'Room Service',
  },

  {
    id: 3,
    value: 'Wake-Up Call',
  }
]

function App() {
  return (
    <div className="wrapper">
      <div className = "form-wrapper">
        <h1>Book a Task</h1>
        <form >
          <div className = "firstName">
            <label htmlFor = "firstName">First Name </label>
            <input type="text" className = "" placeholder = "First Name" name = "firstName" />
          </div>
          <div className = "lastName">
            <label htmlFor = "lastName">Last Name </label>
            <input type="text" className = "" placeholder = "Last Name" name = "lastName" />
          </div>
          <div className = "email">
            <label htmlFor = "email">Email </label>
            <input type="text" className = "" placeholder = "Email" name = "email" />
          </div>
          <div className = "phoneNumber">
            <label htmlFor = "firstName">Phone Number </label>
            <input type="text" className = "" placeholder = "Phone Number"  name = "phoneNumber" />
          </div>
          <div className = "services">
            <label htmlFor = "services">Choose a Service </label>
            <Dropdown title = "Choose a service" items = {items}/>
            
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
