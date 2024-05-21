import bgimg from '../../assets/kitchen-tools.jpg'

const ClearenceSell = () => {
    return (
        <div className='h-screen relative bg-secondary'>
            <div
                className="absolute bottom-0 bg-fixed w-full h-3/4 bg-cover bg-center z-[90]"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <p className='text-3xl  text-primary z-[99]'>
                    Save up-to 70% off!!
                </p>
            </div>
        </div>
    )
}

export default ClearenceSell
