function AllData() { //creates the AllData function
  // Step 1: Get the user data from the UserContext
  const ctx = React.useContext(UserContext); //sets the ctx state to the UserContext
  const users = ctx.users; //sets the users state to the users array

  // Step 2: Convert the users array into an array of table rows
  let usersRows = users.map((element, index) => ( //sets the usersRows state to the users array
    <tr key={index}> {/*displays the table row */}
      <td>{element.name}</td> {/*displays the name */}
      <td>{element.email}</td> {/*displays the email */}
      <td>{element.password}</td> {/*displays the password */}
      <td>{element.balance}</td> {/*displays the balance */}
    </tr> //ends the table row
  )); //ends the usersRows variable

  return ( //returns the following
    <> {/*displays the following */} 
      <h5>AllData</h5> {/*displays the AllData header */}
      
      {/* Step 3: Output the table */}
      <table className="table table-bordered table-striped">
        <thead> {/*displays the table header */}
          <tr> {/*displays the table row */}
            <th>Name</th> {/*displays the table header Name*/}
            <th>Eail</th> {/*displays the table header Email*/}
            <th>Password</th> {/*displays the table header Password*/}
            <th>Balance</th> {/*displays the table header Balance*/}
          </tr> {/*ends the table row */}
        </thead> {/*ends the table header */}
      
      
        <tbody> {/*displays the table body */}
          {/* Step 3.1 and 3.2: Loop through each element and output it into the table */}
          {usersRows} {/*displays the usersRows variable......SEE "let usersRows = users.map((element, index) => (" */}
        </tbody> {/*ends the table body */}
      </table> {/*ends the table */}
    </> //ends the AllData component
  ); //ends the return statement
} //ends the AllData function

export default AllData; //exports the AllData component
