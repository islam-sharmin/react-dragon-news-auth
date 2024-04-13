import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="px-4 py-8 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
            <div className="px-4 py-8">
                <h2 className="text-2xl mb-4 font-semibold">Find Us On</h2>
                <a className="p-4 flex items-center gap-3 text-lg border rounded-t-lg">
                    <FaFacebook />
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex items-center gap-3 text-lg border-x">
                <FaTwitter />
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex items-center gap-3 text-lg border rounded-b-lg">
                    <FaInstagram />
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className="px-4 py-8 space-y-3">
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;