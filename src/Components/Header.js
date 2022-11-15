import './Header.css'
import Swiggy from '../images/swiggy_logo.jpg'
import lunch from '../images/lunch1.webp'
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

export default function Header() {
    const [visibility, setVisibility] =  useState(false)
    const [visibility1, setVisibility1] = useState(false)

    const handleClick = () => {
        setVisibility(visibility => !visibility)
        setVisibility1(visibility1 => !visibility1)
    }

    const handleClick1 = () => {
        setVisibility1(visibility1 => !visibility1)
        setVisibility(visibility => !visibility)
    }


  return (
    <div class="header">
        <Login visibility={visibility} handleClick={handleClick} />
        <Signup visibility1={visibility1} handleClick1={handleClick1} />
        <div className="section__1">
            <nav className='navbar container'>
                <img src={Swiggy} alt="swiggy_logo" />
                <ul>
                    <li className='padding' onClick={handleClick}><b>Login</b></li>
                    <li className='button' onClick={handleClick1}><b>Sign up</b></li>
                </ul>
            </nav>
            <div className="toggle__text container">
                <h2>Cooking gone wrong?</h2>
                <p>Order food from favourite restaurants near you.</p>
            </div>
            <div className="search__bar container">
                <input type="text" placeholder='Enter your delivery location'/>
                <p className='locate'>Locate Me</p>
                <p className='findfood'><b>Find Food</b></p>
            </div>
            <div className="popular__cities container">
                <p>POPULAR CITIES IN INDIA</p>
                <p>
                    <span className='black'>Ahmedabad</span> 
                    <span className='gray'>Banglore</span> 
                    <span className='black'>Chennai</span>
                    <span className='gray'>Delhi</span>
                    <span className='black'> Gurgaon</span>
                    <span className='gray'>Hyderabad</span> 
                    <span className='black'>Kolkata</span>
                    <span className='gray'>Mumbai</span>
                    <span className='black'>Pune</span>
                    <span className='gray'>& more</span>
                </p>
            </div>
        </div>
        <div className="section__2">
            <img src={lunch} alt="lunch__picture" />
        </div>
    </div>
  )
}
