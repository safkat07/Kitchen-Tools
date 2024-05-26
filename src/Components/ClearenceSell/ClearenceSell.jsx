import Button from '../../UseAbleComponents/Button'
import bgimg from '../../assets/kitchen-tools.jpg'

const ClearenceSell = () => {
    return (
        <div className='min-h-screen bg-secondary  relative '>
            <div
                className="absolute bottom-0 top-0 bg-fixed  w-full my-auto h-1/2  bg-cover bg-center z-[99]"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className=' pt-20 '>
                    <p className='lg:text-6xl text-2xl text-center font-primary   text-primary '>
                        Save up-to 70% off!!
                    </p>
                    <p className='lg:text-8xl text-5xl text-center font-primary   text-primary '>
                        CLEARANCE SELL 2024
                    </p>

                    <div className="flex justify-center lg:pt-16 pt-5 items-center">
                        <Button btnTitle={"Explore Now"} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ClearenceSell
