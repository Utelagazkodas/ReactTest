import { FaGithub, FaHamsa } from "react-icons/fa";

function TopBar(){
    return (
        <div className="bg-teal-900 text-sky-50 text-xl h-20 flex items-center place-content-between  *:flex-1  *:bg-teal-700 *:h-10 *:m-2 *:rounded-xl *:flex *:items-center *:place-content-center">
        
            <a href="/#"><FaHamsa className="size-8"/></a>
            <a href="/#projects"><div>Projects</div></a>
            <a href="/#languages"><div>Languages</div></a>
            <a href="https://github.com/Utelagazkodas"><FaGithub className="size-8"/></a>
        </div>
    )
}

export default TopBar