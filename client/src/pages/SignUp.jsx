import { Alert, Button, Spinner } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {username, email, password} = formData
    if(!username || !email || !password) return setErrorMessage('All fields need to be filled')
    try {
      setIsloading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        setIsloading(false)
        return setErrorMessage(data.message)
      }
      setIsloading(false)
      if(res.ok) navigate('/signin')
    } catch (error) {
      setErrorMessage(error.message)
      setIsloading(false)
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className="mx-auto px-4 flex items-start flex-col md:flex-row md:px-72 gap-2">
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
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} className='w-full' type="text" name='username' placeholder='Username' id="username" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} className='w-full' type="email" name='email' placeholder='Email' id="email" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="password">Username</label>
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
            <span>Already have an account</span>
            <Link className='text-blue-600' to='/signin'>Sign in</Link>
            </div>
            {errorMessage && <Alert className='text-red-800 bg-red-300 mt-5' color='failure'>{errorMessage}</Alert>}
          </div>
        </div>
      </div>
  )
}
