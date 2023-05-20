import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import SideWidgetBar from './SideWidgetBar';
import { deleteMyPost, getMyPosts, updateUser } from '../util/apis';
import { logout } from '../redux/authRedux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyPost from './MyPost';

export function MyProfile() {
    const dispatch = useDispatch()
    const currentUser = useSelector((state)=> state.userInfo.currentUser)
    const myPost = useSelector((state)=> state.myPost.posts)
    const [posts, setposts] = useState(myPost)
    const [user, setuser] = useState(currentUser)
    const [modalOpen, setmodalOpen] = useState(false)
    const navigate = useNavigate()

    const deletePost = (id) =>{
        deleteMyPost(id, currentUser?.accessToken).then((res)=>{
            getMyPosts(dispatch, currentUser?.id, currentUser?.accessToken).then((res)=>{
                if (res.data?.success === false) {
                    
                } else {
                    setposts(res.data?.data)
            }
            })
        })
    }


    useEffect(() => {
      getMyPosts(dispatch, currentUser?.id, currentUser?.accessToken).then((res)=>{
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
            {myPost.map((post)=>(
                <MyPost post={post} key={post._id} deletePost={deletePost}/>
            ))}
        </Col>
        <SideWidgetBar/>
    </Row>
  )
}
