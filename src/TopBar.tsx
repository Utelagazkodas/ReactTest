import { FaGithub, FaHamsa } from "react-icons/fa";

function TopBar(){
    return (
        <div className="bg-teal-900 text-sky-50 h-20 flex items-center">
        
            <a href="/#" className=""><FaHamsa /></a>
            <a href="/#projects">Projects</a>
            <a href="/#languages">Languages</a>
            <a href="https://github.com/Utelagazkodas"><FaGithub/></a>
        </div>
    )
}

export default TopBar