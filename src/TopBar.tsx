import { FaGithub, FaHamsa } from "react-icons/fa";

function TopBar(){
    return (
        <div className="bg-teal-900 text-sky-50 text-xl h-20 flex items-center place-content-between  *:w-[20rem]  *:bg-teal-700 *:h-10 *:m-2 *:rounded-xl *:flex *:items-center *:place-content-center *:transition-all sticky top-0">
        
            <a href="/#" className="hover:w-[35rem]"><FaHamsa className="size-8"/></a>
            <a href="/#projects" className="hover:w-[35rem]"><div>Projects</div></a>
            <a href="/#languages" className="hover:w-[35rem]"><div>Languages</div></a>
            <a href="https://github.com/Utelagazkodas" className="hover:w-[35rem]"><FaGithub className="size-8"/></a>
        </div>
    )
}

export default TopBar