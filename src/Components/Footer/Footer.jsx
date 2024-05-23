import './footer.css'
const Footer = () => {
  return (
    <div className='bg-textPrimary overflow-hidden relative text-secondary  h-[85vh]'>

      <div className="w-full flex p-20 justify-between items-center">
        <div className="w-[40%] relative ">
          <p className="uppercase font-secondary text-4xl w-1/2">find your kitchen inspiration here!!</p>
          <p className="uppercase font-secondary text-4xl w-1/2">join us now</p>
          <input type="text" placeholder="EMAIL" className="w-[45%] outline-none py-2  pl-2 placeholder-secondary placeh bg-textPrimary border-2 border-primary " />
          <input value="Ok" type="submit" className=" text-textPrimary font-bold border-2 bg-primary border-primary px-3 py-2" />
        </div>
        <div className=" flex justify-center items-center gap-16">
          <div>
            <p className='ftitle'>Resources</p>
            <ul className="flex text-xl uppercase font-secondary items-end flex-col justify-center">
              <li>Blog</li>
              <li>buying guides</li>
              <li>gift card</li>
              <li>recipes</li>
              <li>reviews</li>
            </ul>
          </div>
          <div>
            <p className='ftitle'>My Account</p>
            <ul className="flex text-xl uppercase font-secondary items-end flex-col justify-center">
              <li>checkout</li>
              <li>earn reward</li>
              <li>order status</li>
              <li>return</li>
              <li>view cart</li>
            </ul>
          </div>
          <div>
            <p className='ftitle'>Policies</p>
            <ul className="flex text-xl uppercase font-secondary items-end flex-col justify-center">
              <li>price match</li>
              <li>privacy policy</li>
              <li>return policy</li>
              <li>shipping policy</li>
              <li>terms of services</li>
            </ul>
          </div>
        </div>

      </div>







      <div className="absolute inline-block left-0 right-0 -bottom-14 ">
        <p className="uppercase  font-title text-center text-9xl lg:text-[25rem]  mx-auto">
          <i>
            kitchen
          </i>
        </p>
      </div>
    </div>
  )
}

export default Footer