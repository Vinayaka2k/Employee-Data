import React from 'react'
import './LoginForm.css'

const LoginForm = (props) => {
  return (
        <div>
            <div className="loginForm">
                <h1>Employee Data</h1>
                <form onSubmit={props.addEmployee}>
                    <table>
                        <tbody>
                    <tr>
                                <td>Name</td>
                                <td>
                                    <input name="Name" required value={props.name} onChange={e => props.handleNameChange(e)} />
                                </td>
                    </tr>
                    
                    <tr>
                                <td>Designation</td>
                                <td>
                                    <input name="Designation" required value={props.designation} onChange={e => props.handleDesignationChange(e)} />
                                </td>
                    </tr>
                    
                    <tr>
                                <td><div>Contact Details</div></td>
                                {
                                    props.contacts.map((contact, index) => {                
                                        return (
                                            <div key={index}>
                                                <td><input type="text" required value={contact} onChange={e => props.handleContactChange(index, e)} placeholder='Type'/></td>                                 
                                                <td><input type="text" required value={props.phNo[index]} onChange={e => props.handlePhoneChange(index, e)} placeholder='Phone Number'/></td>
                                            </div>
                                            )
                                        })
                                }
                                
                                <td>
                                    { props.button_disabled === true ?  null : <button type="button" onClick={() => props.addContacts()}>+</button> }
                                </td>

                    </tr>

                    <tr>
                        
                                <td><div>Skills</div></td>
                                {
                                        props.skills.map((skill, index) => {
                                        return (
                                            <div key={index}>
                                                <td>
                                                    <input type="text" value={skill} onChange={e => props.handleSkillChange(index, e)}/>
                                                </td>
                                            </div>
                                            )
                                        })
                                }
                                <td>
                                    <button type="button" onClick={() => props.addSkills()}>+</button>
                                </td>

                    </tr>

                    <tr>
                                <td>Date Of Birth</td>
                                <td>
                                    <input name="DOB" type="date"/>
                                </td>
                    </tr>
                    
                   
                    </tbody>
                    </table>
                    <br />
                    <br />
                    <button type="submit" className="addEmployee">Add Employee</button>
                    <br />
                    <br />
                    <button onClick={props.viewData} className='addEmployee' type="button">View Data</button>
                </form> 
                
           
            </div>
        </div>                  
  )}

export default LoginForm
