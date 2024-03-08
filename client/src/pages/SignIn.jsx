import { Alert, Button, Spinner } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, siginFailure, signInSuccess } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SignIn() {

  const [formData, setFormData] = useState({})
  // const [isLoading, setIsloading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoading, error: errorMessage} = useSelector(state=>state.user)

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value.trim()})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email, password} = formData
    if(!email || !password) dispatch(siginFailure('All field must be filled'))
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(!res.ok) {
        return dispatch(siginFailure(data.message))
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      return dispatch(siginFailure(error.message))
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className="mx-auto px-4 flex items-start flex-col md:flex-row-reverse md:px-72 gap-10">
          {/*---------- left----------- */}
          <div className="flex-1">
            <Link to='/' className='whitespace-nowrap text-lg sm:text-4xl font-semibold'>
              <span className='bg-gradient-to-r from-[#454e80] via-[#7b5b9e] to-[#fdabdc] py-1 px-3 rounded-lg text-white'>Ma </span> Blog
            </Link>
            <p className='mt-2'>
              A simple blog app created on a weekend Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero pariatur unde, dolore suscipit sunt quas dignissimos praesentium, nobis quae molestiae.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className='flex flex-col gap-2'>
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} className='w-full' type="email" name='email' placeholder='Email' id="email" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} className='w-full' type="password" name='password' placeholder='Password' id="password" />
              </div>
              <Button disabled={isLoading} onClick={handleSubmit} color='black' className='bg-purple-800 text-gray-400 hover:text-white' type='submit'>
                {
                  isLoading ? (
                    <>
                      <Spinner size='sm'/>
                      <span className='pl-3'>loading...</span>
                    </>
                  ) : 'Sign in'
                }
              </Button>
            </form>
            <div className="flex gap-2 mt-1">
            <span>Don't have an account</span>
            <Link className='text-blue-600' to='/signup'>Sign up</Link>
            </div>
            {errorMessage && <Alert className='text-red-800 bg-red-300 mt-5' color='failure'>{errorMessage}</Alert>}
          </div>
        </div>
      </div>
  )
}
