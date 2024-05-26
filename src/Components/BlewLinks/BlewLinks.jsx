
const BlewLinks = () => {
    return (
        <div className="bg-primary py-32">
            <div className="grid md:grid-cols-3 grid-cols-1 text-center justify-between  ">
                <div className="md:h-[35vh] h-[20vh] cursor-pointer flex justify-center md:border-l-0 items-center border w-full">
                    <p className="uppercase  text-responsive-md font-bold">shop</p>
                </div>
                <div className="md:h-[35vh] h-[20vh] cursor-pointer flex justify-center items-center border w-full">
                    <p className="uppercase   text-responsive-md font-bold">About us</p>
                </div>
                <div className="md:h-[35vh] h-[20vh] cursor-pointer flex md:border-r-0    justify-center items-center border w-full">
                    <p className="uppercase  text-responsive-md font-bold">contact</p>
                </div>
            </div>
        </div>
    )
}

export default BlewLinks