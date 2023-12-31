const navigationEntries = performance.getEntriesByType("navigation"); // Get the navigation entries from the Performance Timeline
console.log("Navigation Type:", navigationEntries[0].type); // Log the navigation type to the console

if (window.performance) { // Check if the window.performance object is available in the user's browser
  const navigation = performance.getEntriesByType("navigation")[0]; // Get the first entry of type "navigation" from the Performance Timeline
  if (navigation && navigation.type === "reload") { // Check if the 'navigation' entry exists and if the page was reloaded by the user
    window.location.hash = '/'; // If the current page was reloaded by the user, redirect to the homepage
  } // Ends the if statement
} // Ends the if statement

function Spa() { // single page application
  return ( // return a single element
    <HashRouter> {/*Provides the router functionality*/}
      <NavBar /> {/*Displays the navigation bar*/}
      <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }] }}> {/*Provides the user data*/}
        <div className="container" style={{ padding: "20px" }}> {/*Sets the container style*/}
          <Route path="/" exact component={Home}/> {/*Sets the route for the home page*/}
          <Route path="/CreateAccount/" component={CreateAccount}/> {/*Sets the route for the create account page*/}
          <Route path="/deposit/" component={Deposit}/> {/*Sets the route for the deposit page*/}
          <Route path="/withdraw/" component={Withdraw}/> {/*Sets the route for the withdraw page*/}
          <Route path="/alldata/" component={AllData}/> {/*Sets the route for the all data page*/}
        </div> {/*Ends the container*/}
      </UserContext.Provider> {/*Ends the user data*/}
    </HashRouter> // Ends the HashRouter
  ); // Ends the return statement
} // Ends the Spa function

/*ReactDOM.render(
<Spa/>,
document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root')); // Creates the root
root.render(<Spa /> // Renders the Spa component
); // Ends the root render
