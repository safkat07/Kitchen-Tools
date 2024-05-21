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
                    <DiscoverCards productImg={img1} productPrice={"155.99"} productTitle={"Spoon Set"} />
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