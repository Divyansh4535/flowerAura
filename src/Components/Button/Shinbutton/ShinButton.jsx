import React from 'react'

const ShinButton = ({ Title}) => {
    return (
        <button
            className="group/button w-[35%] h-full rounded-md font-bold relative inline-flex items-center justify-center overflow-hidden bg-[#0E4D65] backdrop-blur-lg px-6 py-2 text-base text-white transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl border border-[#0E4D65]/80"
        >
            <span className="text-[14px]">{Title}</span>
            <div
                className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)] shine-animation"
            >
                <div className="relative h-full w-10 bg-white/30"></div>
            </div>
        </button>

    )
}

export default ShinButton