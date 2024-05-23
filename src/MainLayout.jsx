import Banner from "./Components/Banner/Banner"
import BlewLinks from "./Components/BlewLinks/BlewLinks"
import ClearenceSell from "./Components/ClearenceSell/ClearenceSell"
import DiscoverProducts from "./Components/DiscoverProducts/DiscoverProducts"
import ExclusiveDeals from "./Components/ExclusiveDeals/ExclusiveDeals"
import ExperinenceFlavour from "./Components/ExperinenceFlavour/ExperinenceFlavour"
import JoinCulinary from "./Components/JoinCulinary/JoinCulinary"
import WhyKitchen from "./Components/WhyKitchen/WhyKitchen"

const MainLayout = () => {
  return (
    <>
      <Banner />
      <DiscoverProducts />
      <WhyKitchen />
      <ClearenceSell />
      <JoinCulinary />
      <ExperinenceFlavour />
      <ExclusiveDeals />
      <BlewLinks />
    </>
  )
}

export default MainLayout