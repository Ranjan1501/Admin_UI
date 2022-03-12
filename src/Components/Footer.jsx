import React from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerBox">
      <div className="footer">
        <div className="icons">
          <h2> Klarna</h2>

          <select className="dropdown">
            {" "}
            Country
            <option value="de"> Denmark</option>
            <option> Finland</option>
            <option>France</option>
            <option> Germany</option>
            <option> International</option>
            <option> Ireland</option>
            <option> Italy</option>
            <option> Netherlands</option>
            <option> New Zealand</option>
            <option> Norway</option>
            <option> Poland</option>
            <option> Portugal</option>
            <option> Spain</option>
            <option> Sweden</option>
            <option> Norway</option>
            <option value="de"> Switzerland</option>
            <option value="en"> Switzerland</option>
            <option value="fr"> Switzerland</option>
            <option value="it"> Switzerland</option>
            <option> United Kingdom</option>
            <option> United States</option>
          </select>
          <br />
          <br />
          {/* icons  */}
          <div className="logo">
            <Link to="">
              <img src={facebook} alt="" />
            </Link>
            <Link to="">
              <img src={linkedin} alt="" />
            </Link>
            <Link to="">
              <img src={twitter} alt="" />
            </Link>
            <Link to="">
              <img src={instagram} alt="" />
            </Link>
          </div>
        </div>

        <div className="klarna">
          <ul>
            <span> Klarna</span>
            <li>About us</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Press</li>
            <li>Extra O Blog</li>
            <li>Privacy</li>
            <li>Email Contact</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Customer */}
        <div className="customer klarna">
          <ul>
            <span> Customer </span>
            <li>Buy now pay later</li>
            <li>Contact us via app</li>
            <li>Customer service</li>
            <li>klarna store </li>
            <li>Shipping app </li>
            <li>Rewards club</li>
            <li>Buyer Protection Policy</li>
            <li>Feedback and complaints </li>
            <li>Shopping inspiration</li>
          </ul>
        </div>
        <div className="business klarna">
          <ul>
            <span> Business </span>
            <li>Sell with Klarna</li>
            <li>Payment methods</li>
            <li>Platforms and partners</li>
            <li>Partner program</li>
            <li> Business login </li>
            <li>Business support </li>
            <li>Operational status </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className="footer copyright">
        <footer>
          Monthly financing through Klarna is issued by WebBank, member FDIC.
          Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street,
          Third Floor, Columbus, OH 43215. Other CA resident loans made or
          arranged pursuant to a California Finance Lenders Law license.
        </footer>
        <div>Legal</div>
        <div>Terms</div>
        <div>Privacy policy</div>
        <div>Cookies</div>
        <div>Sitemap</div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
