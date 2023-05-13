import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBroadcastTower, faEdit, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import PostModal from './PostModal'

export function Navbar() {
  const [ismodalopen, setismodalopen] = useState(false)
  const detectClose = (data) =>{
    setismodalopen(data)
  }
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-3 d-flex align-items-center">
                    <a href="#" className="logo">
                        <img src="/img/logo.png" alt="Edu-Platform"/>
                    </a>
                </div>
                <div className="col-lg-6 responsive-menu">
                    <ul className="menu">
                        <li>
                            <a href="#" className="active">
                                <FontAwesomeIcon icon={faHouse} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faBroadcastTower} />
                            </a>
                        </li>
                        <li>
                            <a type="button" onClick={()=>setismodalopen(!ismodalopen)} >
                                <FontAwesomeIcon icon={faEdit} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-9 col-9 d-flex align-items-center justify-content-between">
                    <form className="header-widget">
                        <div className="form-group">
                            <input type="text" placeholder="Search Here..." className="form-control"/>
                            <button className="btn"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                    <div className="header-widget navigation-bar d-flex justify-content-end">
                        <i id="navigation-bar" className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
        <PostModal ismodalopen={ismodalopen} detectClose={detectClose}/>
    </header>
  )
}
