import React, { useState } from 'react';
import { CartDetailImg } from '../../../content';
import HeartButton from '../Button/HeartButton/HeartButton';
import ShinButton from '../Button/Shinbutton/ShinButton';
import ReactImageMagnify from 'react-image-magnify';

const Details = () => {
    const [curImg, setCurImg] = useState(CartDetailImg[0]);

    return (
        <section className='flex h-screen gap-5 w-full relative rounded-3xl p-10 bg-[#ecf3f5] mt-12'>

            {/* Thumbnails List */}
            <div className='no-scrollbar w-[10%] h-full flex flex-col items-center justify-start gap-2 overflow-y-auto'>
                {CartDetailImg.map((item, idx) => (
                    <img
                        src={item}
                        key={idx}
                        className='w-24 h-24 rounded-md cursor-pointer'
                        alt=""
                        onClick={() => setCurImg(item)}  // Set clicked image as the current image
                    />
                ))}
            </div>


            {/* Product Details Section */}
            <div className="w-[40%] h-full flex flex-col gap-5 rounded-2xl ">

                {/* Image Magnify Section */}
                <div className="h-full rounded-2xl  flex items-center justify-center w-full overflow-hidden ">
                  
                    <img src={curImg} alt="" className="size-full  " />
                </div>


                <div className='flex items-center justify-between px-10'>
                    <div className="flex flex-col items-center">
                        <img src="https://imgcdn.floweraura.com/ssr-build//static/media/smile.a4bf068c.svg" alt="smile" />
                        <h1 className='font-semibold text-[12px] text-[#1c2120]'>20+ Mn Smiles</h1>
                        <p className='text-[12px] text-[#1c2120]'>Delivered</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://imgcdn.floweraura.com/ssr-build//static/media/citypin.942be1ce.svg" alt="citypin" />
                        <h1 className='font-semibold text-[12px] text-[#1c2120]'>20000+</h1>
                        <p className='text-[12px] text-[#1c2120]'>Pincodes Covered</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://imgcdn.floweraura.com/ssr-build//static/media/courier.716ec638.svg" alt="courier" />
                        <h1 className='font-semibold text-[12px] text-[#1c2120]'>620+ Cities Enjoying</h1>
                        <p className='text-[12px] text-[#1c2120]'>same-day delivery</p>
                    </div>
                </div>
            </div>


            {/* Right Section: Description and Add to Cart */}
            <div className="w-[50%] h-full font-poppins flex flex-col gap-2 overflow-y-auto no-scrollbar relative">
                <div className="relative">
                    <h1 className="text-[#494d4d] text-[18px] font-semibold">Serenity Festive Gift Box</h1>
                    <h2 className='text-[#1c2120] text-[20px] font-semibold'>₹ 2220</h2>
                    <span className='right-5 top-4 absolute'>
                        <HeartButton />
                    </span>
                </div>

                {/* Delivery Availability Section */}
                <div className='rounded-xl w-[70%] h-32 p-2 bg-[#F4F7F8] flex flex-col gap-3'>
                    <p className='text-[12px] text-[#494d4d] font-medium'>Check Delivery Availability</p>
                    <div className="h-12 w-[90%] rounded-lg p-1 flex">
                        <input
                            type="number"
                            className="w-[70%] h-full p-3 outline-none text-[#494d4d] border border-[#197889] rounded-s-lg bg-transparent"
                            placeholder="Enter Pincode"
                        />
                        <button className="w-[30%] h-full text-[12px] font-medium text-white rounded-e-lg p-3 bg-[#197889]">
                            Check
                        </button>
                    </div>
                    <p className='text-[12px] text-end text-[#494d4d] font-medium'>Available in limited cities.</p>
                </div>

                {/* Product Contains Section */}
                <div className='w-full rounded-lg'>
                    <div className='rounded-t-lg w-full bg-[#F4F7F8] p-3'>
                        <h1 className="text-[12px] text-[#494d4d] font-medium">Product contains</h1>
                    </div>
                    <ul className="p-3">
                        <li className="text-[12px] text-[#606463] font-normal">Premium Sweets And Dry Fruits Hamper Box</li>
                        <li className="text-[12px] text-[#606463] font-normal">Moong Barfi 400 g</li>
                        <li className="text-[12px] text-[#606463] font-normal">Jar Of Salted Cashews 150 G</li>
                        <li className="text-[12px] text-[#606463] font-normal">Jar Of Salted Almonds 150 G</li>
                        <li className="text-[12px] text-[#606463] font-normal">Jar Of Salted Pistachios 150 G</li>
                    </ul>
                </div>

                {/* Description Section */}
                <div className='w-full rounded-t-lg'>
                    <div className='w-full bg-[#F4F7F8] p-3'>
                        <h1 className="text-[12px] text-[#494d4d] font-medium">Description</h1>
                    </div>
                    <p className="text-[12px] p-3 text-[#606463] font-normal">
                        Indulge in the perfect gifting experience with this Premium Hamper, ideal for expressing your heartfelt sentiments on any special occasion...
                    </p>
                </div>

                {/* Add to Cart and Buy Now Buttons */}
                <div className='flex items-center gap-5 h-14 w-full sticky bottom-1'>
                    <button className='w-[35%] bg-white h-full rounded-md font-bold border-[#0E4D65] text-[#0E4D65] border text-[14px]'>
                        Add To Cart
                    </button>
                    <ShinButton Title="Buy Now" />
                </div>
            </div>
        </section>
    );
};

export default Details;