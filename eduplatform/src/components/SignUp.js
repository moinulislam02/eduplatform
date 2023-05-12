import React, { useState } from 'react'
import { Container, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { login } from '../util/apis'
import { useDispatch } from 'react-redux'

export function SignUp() {
  const [userInfoData, setuserInfoData] = useState({})
  const [addressInfo, setaddressInfo] = useState({})
  const [eduInfoData, seteduInfoData] = useState({})
  const [userinfo, setuserinfo] = useState(true)
  const [address, setaddress] = useState(false)
  const [eduinfo, seteduinfo] = useState(false)
  const [userFormError, setuserFormError] = useState("")
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    setuserInfoData(prev=>{
        return{...prev, [e.target.name]:e.target.value}
    })
  }
  const handleAddressChange =(e)=>{
    setaddressInfo(prev=>{
        return{...prev, [e.target.name]:e.target.value}
    })
  }
  const handleEduChange =(e)=>{
    seteduInfoData(prev=>{
        return{...prev, [e.target.name]:e.target.value}
    })
  }


  const handleUserSubmit = async (e) =>{
    e.preventDefault()
    let data = {...userInfoData, status:0}
    const res = await axios({method:'post',url:`${process.env.REACT_APP_API_URL}/users/`, data:data}).then((res)=>{
        if (res.data?.success === true) {
            login(dispatch, {"emailAddress":data.emailAddress, "password":data.password}).then((ret)=>{
                setuserInfoData(ret.data.data)
                setuserinfo(false)
                setaddress(true)
            })
        }
    })
  }

  const handleAddress = (e) =>{
    e.preventDefault()
    let data = {...addressInfo, status:0 , userId:userInfoData.id}
    const res = axios({method:'post',url:`${process.env.REACT_APP_API_URL}/address/`, data:data, headers:{token: 'Bearer '+ userInfoData?.accessToken}}).then((res)=>{
        if (res.data?.success === true) {
            setuserinfo(false)
            setaddress(false)
            seteduinfo(true)
        }else{
            setuserFormError("Fill your form correctly!")
        }
    })
  }
  const handleEduInfo = (e) =>{
    e.preventDefault()
    let data = {...eduInfoData, status:0 , userId:userInfoData.id}
    const res = axios({method:'post',url:`${process.env.REACT_APP_API_URL}/eduinfo/`, data:data, headers:{token: 'Bearer '+ userInfoData?.accessToken}}).then((res)=>{
        if (res.data?.success === true) {
            setuserinfo(false)
            setaddress(false)
            seteduinfo(false)
        }else{
            setuserFormError("Fill your form correctly!")
        }
    })
  }

  return (
    <div className='signup'>
        <div className='signupinner'>
            <Container>
                <h3>Create an account</h3>
                <p>Welcome to Eduplatform.Please put your login credintial below to start using the app.</p>
                {userinfo? (
                    <form onSubmit={handleUserSubmit}>
                        <FormGroup className='form-group'>
                            <label htmlFor='fname'>First Name</label>
                            <FormControl type='text' id='fname' onChange={handleChange} name='firstName' placeholder='Jhon' required/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='lname'>Last Name</label>
                            <FormControl type='text' id='lname' onChange={handleChange} name='LastName' placeholder='Doe'/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <select className='form-control' name='gender' onChange={handleChange} required>
                                <option>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='email'>E-mail</label>
                            <FormControl type='text' onChange={handleChange} id='email' name='emailAddress' placeholder='jhondoe@gmail.com' required/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <FormControl type='password' onChange={handleChange} name='password' id='password' placeholder='' required/>
                        </FormGroup>
                        <span>{userFormError}</span>
                        <hr></hr>
                        <div className='action'>
                            <div className='d-flex align-items-center justify-content-end w-100'>
                                <button type='submit' className='theme-btn btn'>Continue</button>
                            </div>
                        </div>
                        <p>Already have and account? <Link to='/login'>Sign In</Link></p>
                    </form>
                ) : address? (
                    <form onSubmit={handleAddress}>
                        <FormGroup className='form-group'>
                            <label htmlFor='country'>Country</label>
                            <FormControl type='text' id='country' value={addressInfo.country} name="country" onChange={handleAddressChange} placeholder='Bangladesh'/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='district'>Division</label>
                            <select className='form-control' name='division' onChange={handleAddressChange}>
                                <option>Select Division</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chattagram</option>
                                <option value="barishal">Barishal</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="khulna">Khulna</option>
                            </select>
                        </FormGroup>
                        {/* <span>{userFormError}</span> */}
                        <hr></hr>
                        <div className='action'>
                            <div className='d-flex align-items-center justify-content-end w-100'>
                                <button type='submit' className='theme-btn btn'>Continue</button>
                            </div>
                        </div>
                    </form>
                ) : eduinfo? (
                    <form onSubmit={handleEduInfo}>
                        <FormGroup className='form-group'>
                            <label htmlFor='institute'>Institute</label>
                            <FormControl type='text' id='institute' name='institute' onChange={handleEduChange} placeholder='eg.university/college/school/madrasha'/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='degree'>Last Degree</label>
                            <FormControl type='text' id='degree' name='degree' onChange={handleEduChange} placeholder='eg.ssc/hsc/BSc/BBA/BCOM/MSc/MA/MCOM/MBA'/>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <label htmlFor='dept'>Department</label>
                            <FormControl type='text' id='dept' name='department' onChange={handleEduChange} placeholder='eg.CSE/BBA/EEE/LAW/SCIENCE/COMMERCE/ARTS'/>
                        </FormGroup>
                        <hr></hr>
                        <div className='action'>
                            <div className='d-flex align-items-center'>
                                <input type='checkbox' id='terms'/>
                                <label htmlFor='terms' style={{marginLeft:"5px"}}>I have read the terms and conditions</label>
                            </div>
                            <button type='submit' className='theme-btn btn'>Done</button>
                        </div>
                    </form>
                ) : "Done"}
            </Container>
        </div>
        <div className='banner-img'>
            <img src='/img/banner.webp' />
        </div>
    </div>
  )
}
