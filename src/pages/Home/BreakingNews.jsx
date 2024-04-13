import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-slate-200">
            <button className="btn bg-red-700 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className="mr-12">I can be a React component, multiple React components...</Link>
                <Link to="/" className="mr-12">I can be a React component, multiple React components...</Link>
                <Link to="/" className="mr-12">I can be a React component, multiple React components...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;