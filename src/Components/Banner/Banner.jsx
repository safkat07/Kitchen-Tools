import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Banner = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="min-h-svh overflow-hidden relative  bg-primary">
            <nav className="flex  z-[99] items-center text-textPrimary px-5 md:px-10 py-5 justify-between ">
                <p className="text-responsive-lg cursor-pointer 4E4437 font-title uppercase ">Kitchen</p>
                <ul className="font-primary md:flex  hidden   text-responsive-sm gap-x-7">
                    <li className="cursor-pointer"><a href="#"></a>
                        APPLIANCES</li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOKWARES
                    </li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOK’S TOOLS
                    </li>
                </ul>
                <button className="uppercase md:block hidden text-textSecondary text-white z-[99] font-primary text-responsive-sm border-2 hover:bg-secondary hover:text-textPrimary transition-all duration-500 hover:bg-none px-3 border-white py-2">
                    Sign-Up
                </button>
                <button onClick={() => setOpen(!open)} className="z-[101] font-bold md:hidden  text-xl  block text-primary">
                    <CiMenuFries />
                </button>
            </nav>

            {/* Your one-stop kitchen shop for tool and essentials. */}
            {/* banner text */}
            <div>
                <div className="absolute z-[99] md:p-10 px-2 text-textPrimary bottom-3">
                    <p className="text-responsive-9xl leading-none font-primary tracking-wide uppercase">
                        Chef's
                    </p>
                    <p className="text-responsive-9xl  leading-none font-primary tracking-wide uppercase">
                        Essenti<span className="md:text-textPrimary   text-secondary">als</span>
                    </p>
                </div>

                {/* <div className="absolute  right-[60%] bottom-[25%] w-[13%] ">
                    <p className="text-2xl  font-primary text-textPrimary">Your one-stop kitchen shop for quality tools and essentials.</p>
                </div> */}


                <div className="bg-[#4E4437] z-0 md:w-[20%] w-[36%] h-screen  top-0 absolute  right-0">

                </div>
            </div>

            <div className={`h-[100vh] z-[100]  md:hidden bg-textPrimary fixed flex justify-start transition-all duration-700 w-full  ${open ? 'top-[0%]' : '-top-[100%]'}`}>
                <ul className="font-primary   text-secondary w-full text-4xl flex justify-center items-center flex-col  space-y-7">
                    <li onClick={console.log(true)} className="cursor-pointer"><a href="#"></a>
                        APPLIANCES</li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOKWARES
                    </li>
                    <li className="cursor-pointer"><a href="#"></a>
                        COOK’S TOOLS
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner