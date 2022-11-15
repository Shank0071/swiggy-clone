import './Banner.css'
import nmo from '../images/nominorder.webp'
import lot from '../images/liveorder.webp'
import sfd from '../images/superfastdelivery.webp'


export default function Banner() {
  return (
    <div className='banner'>
      <div className="banner_1">
        <img src={nmo} alt="nominorder" />
        <h3>No Minimum Order</h3>
        <small>Order in for yourself or for the group, with no restrictions on order value</small>
      </div>
      <div className="banner_1">
        <img src={lot} alt="liveorder" />
        <h3>Live Order Tracking</h3>
        <small>Know where your order is at all times, from the restaurant to your doorstep</small>
      </div>
      <div className="banner_1">
        <img src={sfd} alt="sfd" />
        <h3>Lightning-Fast Delivery</h3>
        <small>Experience Swiggy's superfast delivery for food delivered fresh & on time</small>
      </div>
    </div>
  )
}
