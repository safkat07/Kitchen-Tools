import DiscoverCards from "../../UseAbleComponents/DiscoverCards"
import HeaderTitle from "../../UseAbleComponents/HeaderTitle"
import img1 from '../../assets/discover1.png'
import img2 from '../../assets/discover.png'
import img3 from '../../assets/discover3.png'
import img4 from '../../assets/discover4.png'
import Button from "../../UseAbleComponents/Button"


const DiscoverProducts = () => {
    return (
        <div className="h-auto overflow-hidden bg-secondary">
            <p className="text-responsive-lg font-primary uppercase text-textPrimary pt-16 pb-10 lg:w-[30%] w-[60%]  text-center mx-auto tracking-wide">
                Discover Our Products
            </p>
            <div className="flex  justify-center items-center">
                <ul className="flex items-center justify-center gap-x-10 text-textPrimary font-secondary text-responsive-sm">
                    <li className="border-b-2  cursor-pointer">
                        Best Seller
                    </li>
                    <li className=" cursor-pointer">
                        Cookware
                    </li>
                    <li className=" cursor-pointer">
                        Cook Tools
                    </li>
                    <li className=" cursor-pointer">
                        Appliances
                    </li>
                </ul>
            </div>
            {/* cards */}
            <div className="grid   lg:grid-cols-4 gap-10  md:grid-cols-2  lg:max-w-[100rem] mx-auto pt-20">
                <DiscoverCards productTitle={"Spoon Set"} productImg={img1} productPrice={"144.89"} />
                <DiscoverCards productTitle={"Knife Set(Black)"} productImg={img2} productPrice={"154.91"} />
                <DiscoverCards productTitle={"Knife Set(White)"} productImg={img3} productPrice={"188.89"} />
                <DiscoverCards productTitle={"Big Spoon"} productImg={img4} productPrice={"121.89"} />
            </div>
            <div className="flex  justify-center py-10 items-center">
                <Button btnTitle={"View All"} />
            </div>
        </div>
    )
}

export default DiscoverProducts