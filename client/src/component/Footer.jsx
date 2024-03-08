import React from 'react'
import { Link } from 'react-router-dom'
import {MdFacebook} from 'react-icons/md'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='mt-20 w-full py-10 bg-[#0a0d1b] text-white flex items-start justify-evenly'>
        <Link to='/' className='whitespace-nowrap text-lg sm:text-4xl font-semibold'>
              <span className='bg-gradient-to-r from-[#454e80] via-[#7b5b9e] to-[#fdabdc] py-1 px-3 rounded-lg text-white'>Ma </span> Blog
        </Link>
        <div className="text-lg ">
            <h3 className='font-bold mb-2'>Userfull Links</h3>
            <ul>
                <li className='hover:bg-white hover:text-slate-700'><Link to='/'>Home</Link></li>
                <li className='hover:bg-white hover:text-slate-700'><Link to='/about'>About</Link></li>
                <li className='hover:bg-white hover:text-slate-700'><Link to='/project'>Project</Link></li>
            </ul>
        </div>
        <div className="">
            <h3 className='font-bold mb-2'>Social Links</h3>
            <ul className='flex flex-col gap-2'>
                <li className='flex gap-2 items-center'><FaFacebook/> <span>Facebook</span></li>
                <li className='flex gap-2 items-center'><FaTwitter/> <span>Twitter</span></li>
                <li className='flex gap-2 items-center'><FaInstagram/> <span>Instagram</span></li>
                <li className='flex gap-2 items-center'><FaPinterest/> <span>Pinterest</span></li>
            </ul>
        </div>
    </div>
  )
}
