import HeaderTitle from '../../UseAbleComponents/HeaderTitle'

import manimg from '../../assets/manImg.jpg'




const WhyKitchen = () => {
    return (
        <div className='min-h-[150vh] relative mx-auto bg-primary'>

            <HeaderTitle title={"Why Kitchen will win you over"} />

            <div className='relative  z-[99] max-w-7xl mx-auto '>

                <img className='mx-auto w-1/2  rotate-3 top-12 rounded-lg absolute right-[30%]  ' src={manimg} alt="" />

                <div className='bg-secondary absolute rounded-md left-1/2 z-[99] -rotate-6   lg:w-[40%] w-[40%]  pb-10'>
                    <p className='font-primary xl:text-responsive-md lg:text-2xl text-xl lg:mx-20 mx-auto pt-10 -rotate-2 w-[70%] lg:w-[60%] uppercase text-textPrimary'>Discover 13,000+ kitchen products from 150+ top brands like kitchenaid, wusthof, le,creuset, and more.your one-stop shop for all things kitchen </p>
                    <p className='lg:w-[70%] w-[90%] font-sans mx-auto  -rotate-2 pt-5'>
                        Explore an extensive range of cookware, bakeware, dinnerware, and beyond, carefully ourated to elevate your culinary experience. With our ever-growing inventory, you'll always find the latest tools and gasdates to enhance your kitchen arsenal.
                    </p>
                </div>




                {/* <div className='bg-textPrimary left-0 right-0 top-1/3 z-[90] py-10 -rotate-3  absolute '>
                    <div className='flex  uppercase justify-between text-primary'>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                    </div>
                </div>
                <div className='bg-secondary uppercase left-0 right-0 py-10 top-1/2 rotate-2  absolute '>
                    <div className='flex  justify-between text-primary'>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                        <p className='text-responsive-lg font-primary'>the kitchen</p>
                    </div>
                </div> */}
            </div>


        </div>
    )
}

export default WhyKitchen