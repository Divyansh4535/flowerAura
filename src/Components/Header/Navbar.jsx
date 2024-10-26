import React, { useState } from 'react'
import { Cart, GiftF, IndiaLg, Logo, Menu, SignIn, TrackOrder } from '../../../content'
import { FiEdit3 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import CartProduct from '../Cart/Cart';
import ModalForSubmitConfirm from '../Modalsubmission';
import ModelCart from '../Model/modelCart';

const Navbar = () => {
    const [isCartOpen, isSetCartOpen] = useState(false)


    return (
        <>
        <div className=' relative font-poppins justify-between px-16 w-full h-24 flex items-center gap-5 '>
            <div className=' justify-between flex w-[65%] items-center gap-4 '>
                <img src={Logo} alt="Logo" />
                <div className='h-12 rounded-md w-64 bg-gradient-to-r from-[#CFE8F7] to-[#E9F5FD] p-4 flex items-center justify-between '>
                    <div className='flex items-center gap-2'>
                        <img src={IndiaLg} alt="indiaLogo" className='rounded-sm' />
                        <p className='capitalize font-medium text-sm text-[#0E4D65] font-poppins  '>Deliver To ? </p>
                    </div>
                    <FiEdit3 className='text-[#0E4D65] size-5 ' />
                </div>
                <div className=' flex items-center rounded-md  justify-between h-12 w-80  bg-[#EDF0F4] px-2 '>
                    <CiSearch className=' size-6 font-bold' />
                </div>
            </div>

            <div className='flex items-center   w-[30%] justify-between gap-2  '>

                <ul className=' flex items-center gap-4 justify-between w-full' >
                    <li className=' flex flex-col items-center text-sm text-[rgb(14, 77, 101)]  font-normal  gap-1.5 '>
                        <img src={TrackOrder} alt="trackOrder" />
                        <p className='text-xs font-[#1c2120] '>  Track Order </p>
                    </li>
                    <li className=' flex flex-col items-center text-sm text-[rgb(14, 77, 101)]  font-normal  gap-1.5 '>
                        <img src={GiftF} alt="Gift Finder" />
                        <p className='text-xs font-[#1c2120] '>  Gift Finder </p>
                    </li>
                    <li onClick={() => isSetCartOpen(true)} className=' flex flex-col items-center text-sm text-[rgb(14, 77, 101)]  font-normal  gap-1.5 '>
                        <img src={Cart} alt="Cart" />
                        <p className='text-xs font-[#1c2120] '>  Cart </p>
                    </li>
                    <li className=' flex flex-col items-center text-sm text-[rgb(14, 77, 101)]  font-normal  gap-1.5 '>
                        <img src={SignIn} alt="SignIn" />
                        <p className='text-xs font-[#1c2120] '>  Sign In </p>
                    </li>
                    <li className=' flex flex-col items-center text-sm text-[rgb(14, 77, 101)]  font-normal  gap-1.5 '>
                        <img src={Menu} alt="More" />
                        <p className='text-xs font-[#1c2120] '>  More </p>
                    </li>
                </ul>
            </div>
            {/* {isCartOpen ?
                <CartProduct />

                : " "} */}
        </div>
        <ModalForSubmitConfirm isOpen={isCartOpen} />
        <ModelCart/>
        </>

    )
}

export default Navbar