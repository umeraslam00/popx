import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='relative left-[20px] top-[40px]'>
        <h1 className='font-medium text-[28px] leading-[36px]'>Create your PopX account</h1>

          <form action="#" className='flex flex-col mt-[33px]'>

              <label className='text-[#6C25FF] w-[86px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Full Name*</label>

              <input type="text" placeholder='Marry Doe' className='border border-[#CBCBCB] w-[335px] h-[40px] rounded-[6px] mb-[29px]' />

              <label className='text-[#6C25FF] w-[98px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Phone Number*</label>

              <input type="text" placeholder='Marry Doe' className='border border-[#CBCBCB] w-[335px] h-[40px] rounded-[6px]  mb-[29px]' />

              <label className='text-[#6C25FF] w-[98px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Email Address*</label>

              <input type="text" placeholder='Marry Doe' className='border border-[#CBCBCB] w-[335px] h-[40px] rounded-[6px]  mb-[29px]' />

              <label className='text-[#6C25FF] w-[102px] h-[15px] font-normal text-[13px] leading-[17px] relative top-[6px] left-[8px] bg-[#F7F8F9]'>Company Name*</label>

              <input type="text" placeholder='Marry Doe' className='border border-[#CBCBCB] w-[335px] h-[40px] rounded-[6px]' />

              <label className='font-normal text-[13px] leading-[17px] text-[#1D2226] mt-[18px] mb-[10px]'>Are you an agency?*</label>

              <div className='flex gap-[58px] mb-[228px]'>
              <label className='flex items-center'>
                <input type="radio" className="peer hidden" name="agency"/>
                <div className="w-[12px] h-[12px] border border-[#CBCBCB] rounded bg-white peer-checked:bg-[#6C25FF]"></div>
                <span className="ml-2 text-[#1D2226] text-[13px] leading-[17px]">Yes</span>
              </label>

              <label className='flex items-center'>
                <input type="radio" className="peer hidden" name="agency"/>
                <div className="w-[12px] h-[12px] border border-[#CBCBCB] rounded bg-white peer-checked:bg-[#6C25FF]"></div>
                <span className="ml-2 text-[#1D2226] text-[13px] leading-[17px]">No</span>
              </label>
              </div>

              <Link to="/settings">
              <button className='w-[335px] h-[46px] rounded-[6px] font-medium text-[16px] leading-[17px] bg-[#6C25FF] text-white'>Create Account</button></Link>
          </form>

    </div>
  )
}

export default Signup