import "./Login.css";
import swiggyLogo from "../images/swiggy_logo.jpg";
import { useState } from "react";
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "./context/StateContext";


export default function Login({ visibility, handleClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useStateValue()
  console.log(state)

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        userCredentials.user.displayName = name;
        userCredentials.user.providerData[0].displayName = name;
        console.log(userCredentials.user);
        dispatch({
          type: 'SET_USER',
          user: userCredentials.user.providerData[0]
        })
      }
    )
  }

  console.log(state)

  return (
    <div className={`login ${visibility ? "" : "hide"}`}>
      <h1 onClick={handleClick}>X</h1>
      <img src={swiggyLogo} alt="swiggylogo" />
      <form>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}
