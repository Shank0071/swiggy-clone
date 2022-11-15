import './Login.css'
import swiggyLogo from '../images/swiggy_logo.jpg'


export default function Login({visibility, handleClick}) {
  return (
    <div className={`login ${visibility ? "" : "hide"}`}>
      <h1 onClick={handleClick}>X</h1>
        <img src={swiggyLogo} alt="swiggylogo" />
        <form>
            <label>
                <input type="text" placeholder='Name' />
            </label>
            <label>
                <input type="email" placeholder='Email' />
            </label>
            <button>Login</button>
        </form>
    </div>
  )
}
