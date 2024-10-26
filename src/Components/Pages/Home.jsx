import React, { useRef, useState } from 'react';
import Card from '../Card/Card';
import { MdStarRate } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { BlogCardList, CardF4Img, CardFImg, CardNo4, CardNo5, CardSImg, CardTImg, HCImg1, HCImg2, HCImg3, HCImg4, HCImg5, UPIBanner, UPIBanner2 } from '../../../content';
import Card4 from '../Card/Card4';
import Card5 from '../Card/Card5';
import BlogCard from '../Card/BlogCard';


export default function Home() {
    const CarouselImg = [HCImg1, HCImg2, HCImg3, HCImg4, HCImg5]


    return (
        <>
            {/* <div className=' flex flex-col  w-full h-screen '> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    CarouselImg.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className='w-full my-7 rounded-2xl overflow-hidden  '>
                                    <img src={item} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <div className='w-full flex items-center justify-between gap-4 mt-12' >
                {
                    CardFImg.map((item, idx) => {
                        return <div key={idx} className='items-center justify-center flex flex-col gap-2 size-52 font-poppins font-medium '>
                            <Card img={item.Img} />
                            <p> {item.Name}</p>
                        </div>
                    })
                }
            </div>

            <div className=' h-96  flex font-poppins flex-col bg-[#D7F5F0] rounded-3xl items-center justify-center mt-12'>
                <h1 className=' text-[24px] font-semibold   text-[#1c2120] '>Upcoming Occasions</h1>
                <div className='w-full flex items-center justify-center gap-2 my-2' >
                    {CardSImg.map((item, idx) => {
                        return <div key={idx} className='items-center justify-center flex flex-col gap-2 size-72 font-poppins font-medium  '>
                            <Card img={item.Img} ClassName='size-64 border-white  border-[5px] ' />
                            <p className=' text-[#626463] text-[18px] font-medium  '> {item.Occasions}</p>
                        </div>
                    })
                    }
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center  h-[445px]  mt-12 font-poppins'>
                <h1 className='capitalize text-[24px] font-semibold   '>  Shop By Occasions & Relations </h1>
                <h2 className='capitalize  font-normal text-[#626464]  text-[16px] '>  Surprise your Loved Ones </h2>
                <div className='flex items-center w-full h-[80%] justify-center gap-2 mt-10 '>
                    {
                        CardTImg.map((item, idx) => {
                            return (
                                <div className=' h-full overflow-hidden rounded-t-full relative ' key={idx} >
                                    <img src={item.Img} className='transition-transform duration-700 hover:scale-110' />
                                    <div className='bg-white flex items-center justify-center h-12  rounded-b-2xl border absolute bottom-0 w-full border-[#C2C2C2] '>
                                        <h1 className='text-slate-700  text-center  '> {item.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <section className='  font-poppins w-full flex mt-12 flex-col  '>
                <div className='header  flex items-center justify-between  w-full h-20  '>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-[23px]  font-semibold text-[#1c2120]  capitalize '>Best Selling Flowers & Gift  </h1>
                        <h3 className='text-base  text-[#727171] capitalize font-medium  '>Surprise Your Loved Ones   </h3>
                    </div>
                    <button className='text-white h-12  rounded-lg  w-40 font-semibold bg-[#0E4D65] hover:text-[#0E4D65] hover:border hover:border-[#0E4D65]  hover:bg-white '>
                        View All
                    </button>
                </div>

                <div className='flex items-center pt-4   justify-between gap-4 flex-wrap  w-full     '>
                    {CardF4Img.map((item, idx) => {
                        return <div key={idx} className='w-[21vw] h-[70vh] rounded-3xl border  border-[#C2C2C2] justify-between items-center flex flex-col overflow-hidden  relative '>
                            <GoHeartFill className='cursor-pointer absolute top-5 right-5 size-6 z-40 text-white' />
                            <img src={item.Img} alt="" className='w-full overflow-hidden h-[70%] object-cover transition-transform duration-700 hover:scale-110 z-30' />
                            <div className='h-[30%] absolute bottom-0 z-40 p-3 flex flex-col  justify-between  bg-white rounded-b-3xl w-full  '>
                                <h2 className="text-[14px]   text-[#1c2120] font-medium leading-5 "> {item.Title} </h2>
                                <h1 className='font-semibold text-[16px]  '>  &#8377;  {item.Price}   </h1>
                                <div className={`${item.isActive} ? " flex items-center justify-start gap-2  h-10 bg-red-200" : " w-full py-3 " `}>
                                    {item.isActive ? (<>
                                        <div className='flex items-center gap-1 px-1 text-white rounded-md bg-[#4CAF50]'> <MdStarRate />{item.Rating} </div>
                                        <div className='flex items-center gap-2 '>
                                            <span className='rounded-full size-1 bg-[#197889]'></span>
                                            <h1 className=' text-[#197889] text-[14px] '> (  {item.Reviews}  Reviews )</h1>
                                        </div>
                                    </>
                                    ) : " "}
                                </div>

                                <h2 className='text-[12px]   text-[#1c2120] font-medium '>Earliest Delivery : <span className='text-[12px]   text-[#727574] font-medium '  > {item.Delivery}</span>  </h2>
                            </div>
                        </div>
                    })}
                </div>
            </section>

            <section className='w-full overflow-hidden  mt-12 rounded-3xl '>
                <img src={UPIBanner} alt="" />
            </section>


            <section className='h-screen w-full rounded-3xl  mt-12  bg-[#E7EDEF] flex flex-wrap     p-5 items-center justify-evenly '>
                {CardNo4.map((item, idx) => {
                    return <Card4 key={idx} Img={item.Img} Left={item.Left} Title={item.Title} Type={item.Type} />
                })}
            </section>
            <section className='w-full overflow-hidden  mt-12 rounded-3xl '>
                <img src={UPIBanner2} alt="" />
            </section>

            <section className='font-poppins w-full flex mt-12 flex-col  '>
                <div className='header  flex items-center justify-between  w-full h-20  '>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-[23px]  font-semibold text-[#1c2120]  capitalize '> Customer Testimonial </h1>
                    </div>
                    <button className='text-white h-12  rounded-lg  w-40 font-semibold bg-[#0E4D65] hover:text-[#0E4D65] hover:border hover:border-[#0E4D65]  hover:bg-white '>
                        View All
                    </button>
                </div>
                <div className='flex items-center pt-4   justify-between gap-4 flex-wrap  w-full '>
                    {CardNo5?.map((item, idx) => {
                        return <Card5 Name={item.Name} key={idx} Rating={item.Rating} Date={item.Date} Description={item.Description} />
                    })}
                </div>
            </section>
            <section className='flex flex-col gap-4 w-full mt-12 font-poppins  '>
                <h1 className='font-bold text-[28px] text-[#464646] leading-9 '> FlowerAura: Send Flowers, Cakes, Gifts & Plants Online Across India</h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    At FlowerAura, we take pride in delivering the highest quality flowers, cakes, plants, and gifts to your loved ones. Our diverse range ensures theres something perfect for every occasion. From romantic roses to delightful chocolate cakes and vibrant indoor plants, we have it all. As Indias most trusted gifting brand, we guarantee fresh and beautiful flowers, delicious cakes, vibrant plants, and unique gifts that bring joy and smiles. Enjoy the convenience of doorstep delivery with our safe and secure packaging, ensuring your order arrives in pristine condition. Let’s explore our collection a little better:
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    Flowers: At FlowerAura, we offer a stunning range of flower bouquets and arrangements. Choose from a variety of flowers like roses, carnations, sunflowers, orchids, and gerberas. For something special, explore our luxury flowers like Cape Cup, Taal palm, Limonium, and Eucalyptus. Our reliable flower delivery in india service ensures your flowers are handled with care and arrive fresh and beautiful.</p>


                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Cakes: Our freshly baked & delicious cakes are FSSAI-certified, ensuring safety and quality. We offer a wide range of flavours, such as chocolate, black forest, red velvet, tiramisu, coffee, blueberry, and various cake types, including bomb cakes, designer cakes theme cakes, photo cakes, pinata cakes, fruit cakes, & bento cakes. Our online cake delivery service guarantees safe and timely delivery.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Plants: At FlowerAura, we understand the need of plants for home and offer an extensive range of plants to brighten your indoor spaces. Our plants are not just healthy but also come potted in beautiful planters that add a touch of elegance to any space. With FlowerAuras doorstep plants delivery same day, you can enjoy the convenience of having your plants delivered safely and swiftly.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Gifts: Finding new and trendy gift ideas can be challenging, but we cater to that need with an amazing gift range. Our variety includes gifts under categories such as home decor, dining & serving, jewellery, showpieces, candles, spiritual gifts, soft toys, and perfumes. We also offer a wide range of heart-warming personalised gifts like mugs, cushions, wooden planks, photo frames, LED lamps, neon lights, caricatures, key chains, bar accessories, sippers, bottles, and more. One can also explore and order gifts online based on the occasion and the relationships they want to pamper.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Combos & Hampers: At FlowerAura, we recognise the joy of gifting and offer an exquisite range of combos and hampers to make every occasion special. From delightful cakes and flowers combos to charming plant & cake pairings and even elegant flower & plant combos, we have something to suit every taste and preference. Our thoughtfully curated hampers, filled with premium goodies, are designed to delight your loved ones and add a touch of elegance to your celebrations.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Personalised Gifts: Every gift should reflect your unique bond with your loved ones. Thats why we offer a stunning collection of personalised gifts, perfect for adding a personal touch to any occasion. From custom mugs, cushions, and water bottles to creative caricatures, diaries, coasters, fridge magnets, key chains, and more, our range is designed to make every moment memorable. Our seamless delivery service ensures that your personalised gifts reach their destination on the same day, bringing joy and a heartfelt connection to your special ones.
                </p>

                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >
                    Shop & Send Gifts Online On Different Occasions to Surprise Your Loved Ones </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    Every special moment in life deserves to be celebrated with love and thoughtfulness. At FlowerAura, the perfect gift can transform any occasion into a cherished memory.</p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Mother’s Day: Express your love and gratitude with thoughtful gifts on Mother’s Day. Choose from a wide range of heartfelt gifts, including flowers, personalised items, and hampers, to make her day unforgettable.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Valentine’s Day: Make your Valentine feel extra special with romantic gifts that speak from the heart. From classic flowers and chocolates to unique personalised gifts, find the perfect way to show your love and affection.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Birthday: Surprise your loved ones with birthday gifts that bring joy and happiness. Explore a variety of options, including cakes, personalised gifts, and combos, to create lasting memories on their special day.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Anniversary: Mark your milestones with meaningful anniversary gifts. Whether it’s flowers, cakes, or personalised keepsakes, our selection will help you celebrate your love and create beautiful memories together.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Women’s Day: Celebrate the strength, grace, and achievements of the women in your life with thoughtful Women’s Day gifts. Choose from a range of empowering and personalised gifts to show your appreciation and admiration.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Father’s Day: Make Father’s Day special with gifts that convey your love and respect. From practical to personalised, our collection offers the perfect way to show your appreciation for the father figures in your life.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    At FlowerAura, we cater to all occasions and have the best gifts that reflect your love and thoughtfulness, making every celebration unforgettable. Choose FlowerAura for your special moments, and let us help you create lasting memories with the perfect gift for every occasion.
                </p>

                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >

                    Explore & Order Online Special Festive Occasion Gifts</h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    Festive moments in life deserve to be celebrated with love and thoughtfulness. At FlowerAura, we believe that the perfect gift can transform any celebration into a cherished memory. Thats why our range includes something for every festival and every relationship, ensuring your gift is as unique as your bond.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Raksha Bandhan: Celebrate the bond of sibling love with our exclusive Raksha Bandhan gifts. From vibrant Rakhis to thoughtful hampers, find the perfect way to express your affection and make this festival unforgettable.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Holi: Brighten up your Holi celebrations with our vibrant gifts. Choose from colourful sweets, playful pichkaris, and festive hampers to spread joy and make your Holi as lively as the colours of spring.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Diwali: Illuminate your Diwali with our exquisite range of gifts. From traditional diyas to lavish sweet boxes, and decorative hampers, we offer everything you need to make your Diwali celebrations truly special.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Eid: Make your Eid celebrations sweeter with our thoughtfully curated gifts. Explore a variety of traditional sweets, elegant hampers, and personalised items that capture the spirit of joy and togetherness this festive season.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Christmas: Spread the warmth of Christmas with our special festive gifts. From beautifully decorated Christmas cakes to charming gift hampers and personalised items, we have everything to make your celebrations magical.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Karwa Chauth: Celebrate the love and commitment of Karwa Chauth with our exclusive Karva Chauth gift collection. Choose from traditional pooja thalis, personalised gifts, and elegant hampers to make this day of fasting and prayers even more special.
                </p>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    At FlowerAura, we cater to all festive occasions and have the best gifts that reflect your love and thoughtfulness, making every celebration unforgettable. Choose FlowerAura for your festive moments, and let us help you create lasting memories with the perfect gift for every occasion.
                </p>

                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >
                    Buy & Send Rakhi Online From FlowerAura - Raksha Bandhan 2024</h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    The festival that celebrates the lovely bond of brother and sister and that knows no bounds, Raksha Bandhan 2024 arrives. And its time that sisters start looking for beautiful rakhi to adorn their brothers wrists, and brothers are in search of amazing rakhi gifts. At FlowerAura, we have a collection of rakhis crafted with love, just like every year. Our rakhis are unique and reflect unmatchable elegance. We welcome siblings to buy rakhi online from our website and mobile app to celebrate the auspicious occasion. You will get the best quality rakhis and rakhi gifts packed with the utmost care and delivered to your doorsteps. Not only that, you get to explore rakhis that are not easily available in the market.We also offer Express Rakhi Delivery, along with a complimentary Roli Chawal set with every order, ensuring a memorable and traditional Raksha Bandhan celebration.
                </p>

                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >
                    Celebrate Diwali 2024 with Exclusive Gifts from FlowerAura
                </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    As Diwali 2024 approaches, the excitement of gift-giving fills the air. FlowerAura is your ultimate destination to explore an extensive range of Diwali gifts that add joy and warmth to this auspicious occasion. From traditional gift hampers to modern gift options, weve got you covered with the best collection of Diwali gifts online. Explore our wide array of Diwali offerings and make this Diwali 2024 unforgettable for your loved ones with meaningful and memorable gifts. When it comes to selecting the perfect gift for your loved ones, our Diwali gift hampers make an ideal choice. Filled with a variety of delights like sweets, dry fruits, chocolates, and more, these hampers are designed to bring smiles to everyone’s face during the festival of lights. With FlowerAura’s reliable delivery services, sending Diwali gifts online is quick and hassle-free. Whether you need same-day delivery, midnight delivery, early morning, fixed-time or express delivery, we ensure your gifts reach their destination on time, spreading festive cheer.

                </p>


                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >

                    Never Miss Out on Celebrations with FlowerAura On-time Delivery
                </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    At FlowerAura, we understand the importance of timely surprises in making every celebration unforgettable. With our reliable same-day delivery and midnight delivery services, you can rest assured that your thoughtful gifts will reach their destination on time, no matter the occasion. Whether its our delightful range of cakes, stunning floral arrangements, personalised gifts, or carefully curated combos, we ensure your loved ones receive their surprises when it matters most. From birthdays and anniversaries to festive occasions like Raksha Bandhan and Diwali, FlowerAuras on-time delivery guarantees you never miss out on making your moments truly special.
                </p>
                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >

                    Save Big with FlowerAuras Exclusive Offers and Discounts
                </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    At FlowerAura, we believe in making gifting easy and affordable for everyone. Thats why we keep dropping special offers throughout the year, ensuring you always have the perfect gift at the best price. Whether its a birthday, anniversary, or just because, our exclusive discounts and year-round offers help you save big while spreading joy. Explore our wide range of flowers, cakes, and personalised gifts, and enjoy significant savings on every purchase. With FlowerAura Coupons, you can make every moment special without breaking the bank. Stay tuned for more exciting deals, and start gifting today! Check out our late cups and deals!
                </p>
                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >

                    Unleash the Power of Gifting: Install Our Android & iOS App Today
                </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >
                    Gifts hold the magical ability to convey emotions that words alone may struggle to express. FlowerAura understands the profound importance of gifting in our lives. Thats why we bring you an extraordinary feature-packed App, available for Android and iOS devices, to experience the joy of gifting like never before. Our user-friendly app is your on-the-go companion for shopping for online gifts. Offering seamless navigation, it allows for easy browsing of our diverse collection. With FlowerAura App, you can keep track of your orders and stay updated with notifications on ongoing offers and deals for the best finds at unbeatable prices. So, download it now and start spreading smiles!
                </p>
                <h1 className='font-semibold text-[18px] text-[#464646] leading-5 ' >
                    Avail Flower Delivery Service In Below Mentioned Cities
                </h1>
                <p className='font-normal text-[14px] text-[#464646] leading-4 ' >

                    Send Flowers to Bangalore | Flowers Delivery in Mumbai | Online Flower Delivery in Delhi | Send Flowers to Pune | Same Day Flowers Delivery in Gurgaon | Flowers Delivery in Hyderabad | Online Flower Delivery in Kolkata | Flowers Delivery in Chennai | Send Flowers to Noida
                </p>
            </section>

            <section className='flex-col justify-start  gap-8 flex items-start font-poppins   mt-12  w-full '>
                <h1 className=' text-[24px] font-semibold  '> Related Blog </h1>
                <div className='  flex items-start font-poppins justify-between   w-full '>
                    {BlogCardList.map((item, idx) => {
                        return <BlogCard key={idx} Img={item.img} Title={item.title} Description={item.description} />
                    })}
                </div>


            </section>


            {/* </div> */}
        </>
    );
}
