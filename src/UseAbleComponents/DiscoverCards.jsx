import img from '../assets/discover1.png'
import { IoArrowRedoCircleSharp } from "react-icons/io5";


const DiscoverCards = ({ productTitle, productPrice, productImg }) => {
    return (
        <div className="lg:max-h-[50vw]  pb-10  mx-auto rounded-lg cursor-pointer relative min-w-[20vw]  lg:max-w-[20vw] bg-primary">
            <div className='flex justify-between pt-5 items-center px-3'>
                <p className='xl:text-responsive-md text-xl w-[40%] font-primary uppercase text-textPrimary'>{productTitle}</p>
                <span className='text-textPrimary cursor-pointer xl:text-5xl text-3xl'>
                    <IoArrowRedoCircleSharp />
                </span>
            </div>
            <img className='mx-auto ' width={320} src={productImg} alt="" />
            <p className='xl:text-responsive-md text-xl absolute bottom-3  right-2 px-5 font-primary uppercase text-textPrimary'>${productPrice}</p>

        </div>

    )
}

export default DiscoverCards