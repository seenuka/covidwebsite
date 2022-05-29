import React from 'react'
import '../Styles/Footer.css'

function Footerr() {
  return (
    <div class="footer-basic">
    <footer fixed='bottom' >
        <div className='icon' >
          <center>
    <img style={{borderRadius:'50%',margin:'10px'}} width={100} height={100}  src='https://image.shutterstock.com/image-vector/rainbow-letters-banner-260nw-1216657096.jpg'/>
<br/>
</center>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a  href="#">Home</a></li>
            <li class="list-inline-item"><a  href="#">WHO</a></li>
            <li class="list-inline-item"><a  href="#">Covid</a></li>
            <li class="list-inline-item"><a  href="#">Terms</a></li>
            <li class="list-inline-item"><a  href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">@WHO</p>
    </footer>
</div>
  )
}

export default Footerr