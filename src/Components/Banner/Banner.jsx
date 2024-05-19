
const Banner = () => {
    return (
        <div className="h-screen relative  bg-[#FFF2E1]">
            <nav className="flex fixed left-0 right-0 z-[99] items-center text-[#4E4437] p-10 justify-between ">
                <p className="text-5xl 4E4437 font-title uppercase text-[#4E4437] ">Kitchen</p>
                <ul className="font-primary flex   text-xl gap-x-7">
                    <li className="cursor-pointer"><a href="#"></a>
                        APPLIANCES</li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOKWARES
                    </li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOK’S TOOLS
                    </li>
                </ul>
                <button className="uppercase text-white z-[99] font-primary text-xl border-2 px-3 border-white py-2">
                    Sign-Up
                </button>
            </nav>

            {/* Your one-stop kitchen shop for tool and essentials. */}
            {/* banner text */}
            <div className="absolute p-10 text-[#4E4437] bottom-3">
                <p className="text-[9rem] leading-none font-primary tracking-wide uppercase">
                    Chef's
                </p>
                <p className="text-[9rem] leading-none font-primary tracking-wide uppercase">
                    Essentials
                </p>
            </div>

            <div className="absolute  right-[60%] bottom-[25%] w-[13%] ">
                <p className="text-2xl  font-primary text-[#4E4437]">Your one-stop kitchen shop for quality tools and essentials.</p>
            </div>


            <div className="bg-[#4E4437]  w-[20%] h-screen  top-0 absolute  right-0">

            </div>
        </div>
    )
}

export default Banner