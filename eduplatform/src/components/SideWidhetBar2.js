import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../redux/authRedux';

export default function SideWidhetBar2() {
  const currentUser = useSelector((state)=>state.userInfo.currentUser)
  const dispatch = useDispatch()
  return (
    <div className="col-lg-3 side-widget-bar">
        <div className="box widgets profile-widget">
            <a className="post-header d-flex">
                <div className="post-user-image">
                    {currentUser.gender === 'male'? <img src="./img/avaterboy.jpg" className="w-100" alt=""/> : <img src="./img/avatergirl.jpg" className="w-100" alt=""/>}
                </div>
                <div className="post-user-info">
                    <h5>{currentUser?.firstName} {currentUser.LastName}</h5>
                    <p><b>{currentUser.username}</b></p>
                    <p>Student of BSc in CSE, Eastern University</p>
                </div>
            </a>
            <a className="btn theme-btn theme-btn-alt w-100 mt-2" onClick={()=>dispatch(logout())}>Logout</a>
        </div>
        <div className="box widgets tag-widgets">
            <h5>Popular Tags</h5>
            <ul className="tags">
                <li><a href="">Trigonometry</a></li>
                <li><a href="">Algebra</a></li>
                <li><a href="">Geometry</a></li>
                <li><a href="">Grammer</a></li>
                <li><a href="">Ielts</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Writing</a></li>
                <li><a href="">Bangla Grammer</a></li>
                <li><a href="">Bangla Literature</a></li>
            </ul>
        </div>
    </div>
  )
}
