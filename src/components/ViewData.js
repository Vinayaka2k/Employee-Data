import React from 'react'
import './ViewData.css'
const ViewData = ({allEmp, downloadJSON}) => {
  console.log(allEmp);
  return (
    <div className="outsideDiv">
      {
          allEmp.map((emp, index) => {
              return(
                <div key={index} className="insideDiv">
                  Employee #{index+1}                                             
                  <br /><br />
                  <table >
                    <tbody>
                      <tr>
                          <td>Name:</td>
                          <td> {emp['Name']} </td>
                      </tr>

                      <tr>
                          <td>Designation:</td>
                          <td> {emp['Designation']} </td>
                      </tr>

                      <tr>
                          <td>Contact:</td>
                          <td> {
                                  emp['contact'].map((contact, index) => {
                                      return(<div key={index}>{contact +  ' - ' + emp['phNo'][index]}</div>)
                                  })
                              } 
                          </td>
                      </tr>


                      <tr>
                          <td>Skills: </td>
                          <td> {
                            emp['Skills'].map((skill, i) => {
                                if(i == emp['Skills'].length-1)
                                  return(skill)
                                else
                                  return(skill + " , ")
                            })
                          } </td>
                      </tr>

                      <tr>
                          <td>DOB: </td>
                          <td>{emp['DOB']}</td>
                      </tr>
                    </tbody>
                  </table>                  
                  <hr />
                </div>  
                
              )
          })
      }              
      <button onClick={downloadJSON} className='downloadJson'>Download JSON</button>
    </div>
  )
}

export default ViewData
