import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  //Length Validations
  const firstNameValid = firstName.length > 0;
  const lastNameValid = lastName.length > 0;
  const passwordValid = password.length >= 8;
  const roleValid = role !== "role";
  const emailValid = getIsFormValid();

  const getIsFormValid = () => {
    // Implement this function
    if(
      firstNameValid && 
      lastNameValid &&
      passwordValid &&
      emailValid &&
      roleValid
    )
    {
      console.log("form is valid");
    }
    else{
      console.log("form is not valid")
    }

    //Check for empty feilds
    
    return true;
  
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('role');

    console.log('Form cleared.')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input 
              id="firstName"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={e=> setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="lastName">Last name</label>
            <input 
              id="lastName"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={e=> setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input 
              id="email"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={e=>setEmail(e.target.value)
              }
              />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input 
              id="password"
              type="password"
              placeholder="Password" 
              name="password"
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select 
              id="role"
              name="role"
              value={role}
              onChange={e=>setRole(e.target.value)}
            >
              <option value="role" onChange>Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button 
            type="submit"
            disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
