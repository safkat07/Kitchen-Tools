import HeaderTitle from '../../UseAbleComponents/HeaderTitle'

import manimg from '../../assets/manImg.jpg'




const WhyKitchen = () => {
    return <div className='h-auto py-10 pb-20 bg-primary overflow-hidden  relative w-[100%] mx-auto'>

        <HeaderTitle title={"why kitchen will win you over"} />
        <div className='flex flex-col justify-center'>
            <div className='absolute  w-full'>
                <div className='text-secondary  w-full  mx-auto -rotate-3 md:py-10 py-5 flex justify-between bg-textPrimary'>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                </div>
                <div className='text-secondary w-full  mx-auto   md:py-10 py-5 flex justify-between bg-opacity-60 bg-textPrimary'>
                    <p className='text-[2vw]   uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw] uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                    <p className='text-[2vw]  uppercase  font-secondary '>The Kitchen</p>
                </div>
            </div>
            <div className='grid relative z-[99]  justify-center'>
                <img className=' md:w-[55%] w-3/4 rotate-3  mx-auto' src={manimg} alt="" />
            </div>
        </div>
        {/* <div className='w-72 absolute h-80 bg-textPrimary'>

        </div> */}
    </div>
}

export default WhyKitchen