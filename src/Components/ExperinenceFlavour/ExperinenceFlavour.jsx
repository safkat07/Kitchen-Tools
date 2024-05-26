import { IoArrowRedoCircleSharp } from 'react-icons/io5'
import DiscoverCards from '../../UseAbleComponents/DiscoverCards'
import img1 from '../../assets/discover1.png'
import expimg from '../../assets/eximg.jpg'
const ExperinenceFlavour = () => {
    return (
        <div className='h-[150vh] overflow-hidden relative bg-secondary'>
            <div className='max-w-7xl  py-28 mx-auto'>
                <p className='text-center uppercase leading-none font-secondaryOutline text-9xl w-1/2 mx-auto'>
                    EXPERIENCE
                    FLAVOURFUL
                </p>
                <div className='-rotate-6 inset-0   top-1/4 absolute'>
                    {/* <DiscoverCards productImg={img1} productPrice={"155.99"} productTitle={"Spoon Set"} /> */}
                    <div className="lg:max-h-[50vw]  pb-10  mx-auto rounded-lg cursor-pointer relative min-w-[20vw]  lg:max-w-[20vw] bg-primary">
                        <div className='flex justify-between pt-5 items-center px-3'>
                            <p className='xl:text-responsive-md text-xl w-[40%] font-primary uppercase text-textPrimary'>Spoon Set</p>
                            <span className='text-textPrimary cursor-pointer xl:text-5xl text-3xl'>
                                <IoArrowRedoCircleSharp />
                            </span>
                        </div>
                        <img className='mx-auto ' width={320} src={img1} alt="" />
                        <p className='xl:text-responsive-md text-xl absolute bottom-3  right-2 px-5 font-primary uppercase text-textPrimary'>$55.99</p>

                    </div>
                </div>
                <div className='absolute rotate-3 right-[10%]  top-[40%] '>
                    <img className='w-[40%] mx-auto' src={expimg} alt="" />
                </div>
                <div className='absolute mx-auto left-[37%] text-center top-[67%]'>
                    <p className='text-9xl mx-auto text-textPrimary  text-center font-primary'>
                        ADVENTURES <br />
                        AWAITS!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ExperinenceFlavour