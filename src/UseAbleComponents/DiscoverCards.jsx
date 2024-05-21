import img from '../assets/discover1.png'
import { IoArrowRedoCircleSharp } from "react-icons/io5";


const DiscoverCards = ({ productTitle, productPrice, productImg }) => {
    return (
        <div className="h-[500px] mx-auto rounded-lg cursor-pointer relative w-[350px] bg-primary">
            <div className='flex justify-between pt-5 items-center px-3'>
                <p className='text-4xl w-1/2 font-primary uppercase text-textPrimary'>{productTitle}</p>
                <span className='text-textPrimary cursor-pointer text-5xl'>
                    <IoArrowRedoCircleSharp />
                </span>
            </div>
            <img className='mx-auto ' src={productImg} alt="" />
            <p className='text-4xl absolute bottom-3  right-2 px-5 font-primary uppercase text-textPrimary'>${productPrice}</p>

        </div>
    )
}

export default DiscoverCards