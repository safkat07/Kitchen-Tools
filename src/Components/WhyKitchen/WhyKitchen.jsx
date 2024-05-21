import HeaderTitle from '../../UseAbleComponents/HeaderTitle'

import manimg from '../../assets/manImg.jpg'




const WhyKitchen = () => {
    return (
        <div className='h-[120vh] mx-auto bg-primary'>
            <HeaderTitle title={"Why Kitchen will win you over"} />

            <div className='relative   max-w-7xl mx-auto '>
                {/* <div className='   rotate-3 top-[7%] absolute right-[40%] '>
                    
                </div> */}
                <img className='mx-auto w-1/2  rotate-3 top-12 absolute right-[30%]  ' src={manimg} alt="" />

                <div className='bg-secondary absolute left-1/2 z-[99] -rotate-6  w-[550px] h-[700px]'>
                    <p className='font-primary text-4xl mx-20 pt-10 -rotate-2 w-[60%] uppercase text-textPrimary'>Discover 13,000+ kitchen products from 150+ top brands like kitchenaid, wusthof, le,creuset, and more.your one-stop shop for all things kitchen </p>
                    <p className='w-[70%] font-sans mx-auto text-xl -rotate-2 pt-5'>
                        Explore an extensive range of cookware, bakeware, dinnerware, and beyond, carefully ourated to elevate your culinary experience. With our ever-growing inventory, you'll always find the latest tools and gasdates to enhance your kitchen arsenal.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default WhyKitchen