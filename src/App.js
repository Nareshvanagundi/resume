import './App.css';
import Leftpanel from './Leftpanel.js';
import Rightpanel from './Rightpanel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useRef} from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resumne from './Naresh_resume.pdf';
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

  const pdRef = useRef(null); 
  const downloadPdf  = async (e)=>{

    const input = pdRef.current;
    try{
      const canvas = await html2canvas(input);
      const imaData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: "a4"
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height*width)/canvas.width;
      pdf.addImage(imaData,"PNG",0,0,width,height); 
      pdf.save("Nareshresume.pdf"); 
    }catch(e){
     console.log(e);
    }
  }

  return (
    <div className="container p-2" >
      <div className='d-flex flex-column p-3' ref={pdRef}>
          <div className="form-check form-switch d-flex justify-content-end">
            {/* onClick={downloadPdf}  */}
              <a href={resumne} download="Naresh_resume.pdf"><FontAwesomeIcon icon="fa-solid fa-download"  style={{ cursor: "pointer" }}  className='m-1'/></a>
              <input className="form-check-inputsnpm" type="checkbox"  checked={isChecked}  onClick={toggleMode} role="switch" id="flexSwitchCheckChecked" />
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
