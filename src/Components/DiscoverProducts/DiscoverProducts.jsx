import DiscoverCards from "../../UseAbleComponents/DiscoverCards"
import HeaderTitle from "../../UseAbleComponents/HeaderTitle"
import img1 from '../../assets/discover1.png'
import img2 from '../../assets/discover.png'
import img3 from '../../assets/discover3.png'
import img4 from '../../assets/discover4.png'








const DiscoverProducts = () => {
    return (
        <div className="h-[110vh] bg-secondary">
            <HeaderTitle title={"Discover Our Products"} />
            <div className="flex justify-center items-center">
                <ul className="flex items-center justify-center gap-x-10 text-textPrimary font-secondary text-[1.5rem]">
                    <li className="border-b-2 cursor-pointer">
                        Best Seller
                    </li>
                    <li className=" cursor-pointer">
                        Cookware
                    </li>
                    <li  className=" cursor-pointer">
                        Cook Tools
                    </li>
                    <li  className=" cursor-pointer">
                        Appliances
                    </li>
                </ul>
            </div>

            {/* cards */}
            <div className="flex max-w-[90rem] mx-auto gap-x-5  pt-20 justify-center items-center">
                <DiscoverCards productTitle={"Spoon Set"} productImg={img1} productPrice={"144.89"} />
                <DiscoverCards productTitle={"Knife Set(Black)"} productImg={img2} productPrice={"154.91"} />
                <DiscoverCards productTitle={"Knife Set(White)"} productImg={img3} productPrice={"188.89"} />
                <DiscoverCards productTitle={"Big Spoon"} productImg={img4} productPrice={"121.89"} />
            </div>
        </div>
    )
}

export default DiscoverProducts