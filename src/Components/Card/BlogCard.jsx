import React from 'react'

const BlogCard = ({Img ,Title ,Description }) => {
  return (
    <div className='flex-col overflow-hidden w-[28vw] h-[60vh] rounded-md flex items-center  '>
        <div> 
            <img src={Img} alt=" " className='rounded-md' />
        </div>
        <div className='flex items-start  gap-2 flex-col '>
            <h1 className='text-[#464646] text-[16px] font-semibold'>{Title} </h1>
             <p className=' text-[#464646] text-[14px] font-normal '> {Description}</p>   
                <a href="" className='text-[14px] font-normal  text-[#197889] '  > Read more </a>
        </div>
    </div>
  )
}

export default BlogCard