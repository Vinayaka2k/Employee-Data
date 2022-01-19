# Employee-Data
### This is an application to add a list of employees and their details, implemented using React Front End. The app maintains the states of all the entered data and  updates the current state onChange of any input field. The details can be displayed using the ViewData button. Finally, we would also be able to download the data in a JSON format using the Download JSON button. Importance is given to the logic, validations and core part of React and minimal styling is done using css as we would always be able to beautify the front end using a plethora of front end libraries.

#### Live App
- Deployed on Heroku
- URL : https://emp-data-new.herokuapp.com/

#### Dependencies
- install moment using  ```npm install --save moment```

#### How to Run Locally ?
- Run this command :  ```npm install --save moment```
- Proceed to **/my-app** and start react using : ``` npm start ```


#### Folder Structure
- **App.js:**          Main Component of the project that implements multiple state variables and their corresponding onChange handlers. Makes use of the other three                       componenents defined in the /components folder so that the code is modularized and it becomes easy to track changes.

- **LoginForm.js:**     Component responsible for displaying the employee form. On any changes to the input fields, the corresponding onChange handler is called which                       are implemented in the parent App component. And on submisssion of the form, invokes the handler method for saving the input values and                             updating the current state.

- **Notification.js:**  Component that implements the error notification when javascript realizes that the validation for the input fields is unsuccessful.

- **ViewData.js:**      Component that displays the stored data in the form of a table. Also has a functionality to download the data in the form of a JSON file.

- CSS files for all the corresponding components defined as ComponentName.css

#### State Definitions
- **allEmp:**           Array of objects that contains data of all the employees
- **skills:**           Array that contains skills of the current employee
- **name:**             String that tracks the name of the current employee
- **designation:**      String that tracks the designation of the current employee
- **contacts:**         Array that contains contact type of the current employee
- **phNo:**             Array that contains contact number of the current employee
- **showEmp:**          Bool that indicates if ViewData button was clicked so as to show the employee details
- **button_disabled:**  Bool that indicates if the length of contact array has reached 4 so as to disable the '+' button
- **errorMessage:**     String that indicates the current Notification if any, else it's set to Null

#### Validations Handled
- Name and Designation are mandatory : Used required attribute to ensure the same 
- At most 4 contact numbers per employee : Disabled the '+' button as soon as the length of the contact array reaches 4.
- Phone Number, Name and Desingation validation : Using regex
- Downloading JSON part : Created a blob and assigned it's address to an anchor tag and clicked the tag using Javascript.
- Other minor validations wherever seen apt
