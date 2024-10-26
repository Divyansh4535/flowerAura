import React from 'react'
import { IoMdStar } from "react-icons/io";


const Card5 = ({ Description, Name, Date, Rating }) => {
    return (
        <div className='flex items-start flex-col w-[28vw] h-[33vh]  font-poppins border border-[#a9aaaa]     p-7 rounded-2xl  justify-between '>
            <p className=' text-[14px] font-normal text-[#757877] '> {Description} </p>
            <div className='flex items-center justify-between w-full '>
                <h1 className='text-[14px] font-semibold '> {Name}</h1>
                <div className='flex items-center gap-2'>
                    <button className='bg-[#4CAF50] text-white w-10 h-5 rounded-md flex items-center  p-2  gap-1   '>
                    <IoMdStar className='size-4   ' />  <h1 className='text-xs font-normal '>   {Rating} </h1>
                    </button>
                    <h1 className=' text-[12px] text-[#888] font-medium '> Posted on : {Date} </h1>
                </div>
            </div>
        </div>
    )
}

export default Card5