import { useNavigate } from "react-router-dom";
import HeartIcon from "../assets/svg/logo";

const Logo = () => {

    const navigate = useNavigate()

    return (<div className="flex items-center  gap-2  justify-center">
        <div onClick={() => navigate("/")} className="rounded-[10px] cursor-pointer bg-primary p-2 w-fit flex justify-center items-center">
            <HeartIcon />
        </div>

        <h1 onClick={() => navigate("/")} className="text-xl lg:text-2xl cursor-pointer font-bold text-gray-800">
            Medi<span className="text-primary">Care</span>
        </h1>
    </div>);
}

export default Logo;