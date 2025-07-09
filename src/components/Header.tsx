import { useState } from "react"
import { NavLink } from "react-router"
import Button from "./Button"

function Header() {
    const [menuHide, setMenuHide] = useState(true)
    return (
        <>
            <header hidden className="z-1 flex flex-row absolute">

                <div className="flex flex-row ">
                    <span className="text-gray-900 cursor-pointer z-40 p-2 w-full font-helvetica text-3xl font-semibold">
                        Ignisite
                    </span>
                    <span onClick={() => setMenuHide(!menuHide)}>
                        <Button buttonText="Menu"/>
                    </span>

                </div>
                <div className="fixed z-1">
                    <nav className={`${menuHide ? "-translate-x-full" : "translate-x-0"}  flex w-fit transition-transform duration-400 ease-in-out flex-col h-screen bg-black p-10 justify-center`}>
                        <div>
                            <ul className="flex text-white flex-col w-fit gap-5 font-helvetica">
                                <li>
                                    <NavLink onClick={() => setMenuHide(!menuHide)} to={'/'} className={({ isActive }) => `${isActive ? 'underline w-[100%]' : 'underline-none'} flex`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setMenuHide(!menuHide)} to={'/appointment/1'} className={({ isActive }) => `${isActive ? 'underline w-[100%]' : 'underline-none'} flex`}>
                                        Send a service request
                                    </NavLink>
                                </li>
                                <li>
                                    Book a call
                                </li>
                                <li>
                                    Join Us
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>

            {/* <header className="bg-black flex flex-row justify-around pt-1 md:py-5">
                <span>
                    <NavLink to={'/'}>
                        <h1 className="text-white text-2xl font-helvetica font-semibold">Ignisite</h1>
                    </NavLink>
                </span>
                <nav className="hidden md:block">
                    <ul className="flex flex-row items-center gap-10">
                        
                        <NavLink to={'/appointment/0'}>
                            <li className={`text-white font-inter capitalize text-md font-semibold border-2 border-white w-fit px-4 py-2 rounded-full`}>
                                get in touch
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </header> */}
        </>
    )
}

export default Header