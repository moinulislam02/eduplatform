import React, { useState } from 'react'
import { Container, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { login } from '../util/apis'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const [inputs, setinputs] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setinputs((prev)=>{
        return {...prev, [e.target.name]:e.target.value}
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    login(dispatch, inputs).then((res)=>{
        if(res.status === 200){
            navigate('/')
        }else{

        }
    })
  }

  return (
    <div className='signup'>
        <div className='signupinner'>
            <Container>
                <h3>Log in</h3>
                <p>Welcome to Eduplatform.Please put your login credintial below to start using the app.</p>
                <form onSubmit={handleSubmit}>
                    <FormGroup className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <FormControl type='text' name='emailAddress' onChange={handleChange} placeholder='hello@gmail.com' required/>
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <FormControl type='password' name='password' onChange={handleChange} placeholder='' required/>
                    </FormGroup>
                    <hr></hr>
                    <div className='action'>
                        <Link to='/' >Forgot Password</Link>
                        <button type='submit' className='theme-btn btn'>Login</button>
                    </div>
                    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
                </form>
            </Container>
        </div>
        <div className='banner-img'>
            <img src='/img/banner.webp' />
        </div>
    </div>
  )
}
