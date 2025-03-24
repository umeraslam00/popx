import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='relative left-[20px] top-[40px]'>
      <h1 className='font-medium text-[28px] leading-[36px]'>Signin to your PopX account</h1>
      <div className='font-normal text-[18px] leading-[26px] font-[Rubik] mt-[14px] text-[#1D2226] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>

      <form action="" className='flex flex-col mt-[33px]'>
        <label className='text-[#6C25FF] w-[86px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Email Address</label>

        <input type="text" placeholder='Enter email address' className='border border-[#CBCBCB] w-[335px] h-[40px] rounded-[6px]' />

        <label className='text-[#6C25FF] mt-[23px] w-[70px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Password</label>

        <input type="text" placeholder='Enter password' className='border border-[#CBCBCB] mb-[14px] w-[335px] h-[40px]  rounded-[6px]'/>

        <Link to="/settings">
        <Button text="Login" colorName="#CBCBCB"/></Link>
        
      </form>
    </div>
  )
}

export default Login