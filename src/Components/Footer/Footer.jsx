import React from 'react'
import { As, FooterItemList, Logo, Payment, Ps, Qr, SocialPhoto } from '../../../content'

const Footer = () => {
  return (
    <div className='flex font-poppins flex-col mt-16  items-center gap-16 w-full   h-screen  px-16 '>

      <div className='bg-[#eaf6fa] h-[70%]  flex items-center w-full justify-between p-10 rounded-3xl  '>
        <div className='grid  w-[60%] h-full grid-cols-3 py-8  grid-rows-7 ' >
          {FooterItemList.map((item, idx) => {
            return <h2 key={idx} className='text-[14px] font-medium text-[#0e4d65] ' > {item}</h2>
          })}
        </div>

        <div className='  w-[40%] h-full '>
             <div  className='flex  flex-col h-full items-center justify-center ' >
              <p className='text-[16px] font-medium  '>Simplify your gifting experience with our app.      </p>
              <div className='flex items-center justify-center h-[50%]  gap-10  w-full   '>
                  <img src={Qr}   alt="" className=' size-24  ' />
                <div className='flex h-[20%]   items-center justify-center gap-5 flex-col '>
                  <img src={Ps} className='size-32 ' alt="" />
                  <img src={As} className='size-32 ' alt="" />
                </div>
              </div>
                <p className='text-[16px] font-medium  '>Spread The Love On Social Media </p>
              <div className='w-full flex justify-center h-[20%]  items-center gap-2 '>
              {SocialPhoto.map((item,idx)=>{
                return <img src={item} key={idx} className=' hover:shadow-b-lg hover:  size-12 rounded-full ' alt="" />
              }) }
              </div>

            </div>
        </div>

      </div>

      <div className='h-[15%] flex items-center justify-between  w-full   '>
        <img src={Logo} alt="" className='size-40    ' />
        <p className='font-normal text-[12px] text-[#1c2120] '> Copyright. 2024. FA GIFTS PVT. LTD </p>
        <div className='flex items-center gap-3 justify-between '>
          <h1 className='font-normal text-[12px] text-[#1c2120] ' >We Accept:</h1>
          <img src={Payment} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer