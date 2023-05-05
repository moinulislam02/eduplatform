import React from 'react'
import { Button, ButtonGroup, Container, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <div className='signup'>
        <div className='signupinner'>
            <Container>
                <h3>Login</h3>
                <p>Welcome to Eduplatform.Please put your login credintial below to start using the app.</p>
                <form>
                    <FormGroup className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <FormControl type='text' />
                    </FormGroup>
                    <FormGroup className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <FormControl type='password' />
                    </FormGroup>
                    <div className='action'>
                        <Link to='/' >Forgot Password</Link>
                        <Button type='submit' className='theme-btn'>Signup</Button>
                    </div>
                    <p>Don't have and account? <Link to='/'>Sign up</Link></p>
                </form>
            </Container>
        </div>
        <div className='banner-img'>
            <img src='/img/banner.webp' />
        </div>
    </div>
  )
}
