import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import SideWidgetBar from './SideWidgetBar';
import { getMyPosts, updateUser } from '../util/apis';
import { logout } from '../redux/authRedux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, FormControl, FormGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export function MyProfile() {
    const dispatch = useDispatch()
    const currentUser = useSelector((state)=> state.userInfo.currentUser)
    const [posts, setposts] = useState([])
    const [user, setuser] = useState(currentUser)
    const [modalOpen, setmodalOpen] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
      getMyPosts(currentUser?.id, currentUser?.accessToken).then((res)=>{
        if (res.data?.success === false) {
            
        } else {
            setposts(res.data?.data)
        }
      })
    }, [])

    const signout = () =>{
        dispatch(logout())
        navigate('/')
    }

//   const handleChange = (e)=>{
//     setuser((prev)=>{
//         return {...prev, [e.target.name]:e.target.value}
//     })
//   }

//   const handleUserSubmit = (e) =>{
//     e.preventDefault()
//     let newuser = {
//         "status":currentUser.status,
//         "firstName":currentUser.firstName,
//         "LastName":currentUser.LastName,
//         "phoneNumber":currentUser.phoneNumber,
//         "emailAddress":currentUser.emailAddress,
//         "gender":currentUser.gender,
//         "dob":currentUser.dob,
//         "username":currentUser.username,
//         "shortBio":currentUser.shortBio,
//         "photo":currentUser.photo,
//         "id":currentUser.id
//     }
//     console.log(currentUser);
//     updateUser(currentUser?.id, currentUser?.accessToken, newuser).then((res)=>{
//         console.log(res);
//     })
//   }
    
  
  return (
    <Row>
        {/* {modalOpen? <div className='edit-profile-outer'>
            <div className='edir-profile'>
                <FontAwesomeIcon icon={faTimesCircle} onClick={()=>setmodalOpen(false)}/>
                <div className='edit-img'>
                    {currentUser?.photo === null? currentUser.gender === 'male'? <img src='./img/avaterboy.jpg' alt='user'/> : <img src='./img/avatergirl.jpg' alt='user'/> : <img src={`${process.env.REACT_APP_API_URL}/alluploads/${currentUser.photo}`} />}
                </div>
                <form onSubmit={handleUserSubmit}>
                    <FormGroup className='form-group'>
                        <label htmlFor='fname'>First Name</label>
                        <FormControl type='text' id='fname' onChange={handleChange} value={user.firstName} name='firstName' placeholder='Jhon' required/>
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='lname'>Last Name</label>
                        <FormControl type='text' id='lname' onChange={handleChange} value={user.LastName} name='LastName' placeholder='Doe'/>
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <select className='form-control' name='gender' onChange={handleChange} required>
                            <option value={user.gender}>{user.gender === 'male'? "Male" : "Female"}</option>
                            <option>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <FormControl type='text' onChange={handleChange} id='email' value={user.emailAddress} name='emailAddress' placeholder='jhondoe@gmail.com' required/>
                    </FormGroup>
                    <div className='action'>
                        <div className='d-flex align-items-center justify-content-end w-100'>
                            <button type='submit' className='theme-btn btn'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div> : ""} */}
        <Col lg={12} className='profile-upper'>
            <div className='profile-top box' style={{background:"url(./img/profilebg.jpg)"}}></div>
            <div className='profile-info d-flex align-items-center pt-2'>
                {currentUser.photo === null? currentUser.gender === 'male'? <img src='./img/avaterboy.jpg' alt='user'/> : <img src='./img/avatergirl.jpg' alt='user'/> : <img src={`${process.env.REACT_APP_API_URL}/alluploads/${currentUser.photo}`} />}
                <div className='profile-inner-info'>
                    <h3>{currentUser?.firstName} {currentUser?.LastName} </h3>
                    <p>Student of BSc in CSE, Eastern University</p>
                    <p>Bangladesh | Dhaka</p>
                    <a className="btn theme-btn theme-btn-alt w-100 mt-3" onClick={signout}>Logout</a>
                </div>
            </div>
        </Col>
        <Col lg={9}>
            <div className='box'>
                <h5 className='mb-0'><b>Your Articles</b></h5>
            </div>
            {posts.map((post)=>{
                let postDate = new Date(post.createdAt)
                return(
                    <div className="box post" key={post._id}>
                        <div className="post-header">
                            <div className="post-user-image">
                                <img src="./img/avaterboy.jpg" className="w-100" alt=""/>
                            </div>
                            <div className="post-user-info">
                                <h5>{post.firstName} {post.LastName}</h5>
                                {/* <p>Student of BSc in CSE, Eastern University</p> */}
                                <p>{postDate.toDateString()}</p>
                                {/* <span>{postDate.toDateString()}</span> */}
                            </div>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                        <div className="post-content">
                            <p dangerouslySetInnerHTML={{__html:post.description}}></p>
                            <div className="post-images">
                                {post.photo === null? "" : <div className="single-post-img">
                                    <img src={`${process.env.REACT_APP_API_URL}/alluploads/${post.photo}`} className="w-100" alt=""/>
                                </div>}
                                {/* <div className="single-post-img">
                                    <img src="./img/postimg4.jpeg" alt=""/>
                                </div>
                                <div className="single-post-img">
                                    <img src="./img/postimg3.jpeg" alt=""/>
                                </div>
                                <div className="single-post-img">
                                    <img src="./img/postimg4.jpeg" alt=""/>
                                </div> */}
                            </div>
                        </div>
                        <div className="post-info">
                            <div className="post-info-left">
                                <p>{post.likeCount} Likes</p>
                            </div>
                            <div className="post-info-right">
                                <p>{post.commentCount} Comments | {post.shareCount} Share</p>
                            </div>
                        </div>
                        <div className="post-action d-flex justify-content-between">
                            <div className="single-action">
                                <i className="fa-regular fa-thumbs-up"></i>
                                <span>Like</span>
                            </div>
                            <div className="single-action">
                                <i className="fa-regular fa-comment-dots"></i>
                                <span>Comment</span>
                            </div>
                            <div className="single-action">
                                <i className="fa-solid fa-share"></i>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Col>
        <SideWidgetBar/>
    </Row>
  )
}
