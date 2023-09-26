const navigationEntries = performance.getEntriesByType("navigation"); // Get the navigation entries from the Performance Timeline
console.log("Navigation Type:", navigationEntries[0].type); // Log the navigation type to the console

function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the Bank of Zod"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
