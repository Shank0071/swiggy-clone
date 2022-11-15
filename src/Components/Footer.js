import './Footer.css'
import googleplay from '../images/googlep.webp'
import appstore from '../images/appstore.webp'
import swiggyLogo from '../images/swiggyfooter.webp' 
import facebook from '../images/facebook.webp'
import pinterest from '../images/pinterest.webp'
import instagram from '../images/instagram.webp'
import twitter from '../images/twitter.webp'


export default function Footer() {

  const year = new Date()


  return (
    <div className='footer'>
      <div className="container2 flex">
        <div className="company">
          <h4>COMPANY</h4>
          <ul>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Swiggy Blog</li>
            <li>Bug Bounty</li>
            <li>Swiggy One</li>
            <li>Swiggy Corporate</li>
            <li>Swiggy Instamart</li>
          </ul>
        </div>
        <div className="contact">
          <h4>CONTACT</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Raid with us</li>
          </ul>
        </div>
        <div className="legal">
          <h4>LEGAL</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Offer Terms</li>
            <li>Phishing & Fraud</li>
            <li>Corporate – Swiggy Money Codes Terms and Conditions</li>
            <li>Swiggy Instamart</li>
          </ul>
        </div>
        <div className="pics">
          <img src={googleplay} alt="googleplay" />
          <img src={appstore} alt="appstore" />
        </div>
      </div>
      <div className="social-media">
        <img src={swiggyLogo} alt="swiggyLogo" />
        <p>© {year.getFullYear()} Swiggy</p>
        <div>
          <img src={facebook} alt="facebook" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  )
}
