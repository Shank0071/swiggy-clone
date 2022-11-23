import "./Signup.css";
import swiggyLogo from "../images/swiggy_logo.jpg";
import { auth } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useStateValue } from "./context/StateContext";

export default function Signup({ visibility1, handleClick1 }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(false)
  const [state, dispatch] = useStateValue()

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        userCredentials.user.displayName = name;
        userCredentials.user.providerData[0].displayName = name;
        console.log(userCredentials.user);
        dispatch({
          type: 'SET_USER',
          user: userCredentials.user.providerData[0]
        })
      }
    ).catch(err => console.log(err.message));
    setName("")
    setEmail("")
    setPassword("")
  };

  return (
    <div className={`signup ${visibility1 ? "" : "hide1"}`}>
      <h1 onClick={handleClick1}>X</h1>
      <img src={swiggyLogo} alt="swiggylogo" />
      <form>
        <label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  );
}
