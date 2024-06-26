import './footer.css'
const Footer = () => {
  return (
    <footer className=' overflow-hidden  flex flex-col justify-between items-center text-secondary w-[100%] bg-textPrimary'>
      <div className='flex z-[99] lg:flex-row flex-col mx-auto font-secondary p-[7vw] w-[100%] justify-center  lg:justify-between '>
        <div className='lg:w-[30%] lg:text-left text-center w-[100%]  mx-auto'>
          <p className="uppercase font-secondary text-[3.5vw] lg:text-[2vw] ">find your kitchen inspiration here!!</p>
          <p className="uppercase text-[2.5vw] lg:text-[1.5vw]">join us now!!!</p>
          <form className='flex justify-center items-center pt-5'>
            <input type="text" placeholder="EMAIL" className="lg:w-full   w-1/2  outline-none py-2   placeholder-secondary pl-2 placeh bg-textPrimary border-2 border-primary " />
            <input value="Ok" type="submit" className=" text-textPrimary font-bold border-2 bg-primary border-primary px-3 py-2" />
          </form>
        </div>
        <div className='lg:w-[50%] lg:pt-0 pt-5 w-[100%] flex flex-wrap justify-between mx-auto'>
          <div>
            <p className='ftitle'>Resources</p>
            <ul className="flex lg:text-xl text-sm uppercase font-secondary md:items-end items-center flex-col justify-center">
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">buying guides</li>
              <li className="cursor-pointer">gift card</li>
              <li className="cursor-pointer">recipes</li>
              <li className="cursor-pointer">reviews</li>
            </ul>
          </div>
          <div>
            <p className='ftitle'>My Account</p>
            <ul className="flex lg:text-xl text-sm uppercase font-secondary md:items-end items-center flex-col justify-center">
              <li className="cursor-pointer">checkout</li>
              <li className="cursor-pointer">earn reward</li>
              <li className="cursor-pointer">order status</li>
              <li className="cursor-pointer">return</li>
              <li className="cursor-pointer">view cart</li>
            </ul>
          </div>
          <div>
            <p className='ftitle'>Policies</p>
            <ul className="flex lg:text-xl text-sm uppercase font-secondary md:items-end items-center flex-col justify-center">
              <li className="cursor-pointer">price match</li>
              <li className="cursor-pointer">privacy policy</li>
              <li className="cursor-pointer">return policy</li>
              <li className="cursor-pointer">shipping policy</li>
              <li className="cursor-pointer">terms of services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto '>
        <h1 className='uppercase font-title flex justify-center items-center   text-[20vw] tracking-wider italic lg:leading-[15vw]'>Kitchen</h1>
      </div>
    </footer>
  )
}

export default Footer