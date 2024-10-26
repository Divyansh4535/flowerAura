import React from 'react'

const Menubar = () => {
    const ListMenu = [
        "Karwa Chauth ",
        "Express Delivery",
        "Cakes",
        "Flowers",
        "Combos",
        "Personalised",
        "Plants",
        "Gifts",
        "Anniversary",
        "Birthday",
        "Occasions"]

    return (
        <div className='flex  top-0 z-40 bg-white items-center sm:h-20  justify-center  w-full md:h-12 border-y  border-[#e4e6ea] ' >
            <ul className='flex gap-8 '>
                {ListMenu?.map((item, idx) => {
                    return <li className='text-sm font-poppins font-normal ' key={idx} >
                        {item}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Menubar