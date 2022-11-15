import './Availableon.css'
import googleplay from '../images/googlep.webp'
import appstore from '../images/appstore.webp'
import picA from "../images/p1.webp"
import picB from "../images/p2.webp"


export default function Availableon() {
  return (
    <div className='availableon'>
      <div className="store">
        <h2>Restaurants in your pocket</h2>
        <p>Order from your favorite restaurants and track on the go, with the all-new swiggy app</p>
        <div className="store__pic">
          <img src={googleplay} alt="googleplay" />
          <img src={appstore} alt="appstore" />
        </div>
      </div>
      <div className="pic1">
        <img src={picA} alt="pic1" />
        
      </div>
      <div className="pic2">
        <img src={picB} alt="pic2" />
      </div>
    </div>
  )
}
