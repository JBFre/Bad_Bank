function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [button, setButton] = React.useState(false);
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[ctx.users.length - 1].balance);

  
  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function checkDepositFields(e) {
    if (amount.trim()) {  
      setButton(true);
    } else {
      setButton(false);

      let element = e.target.id;
      if (element === 'amount' && amount === '')
      setStatus('Error: Please enter a valid amount');
      setTimeout(() => setStatus(''), 3000);
    }
  }

  function handleDeposit() {
    console.log(amount);
    if (!validate(amount, 'amount')) return;
    if (!/^[0-9]+$/.test(amount)) {
        setStatus('Error: amount can only contain numbers');
        setTimeout(() => setStatus(''), 3000);
        return;
    }

    if (amount <= 0) {
      setStatus('Error: amount must be greater than 0');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (!validate(button, 'button')) return;
    ctx.users.push({ amount, balance: 100 });
    setShow(false);

    const user = ctx.users[ctx.users.length - 1];
    console.log(ctx.users[ctx.users.length - 1]);
    if (!user) {
      setStatus('Error: User not found');
      setTimeout(() => setStatus(''), 3000);
      return;
  }

    user.balance = Number(user.balance) + Number(amount);
    setBalance(user.balance);
    ctx.users[ctx.users.length - 1] = user;
  } 



  

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit Amount"
      status={status}
      body={show ? (
              <>
              Amount<br/>
              <h2>
                Balance: ${balance}
              </h2> 
              <input type="input" 
                     className="form-control" 
                     id="amount" 
                     placeholder="Enter amount" 
                     value={amount} 
                     onChange={e => setAmount(e.currentTarget.value)} 
                     onBlur={checkDepositFields}/>
              <br/>
              <button type="submit" 
                      className="btn btn-light" 
                      disabled={!button} onClick={handleDeposit}>Deposit</button>
              </>
            ) : (
              <>
              <h5>Success</h5>
              <h2>
                Balance: ${balance}
              </h2>  
              <button type="submit"
                      className="btn btn-light" 
                      onClick={clearForm}>
                      Make another deposit
              </button>
            </>
            )}  
    />
  )
}
