import React from 'react'

const Card4 = ({ Img, Title, Type, Left }) => {
  return (
    <div className='flex font-poppins  bg-white h-[45%] overflow-hidden items-center justify-between w-[47%] rounded-3xl border border-[#cdd3d5] '>
      {Left ?
        <>
          <div className='w-[60%] h-full   '>
            <img src={Img} className="w-full overflow-hidden h-full " />
          </div>
          <div className='w-[40%] h-full flex items-start px-5 justify-center  flex-col  gap-3 '>
            <h1 className=' text-xl font-semibold '>  {Title} </h1>
            {Type?.map((item, idx) => {
              return (<p key={idx} className='hover:text-[#74a3b6] text-[#afacac] cursor-pointer text-[14px] font-normal ' > {item} </p>)
            })}
          </div>
        </>
        : <>
          <div className='w-[40%] h-full flex items-start px-5 justify-center  flex-col  gap-3 '>
            <h1 className=' text-xl font-semibold '>  {Title} </h1>
            {Type?.map((item, idx) => {
              return (<p key={idx} className='hover:text-[#74a3b6] text-[#afacac] cursor-pointer text-[14px] font-normal ' > {item} </p>)
            })}
          </div>
          <div className='w-[60%] h-full   '>
            <img src={Img} className="w-full overflow-hidden h-full " />
          </div>
        </>
      }

    </div>
  )
}

export default Card4