import React from "react"
import "bulma/css/bulma.min.css"
import "./index.css"
import { Link } from "gatsby"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div>
      <nav
        className="navbar  is-white "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item  subtitle is-4 pb-0 mb-2 mitr has-text-primary"
            to="/"
          >
            {title}
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item"></Link>
          </div>
        </div>
      </nav>
    </div>
  )

  return (
    <div className="global-wrapper global-body " data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <section className="mb-5">
        <main>{children}</main>
      </section>

      <footer className="footer has-background-light maitree ">
        <div className="content has-text-centered has-text-dark ">
          &copy; {new Date().getFullYear()} <strong>แจ้ซ้อนวินเทจ</strong> 159
          ม.11 ต.แจ้ซ้อน อ.เมืองปาน จ.ลำปาง <br />
        </div>
      </footer>
    </div>
  )
}

export default Layout
