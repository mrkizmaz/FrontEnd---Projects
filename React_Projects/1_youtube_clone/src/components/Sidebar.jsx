import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className="flex flex-col p-1 md:p-4">
            <Link to="/" className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition`}>
                <FaHome className="max-md:text-2xl" />
                <span className="max-md:hidden">Anasayfa</span>
            </Link>
            <Link to="/" className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition`}>
                <FaHome className="max-md:text-2xl" />
                <span className="max-md:hidden">Anasayfa</span>
            </Link>
            <Link to="/" className={`flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition`}>
                <FaHome className="max-md:text-2xl" />
                <span className="max-md:hidden">Anasayfa</span>
            </Link>
        </aside>
    )
}

export default Sidebar