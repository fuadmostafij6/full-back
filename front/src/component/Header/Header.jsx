import React, { useState,useEffect } from 'react'
import "./Popup.css";
import './Menu.css'
import Axios from 'axios'
import {
 Link,useHistory

} from "react-router-dom";
import './Header.css'

import img from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserAlt, faCartPlus, faTimesCircle, faUserCog } from '@fortawesome/free-solid-svg-icons'

function Header() {


  const [show, setShow] = useState(false)
  const [popup, setPopup] = useState(false)
  const history = useHistory()
  const [name, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const[ pro, setPro ] =useState(null)

  const token = localStorage.getItem("token")

  const deletLocal = () => {
    localStorage.removeItem('token')
    alert('you are logout now')
    window.location.href = "/"

  }

  useEffect(() => {
    const profileData = async () => {
        await Axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/a/profile_view/`,
          headers: {
             Authorization:`token ${token}`
           }
        }).then(r => {
          console.log(r.data.results[0].prouser.username)
          setPro(r.data.results[0].prouser.username)
          
          
          
          

        }).catch(e => {
            console.log(e)
        })
    }
    profileData()
},)
    const login = async () => {
        await Axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/login/`,
            data: {
                'username': name,
                'password': pass
            }
        }).then(r => {
          localStorage.setItem('token', r.data.token);
          setPopup(false)
          
          
          

        }).catch(e => {
          alert(e)
            console.log(e)
        })
    }

  return (
    <>
      <header id="header">


        {/* <!-- Header dropdown section starts --> */}
        {show ? (
          <div className="header__dropdown" >
            <ul className="header__dopdownTopSection">
              <li>
                <Link to="/">
                  <img className="logo__img" src={img} alt="" />
                </Link>
              </li>
              <li className="header__dropdownClose">
                <span className="iconify"> <FontAwesomeIcon icon={faTimesCircle} onClick={() => { setShow(false) }} /></span>
              </li>
            </ul>
            <ul className="header__dopdownMiddleSection">
              <li>
                <ul className="category__section">
                  <li>
                    <Link to="#">
                      <span>Jewelry & Accessories</span>
                      <div className="category__line">
                        <div></div>
                        <div></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Clothing & Shoes</span>
                      <div className="category__line">
                        <div></div>
                        <div></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Home & Living</span>
                      <div className="category__line">
                        <div></div>
                        <div></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>Wedding & Party</span>
                      <div className="category__line">
                        <div></div>
                        <div></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        ) : null

        }
        <ul>
          <li className="mobile__hamburgerMenu" onClick={() => { setShow(true) }}>
            {/* <!-- Mobile hamburger menu section starts --> */}
            <div id="mobile__hamburgerMenu">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            {/* <!-- Mobile hamburger menu section ends --> */}
          </li>
          <li>
            <Link to="/">
              <img className="logo__img" src={img} alt="" />
            </Link>
          </li>
          <li className="desktop__hamburgerMenu">
            {/* <!-- Hamburger menu section starts --> */}
            <div className="hamburger__menu" onClick={() => { setShow(true) }}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            {/* <!-- Hamburger menu section ends --> */}
          </li>
          <li>
            <Link to="/" className="header__list"> Shop </Link>
          </li>
          <li className="search-input">
            {/* <!-- Form section starts --> */}
            <form method="get" id="header__searchbar">
              <input type="search" placeholder="Search..." />
              <span className="iconify" ><FontAwesomeIcon icon={faSearch} /></span>
            </form>
            {/* <!-- Form section ends --> */}
          </li>
          <li>
            <Link to="#" className="header__list header__listExtend">
              <span className="iconify"> <FontAwesomeIcon icon={faCartPlus} /></span>
            </Link>
          </li>
          <li>
            <div className="header__list header__listExtend profile__header" onClick={() => setPopup(!popup)}>

              {
                token != null ? ( <span className="iconify" ><FontAwesomeIcon icon={faUserCog} /></span>): (
                  <span className="iconify" ><FontAwesomeIcon icon={faUserAlt} /></span>
                )

              }
             
             
            </div>
          </li>
        </ul>


        {/* <!-- Header dropdown section ends --> */}
      </header>
      {
        popup ? (<>
          
          {
            token != null ? (<section className="menu20" id='menu20'>
              <ul>
               
              <li> <Link className='color' to={`/profile/${pro}`} onClick={()=> setPopup(false)}>Profile </Link></li> 
              <li>Cart</li>
              <li>whishlist</li>
              <li>order</li>
              
              <li><Link className='color' onClick={()=>deletLocal()}>Logout  </Link></li>
            </ul>
          </section>) : (
              <>
                <div className="overlay"></div>

<section className="login-popup">
  <div className="for-centering">
    <div className="main-card">
      <div className="login-title d-flex justify-content-between">
        <div>
          <h1>Register Here</h1>
          <p>Choose one of the following sign up methods.</p>
        </div>
        {/* <div className="cross-btn">
    <FontAwesomeIcon className="far fa-times-circle" icon={faTimesCircle} />
  </div> */}
      </div>

      <div className="reg-button">
        <button className="with-facebook">
          <i className="fas fa-chevron-right"></i>
          With Facebook
        </button>

        <button className="with-google">
          <i className="fas fa-chevron-right"></i>
          With Google +
        </button>
      </div>

      <div className="another-reg">
        <p>Or sign up using your email address</p>

        <div className="for-input">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="mail"
            placeholder="Enter your username"
          />

                        <input
                             onChange={(e) => {
                              setPass(e.target.value);
                            }}
                            
                            type="password" placeholder="Enter your password" />
        </div>
      </div>

      <div className="condition">
        <i className="fas fa-mobile-alt"></i>
        <p>Your passwords at userthemes are encrypted and secured</p>
      </div>

      <div className="terms">
        <input type="radio" />
        <p>
          I would like to receive weekly and monthly newsletters from
          Company
        </p>
      </div>

      <div className="already-user">
        <p>
          Already User?
          <Link to="">Sign up</Link>
        </p>
      </div>

      <div className="login-here">
        <Link to='/'>
        <button onClick={login}>Login here</button> </Link>
      </div>

      <div className="registering">
        <p>
          By registering you confirm that you accept the{" "}
          <Link to="">Terms and Conditions</Link>
          <Link to="">Privacy Policy</Link>
        </p>
      </div>
    </div>
  </div>
</section>
              </>
            )
          }
           <div>
      
    </div>
        </>) : null
      }


  
  
    
 

    </>

  )
}



export default Header;





