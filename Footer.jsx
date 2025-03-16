import React from 'react';
import '../Css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-4 Footer" >
      <div id="footer" className="container">
        <div className="row">
          <div className="col-md-4 footer_coloum">
            <h2>About Us</h2>
            <p>
              Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum.
              Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.
            </p>
          </div>

          <div className="col-md-4 footer_coloum">
            <h2>Information Links</h2>
            <ul className="list-unstyled">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Login'>Login</Link></li>
              <li><Link to='/Signup'>Signup</Link></li>
              <li><Link to='/About'>About</Link></li>
            </ul>
          </div>

          <div className="col-md-4 footer_coloum">
            <h2>Contact Details</h2>
            <ul className="list-unstyled">
              <li><a href="mailto:amazon@yoursite.com">amazon@yoursite.com</a></li>
              <li><a href="http://www.yoursite.com">www.yoursite.com</a></li>
              <li>
                PO Box 16122 Collins Street West Victoria 8007 <br /> Australia
              </li>
              <li>+6138766284</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
