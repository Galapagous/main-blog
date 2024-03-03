import { Button, Navbar, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import {CiMenuBurger} from 'react-icons/ci'
import Navlinks from './Navlinks'

export default function Header() {
  const [showMenu, setHowMenu] = useState(false)
  const location = useLocation().pathname
  const currentScreen = window.innerWidth
  const handleToggle = ()=>{
    setHowMenu(showMenu === true ? false : true)
  }
  return (
    <div>
      <Navbar className='border-b-2 mx-auto relative'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-lg font-semibold'>
          <span className='bg-gradient-to-r from-[#454e80] via-[#7b5b9e] to-[#fdabdc] py-1 px-3 rounded-lg text-white'>Ma </span> Blog</Link>
        <form>
          <TextInput type='text' placeholder='Search ...' className='hidden lg:flex lg:items-center justify-center' rightIcon={AiOutlineSearch}/>
          <Button className='w-12 h-10 lg:hidden bg-slate-900' pill>
            <AiOutlineSearch/>
          </Button>
        </form>
        <div className='hidden sm:flex gap-2'>
          <Navlinks style='flex gap-2 list-none'/>
        </div>
        <div className="flex gap-2 md:order-2">
          <Button className='w-12 h-10 hidden sm:flex bg-slate-950 items-center' pill>
            <FaMoon/>
          </Button>
          <Link to='/signin'>
            <Button className='bg-gradient-to-r from-purple-700 to-blue-600 px-2'>Sign Out</Button>
          </Link>
        </div>
        <CiMenuBurger className='sm:hidden cursor-pointer' onClick={handleToggle}/>
        {showMenu && <Navlinks click={handleToggle} style='flex flex-col items-start sm:hidden mt-8 px-2 bg-[#2d345f] w-full gap-4 absolute left-0 top-8 list-none py-2 text-white'/>}
      </Navbar>
    </div>
  )
}
