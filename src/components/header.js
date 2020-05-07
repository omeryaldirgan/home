import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './styles/header.module.scss'
import ThemeToggle from './themeToggler'
const MENU = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'About', url: '/' },
  { name: 'Contact', url: '/contact' }
]
//gatsby new file repo.git 
const activeStyle = {
  color: '#00BFAA',
}
const Header = () => {
  //console.log("gelen" + siteTitle);
  return(
    <header className={styles.Header}>
      <nav  className={`container ${styles.container}`}>
          {
            MENU.map(page=>{
             return(
              <Link key={page.name} to={page.url} className={styles.link} activeStyle={activeStyle}>{page.name}</Link>
             )
            })
          }
          <ThemeToggle/>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
