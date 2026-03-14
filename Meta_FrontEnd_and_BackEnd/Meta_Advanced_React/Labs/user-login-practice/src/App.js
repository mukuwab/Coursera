//Bank App
import './App.css';
import { UserProvider, useUser } from './UserContext';

//remember that functions must return something to have output
const Title = () => {
  return <h1>Bank App</h1>
}

const Welcome = () => {
  
  const {user} = useUser();
  
  return <h2>Welcome {user.name}</h2>//The user should be passed down from context
}

const Balance = () => {
  //balance that depends on the user
  const {user} = useUser();
  
  return <h3>Your balance is: ${user.balance}</h3>
}

const Transactions = () => {
  //should output a list of transactions based on the user
  return(
    <>
      <h4>Transactions:</h4>
    </>
  );
}

function App() {
  return (
  <>
    <Title/>
    <Welcome/>
    <div className="body">
      <Balance/>
      <Transactions/>
    </div>
  </>
  );
}

function Root() {
  
  return(
  <UserProvider>
    <App/>
  </UserProvider>
  );
}

export default Root;
