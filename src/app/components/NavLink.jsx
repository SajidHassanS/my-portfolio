import Link from "next/link"
const NavLink = ({ href, title}) => {

    return (

        <Link href={href}
         className='block pl-3 py-2 pr-4 text-[#adb7be] sm:text-xl rounded
                 md:p-0 hover:text-white'>{title}</Link>
    )
}

export default NavLink;