import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>Full Stack Developer</h2>
    </div>
    <div className={styles.navigation}>
      <span>
        <Link
          to="/projects"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight: `lighter`
          }}
          activeStyle={{
            fontWeight: `bolder`
          }}
        >
          Projects
        </Link>
      </span>
      <span>
        <a
          href="https://github.com/allentsai93"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight: `lighter`
          }}
        >
          GitHub
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/allentsaidev/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight: `lighter`
          }}
        >
          LinkedIn
        </a>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
