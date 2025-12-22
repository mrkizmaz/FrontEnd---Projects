import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 py-4 sm:px-4">

            <Link to={"/"} className="flex items-center gap-2">
                <img src="/youtube.png" className="w-10 sm:w-12" />
                <h1 className="text-xl sm:text-2xl font-mono">YouTube</h1>
            </Link>

            <form className="flex border border-gray-400 bg-zinc-800 hover:bg-zinc-600 transition duration-300 rounded-[20px] overflow-hidden">
                <input className="bg-black outline-none px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-400 rounded-[20px]" type="text" />
                <button className="px-3 sm:px-4 text-xl sm:text-2xl"><IoMdSearch /></button>
            </form>

            <div className="flex gap-3 text-lg cursor-pointer max-sm:hidden">
                <FaBell className="hover:text-gray-400 transition" />
                <IoIosVideocam className="hover:text-gray-400 transition" />
                <MdVideoLibrary className="hover:text-gray-400 transition" />

            </div>



        </header>
    )
}

export default Header