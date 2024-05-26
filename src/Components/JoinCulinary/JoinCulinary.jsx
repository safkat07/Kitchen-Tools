import Button from "../../UseAbleComponents/Button"
import img from '../../assets/joinnowimg.jpg'
const JoinCulinary = () => {
    return (
        <div className="h-[90vh] r bg-primary">
            <div className="w-full h-full flex items-cente">
                <div className="w-1/2 ">
                    <p className="text-center text-textPrimary lg:text-8xl text-2xl md:text-5xl leading-tight font-primary mx-auto h-[80%] w-1/2 flex justify-center items-center">
                        JOIN THE
                        CULINARY
                        JOURNEY!</p>
                    <div className="flex justify-center -mt-20 items-center">
                        <Button btnTitle={"Join Now"} />
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-3/4  w-[80%]"
                    style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover" }}
                >
                </div>
            </div>
        </div>
    )
}

export default JoinCulinary