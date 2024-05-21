import Button from '../../UseAbleComponents/Button'
import bgimg from '../../assets/kitchen-tools.jpg'

const ClearenceSell = () => {
    return (
        <div className='h-screen relative bg-secondary'>
            <div
                className="absolute bottom-0 bg-fixed w-full h-3/4 bg-cover bg-center z-[99]"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className='absolute inset-0 top-[40%]'>
                    <p className='text-6xl text-center font-primary   text-primary '>
                        Save up-to 70% off!!
                    </p>
                    <p className='text-8xl text-center font-primary   text-primary '>
                        CLEARANCE SELL 2024
                    </p>

                    <div className="flex justify-center pt-16 items-center">
                        <Button btnTitle={"Explore Now"} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ClearenceSell
