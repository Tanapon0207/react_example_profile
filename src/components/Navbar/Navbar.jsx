import  { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
        <div className={styles.container}>
          <div className={styles.nav_con}>
            <div className={styles.logo}>
              <a href="#">JD PORT</a>
            </div>
            <ul>
              <li><a href="#services">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.button}>
              <a href="#">Hire Me</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <FaBars className={styles.bars} onClick={handleToggle} />
          {isToggled ? (
            <>
              <ul className={styles.mobile_menu}>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className={styles.mobile_button}>
                <a href="#">Hire Me</a>
              </div>
            </>
          ) : null}

        </div>
    </nav>
  )
}

export default Navbar
