import React, {useState} from 'react'
import LoginForm from './components/LoginForm'
import ViewData from './components/ViewData'
import './App.css'
import Notification from './components/Notification'

// NOTE: INSTALL MOMENT USING npm install --save moment
import Moment from 'moment';

const App = (props) => {
    
    const [allEmp, setAllEmp] = useState([])
    const [skills, setSkills] = useState([''])

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');

    const [contacts, setContacts] = useState(['']);
    const [phNo, setPhNo] = useState(['']);

    const [showEmp, setShowEmp] = useState(false)
    const [button_disabled, setButtonDisabled] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const viewData = () => {
        setShowEmp(true);
    }

    const addContacts = () => {
        let values = [...contacts];
        values.push('')
        setContacts(values);
        
        values = [...phNo];
        values.push('')
        setPhNo(values);
        
        console.log(contacts);
        if(contacts.length < 3){
          setButtonDisabled(false);
        }
        else{
          setButtonDisabled(true);
        }

    }

    const handleContactChange = (i, event) => {
      let values = [...contacts];
      values[i] = event.target.value;
      setContacts(values);
    }

    const handlePhoneChange = (i, event) => {
      var re = new RegExp("^[0-9]{1,10}$");
      if(!re.test(event.target.value))
      {
        setErrorMessage('Please ensure that the phone number is valid')
        setTimeout(() => {
            setErrorMessage(null)
        }, 2000)
      }
      else{
          let values = [...phNo];
          values[i] = event.target.value;
          setPhNo(values);
      }
    }

    const handleNameChange = (event) => {
          var re = new RegExp("^[a-z A-Z]+$");
          if(re.test(event.target.value)){
            setName(event.target.value);
          }
          else{
            setErrorMessage('Please ensure that the name is valid')
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
          }
      }
    

    const handleDesignationChange = (event) => {
        var re = new RegExp("^[a-z A-Z]+$");
        if(re.test(event.target.value)){
          setDesignation(event.target.value);
        }
        else{
          setErrorMessage('Please ensure that the designation is valid')
          setTimeout(() => {
              setErrorMessage(null)
          }, 2000)
        }
      }
    

    const handleSkillChange = (i, event) => {
        const values = [...skills];
        values[i] = event.target.value;
        setSkills(values);
    }

    const addSkills = () => {
      const values = [...skills];
      values.push('')
      setSkills(values);
    }

    const downloadJSON = () => {
        var output = allEmp.map((emp) => {
            let res = []
            for(var i=0; i<emp['contact'].length; ++i){
                res[i] = {"type" : emp['contact'][i], "number" : emp['phNo'][i]}
            }
            return (
              {
                "name" : emp['Name'],
                "designation" : emp["Designation"],
                "contact" : res,
                "skills" : emp["Skills"],
                "dob" : emp["DOB"]
              }
            )
        }) 
        const element = document.createElement("a");
        const textFile = new Blob([JSON.stringify(output)], {type: 'text/json'});
        element.href = URL.createObjectURL(textFile);
        element.download = "employeeData.json";
        document.body.appendChild(element); 
        element.click();
    }

    const addEmployee = (ev) => {  
        ev.preventDefault();
        let currEmp  = {}
        currEmp['Name'] =  ev.target['Name'].value
        currEmp['Designation'] =  ev.target['Designation'].value
        currEmp['Skills'] =  [...skills]
        currEmp['contact'] = [...contacts]
        currEmp['phNo'] = [...phNo]
        currEmp['DOB'] =  Moment(ev.target['DOB'].value).format('DD-MMM-YYYY')
        setAllEmp(allEmp.concat(currEmp));
        console.log(allEmp);
    }

    return(
      <div>
        <Notification message={errorMessage} />
        <LoginForm addEmployee={addEmployee} addSkills = {addSkills} handleSkillChange={handleSkillChange} skills={skills} contacts={contacts} name={name} designation={designation} handleNameChange={handleNameChange} handleDesignationChange={handleDesignationChange} handleContactChange={handleContactChange} handlePhoneChange={handlePhoneChange} addContacts={addContacts} phNo={phNo} button_disabled={button_disabled} viewData={viewData}/>         
         { showEmp ? <ViewData allEmp = {allEmp} downloadJSON = {downloadJSON}/> : null}
      </div>
    )
}

export default App;
