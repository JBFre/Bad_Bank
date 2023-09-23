function NavBar(){ //This is the main function. When called, it returns the JSX code for the navigation bar.  
  
  
  
  function handleNavBarHighlight(link) { //This function is called when a link is clicked. It compares the link that was clicked to the current path and returns the appropriate class name.
    const currentPath = window.location.hash.replace('#',''); //this gets the current hash from the URL, removes the '#' symbol, and store it in 'currentPath'
    
  return link === currentPath?'nav-link active':'nav-link'; //This compares the link that was clicked to the current path and returns the appropriate class name. 
  } //This ends the handleNavBarHighlight function.

  return ( //This returns the JSX code for the navigation bar.
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/*Changes the appearance of the navigation bar*/}
      <a className="navbar-brand" href="#"> Bank of Zod {/*Creates the navigation bar brand*/}</a>
      <button /*Creates the navigation bar button*/
        className="navbar-toggler" /*Changes the appearance of the navigation bar button*/
        type="button" /*Sets the type of the navigation bar button*/
        data-toggle="collapse" /*Enables the collapsible behavior of the navbar when screen size is reduced*/
        data-target="#navbarNav" /*Specifies which element will be collapsed or expanded when the button is clicked*/
        aria-controls="navbarNav" /*Used for accessibility, reads aloud what the button does for visually impaired users*/
        aria-expanded="false" /*Indicates that the collapsible content is currently collapsed*/
        aria-label="Toggle navigation" /*Provides a description for screen readers to help with accessibility*/
      ><span className="navbar-toggler-icon"></span>
      </button>{/* Ends the navigation bar button */}
      <div className="collapse navbar-collapse" id="navbarNav">{/*The container that holds the collapsible items*/}
        <ul className="navbar-nav">{/*Creates the navigation bar list*/}
          <li className="nav-item"><a className={handleNavBarHighlight('/CreateAccount/')} href="#/CreateAccount/">Create Account</a></li>{/*Creates the navigation bar item Create Account*/}
          <li className="nav-item"><a className={handleNavBarHighlight('/deposit/')} href="#/deposit/">Deposit</a></li>{/*Creates the navigation bar item Deposit*/}
          <li className="nav-item"><a className={handleNavBarHighlight('/withdraw/')} href="#/withdraw/">Withdraw</a></li>{/*Creates the navigation bar item Withdraw*/}
          <li className="nav-item"><a className={handleNavBarHighlight('/alldata/')} href="#/alldata/">AllData</a></li>{/*Creates the navigation bar item AllData*/}
        </ul>{/* Ends the navigation bar list */}
      </div>{/* Ends the collapsible items container */}
    </nav>/* Ends the navigation bar */
  );



} //This ends the NavBar function.

//export default NavBar;
