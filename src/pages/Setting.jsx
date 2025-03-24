import React from 'react'

const Setting = () => {
  return (
    <div className='bg-no-repeat shadow-[0px_3px_6px_#00000007] mr-[20px] w-[375px] h-[812px] bg-[#F7F8F9]'>
        <h1 className='bg-[#FFFFFF] w-[375px] h-[68px]'>Account Settings</h1>

        <div className='flex relative top-[76px]'>
            <div className='mr-[20px]'>
                <img src="/Ellipse 114@2x.png" alt="" className='w-[76px] h-[76px] relative'/> 
                <img src="/Group 1585.svg" alt="" className='w-[21px] h-[23px] relative top-[-24px] left-[54px]'/>
            </div>

            <div>
                <p>Marry Doe</p>
                <p>marry@gmail.com</p>
            </div>
            
        </div>

        <div className='mt-[80px] "text-[14px] leading-[22px] text-[#1D2226]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>

        <div className="border-b border-dotted border-[#CBCBCB] w-full mt-[5px]"></div>

    </div>
  )
}

export default Setting