function AllData(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true); 

  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
