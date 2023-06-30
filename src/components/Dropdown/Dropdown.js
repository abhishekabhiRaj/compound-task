import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { BsChevronDown, BsChevronRight,BsCheck2 } from "react-icons/bs";
import svg1 from "../../assets/images/svg/svg1.svg";

function Dropdown() {
  const [active, setActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(0);
  useEffect(()=>{
    var a =  document.getElementsByClassName('menu')[0];
    if(active){
        a.style.opacity = '1';
        a.style.top = '48px';
        a.style.height = '200px'
    }else{
        a.style.opacity = '0';
        a.style.top = '58px';
        a.style.height = '0px'
    }
  },[active])
  return (
    <div className={active ? "compound-dropdown active" : "compound-dropdown"}>
      <section
        className="title"
        onClick={() => (active ? setActive(false) : setActive(true))}
      >
        <section className="mx-2">
          <img src={svg1} alt="svg" />
        </section>
        ETH
        <span>Etherium</span>
        <BsChevronDown />
      </section>
      <section className="menu">
        <div className="left">
          <section className="title" onClick={()=>setDropdownActive(0)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            Etherium
            <span>3</span>
            <BsChevronRight />
          </section>
          <section className="title" onClick={()=>setDropdownActive(1)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            Polygon
            <span>1</span>
            <BsChevronRight />
          </section>
          <section className="title" onClick={()=>setDropdownActive(2)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            Arbitrum
            <span>1</span>
            <BsChevronRight />
          </section>
        </div>
        <div className="right">
        {
            dropdownActive == 0?
            <>
            <section className="title" onClick={()=>{setActive(false)}}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            USDC
          </section>
          <section className="title  d-flex justify-content-between" onClick={()=>setActive(false)}>
            <div className="d-flex">
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            ETH
            </div>
            <BsCheck2 color="green" />
          </section>
          <p className="text-white-50 compound-text-small m-0 mx-3 ">Legacy</p>
          <section className="title" onClick={()=>setActive(false)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            USDC
          </section>
            </>:''
        }
        {
            dropdownActive == 1?
            <>
            <section className="title" onClick={()=>setActive(false)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            USDC
          </section>
        
            </>:''
        }
        {
            dropdownActive == 2?
            <>
            <section className="title" onClick={()=>setActive(false)}>
            <section className="mx-2">
              <img src={svg1} alt="svg" />
            </section>
            USDC.e
          </section>
            </>:''
        }
        </div>
      </section>
      
    </div>
  );
}

export default Dropdown;
