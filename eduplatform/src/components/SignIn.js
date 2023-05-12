import React from 'react'
import { Container, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <div className='signup'>
        <div className='signupinner'>
            <Container>
                <h3>Log in</h3>
                <p>Welcome to Eduplatform.Please put your login credintial below to start using the app.</p>
                <form>
                    <FormGroup className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <FormControl type='text' placeholder='hello@gmail.com'/>
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <FormControl type='password' placeholder=''/>
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
