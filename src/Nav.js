import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            }else 
                handleShow(false);
        });
        return () => window.removeEventListener("scroll", null);
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="NETFLIX" />

        <img className="nav__avatar" src="https://play-lh.googleusercontent.com/ZKbR3ZMjMu_Sk-BqAgWL3FwRGXSBT-TBD63y5m7bqiOvQFU4UyBDpOp1M_d6iS6zlw" alt="avatar" />
    </div>
  )
}

export default Nav