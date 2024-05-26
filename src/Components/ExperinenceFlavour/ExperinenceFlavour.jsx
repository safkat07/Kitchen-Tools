import { IoArrowRedoCircleSharp } from 'react-icons/io5'
import DiscoverCards from '../../UseAbleComponents/DiscoverCards'
import img1 from '../../assets/discover1.png'
import expimg from '../../assets/eximg.jpg'
const ExperinenceFlavour = () => {
    return (
        <div className='h-full overflow-hidden py-[5vw]  relative bg-secondary'>

            <div className='flex flex-col relative'>
                <p className='text-center uppercase leading-none font-secondaryOutline text-[10vw] md:text-[7vw] w-1/2 mx-auto'>
                    EXPERIENCE
                    FLAVOURFUL
                </p>
                <div className='-rotate-6  '>
                    {/* <DiscoverCards productImg={img1} productPrice={"155.99"} productTitle={"Spoon Set"} /> */}
                    <div className="lg:max-w-[20vw] relative pb-5 max-w-[45vw] bg-primary  mx-auto">
                        <div className='flex justify-between pt-5 items-center px-3'>
                            <p className='text-[2vw] md:w-[40%] font-primary uppercase text-textPrimary'>Spoon Set</p>
                            <span className='text-textPrimary cursor-pointer text-[3vw] md:text-[2vw]'>
                                <IoArrowRedoCircleSharp />
                            </span>
                        </div>
                        <img className='mx-auto  ' src={img1} alt="" />
                        <p className='text-[3vw] md:text-[2vw]   text-right  px-5 font-primary uppercase text-textPrimary'>$55.99</p>

                    </div>
                </div>
                <div className=' rotate-3  '>
                    <img className='lg:w-[30%] w-1/2 mx-auto' src={expimg} alt="" />
                </div>
                <div className=' mx-auto '>
                    <p className='text-[7vw] leading-none mx-auto text-textPrimary  text-center font-primary'>
                        ADVENTURES <br />
                        AWAITS!
                    </p>
                </div>
            </div>



        </div>
    )
}

export default ExperinenceFlavour