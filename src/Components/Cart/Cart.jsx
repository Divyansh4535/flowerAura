import React from 'react'
import { RxCross2 } from "react-icons/rx";


const CartProduct = () => {
    return (
        <div className="">
            <section className=' fixed inset-0  bg-gray-900  z-50 bg-opacity-50   '>
                <div className='md:w-[60%] h-screen  '>

                </div>
                <div className='md:w-[40%] h-screen  bg-white '>
                    <header className="flex items-center justify-between w-full h-10  ">
                        <h1> Your Cart  </h1>
                        <RxCross2 />
                    </header>
                    <main className="w-full flex flex-col h-full  overflow-y-auto  ">

                    </main>

                    <footer className=' p-2 w-full border-t-slate-600   h-20 flex items-center     '>
                        <div className=" w-[30%]  " >
                            <h1>  2222 </h1>
                            <p> inclusive of all texts   </p>
                        </div>
                        <button className=" bg-slate-500 w-[60%] rounded-md text-white  ">
                            <h1>  Pay Now </h1>
                        </button>

                    </footer>
                </div>


            </section>
        </div>
    )
}

export default CartProduct