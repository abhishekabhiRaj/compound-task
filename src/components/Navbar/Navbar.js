import React, {useEffect, useState} from "react";
import {NavDropdown, Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import {useDispatch, useSelector} from 'react-redux'
import { getData, setData } from "../../redux/features/navbar";

function CustomNavbar() {
  const dispatch = useDispatch();
  const navActive = useSelector(getData);

  

  return (
    <Navbar expand="lg" className="pt-3 pb-3">
      <Container>
        <Navbar.Brand>
          <a className="text-decoration-none" href="https://compound.finance/" target="_blank" rel="noreferrer">
            <svg
              class="logo svg mobile-hide"
              width="41"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  class="svg__path"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M118.781 15.3564C118.781 13.7775 117.851 12.5888 116.383 12.5888C114.915 12.5888 113.984 13.7775 113.984 15.3564C113.984 16.9352 114.915 18.1239 116.383 18.1239C117.854 18.1269 118.781 16.9382 118.781 15.3564ZM118.709 11.5293V7.39303C118.709 7.11988 118.892 6.88275 119.156 6.81371L121.35 6.22839V20.225H118.916V19.0364C118.304 19.9278 117.205 20.4501 115.83 20.4501C113.006 20.4501 111.352 18.1839 111.352 15.3594C111.352 12.5348 113.006 10.2686 115.83 10.2686C117.202 10.2656 118.208 10.8599 118.709 11.5293ZM103.734 10.4877V11.6764C104.181 10.8389 105.184 10.2626 106.633 10.2626C108.975 10.2626 110.22 11.8234 110.22 14.1467V20.225H107.582V14.4469C107.582 13.3122 107.099 12.5318 105.928 12.5318C104.646 12.5318 103.941 13.3483 103.941 14.651V20.225H101.303V10.4877H103.734ZM95.1342 20.4501C92.2917 20.4501 90.7098 19.2225 90.7098 16.0647V10.4877H93.3482V16.1008C93.3482 17.4575 93.9606 18.0878 95.1312 18.0878C96.3018 18.0878 96.9142 17.4545 96.9142 16.1008V10.4877H99.5526V16.0617C99.5586 19.2225 97.9767 20.4501 95.1342 20.4501ZM81.9991 15.3564C81.9991 17.1033 83.0767 18.1239 84.4694 18.1239C85.8622 18.1239 86.9398 17.1003 86.9398 15.3564C86.9398 13.6124 85.8622 12.5888 84.4694 12.5888C83.0797 12.5888 81.9991 13.6094 81.9991 15.3564ZM84.4724 20.4501C81.3507 20.4501 79.3606 18.1269 79.3606 15.3594C79.3606 12.5919 81.3477 10.2686 84.4724 10.2686C87.5941 10.2686 89.5842 12.5919 89.5842 15.3594C89.5812 18.1269 87.5941 20.4501 84.4724 20.4501ZM71.3193 15.3564C71.3193 16.9352 72.2498 18.1239 73.7176 18.1239C75.1854 18.1239 76.1159 16.9352 76.1159 15.3564C76.1159 13.7775 75.1854 12.5888 73.7176 12.5888C72.2498 12.5888 71.3193 13.7775 71.3193 15.3564ZM71.3943 19.1864V23.2356C71.3943 23.5088 71.2112 23.7459 70.9471 23.8149L68.7559 24.3913V10.4877H71.1902V11.6764C71.8025 10.7849 72.9011 10.2626 74.2759 10.2626C77.1004 10.2626 78.7543 12.5288 78.7543 15.3534C78.7543 18.1779 77.1004 20.4441 74.2759 20.4441C72.8981 20.4501 71.8956 19.8558 71.3943 19.1864ZM60.9186 14.687V20.225H58.2802V14.4469C58.2802 13.3693 57.89 12.5318 56.7193 12.5318C55.4917 12.5318 54.8223 13.3303 54.8223 14.633V20.228H52.1839V10.4877H54.6182V11.6764C55.0654 10.8389 56.032 10.2626 57.4247 10.2626C58.7454 10.2626 59.691 10.7819 60.2493 11.6373C61.1047 10.6888 62.0893 10.2626 63.482 10.2626C65.8233 10.2626 67.0119 11.8805 67.0119 14.1467V20.225H64.3735V14.4469C64.3735 13.3693 63.9833 12.5318 62.8126 12.5318C61.567 12.5318 60.9186 13.3303 60.9186 14.687ZM43.3801 15.3564C43.3801 17.1033 44.4577 18.1239 45.8504 18.1239C47.2432 18.1239 48.3208 17.1003 48.3208 15.3564C48.3208 13.6124 47.2432 12.5888 45.8504 12.5888C44.4577 12.5888 43.3801 13.6094 43.3801 15.3564ZM45.8504 20.4501C42.7287 20.4501 40.7387 18.1269 40.7387 15.3594C40.7387 12.5919 42.7257 10.2686 45.8504 10.2686C48.9751 10.2686 50.9622 12.5919 50.9622 15.3594C50.9622 18.1269 48.9721 20.4501 45.8504 20.4501ZM27.0482 13.6094C27.0482 9.48516 29.8908 6.75068 33.6818 6.75068C36.9716 6.75068 39.574 8.70174 40.0753 11.9165H37.1757C36.7855 10.2626 35.4468 9.33208 33.6818 9.33208C31.2655 9.33208 29.9088 11.004 29.9088 13.6064C29.9088 16.2088 31.2655 17.8807 33.6818 17.8807C35.4468 17.8807 36.7855 16.9502 37.1757 15.2963H40.0753C39.574 18.5111 36.9716 20.4621 33.6818 20.4621C29.8908 20.4681 27.0482 17.7366 27.0482 13.6094Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.08359 21.0428C0.411223 20.6315 0 19.8992 0 19.1127V14.7213C0 14.5532 0.0450245 14.3912 0.12907 14.2471C0.390212 13.7968 0.969527 13.6438 1.41977 13.9079L11.3312 19.686C11.9105 20.0252 12.2677 20.6436 12.2677 21.3159V25.8664C12.2677 26.0735 12.2106 26.2806 12.1026 26.4577C11.7754 26.992 11.079 27.1601 10.5447 26.8329L1.08359 21.0428ZM15.8576 12.7042C16.4369 13.0434 16.7941 13.6618 16.7941 14.3341V23.5671C16.7941 23.8403 16.647 24.0924 16.4099 24.2245L14.2397 25.4462C14.2127 25.4612 14.1827 25.4732 14.1527 25.4822V20.3554C14.1527 19.692 13.8045 19.0767 13.2342 18.7345L4.52946 13.5267V7.73955C4.52946 7.57145 4.57449 7.40937 4.65853 7.26529C4.91967 6.81504 5.49899 6.66196 5.94923 6.9261L15.8576 12.7042ZM20.195 5.88454C20.7773 6.22072 21.1345 6.84506 21.1345 7.51743V21.0038C21.1345 21.2799 20.9814 21.535 20.7383 21.6671L18.6821 22.7777V13.3886C18.6821 12.7253 18.334 12.1129 17.7667 11.7707L8.86982 6.43384V0.943854C8.86982 0.775763 8.91484 0.613675 8.99589 0.469596C9.25703 0.0193519 9.83634 -0.133731 10.2866 0.127411L20.195 5.88454Z"
                  fill="#00D395"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="121" height="27" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="text-white fw-bold mobile-hide">Compond</span>
            <svg
              class="logo logo--mark svg mobile-only"
              width="41"
              height="54"
              viewBox="0 0 41 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.10212 42.0855C0.797756 41.2631 0 39.7983 0 38.2254V29.4427C0 29.1065 0.0873455 28.7823 0.250391 28.4942C0.756995 27.5937 1.88084 27.2875 2.7543 27.8158L21.982 39.3721C23.1058 40.0504 23.7987 41.2871 23.7987 42.6318V51.7328C23.7987 52.147 23.6881 52.5612 23.4785 52.9154C22.8438 53.984 21.4928 54.3202 20.4563 53.6658L2.10212 42.0855ZM30.7631 25.4085C31.8869 26.0869 32.5799 27.3235 32.5799 28.6683V47.1343C32.5799 47.6806 32.2946 48.1849 31.8345 48.449L27.6245 50.8923C27.5721 50.9223 27.5138 50.9464 27.4556 50.9644V40.7108C27.4556 39.3841 26.7801 38.1534 25.6738 37.469L8.78696 27.0534V15.4791C8.78696 15.1429 8.87431 14.8187 9.03735 14.5306C9.54396 13.6301 10.6678 13.3239 11.5413 13.8522L30.7631 25.4085ZM39.1774 11.7691C40.3071 12.4414 41 13.6901 41 15.0349V42.0075C41 42.5598 40.703 43.0701 40.2314 43.3342L36.2426 45.5554V26.7772C36.2426 25.4505 35.5671 24.2258 34.4666 23.5415L17.2071 12.8677V1.88771C17.2071 1.55153 17.2944 1.22735 17.4516 0.939193C17.9582 0.0387037 19.0821 -0.267463 19.9555 0.254821L39.1774 11.7691Z"
                fill="#00D395"
              ></path>
            </svg>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{dispatch(setData(0))}}>
              <Link to="/" className={navActive==0?"compound-nav-link active":'compound-nav-link'}> <b>Dashboard</b> </Link>
            </Nav.Link>
            <Nav.Link onClick={()=>{dispatch(setData(1))}}>
              <Link to="/markets" className={navActive==1?"compound-nav-link active":'compound-nav-link'}> <b>Markets</b> </Link>
            </Nav.Link>
            {/* <Nav.Link onClick={()=>dispatch(setData(2))}>
              <Link to="/extensions" className={navActive==2?"compound-nav-link active":'compound-nav-link'}> <b>Extensions</b> </Link>
            </Nav.Link> */}
            <Nav.Link onClick={()=>dispatch(setData(3))}>
              <Link to="/vote" className={navActive==3?"compound-nav-link active":'compound-nav-link'}> <b>Vote</b> </Link>
            </Nav.Link>
          </Nav>
          <Dropdown/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;