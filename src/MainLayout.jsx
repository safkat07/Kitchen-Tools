import Banner from "./Components/Banner/Banner"
import ClearenceSell from "./Components/ClearenceSell/ClearenceSell"
import DiscoverProducts from "./Components/DiscoverProducts/DiscoverProducts"
import WhyKitchen from "./Components/WhyKitchen/WhyKitchen"

const MainLayout = () => {
  return (
    <>
      <Banner />
      <DiscoverProducts />
      <WhyKitchen />
      <ClearenceSell />
    </>
  )
}

export default MainLayout