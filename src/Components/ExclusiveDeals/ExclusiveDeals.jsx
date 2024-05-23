import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import img1 from '../../assets/handimg.png';
import img2 from '../../assets/discover2.png';
import Button from '../../UseAbleComponents/Button';

const ExclusiveDeals = () => {
    return (
        <div className="bg-textPrimary py-20">
            <p className="text-6xl font-primary uppercase text-primary pt-16 pb-10 w-[40%] text-center mx-auto tracking-wide">
                CUSTOMISED EXCLUSIVE DEALS AWAIT YOU
            </p>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    <div className="relative  bg-primary overflow-hidden p-4 rounded shadow flex flex-col justify-between ">
                        <div className="flex flex-col justify-between h-full">
                            <p className="text-4xl textw-1/2-textPrimary  font-primary uppercase  text-textPrimary">Item Name</p>
                            <img src={img1} alt="Item Image" className="absolute -top-5  right-0  object-cover mt-4" />
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-4xl font-primary uppercase text-textPrimary">$144.89</p>
                                <IoArrowRedoCircleSharp className="text-textPrimary text-5xl cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
                        <div className="bg-primary p-4 rounded shadow flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-4xl w-1/2 font-primary uppercase text-textPrimary">Item Name</p>
                                <img src={img2} alt="Item Image" className="w-1/2 mx-auto object-cover mt-4" />
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-4xl font-primary uppercase text-textPrimary">$144.89</p>
                                    <IoArrowRedoCircleSharp className="text-textPrimary text-5xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary p-4 rounded shadow flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-4xl textw-1/2-textPrimary font-primary uppercase text-textPrimary">Item Name</p>
                                <img src={img2} alt="Item Image" className="w-1/2 mx-auto object-cover mt-4" />
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-4xl font-primary uppercase text-textPrimary">$144.89</p>
                                    <IoArrowRedoCircleSharp className="text-textPrimary text-5xl cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center p-10 items-center'>
                <button className=" px-9 font-secondary text-xl  py-2 bg-primary text-textPrimary">
                    View All
                </button>
            </div>
        </div>
    );
};

export default ExclusiveDeals;
