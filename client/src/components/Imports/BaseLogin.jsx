import React from 'react'
import { Outlet, Link, useLocation} from "react-router-dom";
export default function BaseLogin() {

  const location = useLocation();
  let DefaultClass ="nav-link link-btn btn-primary default-bg";
  let active ="active"

  return (
    <div className="col-sm-5 bg-img align-self-center">
      <div className="info">
        <div className="logo clearfix">
          <Link to="/" className="nav-brand">Logo</Link>
        </div>
        <div className="btn-section clearfix">
          <Link to="/loginpage" className={location.pathname === "/loginpage" ? DefaultClass + active: DefaultClass}>Login</Link>
          <Link to ="/register" className={location.pathname === "/register" ? DefaultClass + active: DefaultClass}>Register</Link>
        </div>
      </div>
    </div>
  )
}
