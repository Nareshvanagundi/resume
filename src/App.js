import './App.css';
import Leftpanel from './Leftpanel.js';
import Rightpanel from './Rightpanel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function App() {

  const [isChecked, setIsChecked] = useState(false);
  const [ChexkBoxLabelValue,setChexkBoxLabelValue] = useState("White mode");

  const [mystyle,setstyle] = useState({ color:'white'});

  const toggleMode = (e) => {
    setIsChecked(e.target.checked);

      if(e.target.checked === true ){
        setstyle({ color:'black'});
           setChexkBoxLabelValue("Dark mode");
        }else{
          setstyle({ color:'white'});  
          setChexkBoxLabelValue("White mode");
        }   

  };

  return (
    <div className="container p-2" >
    
      <div className='d-flex flex-column p-3'>
          <div className="form-check form-switch d-flex justify-content-end">
              <input className="form-check-inputs" type="checkbox"  checked={isChecked}  onClick={toggleMode} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label" for="flexSwitchCheckChecked">{ChexkBoxLabelValue}</label>
          </div>
          <div className="d-flex p-3 border border-secondary-subtle responsive-container-view">
                <Leftpanel style={mystyle} />
                <Rightpanel style={mystyle} />
            </div>
      </div>  
    </div>
  );
}

export default App;
